
import React from 'react';
import { mockOrders, mockSalesData } from '../data/mockData';
import { OrderStatus } from '../types';

const Reports: React.FC = () => {
    const handleExport = (reportType: string) => {
        let dataToExport: any[] = [];
        let filename = '';

        if (reportType === 'sales') {
            dataToExport = mockOrders.filter(o => o.status === OrderStatus.Delivered);
            filename = 'sales_report.csv';
        } else if (reportType === 'returns') {
            dataToExport = mockOrders.filter(o => o.status === OrderStatus.Returned);
            filename = 'returns_report.csv';
        }

        console.log(`Simulating export of ${filename}:`, dataToExport);
        alert(`Data for ${filename} has been logged to the console. In a real app, this would trigger a file download.`);
    };

    const totalSales = mockOrders.filter(o => o.status === OrderStatus.Delivered).reduce((sum, order) => sum + order.total, 0);
    const totalReturns = mockOrders.filter(o => o.status === OrderStatus.Returned).length;

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Data & Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Total Sales (All Time)</h3>
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">₹{totalSales.toFixed(2)}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Total Returns (All Time)</h3>
                    <p className="text-3xl font-bold text-red-500 mt-2">{totalReturns}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Busiest Month</h3>
                    <p className="text-3xl font-bold text-blue-500 mt-2">July</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Generate Reports</h3>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1 p-4 border rounded-lg dark:border-gray-700">
                        <h4 className="font-semibold mb-2">Sales Data</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Export sales data including order details, customer info, and totals.</p>
                        <div className="flex space-x-2">
                           <button onClick={() => handleExport('sales')} className="bg-emerald-600 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Export Sales (CSV)</button>
                        </div>
                    </div>
                    <div className="flex-1 p-4 border rounded-lg dark:border-gray-700">
                        <h4 className="font-semibold mb-2">Returns Data</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Export a report of all returned orders with reasons (if available).</p>
                        <button onClick={() => handleExport('returns')} className="bg-orange-500 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-orange-600 transition-colors">Export Returns (CSV)</button>
                    </div>
                </div>
                 <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                    Note: Export functionality is simulated. Data will be logged to the browser's console instead of downloading a file. This is a placeholder for a full Excel export implementation using a library like SheetJS or PapaParse.
                </p>
            </div>
        </div>
    );
};

export default Reports;
   