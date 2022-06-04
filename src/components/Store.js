import React from 'react';

import ProjectList from './ProjectList.js';
import IconSwitch from './IconSwitch.js';

import PropTypes from 'prop-types';

const products = [
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'red',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'blue',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
  },
  {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
  },
  {
    name: 'Nike free run',
    price: '170',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
  },
  {
    name: 'Nike Metcon 3',
    price: '150',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
  },
];

class Store extends React.Component {
  static propTypes = {};

  state = {
    icon: 'view_list',
    products: products,
  };

  onSwitch = () =>
    this.setState((prevState) => {
      icon: prevState.state.icon == 'view_list' ? 'view_module' : 'view_list';
      
    });

  render() {
    const { filters, selected, projects } = this.state;
    return (
      <>
        <IconSwitch icon={'view_list'} onSwitch={this.onSwitch} />
      </>
    );
  }
}

export default Store;
