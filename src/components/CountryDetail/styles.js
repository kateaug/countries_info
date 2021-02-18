import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   padding: 50px;
   color: ${({ theme }) => theme.text};
   flex-wrap: wrap;

        @media (min-width: 600px) { 
            flex-wrap: no-wrap;
            
        } 

        @media (min-width: 1200px) { 
          padding: 30px 100px;
          justify-content: space-between;

        }  
`;

export const Flag = styled.div`
   display: flex;
   flex-direction: column;

   @media (min-width: 1200px) { 
       flex: 1;  
   }
   
   img {
        margin-top: 30px;
        flex: 1;
        object-fit: cover;
        

        @media (min-width: 1200px) { 
            max-width: 100%; 
            object-fit: cover;
            width: 550px;
            height: 350px;
        } 
   }

   button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${({theme}) => theme.elements};
        color: ${({ theme }) => theme.text};
        border: none;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
        padding: 10px;
        width: 32%;
        font-size: 12px;
        border-radius: 4px;
        transition: all 0.3s ease 0s;

        &:hover {
            background: ${({ theme }) => theme.hover};
            
        }

        @media (min-width: 600px) { 
            width: 13%;
            font-size: 15px;
        }

        @media (min-width: 1200px) { 
            width: 17%;
        } 


   }

`;

export const Details = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;  
   padding: 0;
   margin-top: 30px;


   @media (min-width: 600px) { 
     padding: 50px;   
     font-size: 25px;
   }

   @media (min-width: 1200px) { 
      padding: 30px 10px; 
      font-size: 17px;
   }   

    
`;

export const CountryInfo = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 10px;

    @media (min-width: 600px) { 
        margin-top: 40px;   
    }

    strong {
        margin-right: 5px;
    }

`;

export const Borders = styled.div`
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;

    @media (min-width: 600px) { 
        margin-top: 50px;   
    }
  

    strong {
        flex: 1 1 100%;
        margin-bottom: 15px;
    }

    div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
   
        a {
            padding: 10px;
            font-size: 17px;
            border-radius: 5px;
            margin: 5px 5px 5px 0;
            background: ${({theme}) => theme.elements};
            color: ${({ theme }) => theme.text};
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease 0s;

            &:hover {
                background: ${({ theme }) => theme.hover};
                
            }
        }
    }        
                
`;