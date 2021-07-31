import React, { Component } from 'react';
import "./register.css"

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
            <>
            <form>
                <table className="bgForm" width="700" border="0" align="center" cellpadding="0" cellspacing="5">
                <thead>
                    <tr>
                        <td width="25%" height="60">&nbsp;</td>
                        <td><p>Student Registration Form</p></td>
                        <td width="10%">&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td><input name="name" type="text" size="35"/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>DOB:</strong></td>
                        <td><input type="date" type="number" size="35" required/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Sex:</strong></td>
                        <td><input type="radio" name="gender" value="male" required/>Male
                            <input type="radio" name="gender" value="female"/>Female
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td><input name="Email" type="email" size="35" required/></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td><input name="name2" type="text" size="35" required/></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>School:</strong></td>
                        <td><select id="slct1" name="slct1" >
                                <option>Select..</option>
                                <option value="Medicine and Health Sciences">Medicine and Health Sciences</option>
                                <option value="Law">Law</option>
                                <option value="Music and Performing Arts">Music and Performing Arts</option>
                                <option value="Business and Economics">Business and Economics</option>
                                <option value="Science,Engineering and Technology">Science,Engineering and Technology</option>
                                <option value="Education">Education</option>
                                <option value="Pharmacy">Pharmacy</option>
                            </select>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Department:</strong></td>
                        <td><select id="slct2" name="slct2"  required >
                                <option>Select..</option>
                                <option value="Teknik Mesin">Teknik Mesin</option>
                                <option value="Teknik Elektro">Teknik Elektro</option>
                                <option value="Teknik Kimia">Teknik Kimia</option>    
                                <option value="Manajemen Bisnis">Manajemen Bisnis</option>
                            </select>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Course:</strong></td>
                    <td> <select id="slct3" name="slct3" required ></select></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    
                    <tr>
                        <td><strong>Mobile Number:</strong></td>
                        <td><input name="Mobile no. name3" type="text" size="35"/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><input type="reset" /></td>
                        <td><input type="submit" value="Submit"  onsubmit={this.submitHandler}/></td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                </table>
        </form>
        <p align="center">Start Your Impossible From Now</p>
        </>
        );
    }
}

export default RegisterPage;
