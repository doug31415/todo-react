import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";

export const TodoList = ( props ) => (
  <div className="Todo-list">
    <ul>
      {props.todos.map(
        todo => {
          return (
            <TodoItem key={todo.id}
                      {...todo}/>
          )
        }
      )}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};