// src/components/PetList.js
import React from 'react';

const PetList = ({ pets, onAddToWishlist }) => {
  return (
    <div>
      <h2>List of Pets</h2>
      <ul className="pet-list">
        {pets.map((pet) => (
          <li key={pet.id}>
            <img style={{width: 150}} src={pet.pictures[0]} alt={pet.name} />
            <p>Name: {pet.name}</p>
            <p>Species: {pet.species}</p>
            <button className="button" onClick={() => onAddToWishlist(pet.id)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
