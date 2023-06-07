import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';


const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <Nav>
        <ToggleButton onClick={toggleNav}>Toggle Navigation</ToggleButton>
        <NavList className={isNavOpen ? 'open' : ''}>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </NavList>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

const Nav = styled.nav`
  background: #f2f2f2;
  padding: 10px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;

  li {
    margin-right: 10px;
  }

  .active {
    font-weight: bold;
  }
`;


export default App;

