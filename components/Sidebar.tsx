
import React from 'react';
import { View } from '../types';
import { DashboardIcon, ProductIcon, OrderIcon, VendorIcon, CustomerIcon, ReportIcon } from './icons/IconComponents';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: View;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors ${
      isActive
        ? 'bg-emerald-600 text-white shadow-lg'
        : 'text-gray-300 hover:bg-emerald-800 hover:text-white'
    }`}
  >
    {icon}
    <span className="ml-4 font-medium">{label}</span>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { icon: <DashboardIcon />, label: View.Dashboard },
    { icon: <ProductIcon />, label: View.Products },
    { icon: <OrderIcon />, label: View.Orders },
    { icon: <VendorIcon />, label: View.Vendors },
    { icon: <CustomerIcon />, label: View.Customers },
    { icon: <ReportIcon />, label: View.Reports },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 shadow-2xl">
      <div className="text-2xl font-bold text-center py-6 border-b border-gray-700 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-emerald-400" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M17 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M12 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M12 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M7 12h1.5" />
          <path d="M12 7v1.5" />
          <path d="M12 17v-1.5" />
          <path d="M17 12h-1.5" />
        </svg>
        <span className="text-white">Fleurora</span>
      </div>
      <nav className="mt-6 flex-1">
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={currentView === item.label}
              onClick={() => setCurrentView(item.label)}
            />
          ))}
        </ul>
      </nav>
      <div className="mt-auto text-center p-4 text-xs text-gray-500">
        &copy; 2024 Fleurora Inc.
      </div>
    </aside>
  );
};

export default Sidebar;
   