import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <i className="material-icons" onClick={onSwitch}>
      {icon}
    </i>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
