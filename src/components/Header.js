import React from 'react';


import './Header.css'
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
       <header className="headerHeader">
        <div className="headerBox">
          <NavLink to={{pathname: './'}}><div className="contentOne">Home</div></NavLink>
          <NavLink to={{ pathname: '/quiz'}}>
          <div className="contentOne">Quiz</div>
          </NavLink>
          <NavLink to={{ pathname: '/score'}}>
          <div className="contentOne">Scores</div>
          </NavLink>
        </div>

      </header>
    )
  }
}

export default Header;

