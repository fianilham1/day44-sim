import React, { Component } from 'react';
// import "./register.css"
import { Input } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />
const person = <FontAwesomeIcon icon={faUser} />


class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitStatus:false,
            isFocusName:false,
            isFocusUsername:false,
            isFocusPassword:false,
            isFocusConfirmPassword:false,
            name:'',
            username:'',
            password:'',
            confirmpassword:''
          
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/signup")
    }

    setValue = e => {
        this.setState({ 
        [e.target.name]: e.target.value,
        submitStatus:false
     })
    }


    focusHandler = e => {
        this.setState({[e.target.id]:true})
    }  
    blurHandler = e => {
        const value = e.target.value;
        if(value===''){
            this.setState({[e.target.id]:false})
        }       
    }

    resetForm = () => {
        this.setState(this.baseSate)
    }

    onSubmitHandler =  e => {
        e.preventDefault();

        this.setState({
            submitStatus:true
        })

        if(this.state.name==='' || this.state.username==='' || this.state.password==='') return Swal.fire({
            icon: 'error',
            title: 'Semua Field Harus diisi',
            showConfirmButton: false,
            timer: 1500
          })
    
        if(this.state.password!==this.state.confirmpassword) return Swal.fire({
            icon: 'error',
            title: 'Password Is Not Match',
            showConfirmButton: false,
            timer: 1500
          })

        const user = {
            name:this.state.name,
            username:this.state.username,
            password:this.state.password
        }
        this.props.doSignUp(user)
       
        return Swal.fire({
            icon: 'success',
            title: 'Sign Up Sukses',
            showConfirmButton: false,
            timer: 1500
          })
      }

    
    render() {
        
        // if (this.props.isLogedIn)
        //     return <Redirect to="/list-mahasiswa" />
        
        return (

            <div className="bg">
             <h1 className="titleRegister1" align="center">UNIVERSITY OF WIBU</h1>
             <h2 className="titleRegister" align="center">Sign Up User</h2>
             <form className="bgform">
                 <div className="formName">
                    <div className="input-name">Name</div>
                    <div className="input-name">Username</div>
                    <div className="input-name">Password</div>
                    <div className="input-name">Confirm Password</div>
                    <div className="input-name"></div>
                    
                 </div>
                <div className="formInput">

                <Input 
                    state={this.state} 
                    name="Name" 
                    label="Name"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={person} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="Username" 
                    label="Username"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={envelope} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="Password" 
                    label="password"
                    focus={this.focusHandler} 
                    icon={unlock} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="ConfirmPassword" 
                    label="Confirm password"
                    focus={this.focusHandler} 
                    icon={unlock} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>
            
                <button class="submitButton" onClick={this.onSubmitHandler}>Sign Up</button>
        
        </div>
    
            </form>        
           
        </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    doSignUp: user => dispatch({ type: "SIGNUP_OK", payload: { user } }),
    changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(SignUpPage);
