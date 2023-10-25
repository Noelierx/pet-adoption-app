import React, {useState} from 'react';

const Accordion = ({ title, content, controls, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        aria-expanded={isExpanded}
        onClick={toggleAccordion}
        aria-controls={controls}
        id={id}
      >
        {title}
      </button>
      {isExpanded && (
        <div
          id={controls}
          role="region"
          aria-labelledby={id}
        >
          {content}
        </div>
      )}
    </div>
  );
};

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
            <Accordion title="Location" content={pet.location} controls="Location" id="Location1" />
            <Accordion title="Description" content={pet.description} controls="Description" id="Description1" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
