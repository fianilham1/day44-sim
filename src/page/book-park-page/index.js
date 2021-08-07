import React, { Component } from 'react';
import "./book-park.css"
import { Input, Dialog } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboardCheck, faEnvelope, faVenusMars, faPhone, faMapMarkerAlt, faBook, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { FirebaseContext } from '../../config/firebase';

const graduate = <FontAwesomeIcon icon={faUserGraduate} />
const book = <FontAwesomeIcon icon={faBook} />
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const phone = <FontAwesomeIcon icon={faPhone} />
const genders = <FontAwesomeIcon icon={faVenusMars} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const person = <FontAwesomeIcon icon={faUser} />
const check = <FontAwesomeIcon icon={faClipboardCheck} />

class BookParkFirebase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: props.selectedUser.id ? props.selectedUser.id : "",
            // name: props.selectedUser.name ? props.selectedUser.name : "",
            // address: props.selectedUser.address ? props.selectedUser.address : ""
            isLogin:false,
            submitStatus:false,
            isFocusName:false,
            isFocusEmail:false,
            isFocusCarMerk:true, 
            isFocusCarPlate:true,
            isFocusDateIn:true,
            isFocusTimeIn:true,
            isFocusParkNumber:true,
            name:'',
            email:'',
            password:'customer',
            carmerk:'',
            carplate:'',
            datein:'',
            timein:'',
            parknumber:''
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/book-park")
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
        this.resetSubmitStatus()
        this.setState({
            isLogin:false
        })
    }

    resetSubmitStatus = () => {
        this.setState(this.baseSate)
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
        this.resetSubmitStatus()
        const {email,name, password, carmerk, carplate, datein, timein, parknumber} = this.state

       
        if (email !== "" && name !== "" && carmerk !== "" && carplate !== "" && datein !== "" && timein !== "" && parknumber !== "") {
            this.props.firebase.addDataToFirestore().add({
                Email: email,
                Name: name,
                CarMerk: carmerk,
                CarPlate: carplate,
                DateIn: datein,
                TimeIn: timein,
                ParkNumber: parknumber
            })
            .then((docRef) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                  })
            });
        } else Swal.fire({
            icon: 'error',
            title: 'Fill All Fields',
            showConfirmButton: false,
            timer: 1500
          })
      }

    
    render() {

        // if (!this.state.isLogin)
        // return <Redirect to="/login" />

        return (

            <div className="bg">
             <h1 className="titleRegister1" align="center">MALL OF WIBU</h1>
             <h2 className="titleRegister" align="center">Book Park</h2>
             <form className="bgform">
                 <div className="formName">
                    <div className="input-name">Name</div>
                    <div className="input-name">Email</div>
                    <div className="input-name">Cark Merk</div>
                    <div className="input-name">Car Plate</div>
                    <div className="input-name">Date In</div>
                    <div className="input-name">Time In</div>
                    <div className="input-name">Park Number</div>
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
                    name="Email" 
                    label="Email"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={person} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>
            
                <Input 
                    state={this.state} 
                    name="CarMerk" 
                    label="Cark Merk"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={envelope} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/> 

                <Input 
                    state={this.state} 
                    name="CarPlate" 
                    label="Cark Plate"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={envelope} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>   

                <Input 
                    state={this.state} 
                    name="DateIn" 
                    label="Date In"
                    focus={this.focusHandler} 
                    icon={person} 
                    typeTx="date" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="TimeIn" 
                    label="Time In"
                    focus={this.focusHandler} 
                    icon={person} 
                    typeTx="time" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>
      
                <Input 
                    state={this.state} 
                    name="ParkNumber" 
                    label="Park Number"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={book} 
                    typeTx="select" 
                    dataArr = {["Select..","Park5-A","Park2-B","Park1-C"]}
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

            <button className="bookButton" onClick={this.onSubmitHandler}> Book Park </button>
        </div>
    
            </form>        
           
        </div>
        );
    }
}

class BookPark extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
            {firebase => <BookParkFirebase {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
// const mapStateToProps = state => ({
//     isLogedIn: state.Auth.statusLogin,
//     userLogin: state.Auth.userLogin
// })

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(BookPark);
