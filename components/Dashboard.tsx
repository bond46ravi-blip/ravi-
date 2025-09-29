
import React from 'react';
import StatCard from './StatCard';
import SalesChart from './SalesChart';
import { mockOrders, mockVendors, mockCustomers } from '../data/mockData';
import { OrderStatus } from '../types';

const Dashboard: React.FC = () => {
  const totalSales = mockOrders
    .filter(o => o.status === OrderStatus.Delivered)
    .reduce((sum, order) => sum + order.total, 0);
  const newOrders = mockOrders.filter(o => o.status === OrderStatus.Pending || o.status === OrderStatus.Packed).length;
  const totalCustomers = mockCustomers.length;
  const totalVendors = mockVendors.length;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Sales" value={`₹${totalSales.toFixed(2)}`} change="+5.4%" changeType="increase" />
        <StatCard title="New Orders" value={newOrders.toString()} change="+12" changeType="increase" />
        <StatCard title="Total Customers" value={totalCustomers.toString()} change="-2" changeType="decrease" />
        <StatCard title="Active Vendors" value={mockVendors.filter(v => v.status === 'Active').length.toString()} change="+1" changeType="increase" />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Monthly Sales</h3>
          <SalesChart />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Recent Orders</h3>
          <ul className="space-y-4">
            {mockOrders.slice(0, 5).map(order => (
              <li key={order.id} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">{order.customerName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{order.id}</p>
                </div>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">₹{order.total.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
   