import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: .2;
    align-items: center;
    justify-content: center; 
    position: relative;
    display: inline-block;

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
        width: 100%;
        padding: 15px 30px;
    }
`;

export const FilterList = styled.ul`
        list-style: none;
        padding: 5px 0;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        position: absolute;

        button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            border: none;
            overflow: hidden;
            outline: none;
            cursor: pointer;
            width: 100%;
            padding: 15px 30px;

            &:hover {
                background-color: #ccc;
            }
        }
`;
