export enum View {
  Dashboard = 'Dashboard',
  Products = 'Products',
  Orders = 'Orders',
  Vendors = 'Vendors',
  Customers = 'Customers',
  Reports = 'Reports',
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  description: string;
}

export enum OrderStatus {
  Pending = 'Pending',
  Packed = 'Packed',
  OutForDelivery = 'Out for Delivery',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
  Returned = 'Returned',
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: { name: string; quantity: number }[];
  deliveryAddress: string;
  vendor: string;
  deliveryCoords: { lat: number, lng: number };
}

export interface Vendor {
  id: string;
  storeName: string;
  ownerName: string;
  email: string;
  phone: string;
  joinDate: string;
  totalSales: number;
  status: 'Active' | 'Inactive';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalOrders: number;
}

export interface SalesData {
  name: string;
  sales: number;
}