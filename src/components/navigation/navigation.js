import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './NavBar.css';

class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    /*Styles for the burger button */
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#3498db'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      /*Burger button menu and links to pages*/
      <Menu styles={styles} width={ 280 }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
      </Menu>
    );
  }
}

export default Navigation;
