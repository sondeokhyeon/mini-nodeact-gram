import React from 'react';
import styled from 'styled-components';

const BTN_CONTAINER = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:15px;
    background-color:white;
`;

const ACTION_BTN = styled.button`
    border:none;
    ${(props) => props.type === 'l' ? 'border-right:1px solid #e6e6e6;' : 'border-left:1px solid #e6e6e6;'} 
    height:50px;
    width:100px;
    cursor:pointer;
    transition: .5s background-color, color ease-in-out;
    color:black;
    background-color:white;
    &:hover {
        background-color:#2e6da4;
        color:white;
    }
`;

const DateController = ({downDate, date, upDate}) => {
    return (
        <BTN_CONTAINER>
            <ACTION_BTN type='l' onClick={() => {downDate()}}>DOWN</ACTION_BTN>
            {date}
            <ACTION_BTN type='r' onClick={() => {upDate()}}>UP</ACTION_BTN>
        </BTN_CONTAINER>        
    )
}

export default DateController; 