// src/components/FilterOptions.js
import React, { useState } from 'react';

const FilterOptions = ({ onFilter }) => {
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');

  const handleFilter = () => {
    // Construct an object with selected filters
    const filters = {
      species: speciesFilter,
      breed: breedFilter,
    };
    onFilter(filters);
  };

  return (
    <div>
      <select className="filter-dropdown" onChange={(e) => setSpeciesFilter(e.target.value)}>
        <option value="">Select Species</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
      </select>
      <select className="filter-dropdown" onChange={(e) => setBreedFilter(e.target.value)}>
        <option value="">Select Breed</option>
        <option value="Unknow">Unknow</option>
        <option value="Siamese">Siamese</option>
        <option value="Dutch">Dutch</option>
        <option value="Labrador Retriever">Labrador Retriever</option>
        <option value="Persian">Persian</option>
        <option value="Selkirk Straight">Selkirk Straight</option>
      </select>
      <button className="button" onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
