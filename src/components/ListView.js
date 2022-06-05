import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem.js';
import { nanoid } from 'nanoid';

export default function ListView(props) {
  const { items } = props;
  return (
    <div className="list-container">
      {items.map((item) => (
        <ShopItem item={item} key={nanoid()}/>
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};
