import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from 'prop-types';
import { nanoid } from 'nanoid';

export default function ListView(props) {
  const { ShopCard } = this.props;
  return (
    <div className="container">
      {projects.map((project) => (
        <img className="card" key={nanoid()} src={project.img} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  projects: PropTypes.array.isRequired,
};
