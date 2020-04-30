import React from 'react';


import './Header.css'


class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-box">
          <div className="content-One">Accueil</div>
          <div className="content-One">Forum</div>
          <div className="content-One">Contact</div>
        </div>

      </header>
    )
  }
}

export default Header;