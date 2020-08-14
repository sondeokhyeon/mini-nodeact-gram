import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #eee;
    }
    ${reset}
`;

export default GlobalStyle