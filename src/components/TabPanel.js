// src/components/TabPanel.js
import React, { useState } from 'react';
import Wishlist from './Wishlist';

const TabPanel = ({wishlist, onRemoveFromWishlist}) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-panel">
      <div className="tab-buttons">
        <button
          onClick={() => handleTabChange(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          Wishlist
        </button>
        <button
          onClick={() => handleTabChange(2)}
          className={activeTab === 2 ? 'active' : ''}
        >
          Lorem Ipsum
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="wishlist-content">
            <Wishlist wishlist={wishlist} onRemoveFromWishlist={onRemoveFromWishlist} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="lorem-ipsum-content">
            Lorem Ipsum content goes here
          </div>
        )}
      </div>
    </div>
  );
};

export default TabPanel;

