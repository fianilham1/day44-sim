import React, { Component } from 'react';
// import "./register.css"
import { Input } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../config/firebase';

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />
const person = <FontAwesomeIcon icon={faUser} />


class SignUpPageFirebase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin:false,
            submitStatus:false,
            isFocusName:false,
            isFocusUsername:false,
            isFocusPassword:false,
            isFocusConfirmPassword:false,
            isFocusRole:true,
            name:'',
            username:'',
            password:'',
            confirmpassword:'',
            role:''
          
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/sign-up")
        this.props.firebase.currentLoggedFirebaseUser(user=>{
            if(user) {
              this.setState({
                isLogin:true
              })
            }else{
           
            }
          })
    }

    componentWillUnmount(){
        this.setState({
            isLogin:false
        })
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

        // if(this.state.name==='' || this.state.username==='' || this.state.password==='') return Swal.fire({
        //     icon: 'error',
        //     title: 'Semua Field Harus diisi',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        // if(this.state.password!==this.state.confirmpassword) return Swal.fire({
        //     icon: 'error',
        //     title: 'Password Is Not Match',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        // const user = {
        //     name:this.state.name,
        //     username:this.state.username,
        //     password:this.state.password,
        //     role:"Admin"
        // }
        // this.resetForm()
        // const userList = this.props.userList
        // for(let i=0;i< userList.length;i++){
        //     if(user.username===userList[i].username){
        //         return Swal.fire({
        //             icon: 'error',
        //             title: 'Username already exist',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        // }

        const { username, password } = this.state
        if (username !== "" && password !== "") {
            this.props.firebase
                .createFirebaseUser({email:username, password})
                .then(res => console.log("res:", res))
                .catch(err => 
                    Swal.fire({
                        icon: 'error',
                        title: err.message,
                        showConfirmButton: false,
                        timer: 1500
                      }))
        } else Swal.fire({
            icon: 'error',
            title: 'Fill All Fields',
            showConfirmButton: false,
            timer: 1500
          })
        // return Swal.fire({
        //     icon: 'success',
        //     title: 'Sign Up Sukses',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
      }

    
    render() {

        // if (!this.state.isLogin)
        //     return <Redirect to="/login" />
        
    
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

                {/* <Input 
                    state={this.state} 
                    name="Role" 
                    label="Role"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={person} 
                    typeTx="select" 
                    dataArr = {["Select..","Admin","Mahasiswa","Dosen"]} 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>   */}

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

                <Input 
                    state={this.state} 
                    name="ConfirmPassword" 
                    label="Confirm password"
                    focus={this.focusHandler} 
                    icon={unlock} 
                    typeTx="password" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <button type="submit" className="submitButton" onClick={this.onSubmitHandler}>Sign Up</button>
        
        </div>
    
            </form>        
           
        </div>
        );
    }
}

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
            {firebase => <SignUpPageFirebase {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}

// const mapStateToProps = state => ({
//     isLogedIn: state.Auth.statusLogin,
//     userLogin: state.Auth.userLogin,
//     userList: state.UserList.users
// })


const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(SignUpPage);
