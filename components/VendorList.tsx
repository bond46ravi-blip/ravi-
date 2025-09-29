
import React from 'react';
import { mockVendors } from '../data/mockData';

const VendorList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Manage Vendors</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Store Name</th>
              <th scope="col" className="px-6 py-3">Owner</th>
              <th scope="col" className="px-6 py-3">Contact</th>
              <th scope="col" className="px-6 py-3">Joined On</th>
              <th scope="col" className="px-6 py-3">Total Sales</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockVendors.map((vendor) => (
              <tr key={vendor.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{vendor.storeName}</td>
                <td className="px-6 py-4">{vendor.ownerName}</td>
                <td className="px-6 py-4">
                  <div>{vendor.email}</div>
                  <div className="text-xs text-gray-500">{vendor.phone}</div>
                </td>
                <td className="px-6 py-4">{vendor.joinDate}</td>
                <td className="px-6 py-4">₹{vendor.totalSales.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${vendor.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
                    {vendor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorList;
   