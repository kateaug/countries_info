import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    background-color: ${({theme}) => theme.elements};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    svg {
        position: absolute;
        color: ${({ theme }) => theme.text};
        padding: 15px;
    }     
`;

export const Input = styled.input`
    background-color: ${({theme}) => theme.elements};
    color: ${({ theme }) => theme.text};
    border: 0;
    padding: 15px 15px 15px 40px;
    border-radius: 4px;
    width: 100%; 
    outline: none;
    background-color: ${({theme}) => theme.elements}; 
    
    &:focus-within {
        &::placeholder {
           color: transparent;
        }
    } 
`;