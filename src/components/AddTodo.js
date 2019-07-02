import React, {Component} from 'react';

export class AddTodo extends Component {
    render() {
        return (
            <form className="form">
                <input className="form--input" type="text" name="title" placeholder="Add Todo..."/>
                <button className="form--button form--button__submit" type="submit" value="submit">Submit</button>
            </form>
        );
    }
}

export default AddTodo;