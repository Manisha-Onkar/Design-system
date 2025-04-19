import React, { useState } from 'react';

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div className="flex space-x-5 border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`pb-2 font-medium ${
              index === activeIndex
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex].content}</div>
    </div>
  );
};
