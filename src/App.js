import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component{
    state = {
      todos: [
          {
              id: 1,
              title: 'Take out the trash',
              completed: false
          },
          {
              id: 2,
              title: 'Meeting about project',
              completed: true
          },
          {
              id: 3,
              title: 'Buy coffee',
              completed: false
          }
      ]
    };

    //this method toggles todos complete
    markComplete = (id) => {
        console.log(id + " item is set done")
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id){
                //setting it dynamic using opposite variable state setting using not true
                todo.completed = !todo.completed
            }
            return todo;
            })})
    };

    //this method deletes the todo
    delTodo = (id) => {
      console.log(id);
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    render() {
        return(
            <div className="wrapper">
                <Header />
                <h1 className="wrapper--title">To-Do List</h1>
                <AddTodo />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
        )
    }
}

export default App;
