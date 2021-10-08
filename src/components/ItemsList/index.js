import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, toggleItem } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items, onRemove, onToggle, selectedOption }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.filter(({ complete }) => {
          if (selectedOption === 'all') {
            return true;
          } else if (complete && selectedOption === 'complete') {
            return true;
          } else if (complete === false && selectedOption === 'incomplete') {
            return true;
          } 
          return false;
        }).map(({ content, id, complete }) =>
          <li key={id}>
            <input
              aria-label={complete ? "Set item to incomplete" : "Set item to complete"}
              type="checkbox"
              className="items-toggle"
              onChange={() => onToggle(id)}
              checked={complete} />
            {content}
            <button className="items-remove" onClick={() => onRemove(id)}>Remove</button>
          </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { 
    items: state.todos.items,
    selectedOption: state.filter.selectedOption,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeItem(id)),
  onToggle: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
