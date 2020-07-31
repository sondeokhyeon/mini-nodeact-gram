import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Photo from './Photo';

const WRAP = styled.div`
    width: 100vw;
    background-color: #eee;
`;

const Container = () => {
    return (
        <WRAP>
            <Header/>
            <Photo/>
        </WRAP>        
    )
}

export default Container;