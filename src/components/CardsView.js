import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard.js';
import { nanoid } from 'nanoid';

export default function CardsView(props) {
  const { cards } = props;
  return (
    <div className="container">
      {cards.map((card) => (
        <ShopCard card={card} key={nanoid()}/>
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};
