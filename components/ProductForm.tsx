import React, { useState } from 'react';
import { Product } from '../types';
import { generateDescription } from '../services/geminiService';
import { SparklesIcon } from './icons/IconComponents';

interface ProductFormProps {
  product?: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
  categories: string[];
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel, categories }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: product?.name ?? '',
    vendor: product?.vendor ?? 'Bloom & Petal',
    category: product?.category ?? '',
    price: product?.price ?? 0,
    stock: product?.stock ?? 0,
    description: product?.description ?? '',
    imageUrl: product?.imageUrl ?? '',
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = async () => {
    if (!formData.name) {
      alert("Please enter a product name first.");
      return;
    }
    setIsGenerating(true);
    const description = await generateDescription(formData.name);
    setFormData(prev => ({ ...prev, description }));
    setIsGenerating(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalProduct: Product = {
        ...formData,
        id: product?.id || '',
        imageUrl: formData.imageUrl || `https://picsum.photos/seed/${formData.name.replace(/\s/g, '-')}/400/400`
    }
    onSave(finalProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <button type="button" onClick={handleGenerateDescription} disabled={isGenerating} className="flex items-center bg-blue-500 text-white px-3 py-1 text-xs rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors">
            <SparklesIcon className={isGenerating ? 'animate-spin' : ''} />
            <span className="ml-1.5">{isGenerating ? 'Generating...' : 'Generate with AI'}</span>
          </button>
        </div>
        <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Image</label>
        <div className="mt-2 flex items-center gap-x-4">
            <img 
                src={formData.imageUrl || 'https://placehold.co/100x100/e2e8f0/94a3b8?text=Image'} 
                alt="Preview" 
                className="h-20 w-20 rounded-lg object-cover"
            />
            <div>
                <label htmlFor="file-upload" className="cursor-pointer rounded-md bg-white dark:bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <span>Upload Image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                </label>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (₹)</label>
          <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Stock</label>
          <input type="number" name="stock" id="stock" value={formData.stock} onChange={handleChange} required min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
      </div>
      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <input 
                type="text" 
                name="category" 
                id="category" 
                value={formData.category} 
                onChange={handleChange} 
                required 
                list="category-list"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            <datalist id="category-list">
              {categories.map(cat => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
        </div>
        <div>
            <label htmlFor="vendor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Vendor</label>
            <select name="vendor" id="vendor" value={formData.vendor} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Bloom & Petal</option>
                <option>The Floral Corner</option>
                <option>Exotic Blooms</option>
            </select>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">Cancel</button>
        <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Save Product</button>
      </div>
    </form>
  );
};

export default ProductForm;