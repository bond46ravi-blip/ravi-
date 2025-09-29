import { Product, Order, OrderStatus, Vendor, Customer, SalesData } from '../types';

export const mockProducts: Product[] = [
  { id: 'prod-001', name: 'Velvet Red Roses', vendor: 'Bloom & Petal', category: 'Roses', price: 49.99, stock: 150, imageUrl: 'https://picsum.photos/seed/roses/400/400', description: 'A classic bouquet of a dozen deep red roses, perfect for expressing love and passion.' },
  { id: 'prod-002', name: 'Sunny Day Lilies', vendor: 'The Floral Corner', category: 'Lilies', price: 39.99, stock: 80, imageUrl: 'https://picsum.photos/seed/lilies/400/400', description: 'Bright and cheerful yellow lilies that bring sunshine into any room.' },
  { id: 'prod-003', name: 'Orchid Serenity', vendor: 'Exotic Blooms', category: 'Orchids', price: 75.50, stock: 45, imageUrl: 'https://picsum.photos/seed/orchids/400/400', description: 'An elegant and long-lasting Phalaenopsis orchid in a ceramic pot.' },
  { id: 'prod-004', name: 'Mixed Spring Bouquet', vendor: 'Bloom & Petal', category: 'Mixed', price: 55.00, stock: 120, imageUrl: 'https://picsum.photos/seed/spring/400/400', description: 'A vibrant mix of seasonal spring flowers including tulips, daffodils, and hyacinths.' },
  { id: 'prod-005', name: 'Lavender Dreams', vendor: 'The Floral Corner', category: 'Wedding', price: 120.00, stock: 30, imageUrl: 'https://picsum.photos/seed/lavender/400/400', description: 'A soothing arrangement of lavender stalks and white roses, ideal for relaxation.' },
];

export const mockOrders: Order[] = [
  { id: 'ord-1001', customerId: 'cust-01', customerName: 'Rohan Sharma', date: '2024-07-21', total: 55.00, status: OrderStatus.OutForDelivery, items: [{ name: 'Mixed Spring Bouquet', quantity: 1 }], deliveryAddress: '123, MG Road, Bangalore', vendor: 'Bloom & Petal', deliveryCoords: { lat: 12.9716, lng: 77.5946 } },
  { id: 'ord-1002', customerId: 'cust-02', customerName: 'Priya Patel', date: '2024-07-21', total: 75.50, status: OrderStatus.Packed, items: [{ name: 'Orchid Serenity', quantity: 1 }], deliveryAddress: '456, Jubilee Hills, Hyderabad', vendor: 'Exotic Blooms', deliveryCoords: { lat: 17.4065, lng: 78.4772 } },
  { id: 'ord-1003', customerId: 'cust-03', customerName: 'Ankit Mehta', date: '2024-07-20', total: 49.99, status: OrderStatus.Delivered, items: [{ name: 'Velvet Red Roses', quantity: 1 }], deliveryAddress: '789, Marine Drive, Mumbai', vendor: 'Bloom & Petal', deliveryCoords: { lat: 18.9432, lng: 72.8258 } },
  { id: 'ord-1004', customerId: 'cust-04', customerName: 'Sneha Gupta', date: '2024-07-19', total: 39.99, status: OrderStatus.Cancelled, items: [{ name: 'Sunny Day Lilies', quantity: 1 }], deliveryAddress: '101, Connaught Place, Delhi', vendor: 'The Floral Corner', deliveryCoords: { lat: 28.6324, lng: 77.2187 } },
  { id: 'ord-1005', customerId: 'cust-05', customerName: 'Vikram Singh', date: '2024-07-18', total: 120.00, status: OrderStatus.Returned, items: [{ name: 'Lavender Dreams', quantity: 1 }], deliveryAddress: '212, Park Street, Kolkata', vendor: 'The Floral Corner', deliveryCoords: { lat: 22.5514, lng: 88.3578 } },
];

export const mockVendors: Vendor[] = [
  { id: 'ven-01', storeName: 'Bloom & Petal', ownerName: 'Aditi Rao', email: 'aditi@bloom.com', phone: '9876543210', joinDate: '2023-01-15', totalSales: 25450.75, status: 'Active' },
  { id: 'ven-02', storeName: 'The Floral Corner', ownerName: 'Raj Kumar', email: 'raj@floralcorner.com', phone: '8765432109', joinDate: '2023-03-22', totalSales: 18980.50, status: 'Active' },
  { id: 'ven-03', storeName: 'Exotic Blooms', ownerName: 'Sunita Williams', email: 'sunita@exotic.com', phone: '7654321098', joinDate: '2023-05-10', totalSales: 12340.00, status: 'Inactive' },
];

export const mockCustomers: Customer[] = [
  { id: 'cust-01', name: 'Rohan Sharma', email: 'rohan.s@email.com', phone: '9123456780', joinDate: '2023-08-01', totalOrders: 5 },
  { id: 'cust-02', name: 'Priya Patel', email: 'priya.p@email.com', phone: '9234567891', joinDate: '2023-09-15', totalOrders: 8 },
  { id: 'cust-03', name: 'Ankit Mehta', email: 'ankit.m@email.com', phone: '9345678902', joinDate: '2023-10-20', totalOrders: 3 },
  { id: 'cust-04', name: 'Sneha Gupta', email: 'sneha.g@email.com', phone: '9456789013', joinDate: '2024-01-05', totalOrders: 2 },
  { id: 'cust-05', name: 'Vikram Singh', email: 'vikram.s@email.com', phone: '9567890124', joinDate: '2024-02-11', totalOrders: 10 },
];

export const mockSalesData: SalesData[] = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
  { name: 'Jul', sales: 7000 },
];