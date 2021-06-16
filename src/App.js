import React, { Component } from 'react';
import List from './Components/List';
import TodoForm from './Components/TodoForm';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    todos: [
      { id: 3, name: "Learn Rails", complete: true, },
      { id: 1, name: "Learn React", complete: true, },
      { id: 2, name: "Graduate DPL", complete: false, }
    ],
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  handlClick = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }
  
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { todos } = this.state;
    const todo = { name, id: this.getUniqId(), complete: false }
    this.setState({ todos: [todo, ...todos] });
  }

  visibleItems = () => {
    const { todos, filter } = this.state;
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t => t.complete )
      default:
        return todos;
    }
  }
    
    render() {
      const { filter } = this.state;

      return (
        <>
          <TodoForm addItem={this.addItem} />
          <List name="Todo List" items={this.visibleItems()} todoClick={this.handlClick}/>
          <Footer filter={filter} setFilter={this.setFilter} />
        </>
    );
  }
}


export default App;
