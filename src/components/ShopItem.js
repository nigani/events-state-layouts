import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
  const { name, price, color, img } = props.card;
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };
  return (
    <div className="card" style={divStyle}>
      <h2 className="card-title" >{name}</h2>
      <p>{color}</p>
      <div className="purchase-info">
        <div className="price">${price}</div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  card: PropTypes.object.isRequired,
};
