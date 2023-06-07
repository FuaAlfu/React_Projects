import React from "react";
import styled from 'styled-components';
const Home = () =>{
    return(
        <div>
           <Header>
               <h1>Welcome <span>Home</span></h1>
           </Header>
        </div>
    )
}

const Header = styled.header`
  background: #f2f2f2;
  font-size: 12px;
  span{
    font-size: 16px;
    color: #b16464;
  } 
`;

export default Home;