import React from 'react';

import ProjectList from './ProjectList.js';
import Toolbar from './Toolbar.js';

import PropTypes from 'prop-types';

class Portfolio extends React.Component {

  static propTypes = { };

  state = {
    filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
    selected: 'All',
    projects: [
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
        category: 'Business Cards',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
        category: 'Business Cards',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
        category: 'Business Cards',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
        category: 'Flayers',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
        category: 'Business Cards',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
        category: 'Business Cards',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
        category: 'Websites',
      },
      {
        img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
        category: 'Flayers',
      },
    ],
  };

  render() {
    const { filters, selected, projects } = this.state;
    return (
      <>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={(filter) => this.setState({ selected: filter })}
        />
        <ProjectList
          projects={
            selected == 'All'
              ? projects
              : projects.filter((e) => e.category == selected)
          }
        />
        {performance.now()}
      </>
    );
  }
}

export default Portfolio;
