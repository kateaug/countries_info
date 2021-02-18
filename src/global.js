import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.background};
    margin: 0;
    padding: 0;
  }
`;
