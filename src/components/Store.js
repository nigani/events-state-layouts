import React from 'react';
import IconSwitch from './IconSwitch.js';
import CardsView from './CardsView.js';
import ListView from './ListView.js';

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

export default class Store extends React.Component {
  static propTypes = {};

  state = {
    icon: 'view_list',
    products: products,
  };

  onSwitch = () =>
    this.setState((prevState) => ({
      icon: prevState.icon === 'view_list' ? 'view_module' : 'view_list',
    }));

  render() {
    const { icon, products } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <IconSwitch icon={icon} onSwitch={this.onSwitch} />
        </div>
        <div>
          {icon === 'view_list' ? (
            <CardsView cards={products} />
          ) : (
            <ListView items={products} />
          )}
        </div>
      </div>
    );
  }
}
