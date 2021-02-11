import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme}) => theme.elements};
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border-radius: 5px;
    max-width: 250px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};

    img {
        width: 250px;
        object-fit: contain;
    }

`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;
 