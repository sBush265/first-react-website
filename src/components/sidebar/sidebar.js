import React, {Component} from 'react';
import './sidebar.css';

class SideBar extends Component {
  render () {
    const gitHubIcon = require('../../components/images/githubicon.svg');
    const linkedInIcon = require('../../components/images/linkedinicon.svg');
    const facebookIcon = require('../../components/images/facebookicon.svg');
      return(
        <div className="sidebarStyle" >
          <h3>Find Me On</h3>
          <div className="sidebarMain">
            <a href="https://github.com/sBush265" target="_blank" rel="noopener noreferrer">
                <div className="sidebarContent">
                  <img src={gitHubIcon} height="64px" className="svg" alt=""/>
                    <br />
                    GitHub
                </div>
            </a>
            <a href="https://www.linkedin.com/in/forseanbush/" target="_blank" rel="noopener noreferrer" >
                <div className="sidebarContent" href="google.com" >
                  <img src={linkedInIcon} height="64px" alt=""/>
                    <br />
                    LinkedIn
                </div>
            </a>
            <a href="https://www.facebook.com/speed37" target="_blank" rel="noopener noreferrer">
                <div className="sidebarContent">
                  <img src={facebookIcon} height="64px" alt=""/>
                    <br />
                    Facebook
                </div>
            </a>
            <div className="emailText">
              <p>Email: scbush@shockers.wichita.edu</p>
            </div>
          </div>
        </div>

      );
  }
}

export default SideBar;
