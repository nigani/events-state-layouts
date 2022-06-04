import React from 'react';
import PropTypes from 'prop-types';

import MaterialIcon, {colorPallet} from 'material-icons-react';

function IconSwitch(props) {
  return <MaterialIcon icon={props.icon} onClick={props.onSwitch} />
}

export default IconSwitch;
