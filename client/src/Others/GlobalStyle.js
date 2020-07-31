import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    body {
        height:100%;
        width:100%;
    }
    ${reset}
`;

export default GlobalStyle