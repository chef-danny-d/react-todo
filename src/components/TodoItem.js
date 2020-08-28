import React, { Component } from "react"
import PropTypes from "prop-types"
import { Trash2 } from "react-feather"

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            textDecorationColor: this.props.todo.completed ? "#000" : "none",
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div className="task" data-id={id}>
                {/*calling method getStyle for dynamic styling*/}
                <div className="task--group" style={this.getStyle()}>
                    {/*event listener to make the checkbox change data based on markComplete method*/}
                    {this.props.todo.completed ? (
                        <input
                            type="checkbox"
                            className="task--input"
                            onChange={this.props.markComplete.bind(this, id)}
                            checked={true}
                        />
                    ) : (
                        <input
                            type="checkbox"
                            className="task--input"
                            onChange={this.props.markComplete.bind(this, id)}
                        />
                    )}

                    {/*using the property of the object todo to get the data*/}
                    <li className="task--item">{title}</li>
                </div>
                <button
                    className="task--button"
                    onClick={this.props.delTodo.bind(this, id)}
                >
                    <Trash2 />
                </button>
            </div>
        )
    }
}

//Defining prop types
TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem
