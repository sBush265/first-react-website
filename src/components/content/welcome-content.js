import React, {Component} from 'react';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';

class WelcomeContent extends Component {

/* handling our click event to bring the welcome message into view.
    future update will incorporate smooth scrolling.*/
  handleClick() {
    const elmnt = document.getElementById("welcomeMessage");
    elmnt.scrollIntoView();
  }


  render() {

    return(
      <div>
        {/*getting the onClick and calling handleClick*/}
        <Header onClick={this.handleClick} />
        <div className="main">
          <SideBar />
          <article className="content">
            <h1 className="welcome-text" id="welcomeMessage">Welcome</h1>
            <div className="about-text">
              <p>Hello and welcome to my website! This website was built with the React
                JavaScript library. My intentions for this website are to showcase
                my personal projects as I learn and grow as a developer. I plan to
                continuously improve my website as I learn new techniques and develop
                my programming skills. If you would like to know more about me please
                check out my about page.</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default WelcomeContent;
