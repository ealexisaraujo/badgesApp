import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';
import Logo from '../assets/images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <Link className='Navbar__brand' to='/'>
            <img src={Logo} className='Navbar__brand-logo' alt='Logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
