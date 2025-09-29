import React from 'react';
import { Customer, Order, OrderStatus } from '../types';
import Modal from './Modal';

interface CustomerDetailModalProps {
  customer: Customer;
  orders: Order[];
  onClose: () => void;
}

const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.Delivered: return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case OrderStatus.OutForDelivery: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case OrderStatus.Packed: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case OrderStatus.Pending: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case OrderStatus.Cancelled: return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case OrderStatus.Returned: return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
};

const CustomerDetailModal: React.FC<CustomerDetailModalProps> = ({ customer, orders, onClose }) => {
  const totalSpent = orders.reduce((sum, order) => {
    return order.status === OrderStatus.Delivered ? sum + order.total : sum;
  }, 0);

  return (
    <Modal onClose={onClose}>
      <div className="p-2">
        <div className="flex items-center space-x-4 mb-6">
          <img src={`https://i.pravatar.cc/80?u=${customer.id}`} alt={customer.name} className="w-20 h-20 rounded-full"/>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{customer.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Customer since {customer.joinDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</h4>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">{customer.totalOrders}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Spent</h4>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">₹{totalSpent.toFixed(2)}</p>
            </div>
        </div>
        
        <div className="mb-6 border-t border-b border-gray-200 dark:border-gray-700 py-4">
             <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Contact Information</h4>
             <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Email:</strong> {customer.email}</p>
             <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Phone:</strong> {customer.phone}</p>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Order History</h4>
          <div className="max-h-60 overflow-y-auto pr-2">
            {orders.length > 0 ? (
                <ul className="space-y-3">
                {orders.map(order => (
                    <li key={order.id} className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{order.id}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{order.date}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-800 dark:text-gray-200">₹{order.total.toFixed(2)}</p>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                        </span>
                    </div>
                    </li>
                ))}
                </ul>
            ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No orders found for this customer.</p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomerDetailModal;
