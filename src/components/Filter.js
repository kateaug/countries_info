import React, { useState } from 'react';
import './Filter.css';

const Filter = ( {filterByRegion} ) => {
    
    const [selectedRegion, setSelectedRegion] = useState('');
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const selectRegion = (region) => {
        setSelectedRegion(region);
        filterByRegion(region);
     
    };

  
   return (
       <div className="filter">
         <ul className="filter__list">
                    {regions.map((region) => (
                        <li key={region}>
                            <button
                                type="button"
                                className="filter__btn"
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