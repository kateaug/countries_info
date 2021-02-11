import React from 'react';
import { Container, Input } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = ({input: keyword, onChange: setKeyword }) => {
    
    return (
        <Container>
            <FontAwesomeIcon focusable='true' icon={faSearch} size='xs' />
             <Input
              type="text" 
              placeholder="Search for a country..." 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} />     
        </Container>


    )
};

export default Search;