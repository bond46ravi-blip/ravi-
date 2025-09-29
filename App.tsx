
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import VendorList from './components/VendorList';
import CustomerList from './components/CustomerList';
import Reports from './components/Reports';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);

  const renderView = () => {
    switch (currentView) {
      case View.Dashboard:
        return <Dashboard />;
      case View.Products:
        return <ProductList />;
      case View.Orders:
        return <OrderList />;
      case View.Vendors:
        return <VendorList />;
      case View.Customers:
        return <CustomerList />;
      case View.Reports:
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 lg:p-8 flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
   