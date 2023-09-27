// src/components/SidePanel.js
import React from 'react';
import TabPanel from './TabPanel';

const SidePanel = ({ isOpen, onClose, wishlist, onRemoveFromWishlist }) => {
  const sidePanelStyle = {
    width: isOpen ? '500px' : '0',
  };

  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div>
      <div
        className="overlay"
        style={overlayStyle}
        onClick={() => onClose()}
      ></div>
      <div className="sidepanel" style={sidePanelStyle}>
        <span className="closebtn" onClick={() => onClose()}>
          &times;
        </span>
        <TabPanel wishlist={wishlist} onRemoveFromWishlist={onRemoveFromWishlist} />
      </div>
    </div>
  );
};

export default SidePanel;