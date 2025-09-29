import React, { useState } from 'react';
import { mockProducts } from '../data/mockData';
import { Product } from '../types';
import Modal from './Modal';
import ProductForm from './ProductForm';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setIsModalOpen(true);
  };
  
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };
  
  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };
  
  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      const newProduct = { ...product, id: `prod-${Date.now()}`};
      setProducts([newProduct, ...products]);
    }
    setIsModalOpen(false);
    setEditingProduct(undefined);
  };

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
  const filterOptions = ['All', ...uniqueCategories];

  const filteredProducts = products.filter(product =>
    filterCategory === 'All' || product.category === filterCategory
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Manage Products</h2>
        <button onClick={handleAddProduct} className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
          Add New Product
        </button>
      </div>
      
      <div className="mb-4 flex items-center">
        <label htmlFor="category-filter" className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Category:</label>
        <select
          id="category-filter"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {filterOptions.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Stock</th>
              <th scope="col" className="px-6 py-3">Vendor</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center">
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 rounded-md mr-4 object-cover" />
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">₹{product.price.toFixed(2)}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.vendor}</td>
                <td className="px-6 py-4 space-x-2">
                  <button onClick={() => handleEditProduct(product)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h3>
          <ProductForm 
            product={editingProduct} 
            onSave={handleSaveProduct} 
            onCancel={() => setIsModalOpen(false)}
            categories={uniqueCategories}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductList;