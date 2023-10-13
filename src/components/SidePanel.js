import React, { useRef, useEffect } from 'react';
import TabPanel from './TabPanel';

const SidePanel = ({ isOpen, onClose, wishlist, onRemoveFromWishlist }) => {
  const sidePanelStyle = {
    width: isOpen ? '500px' : '0',
  };

  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const closeBtnRef = useRef(null);
  const sidePanelRef = useRef(null);

  useEffect(() => {
    // Focus on the close button when the side panel opens
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleBlur = (e) => {
    // Check if the newly focused element is not inside the side panel
    if (isOpen && !sidePanelRef.current.contains(e.relatedTarget)) {
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="overlay"
          style={overlayStyle}
          onClick={handleOverlayClick}
          tabIndex={0} // Make the overlay focusable when the side panel is open
        ></div>
      )}
      <div
        className="sidepanel"
        style={sidePanelStyle}
        tabIndex={0} // Make the side panel focusable
        ref={sidePanelRef}
        onBlur={handleBlur}
      >
        <button
          className="closebtn"
          onClick={() => onClose()}
          aria-label="Close Wishlist Panel"
          tabIndex={isOpen ? 0 : -1} // Make the close button focusable only when the panel is open
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