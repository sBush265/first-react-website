import React, { Component,
 } from 'react';
 import './projectItems.css';


class ProjectItem extends Component {

  render() {
    return (
      /*Setting up how the information from the projects array will be displayed. information is from our projects array
        located in the projectPage.js file but passed through from the projects.js file.
       */
      <div>
        <div className="projectItemsStyle">
          <h3>{this.props.project.title}</h3>
          <p>{this.props.project.description}</p>
          <img src={this.props.project.image} alt={this.props.project.alt} height={this.props.project.height}/>
          <br />
          <a href={this.props.project.link} target="_blank" rel="noopener noreferrer">{this.props.project.link}</a>
          <hr />
        </div>
      </div>

    );
  }
}


export default ProjectItem;
