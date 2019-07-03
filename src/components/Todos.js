import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{
    render() {
        return this.props.todos.map((todo) => ( //we are using .map as a loop to run through our array of items
            //using the object todo to get the data of each one from the array
            //passing todo as a property
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    }
}

//Defining prop types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default Todos;
