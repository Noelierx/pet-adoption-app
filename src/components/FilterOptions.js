import React, { useState } from 'react';

const FilterOptions = ({ onFilter }) => {
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [filtersApplied, setFiltersApplied] = useState(false);

  const handleFilter = () => {
    const filters = {
      species: speciesFilter,
      breed: breedFilter,
    };
    onFilter(filters);
    setFiltersApplied(true);
  };

  const handleClearFilters = () => {
    setSpeciesFilter('');
    setBreedFilter('');
    onFilter({ species: '', breed: '' });
    setFiltersApplied(false);
  };

  const appliedFiltersMessage = filtersApplied ? 'Filters applied' : '';

  return (
    <div>
      <label className="sr-only" htmlFor="speciesFilter">Filter by Species:</label>
      <select id="speciesFilter" className="filter-dropdown" onChange={(e) => setSpeciesFilter(e.target.value)}>
        <option value="">Select Species</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
      </select>
      <label htmlFor="breedsFilter">Filter by Breeds:</label>
      <select id="breedsFilter" className="filter-dropdown" onChange={(e) => setBreedFilter(e.target.value)}>
        <option value="">Select Breed</option>
        <option value="Unknow">Unknow</option>
        <option value="Siamese">Siamese</option>
        <option value="Dutch">Dutch</option>
        <option value="Labrador Retriever">Labrador Retriever</option>
        <option value="Persian">Persian</option>
        <option value="Selkirk Straight">Selkirk Straight</option>
      </select>
      <button className="button" onClick={handleFilter}>Apply Filters</button>
      {filtersApplied && (
        <>
          <div
            className='sr-only'
            role="status"
            aria-live="polite"
            aria-atomic="true">
            {appliedFiltersMessage}
          </div>
          <button className="button" onClick={handleClearFilters}>Clear Filters</button>
        </>
      )}
    </div>
  );
};

export default FilterOptions;
