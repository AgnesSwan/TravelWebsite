import React from 'react';
import './Topbar.css';

import { Link } from 'react-router-dom';
const Topbar = props => (
  <header className="container">
    <nav className="nav">



      <ul>
        <li>
          <Link to='/'>O mnie</Link>
        </li>
        <li>
          <Link to='/Guide'>Przewodnik</Link>
        </li>
        <li>
          <Link to='/Photo'>Zdjęcia</Link>
        </li>



      </ul>

    </nav>
  </header >

);

export default Topbar;