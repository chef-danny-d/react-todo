import React, {Component} from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// import uuid from 'uuid';
import axios from 'axios';

class App extends Component{
    state = {
        todos: [],
        listTitle: ''
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.setState({todos: res.data}))
    }

    //this method toggles todos complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id){
                //setting it dynamic using opposite variable state setting using not true
                todo.completed = !todo.completed
                if (todo.completed){
                    console.log("item with unique ID of: " + id + " is set to complete")
                }
                else{
                    console.log("item with unique ID of: " + id + " is set to incomplete")
                }

            }
            return todo;
            })})
    };

    //this method deletes the todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/&{id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
        console.log(id);
    };

    //list naming
    listName = (x) => this.setState({[x.target.name]: x.target.value});

    //add todo
    addTodo = (title) => {
        console.log(title);
        //using spread operator to duplicate array item
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            complete: false
        })
            .then(res => this.setState({todos: [...this.state.todos, res.data]}))
    }

    render() {
        return(
            <HashRouter basename='/'>
                <div className="wrapper">
                    <Header />
                        <Route exact path='/' render={props => ( // 'exact' acts as a default page indicator
                            <React.Fragment> {/*bringing in shadow element to wrap react tags up*/}
                                <div className="wrapper--title">
                                    <input type="text" name="listTitle" className="wrapper--input" placeholder="To-Do List" value={this.state.listTitle} onChange={this.listName}/>
                                    <i className="material-icons wrapper--icon">edit</i>
                                </div>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About}/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
