import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center; 
    position: relative;
    display: inline-block;

    @media (min-width: 600px) {
        flex: .4;
    }

    @media (min-width: 1200px) {
        flex: .2;
    }

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${({theme}) => theme.elements};
        color: ${({ theme }) => theme.text};
        border-radius: 5px;
        border: none;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
        width: 100%;
        padding: 15px;
    }
`;

export const FilterList = styled.ul`
        list-style: none;
        padding: 5px 0;
        width: 100%;
        border: none;
        position: absolute;
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
        margin-top: 1px;

        button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${({theme}) => theme.elements};
            color: ${({ theme }) => theme.text};
            border: none;
            overflow: hidden;
            outline: none;
            cursor: pointer;
            width: 100%;
            padding: 15px;
            border-radius: 0;
            transition: all 0.3s ease 0s;    

            &:hover {
                background: ${({ theme }) => theme.hover};
                
            }
        }
`;
