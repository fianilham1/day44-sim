import React, { Component } from 'react';
import "./register.css"
import { Input, Dialog } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboardCheck, faEnvelope, faVenusMars, faPhone, faMapMarkerAlt, faBook, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

const graduate = <FontAwesomeIcon icon={faUserGraduate} />
const book = <FontAwesomeIcon icon={faBook} />
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const phone = <FontAwesomeIcon icon={faPhone} />
const genders = <FontAwesomeIcon icon={faVenusMars} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const person = <FontAwesomeIcon icon={faUser} />
const check = <FontAwesomeIcon icon={faClipboardCheck} />

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // id: props.selectedUser.id ? props.selectedUser.id : "",
            // name: props.selectedUser.name ? props.selectedUser.name : "",
            // address: props.selectedUser.address ? props.selectedUser.address : ""
            submitStatus:false,
            isFocusNama:false,
            isFocusTtl:true,
            isFocusGender:true,
            isFocusEmail:false,
            isFocusAlamat:false,
            isFocusJurusan:true,
            isFocusStrata:true,
            isFocusTahun:true,
            isFocusMobile:false,
            isFocusFoto:true,
            nama:'',
            ttl:'',
            gender:'',
            email:'',
            alamat:'',
            jurusan:'',
            tahun:'',
            strata:'',
            mobile:'',
            foto:''   
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/registrasi-mahasiswa")
    }

    componentWillUnmount(){
        this.resetSubmitStatus()
    }

    resetSubmitStatus = () => {
        this.setState({
            submitStatus:false
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

        const myArr = this.state.foto.split("\\");
        let mahasiswaInputNew = {
            nama:this.state.nama,
            ttl:this.state.ttl,
            gender:this.state.gender,
            email:this.state.email,
            alamat:this.state.alamat,
            jurusan:this.state.jurusan,
            tahun:this.state.tahun,
            strata:this.state.strata,
            mobile:this.state.mobile,
            foto:myArr[myArr.length-1]
        }

      
        this.setState({
            submitStatus:true
        })

        const stateArr = Object.keys(this.state)
        let emptyField = 0
        stateArr.map((key,index)=> {
            if(this.state[key]==='') {
                emptyField++
            } 
            return ''
        })
    
        if(emptyField!==0) return Swal.fire({
            icon: 'error',
            title: 'Silahkan Isi Semua Field',
            showConfirmButton: false,
            timer: 3500
          })

        console.log("NEWuser",mahasiswaInputNew)
        this.props.addNewListPenerimaan(mahasiswaInputNew)
       
        return Swal.fire({
            icon: 'success',
            title: 'Register Sukses',
            showConfirmButton: false,
            timer: 1500
          })
      }

    
    render() {

        if (!this.props.isLogedIn)
        return <Redirect to="/login" />

        if (this.props.userLogin==="Mahasiswa")
        return <Redirect to="/detail-krs-mahasiswa" />

        if(this.state.submitStatus) return <Redirect to="/penerimaan"/>

        return (

            <div className="bg">
             <h1 className="titleRegister1" align="center">UNIVERSITY OF WIBU</h1>
             <h2 className="titleRegister" align="center">Form Registratis Mahasiswa</h2>
             <form className="bgform">
                 <div className="formName">
                    <div className="input-name">Nama Lengkap</div>
                    <div className="input-name">Tanggal lahir</div>
                    <div className="input-name">Gender</div>
                    <div className="input-name">Email</div>
                    <div className="input-name">No. Telp</div>
                    <div className="input-name">Alamat</div>
                    <div className="input-name">Jurusan</div>
                    <div className="input-name">Tahun Akademik</div>
                    <div className="input-name">Strata</div>
                    <div className="input-name">Foto Resmi</div>
                    <div className="input-name"></div>
                    
                 </div>
                <div className="formInput">

                <Input 
                    state={this.state} 
                    name="Nama" 
                    label="Nama"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={person} 
                    typeTx="text" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="Ttl" 
                    label="DOB"
                    focus={this.focusHandler} 
                    icon={person} 
                    typeTx="date" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>
                
                <Input 
                    state={this.state} 
                    name="Gender" 
                    label="Gender"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={genders} 
                    typeTx="radio"
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/>

                <Input 
                    state={this.state} 
                    name="Email" 
                    label="Email"
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={envelope} 
                    typeTx="email" 
                    handleChange={this.setValue}
                    submitStatus={this.state.submitStatus}/> 

            <Input 
                state={this.state} 
                name="Mobile" 
                label="No. Hp"
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={phone} 
                typeTx="text" 
                handleChange={this.setValue}
                submitStatus={this.state.submitStatus}/>

            <Input 
                state={this.state} 
                name="Alamat" 
                label="Kota"
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={map} 
                typeTx="text" 
                handleChange={this.setValue}
                submitStatus={this.state.submitStatus}/>

            <Input 
                state={this.state} 
                name="Jurusan" 
                label="Jurusan"
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={book} 
                typeTx="select" 
                dataArr = {["Select..","IT","Peternakan","Kedokteran"]}
                handleChange={this.setValue}
                submitStatus={this.state.submitStatus}/>

            <Input 
                state={this.state} 
                name="Tahun" 
                label="Tahun Masuk"
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={check} 
                typeTx="select"  
                dataArr = {["Select..","Semester Genap 2020/2021","Semester Ganjil 2020/2021"]}
                handleChange={this.setValue}
                submitStatus={this.state.submitStatus}/>

            <Input 
                state={this.state} 
                name="Strata" 
                label="Strata"
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={graduate} 
                typeTx="select" 
                dataArr = {["Select..","S1","S2","S3"]} 
                handleChange={this.setValue}
                submitStatus={this.state.submitStatus}/>  

            <Input 
                state={this.state} 
                name="Foto" 
                focus={this.focusHandler} 
                icon={person} 
                typeTx="file" 
                handleChange={this.setValue}
                accept="image/*"
                submitStatus={this.state.submitStatus}/>  

            <Dialog onClick={this.onSubmitHandler}/>
        </div>
    
            </form>        
           
        </div>
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
