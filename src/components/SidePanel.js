import React, { useRef, useEffect } from 'react';
import TabPanel from './TabPanel';

const SidePanel = ({ isOpen, onClose, wishlist, onRemoveFromWishlist }) => {
  const sidePanelStyle = {
    width: isOpen ? '300px' : '0',
  };

  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const closeBtnRef = useRef(null);
  const sidePanelRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);


  return (
    <div>
      {isOpen && (
        <div
          className="overlay"
          style={overlayStyle}
          tabIndex={0}
        ></div>
      )}
      <div
        className="sidepanel"
        style={sidePanelStyle}
        tabIndex={0}
        ref={sidePanelRef}
      >
        <button
          className="closebtn"
          onClick={() => onClose()}
          aria-label="Close Wishlist Panel"
          tabIndex={isOpen ? 0 : -1}
          ref={closeBtnRef}
        >
          &times;
        </button>
        <TabPanel wishlist={wishlist} onRemoveFromWishlist={onRemoveFromWishlist} />
      </div>
    </div>
  );
};

export default SidePanel;