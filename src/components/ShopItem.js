import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
  const { name, price, color, img } = props.item;
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };
  return (
    <div className="item" style={divStyle}>
      <h2 className="item-title" >{name}</h2>
      <p>{color}</p>
      <div className="price">${price}</div>
      <button>ADD TO CART</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};
