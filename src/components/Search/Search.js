import React from 'react';
import { Container, Input } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = ({input: keyword, onChange: setKeyword, onClick: clearInput }) => {
    
    return (
        <Container>
             <FontAwesomeIcon icon={faSearch} size='xs'  />
             <Input
              type='text'
              placeholder='Search for a country...' 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} /> 
              <span onClick={(e) => clearInput(e.target.value)}>&times;</span>
        </Container>


    )
};

export default Search;