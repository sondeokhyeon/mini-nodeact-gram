import React from 'react';
import Store from './Others/Store';
import GlobalStyle from './Others/GlobalStyle';
import Container from './Components/Container'

function App() {
  return (
    <Store>
       <GlobalStyle />
       <Container/>
    </Store>
  );
}

export default App;
