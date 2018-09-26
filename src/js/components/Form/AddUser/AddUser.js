import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {addUser} from './../../../actions/addUserAction';

class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.homeProps.dispatch(addUser(this.props._this, this.state.value));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="get">
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddUser;