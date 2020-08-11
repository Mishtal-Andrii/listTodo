import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
getStyle = () => {
  return {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration :this.props.todo.completed ? 'line-through' : 'none'
 }
}


  render() {
    
    const { title, id } = this.props.todo;

    return (
      <div style ={this.getStyle()}>
        <p>
          <input 
            type="checkbox" 
            onChange= { () => this.props.markComplete(id)}
          /> 
          {title}
          <button 
            style={btnStyle}
            onClick={() => this.props.delTodo(id)}
            >X
        
          </button>
        </p>
      </div>
    )
  }
}

const btnStyle ={
  background: '#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
  float:  'right'
}

TodoItem.propTypes = {
  todos: PropTypes.object
}

export default TodoItem