// src/components/Wishlist.js
import React from 'react';

const Wishlist = ({ wishlist, onRemoveFromWishlist }) => {
  return (
    <div className="wishlist-content">
      {wishlist && wishlist.length > 0 ? (
        <ul>
          {wishlist.map((pet) => (
            <li key={pet.id}>
              <img style={{ width: 150 }} src={pet.pictures[0]} alt={pet.name} />
              <p>Name: {pet.name}</p>
              <button className="button" onClick={() => onRemoveFromWishlist(pet.id)}>
                Remove from Wishlist
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pets added.</p>
      )}
    </div>
  );
};

export default Wishlist;
