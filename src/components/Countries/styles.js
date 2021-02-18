import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 30px;

    @media (min-width: 1200px) {
        flex-wrap: no-wrap;
        padding: 50px 100px 20px 100px;
    }
        
`;


export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px;

    @media (min-width: 600px) {
        justify-content: space-between;
    }

    @media (min-width: 1200px) {
        padding: 30px 100px;
    }
  
    a {
        text-decoration: none;
        margin-bottom: 30px;        
    }

`;
   