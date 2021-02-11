import React, { useState } from 'react';
import { Container, FilterList } from './styles';
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
       <Container>
           <button type='button' onClick={toggleDropdown}>
                        {selectedRegion !== '' ? (
                            <span>{selectedRegion}</span>
                        ) : (
                            <span>Filter by Region</span>
                        )}
                        <FontAwesomeIcon icon={faChevronDown} size='xs' />
            </button>
            <FilterList style={{ display: (showDropdown ? 'block' : 'none') }}>                
                    {regions.map((region) => (
                        <li key={region}>
                            <button type='button' onClick={() => selectRegion(region)}>
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
            </FilterList>
       </Container>
   )
};

export default Filter;