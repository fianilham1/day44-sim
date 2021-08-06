import React, { Component } from 'react';
// import "./register.css"
import { Input } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./login.css"

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceStatus:'',
            submitStatus:false,
            isFocusUsername:false,
            isFocusPassword:false,
            username:'',
            password:'',
            checkApi:false
          
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/login")

        if(this.props.userList.length===0){
            this.triggerRender()
        }
    }

    triggerRender = () => {
        this.setState({
            serviceStatus:"loading"
        })
        console.log("** delay re render of current page....")
        setTimeout(() => { 
            this.setState({
                serviceStatus:"reRender"
            })
            console.log("** delay re render DONE....")
        }, 10000);
      
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

        const userList = this.props.userList
        console.log("USERLIST MASUK?",userList)
        for(let i=0;i<userList.length;i++){
            
            if(this.state.username===userList[i].username && this.state.password===userList[i].password) {
                const userLogin = {
                    id:userList[i].id,
                    name:userList[i].name,
                    username:this.state.username,
                    role:userList[i].role
                }
                this.props.doLogin(userLogin)
                return Swal.fire({
                    icon: 'success',
                    title: 'Login Sukses',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        }
    
        return Swal.fire({
            icon: 'error',
            title: 'Invalid username/password',
            showConfirmButton: false,
            timer: 1500
          })
       
      }

    

    // renderLoading = () => {
    //     console.log("LOADING?",this.props.loadingStatus)
    //     setTimeout(myFunction, 3000)
      
    // }
     
    
    render() {
        // console.log("userlist",this.props.userList)
        // if (this.props.loadingStatus) return <div className="lds-ring">Loading<div></div><div></div><div></div></div>
        
        if (this.props.isLogedIn && this.props.userLogin.role==="Admin")
            return <Redirect to="/list-user" />
        
        if (this.props.isLogedIn && this.props.userLogin.role==="Mahasiswa")
            return <Redirect to="/detail-krs-mahasiswa" />
        
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
                    typeTx="email" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="Password" 
                    label="password"
                    focus={this.focusHandler} 
                    icon={unlock} 
                    typeTx="password" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <button  type="submit" className="submitButton" onClick={this.onSubmitHandler}>Sign in</button>

                <div className={`lds-ring modal ${this.state.serviceStatus==="loading" ? "loading":''}`}><div></div><div></div><div></div></div>
        
        </div>
    
            </form>        
           
        </div>
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userList: state.UserList.users,
    userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
    doLogin: user => dispatch({ type: "LOGIN_OK", payload: { user } }),
    changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
