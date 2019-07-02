//used emmet 'rcc' command to generate file

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            textDecorationColor: this.props.todo.completed ? '#000' : 'none'
        }
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="task" > {/*calling method getStyle for dynamic styling*/}
                <div className="task--group" style={this.getStyle()}>
                    {/*event listener to make the checkbox change data based on markComplete method*/}
                    <input type="checkbox" className="task--input" onChange={this.props.markComplete.bind(this, id)}/>
                    {/*using the property of the object todo to get the data*/}
                    <li className="task--item">{title}</li>
                </div>
                <button className="task--button sr-only material-icons" onClick={this.props.delTodo.bind(this, id)}>
                    delete
                </button>
            </div>
        );
    }
}

//Defining prop types
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
};


export default TodoItem;