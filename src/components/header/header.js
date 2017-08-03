import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

  render () {
    const imgUrl = require('../../components/images/headerImage3.png');
    const divStyle = {
    backgroundImage: 'url('+ imgUrl +')',
    backgroundSize: 'cover',
    height: 'auto',
    };
    const headerLogo = require('../../components/images/welcomeBear.png');

      return (
        <div className="headerContainer">
          <div style={divStyle}>
            <header style={{background:'rgba(0,0,0,.2)', height:'auto'}} >
              <div className="headerIconContainer">
                <img src={headerLogo} className="profileImg" alt=""/>
              </div>

              <h1 className="mainheader-text">Sean Bush</h1>
              <h2 className="header-intro">MIS Graduate From Wichita State University</h2>
              <div className="svgContainer">
                {/* setting the onClick event*/}
                <svg width="40" height="40" viewBox="0 0 512 512" fill="#fff" onClick={this.props.onClick}>
                <path d="M 96.00,96.00l-96.00,96.00l 256.00,256.00l 256.00-256.00l-96.00-96.00L 256.00,256.00L 96.00,96.00z" ></path>
                </svg>
              </div>

            </header>
          </div>
        </div>

      );
  }
}

export default Header;
