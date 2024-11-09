import React, { useState } from 'react';
import './FilterDropdown.css';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const options = ['This Week', 'This Month', 'This Year', 'Custom Date'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        Filter <img src="https://i.ibb.co.com/2FKwFv0/Vector.png" alt="" />
      </button>
      {isOpen && (
        <div className="dropdown-content">
         
          {filteredOptions.map((option, index) => (
            <a href="#" key={index} className="dropdown-item">
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
