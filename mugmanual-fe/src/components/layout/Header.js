import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
  <div>
  <header style={headerStyle}>
   <h2>MUGMANUAL</h2>
  <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='users_walls'>Users</Link>
    </header>
  </div>
  );
}

export default Header;

const headerStyle = {
    padding: '0.0rem 2.5rem',
    backgroundImage: 'linear-gradient(120deg, #000000 0%,#000000 100%)',
    margin: '0 0 2rem 0',
    fontSize: '1.0rem',
    color: 'White',
    textAlign: 'right',
}

const linkStyle = {
  color: 'White',
  textDecoration: 'highlight'
}
