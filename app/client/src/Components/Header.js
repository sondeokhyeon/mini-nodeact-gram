import React from 'react';
import styled from 'styled-components';
import FORM from './Header/Form';

const HEAD = styled.header`
    height:15vh;
    width:100vw;
    display:flex;
    justify-content : center;
    align-items: center;
    flex-direction:column;
    background-color:white;
`;

const TITLE = styled.h1`
    font-size:3rem;
    font-weight:600;
`;

const Header = () => {
    return (
        <HEAD>
            <TITLE>★𝗠𝗶𝗻𝘄𝗼𝗼_𝗴𝗿𝗮𝗺★</TITLE>
            <FORM />
        </HEAD>        
    )
}

export default Header;