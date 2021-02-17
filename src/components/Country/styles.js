import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme}) => theme.elements};
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border-radius: 5px;
    max-width: 250px;
    cursor: pointer;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
    color: ${({ theme }) => theme.text};

    img {
        width: 100%;
        height: 147px;
        object-fit: cover;
    }

`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    h3 {
        padding 7px 0;
    }

    span {
        margin: 2px 0;
    }

    strong {
        margin-right: 5px;
    }
`;
 