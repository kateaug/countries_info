import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.background};
  }
`;
