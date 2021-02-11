import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 4fr 1fr;
    width:300px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);

    svg {
        padding: 15px;
        grid-row: 1;
        grid-column: 1/2;
        z-index: 2;
        color: gray;


     /// TODO NOT WORKING!!!!!!!
        &:focus-within ~ & {
            display: none;
        }

           

    }

    

    
`;

export const Input = styled.input`
    border: 0;
    padding: 15px;
    grid-column: 2/4;
    grid-row: 1;
    outline :none;
    
    &:focus-within {
        grid-column: 1/4;

        &::placeholder {
           color: transparent;
        }
    } 
    
    
`;