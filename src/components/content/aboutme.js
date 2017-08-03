import React, {Component} from 'react';
import Header from '../header/headerContentPages';
import SideBar from '../sidebar/sidebar';

class AboutMe extends Component {
  render() {

    /* assigning our pictures/files to variables to call later */
    const seansPicture = require('../../components/images/seansPicture2.JPG');
    const seansResume = require('../../components/pdfs/sbushResume.pdf');
    return(
      <div>
        <Header />
        <div className="main">
          <SideBar />
          <article className="content">
            <h1 className="welcome-text">About Me</h1>
            <div className="about-text">
              <img className="seansPictureStyle" src={seansPicture} alt="Sean Bush"></img>
              <p>
                  Thanks for wanting to know more about me! I have recently
                  obtained a bachelor's degree in Management Information Systems
                  from Wichita State University. I have also obtained an associate's
                  degree from Butler County Community College where my desire to
                  learn how to program increased substantially. Growing up I loved
                  playing with computers when given the opportunity. I have always
                  been fascinated about how things work which motivates me to learn
                  more about them and attempt to use the knowledge I obtain to create
                  something new.
              </p>
              <p>
                  From my course work, I have been introduced to various programming
                  languages such as C++ and Visual Basic. At WSU we spent the
                  majority of our time working with relational database and
                  using Microsoft SQL server to query tables in order to analyze
                  data. I have also been introduced to data analysis tools such as
                  Tableau that allowed me to transform recorded data into easy to
                  interpret visuals.
              </p>
              <p>
                  In my free time I find myself gravitating towards mobile and
                  web development. I enjoy using Android Studio and Java to
                  follow along with tutorials which I use not only to learn
                  concepts but to also create something different. Currently
                  I'm putting a heavy emphasis on learning both React and React
                  Native in order to cross develop as much as possible.
              </p>
            <br />
            <p>Click <a className="resumeStyle" href={seansResume} target="_blank" rel="noopener noreferrer">here</a> for my resume.</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default AboutMe;
