import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class ProjectList extends React.Component {

  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  render() {
    const { projects } = this.props;
    return (
      <div className="container">
        {projects.map((project) => (
            <img className="card" key={nanoid()} src={project.img} />
        ))}
      </div>
    );
  }
}

export default ProjectList;
