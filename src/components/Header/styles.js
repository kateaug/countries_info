import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
   
    background: ${({ theme }) => theme.elements};
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    @media (min-width: 1200px) {
        padding: 30px 100px;
    }

    h1 {
        font-size: 20px;
        color: ${({ theme }) => theme.text};
        font-weight bold;

        @media (min-width: 600px) {
            font-size: 25px;
        }

    }

    button {
        display: flex;
        font-size: 15px;
        justify-content: space-around;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        margin-right: 0;  
        background: ${({ theme }) => theme.elements};

        span {
            display: none;

            @media (min-width: 600px) {
                display: block;
                color: ${({ theme }) => theme.text};
            }
   
            
        }

        svg {
            color: ${({ theme }) => theme.text};

            @media (min-width: 600px) { 
                margin-right: 10px;
            }
        }

    }

`;

