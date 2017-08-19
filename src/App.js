import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from "./components/todo";
import { addTodo, generateId } from "./lib/todo.helpers";

class App extends Component {
  // --------------------
  // vars

  state = {
    todos      : [
      { id: 4, label: 'One', isComplete: false },
      { id: 1, label: 'Two', isComplete: true },
      { id: 0, label: 'Three', isComplete: false }
    ],
    currentTodo: ''
  };

  // --------------------
  // constructor

  // --------------------
  // functions
  updateTodo = ( evt ) => {
    this.setState( {
      currentTodo : evt.target.value,
      errorMessage: ''
    } )
  };

  handleSubmit = ( evt ) => {
    evt.preventDefault();
    const id      = generateId( this.state.todos );
    const newTodo = {
      id        : id,
      label     : this.state.currentTodo,
      isComplete: false
    };

    const updatedTodos = addTodo( this.state.todos, newTodo );

    this.setState(
      {
        todos       : updatedTodos,
        currentTodo : '',
        errorMessage: ''
      }
    )
  };

  handleEmptySubmit = ( evt ) => {
    evt.preventDefault();
    this.setState( {
      errorMessage: 'Todo name may not be empty'
    } )
  };

  // --------------------
  // render
  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    return (
      <div className="App">

        {/*header*/}
        <div className="Todo-header">
          <img src={logo}
               className="App-logo"
               alt="logo"/>
          <h2>React Todo List</h2>
        </div>

        {/*todo input*/}
        <TodoForm handleChange={this.updateTodo}
                  currentValue={this.state.currentTodo}
                  errorMessage={this.state.errorMessage}
                  handleSubmit={submitHandler}/>

        {/*todo list*/}
        <TodoList todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
