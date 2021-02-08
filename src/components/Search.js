import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = ({input: keyword, onChange: setKeyword }) => {
    
    return (
        <div className="search">
            <FontAwesomeIcon className="search__icon" icon={faSearch} size="xs" />
             <input 
              className="search__input"
              type="text" 
              placeholder="Search for a country..." 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} /> 
        
        </div>


    )
};

export default Search;