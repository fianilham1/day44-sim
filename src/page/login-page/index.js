import React, { Component } from 'react';
// import "./register.css"
import { Input } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitStatus:false,
            isFocusUsername:false,
            isFocusPassword:false,
            username:'',
            password:''
          
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/login")
    }

    setValue = e => {
        this.setState({ 
        [e.target.name]: e.target.value
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

        
      
        // this.setState({
        //     submitStatus:true
        // })


    
        if(this.state.username!=="fian1@gmail.com" && this.state.password!=="fian123@") return Swal.fire({
            icon: 'error',
            title: 'Invalid username/password',
            showConfirmButton: false,
            timer: 1500
          })

        this.props.doLogin(this.state.username)
       
        return Swal.fire({
            icon: 'success',
            title: 'Login Sukses',
            showConfirmButton: false,
            timer: 1500
          })
      }

    
    render() {
        
        if (this.props.isLogedIn)
            return <Redirect to="/list-mahasiswa" />
        
        return (

            <div className="bg">
             <h1 className="titleRegister1" align="center">UNIVERSITY OF WIBU</h1>
             <h2 className="titleRegister" align="center">Login</h2>
             <form className="bgform">
                 <div className="formName">
                    <div className="input-name">Username</div>
                    <div className="input-name">Password</div>
                    <div className="input-name"></div>
                    
                 </div>
                <div className="formInput">

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
            
 

                <button class="submitButton" onClick={this.onSubmitHandler}>Sign in</button>
        
        </div>
    
            </form>        
           
        </div>
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin
})

const mapDispatchToProps = dispatch => ({
    doLogin: user => dispatch({ type: "LOGIN_OK", payload: { user } }),
    changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
