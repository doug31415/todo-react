import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ( props ) => {
  return (
    <li key={props.id}
        className="Todo-list-item">

      <input type="checkbox"
             defaultChecked={props.isComplete}/>
      <span className="label">{props.label}</span>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  label: PropTypes.string.isRequired
}