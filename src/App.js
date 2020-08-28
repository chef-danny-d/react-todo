import React, { Component } from "react"
import { HashRouter, Route } from "react-router-dom"
import Todos from "./components/Todos"
import "./App.sass"
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
import About from "./components/pages/About"
import axios from "axios"

const source = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"

class App extends Component {
    state = {
        todos: [
            {
                title: "",
                complete: false,
                id: null,
            },
        ],
    }

    componentDidMount() {
        axios.get(source).then((res) => {
            this.setState({
                todos: res.data,
            })
        })
    }

    //this method toggles todos complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    //setting it dynamic using opposite variable state setting using not true
                    todo.completed = !todo.completed
                    if (todo.completed) {
                        console.log(
                            "item with unique ID of: " +
                                id +
                                " is set to complete"
                        )
                    } else {
                        console.log(
                            "item with unique ID of: " +
                                id +
                                " is set to incomplete"
                        )
                    }
                }

                return todo
            }),
        })
    }

    //this method deletes the todo
    delTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/&{id}`)
            .then((res) =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter((todo) => todo.id !== id),
                    ],
                })
            )
        console.log(id)
    }

    //list naming
    listName = (x) =>
        this.setState({
            [x.target.name]: x.target.value,
        })

    //add todo
    addTodo = (title, id) => {
        axios
            .post(source, {
                title,
                complete: false,
                id,
            })
            .then((res) => {
                console.log(res.data)
                this.setState({ todos: [...this.state.todos, res.data] })
                console.log(this.state.todos)
            })
    }

    render() {
        return (
            <HashRouter basename="/">
                <Header />
                <div className="wrapper col-md-10 col-lg-6 col-xl-5">
                    <Route
                        exact
                        path="/"
                        render={(
                            props // 'exact' acts as a default page indicator
                        ) => (
                            <>
                                {" "}
                                {/*bringing in shadow element to wrap react tags up*/}
                                <div className="wrapper--title">
                                    <input
                                        type="text"
                                        name="listTitle"
                                        className="wrapper--input"
                                        placeholder="Your to-do list"
                                        onChange={this.listName}
                                    />
                                </div>
                                <Todos
                                    todos={this.state.todos}
                                    markComplete={this.markComplete}
                                    delTodo={this.delTodo}
                                />
                                <AddTodo addTodo={this.addTodo} />
                            </>
                        )}
                    />
                    <Route path="/about" component={About} />
                </div>
            </HashRouter>
        )
    }
}

export default App
