import React, { useState } from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Filter = ( {filterByRegion} ) => {
    
    const [selectedRegion, setSelectedRegion] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectRegion = (region) => {
        setSelectedRegion(region);
        filterByRegion(region);
        setShowDropdown(false);     
    };

  
   return (
       <div className="filter">
           <button type="button" className="filter__btn" onClick={toggleDropdown}>
                        {selectedRegion !== '' ? (
                            <span>{selectedRegion}</span>
                        ) : (
                            <span>Filter by Region</span>
                        )}
                        <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </button>
                <ul className="filter__list" style={{ display: (showDropdown ? 'block' : 'none') }}>                
                    {regions.map((region) => (
                        <li key={region} className="filter__list-item" >
                            <button
                                type="button"
                                className="filter__list-btn"
                                onClick={() => selectRegion(region)}
                            >
                                <span
                                    style={{
                                        fontWeight:
                                            selectedRegion === region && 'bold',
                                    }}
                                >
                                    {region}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
       </div>
   )
};

export default Filter;