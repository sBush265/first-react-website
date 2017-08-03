import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer';
import WelcomeContent from './components/content/welcome-content';
import ProjectsContent from './components/content/projectPage';
import AboutMe from './components/content/aboutme';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


class App extends Component {

  render() {

    return (

      <Router>
        <div className="App">
          <Navigation />
          <div className="contentContainer">
            <Route exact path="/" component={WelcomeContent} />
            <Route exact path="/Projects" component={ProjectsContent} />
            <Route exact path="/About" component={AboutMe} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
