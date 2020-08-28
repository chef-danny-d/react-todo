import React, { Component } from "react"
import PropTypes from "prop-types"
import { Plus } from "react-feather"
import { v4 as uuidv4 } from "uuid"

export class AddTodo extends Component {
    state = {
        title: "",
        id: "",
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.title !== "") {
            console.log(uuidv4())
            this.props.addTodo(this.state.title)
            this.setState({ title: "", id: uuidv4() })
        } else {
            return null
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <Plus className="form--icon" />
                <input
                    className="form--input"
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button
                    className="form--button form--button__submit"
                    type="submit"
                    value="submit"
                >
                    Submit
                </button>
            </form>
        )
    }
}

//Defining prop types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
