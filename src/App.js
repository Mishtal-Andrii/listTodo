import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    todos: []
  }

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos: res.data
    }))
}

markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed =!todo.completed
      }
      return todo;
    })
  });
}

delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res =>this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  }));
}

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
  title,
  completed: false
})
  .then(res => this.setState({todos: 
    [...this.state.todos, res.data] }));
}

  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render= {props => (
        <>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todosFromServer={this.state.todos}
          markComplete={this.markComplete}  
          delTodo={this.delTodo} />
        </>
    )} />
    <Route path="/about" component={About} />
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;