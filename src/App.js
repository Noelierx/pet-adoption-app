import React, { useState } from 'react';
import './App.css';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import SidePanel from './components/SidePanel';
import Notification from './components/Notification';
import petData from './pets.json';
import ParallaxHeader from './components/ParallaxHeader';
import Video from './components/Video';
import videoFile from './assets/video.mp4';

function App() {
  const [filteredPets, setFilteredPets] = useState(petData.pets);
  const [wishlist, setWishlist] = useState([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [wishlistNotification, setWishlistNotification] = useState('');

  const handleSearch = (searchText) => {
    const filtered = petData.pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPets(filtered);
  };

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

  const addToWishlist = (petId) => {
    const petToAdd = petData.pets.find((pet) => pet.id === petId);
    if (petToAdd) {
      setWishlist([...wishlist, petToAdd]);
      setWishlistNotification(`${petToAdd.name} added to the wishlist`);
    }
  };

  const removeFromWishlist = (petId) => {
    if (!petData.pets || !wishlist) {
      return;
    }
    const petToRemove = wishlist.find((pet) => pet.id === petId);
    if (!petToRemove){
      return;
    }
    const updatedWishlist = wishlist.filter((pet) => pet.id !== petId);
    setWishlist(updatedWishlist);
    setWishlistNotification(`${petToRemove.name} removed to the wishlist`);
  };

  const openSidePanel = () => {
    setIsSidePanelOpen(true);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <div className="App">
      <ParallaxHeader />
      <main>
        <SearchBar onSearch={handleSearch} />
        <FilterOptions onFilter={handleFilter} />
        <button className="button" onClick={openSidePanel} aria-label="Open Wishlist Panel">
          Open Side Panel
        </button>
        {isSidePanelOpen && (
          <SidePanel
            isOpen={isSidePanelOpen}
            onClose={closeSidePanel}
            wishlist={wishlist}
            onRemoveFromWishlist={removeFromWishlist}
          />
        )}
        <PetList pets={filteredPets} onAddToWishlist={addToWishlist} />
        <Notification message={wishlistNotification} />
        <Video src={videoFile} title="Mountains landscape" />
      </main>
    </div>
  );
}

export default App;
