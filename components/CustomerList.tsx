import React, { useState } from 'react';
import { mockCustomers, mockOrders } from '../data/mockData';
import { Customer } from '../types';
import CustomerDetailModal from './CustomerDetailModal';

const CustomerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };
  
  const getCustomerOrders = () => {
    if (!selectedCustomer) return [];
    return mockOrders.filter(order => order.customerId === selectedCustomer.id);
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Customer Management</h2>
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Customer Name</th>
                <th scope="col" className="px-6 py-3">Contact</th>
                <th scope="col" className="px-6 py-3">Joined On</th>
                <th scope="col" className="px-6 py-3">Total Orders</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr 
                  key={customer.id} 
                  onClick={() => handleViewCustomer(customer)}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center">
                      <img src={`https://i.pravatar.cc/40?u=${customer.id}`} alt={customer.name} className="w-10 h-10 rounded-full mr-4"/>
                      {customer.name}
                  </td>
                  <td className="px-6 py-4">
                    <div>{customer.email}</div>
                    <div className="text-xs text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4">{customer.joinDate}</td>
                  <td className="px-6 py-4">{customer.totalOrders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedCustomer && (
        <CustomerDetailModal 
          customer={selectedCustomer}
          orders={getCustomerOrders()}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default CustomerList;