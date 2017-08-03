import React, {Component} from 'react';
import './Header.css';

class HeaderContentPages extends Component {

  render () {
    const imgUrl = require('../../components/images/headerImage3.png');
    const divStyle = {
    backgroundImage: 'url('+ imgUrl +')',
    backgroundSize: 'cover',
    height: '300px',
    };

    const contentHeaderText = {
      fontSize: '54px',
      textAlign: 'left',
      position: 'absolute',
      marginLeft: '15px',
      bottom: 0,
    }

      return (
        <div className="headerContainer">
          <div style={divStyle}>
            <header style={{background:'rgba(0,0,0,.6)', height:'300px', position:'relative'}} >
              <h3 style={contentHeaderText}>Sean Bush</h3>
            </header>
          </div>
        </div>

      );
  }
}

export default HeaderContentPages;
