// src/App.js
import React, { useState } from 'react';
import './App.css';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import SidePanel from './components/SidePanel'; // Import the SidePanel component
import petData from './pets.json';

function App() {
  const [filteredPets, setFilteredPets] = useState(petData.pets);
  const [wishlist, setWishlist] = useState([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  // Callback function to handle the search
  const handleSearch = (searchText) => {
    const filtered = petData.pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPets(filtered);
  };

  // Callback function to handle the filtering
  const handleFilter = (filters) => {
    let filtered = petData.pets;

    if (filters.species) {
      filtered = filtered.filter((pet) => pet.species === filters.species);
    }

    if (filters.breed) {
      filtered = filtered.filter((pet) => pet.breed === filters.breed);
    }

    setFilteredPets(filtered);
  };

  // Callback function to add a pet to the wishlist
  const addToWishlist = (petId) => {
    const petToAdd = petData.pets.find((pet) => pet.id === petId);
    if (petToAdd) {
      setWishlist([...wishlist, petToAdd]);
    }
  };

  // Callback function to remove a pet from the wishlist
  const removeFromWishlist = (petId) => {
    const updatedWishlist = wishlist.filter((pet) => pet.id !== petId);
    setWishlist(updatedWishlist);
  };

  // Function to open the side panel
  const openSidePanel = () => {
    setIsSidePanelOpen(true);
  };

  // Function to close the side panel
  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Adoption App</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <FilterOptions onFilter={handleFilter} />
        <button className="button" onClick={openSidePanel}>Open Side Panel</button>
        {/* Include the SidePanel component */}
        <SidePanel
          isOpen={isSidePanelOpen}
          onClose={closeSidePanel}
          wishlist={wishlist}
          onRemoveFromWishlist={removeFromWishlist}
        />
        <PetList pets={filteredPets} onAddToWishlist={addToWishlist} />
      </main>
    </div>
  );
}

export default App;
