import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme}) => theme.elements}; 
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
    color: ${({ theme }) => theme.text};
    height: 100%;

    @media (min-width: 600px) {
        max-width: 220px;
    }

    @media (min-width: 1200px) {
        max-width: 285px;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }

    img {
        width: 100%;
        object-fit: cover;
        flex: 1;

        @media (min-width: 600px) {
            height: 150px;
        }
    
        @media (min-width: 1200px) {
            height: 200px;
        }

        
    }

`;

export const Details = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;

    @media (min-width: 600px) {
        padding: 15px;
    }

    h3 {
        padding-bottom: 10px;
    }

    span {
        margin: 4px 0;
    }

    strong {
        margin-right: 5px;
    }
`;
 