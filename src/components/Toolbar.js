import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  
  static propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
  }

  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <div className="toolbar">
        {filters.map((filter) => (
          <button key={filter} className={filter==selected ? "button-select": "button"} onClick={() => onSelectFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
    );
  }
}

export default Toolbar;
