import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
  render() {

    const { todosFromServer} =this.props;

    return todosFromServer.map((todo) => (
          <TodoItem 
            todo ={todo}
            key={todo.id} 
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        )
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos
