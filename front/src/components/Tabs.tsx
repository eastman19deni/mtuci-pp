import React, { useState } from 'react';
import './Tabs.css';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contacts', label: 'CONTACTS' }
  ];

  return (
    <nav className="tabs-container">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          // Важные атрибуты для отключения подсветки
          onMouseDown={(e) => e.preventDefault()} // Предотвращает подсветку при клике
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;