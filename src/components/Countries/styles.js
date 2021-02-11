import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;

`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 35px;   
`;


export const Grid = styled.div`
    padding: 20px 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;
   