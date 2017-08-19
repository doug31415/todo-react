import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ( props ) => (
  <div className="Todo-form">
    <form onSubmit={props.handleSubmit}>

      <div className="flex vertical justify-around align-center">
        <input type="text"
               value={props.currentValue}
               onChange={props.handleChange}/>
        <span className="error-message">{props.errorMessage}</span>
      </div>
    </form>
  </div>
);

TodoForm.propTypes = {
  currentValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};