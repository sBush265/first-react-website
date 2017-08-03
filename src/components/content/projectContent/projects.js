import React, { Component,
 } from 'react';

import ProjectItem from './projectItems';

class Projects extends Component {

  render() {
    let projectItems;

    /*mapping through the project array */
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {

        return(
          /* Passing through the project array to the ProjectItem component.  */
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        {/*displaying our project items */}
        {projectItems}
      </div>
    );
  }
}

export default Projects;
