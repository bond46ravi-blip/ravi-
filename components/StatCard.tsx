
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-emerald-500' : 'text-red-500';

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
      <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">{value}</p>
      <div className="flex items-center mt-2">
        <span className={`text-sm font-semibold ${changeColor}`}>
          {isIncrease ? '▲' : '▼'} {change}
        </span>
        <span className="text-xs text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
   