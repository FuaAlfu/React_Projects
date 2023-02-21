//importing style and the components needed from react 
import React from 'react';
import styled from 'styled-components';

const SpecialButton = ({onChangeFunc}) => {
    return ( 
        <ButtonStyle 
        className="changeBtn" 
        onClick={onChangeFunc}> Change 
        </ButtonStyle> 
        )
}

//Creating style for our button 
const ButtonStyle = styled.button`
padding: 10px 20px;
color: #29659b;
border-radius: 5px;
background: #ace4e7;
font-family: Helvetica;
font-weight: bold;
&:hover { background:#21bfeb; } 
`;


export default SpecialButton;