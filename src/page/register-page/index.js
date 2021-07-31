import React, { Component } from 'react';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.selectedUser.id ? props.selectedUser.id : "",
            name: props.selectedUser.name ? props.selectedUser.name : "",
            address: props.selectedUser.address ? props.selectedUser.address : ""
        }
    }

    onSaveHandler = () => {
        const { id, name, address } = this.state
        this.props.saveUser({ id, name, address })
    }

    setValue = e => this.setState({ [e.target.name]: e.target.value })

    componentWillUnmount() {
        this.props.resetUserEdit()
    }

    render() {
        const { id, name, address } = this.state
        return (
            <table>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="hidden" value={id} />
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.setValue} />
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.setValue} />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        <button onClick={this.onSaveHandler}>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default RegisterPage;