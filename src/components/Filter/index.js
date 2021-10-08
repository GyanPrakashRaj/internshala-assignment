import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilterOption } from '../../logic/filter';
import './styles.css';

const isSelected = (selectedOption, key) => {
  const filterButtonClass = 'filter-button';
  if (selectedOption === key) {
    return `${filterButtonClass} active`;
  }
  return filterButtonClass
};

export const Filter = ({ onFilter, selectedOption }) => {
  const options = [
    { key: 'all', label: 'All' },
    { key: 'incomplete', label: 'Incomplete' },
    { key: 'complete', label: 'Complete' }
  ];
  return (
    <div>
      <ul className="filter-ul">
        {options.map(({ key, label }) => {
          return (
            <li key={key}>
              <button
                className={isSelected(selectedOption, key)}
                onClick={() => onFilter(key)}>{label}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { selectedOption: state.filter.selectedOption };
};

const mapDispatchToProps = (dispatch) => ({
  onFilter: (selectedOption) => dispatch(setFilterOption(selectedOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
