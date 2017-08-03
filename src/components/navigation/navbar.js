import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render () {
      return (
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Projects'>Projects</Link></li>
              <li><Link to='/About'>About</Link></li>
            </ul>
          </nav>
        </div>

      );
  }
}

export default NavBar;
