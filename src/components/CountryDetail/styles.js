import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   padding: 30px 50px;
   color: ${({ theme }) => theme.text};
`;

export const Flag = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   padding: 20px 50px;
   
   img {
        margin-top: 30px;
        object-fit: contain;
        width: 100%;
   }

   button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        border: 1px solid #ccc;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
        padding: 10px;
        width: 17%;
        font-weight: bold;
        border-radius: 4px;

   }

`;

export const Details = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;  
   padding: 50px;

    
`;

export const CountryInfo = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 10px;

    strong {
        margin-right: 5px;
    }

`;

export const Borders = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
  

    strong {
        flex: 1 1 100%;
        margin-bottom: 15px;
    }

    div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
   
        a {
            padding: 5px;
            font-size: 20px;
            border-radius: 5px;
            margin: 5px 5px 5px 0;
            background: white;
            color: black;
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
        }
    }        
                
`;