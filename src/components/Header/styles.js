import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 35px;
    background: ${({ theme }) => theme.elements};
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    h1 {
        font-size: 25px;
        color: ${({ theme }) => theme.text};
        font-weight bold;

    }

    button {
        display: flex;
        font-size: 15px;
        justify-content: space-around;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 15px;
        width: 10%;
        background: ${({ theme }) => theme.elements};

        span {
            color: ${({ theme }) => theme.text};
        }

        svg {
            color: ${({ theme }) => theme.text};

        }

    }

`;

