import React, { Component } from 'react';
import "./register.css"

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: props.selectedUser.id ? props.selectedUser.id : "",
            // name: props.selectedUser.name ? props.selectedUser.name : "",
            // address: props.selectedUser.address ? props.selectedUser.address : ""
            name:'',
            date:'',
            gender:'',
            email:'',
            address:'',
            dept:'',
            strata:'',
            mobile:'',
            
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

    onResetHandler = () => {

    }

    onSubmitHandler =  e => {
        e.preventDefault();
        // const {editStatus, edittedUser} = this.props; 
        const editStatus=false

        if(!editStatus){ //for Register NEW USER
            let mahasiswaInputNew = {
                name:this.state.name,
                date:this.state.date,
                gender:this.state.gender,
                email:this.state.email,
                address:this.state.address,
                dept:this.state.dept,
                strata:this.state.strata,
                mobile:this.state.mobile,

            }
            console.log("NEWuser",mahasiswaInputNew)
            this.props.addNewListPenerimaan(mahasiswaInputNew)
            return alert("Register Success")

        } //for EDIT SALARY

            // let salaryInputNew = {
            //     id:edittedUser.id,
            //     [e.target[0].name]:parseInt(e.target[0].value),     //main Salary
            //     allowance:{                                         //if Manager   || if else
            //         [e.target[1].name]:parseInt(e.target[1].value), //Entertaint   || food
            //         [e.target[2].name]:parseInt(e.target[2].value), //  xxx        || transport
            //     }
            // }
           
            // this.props.onEditUser(salaryInputNew);
            // return Swal.fire({
            //         icon: 'success',
            //         title: 'Edit Salary is Success',
            //         showConfirmButton: false,
            //         timer: 1500
            //     })      
        
      }

    render() {
        // console.log("NEWuser",this.state.date)
        return (
            <>
             <h1 align="center">UNIVERSITY OF WIBU</h1>
             <table className="bgForm" width="700" border="0" align="center" cellPadding="0" cellSpacing="5">
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
                        <td><input name="name" type="text" size="35" onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>DOB:</strong></td>
                        <td><input name="date" type="date" type="number" size="35" required onChange={e => this.setState({date:e.target.value})
                        }/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Sex:</strong></td>
                        <td><input type="radio" name="gender" value="male" required onChange={e => this.setState({[e.target.name]:e.target.value})}/>Male
                            <input type="radio" name="gender" value="female" onChange={e => this.setState({[e.target.name]:e.target.value})}/>Female
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td><input name="email" type="email" size="35" required onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td><input name="address" type="text" size="35" required onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Department:</strong></td>
                        <td><select id="slct2" name="dept" required onChange={e => this.setState({[e.target.name]:e.target.value})}>
                                <option>Select..</option>
                                <option value="IT">IT</option>
                                <option value="Peternakan">Peternakan</option>
                                <option value="Kedokteran">Kedokteran</option>    
                            </select>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Strata:</strong></td>
                        <td><select id="slct2" name="strata" required onChange={e => this.setState({[e.target.name]:e.target.value})}>
                                <option>Select..</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S3">S3</option>    
                            </select>
                        </td>
                        <td>&nbsp;</td>
                    </tr>            
                    <tr>
                        <td><strong>Mobile Number:</strong></td>
                        <td><input name="mobile" type="text" size="35" onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><button onClick={this.onResetHandler} /></td>
                        <td><button className="button" onClick={this.onSubmitHandler}>Submit</button></td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                </table>
        <p align="center">Start Your Impossible From Now</p>
        </>
        );
    }
}

export default RegisterPage;
