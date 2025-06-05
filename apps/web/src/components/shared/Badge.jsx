import React from 'react';

export function Badge({ type = 'default', children }) {
  const colorMap = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-200 text-green-800',
    danger: 'bg-red-200 text-red-800',
    warning: 'bg-yellow-200 text-yellow-800',
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-sm ${colorMap[type] || colorMap.default}`}> 
      {children}
    </span>
  );
}
