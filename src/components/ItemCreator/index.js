import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../logic/todos';
import './styles.css';

let inputField;

const save = (onAdd) => {
  inputField.value && onAdd(inputField.value);
  inputField.value = '';
};

export const ItemCreator = ({ onAdd }) => {
  return (
    <div className="itemCreator">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save(onAdd);
        }}>
        <input
          ref={(input) => {
            inputField = input;
          }}
          className="itemCreator-input"
          type="text"
          placeholder="What do you need to do?"
        />
        <input
          className="itemCreator-button"
          type="button"
          value="Add Task"
          onClick={() => save(onAdd)}
        />
      </form>
    </div>
  );
};

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (newItem) => dispatch(addItem(newItem)),
});

export default connect(null, mapDispatchToProps)(ItemCreator);
