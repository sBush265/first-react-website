import React, {Component} from 'react';
import Header from '../header/headerContentPages';
import SideBar from '../sidebar/sidebar';
import Projects from './projectContent/projects';
import uuid from 'uuid';

class ProjectsContent extends Component {
  constructor() {
    super();/*super() must be included in the constructor*/
    /*setting up the state to store objecsts inside of the projects array*/
    this.state = {
      projects: [],
  }
}
getProjects(){
  /*assigning images to use later*/
  const highCaliberImage = require('../../components/images/HighCaliberInspections.jpg');
  const ticTacToeImage = require('../../components/images/ticTacToeImage.png');
  const simpleCalculatorImage = require('../../components/images/simpleCalculator.png');
  const toDoListImage = require('../../components/images/toDoListApp.png');
  const carRaveSplashImage = require('../../components/images/CarRaveSplash.png');

  this.setState ({projects: [
      {
        id: uuid.v4(),
        title: 'High Caliber Inspections Website',
        description: 'Currently working with this client to build a website for their business. This website is using WordPress to help manage the page and make updates as needed.',
        link: '//www.highcaliberinspections.com/',
        image: highCaliberImage,
        alt: 'High Caliber Inspections',
        height: '200px',
      },
      {
        id: uuid.v4(),
        title: 'Tic-Tac-Toe',
        description: 'This is version one of a tic-tac-toe game I am building for fun. It is being programmed with React and will be improved as I learn more.',
        link: 'https://unstuck-wine.000webhostapp.com/',
        image: ticTacToeImage,
        alt: 'Tic Tac Toe',
        height: '300px',
      },
      {
        id: uuid.v4(),
        title: 'Simple Calculator V.1',
        description: 'A simple calculator created with various resources. This project was made with Java in Android Studio.',
        link: '',
        image: simpleCalculatorImage,
        alt: 'simple calculator',
        height: '400px',
      },
      {
        id: uuid.v4(),
        title: 'Todo List App',
        description: 'A todo list app that I use to keep track of some tasks. This project was made with Java in Android Studio.',
        link: '',
        image: toDoListImage,
        alt: '',
        height: '400px',
      },
      {
        id: uuid.v4(),
        title: 'CarRave Splash Page',
        description: 'A splash page I made for a possible future project. I used Java, Android Studio, and Adobe Illustrator to create this splash page.',
        link: '',
        image: carRaveSplashImage,
        alt: '',
        height: '400px',
      },
    ]});
}

componentWillMount(){
    this.getProjects();
}

  render() {
    return(
      <div>
        <Header />
        <div className="main">
          <SideBar />
          <article className="content">
            <h1 className="welcome-text">Some Projects</h1>
            <p>Below you will find some of my projects that I have created as I learn to build my skills as a web and mobile developer.
              I intend to post projects related to React, React-Native, JavaScript, Java, and Adobe Illustrator. 
            </p>
            <div className="about-text">
                <Projects projects={this.state.projects} />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
