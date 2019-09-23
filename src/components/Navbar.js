import React from 'react';
import './styles/Navbar.css'
import Logo from '../images/logo.svg'
class Navbar extends React.Component {
  render()
  {
    return(
      <>
       <nav className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand"
             href="/">
            <img src={Logo} 
                 alt="Logo"
                 className="Navbar__brand-logo"
                 />
            <span className="font-weight-ligth">
              Platzi</span>
            <span className='font-weight-bold'>
              Conf</span>
          </a>
        </div>
       </nav>
      </>
    )
  }
}

export default Navbar;