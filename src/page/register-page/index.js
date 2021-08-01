import React, { Component } from 'react';
import "./register.css"
import { Input, Dialog } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboardCheck, faEnvelope, faVenusMars, faPhone, faMapMarkerAlt, faBook, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

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
            nama:'',
            ttl:'',
            gender:'',
            email:'',
            alamat:'',
            jurusan:'',
            tahun:'',
            strata:'',
            mobile:''   
        }
    }

    setValue = e => this.setState({ 
        [e.target.name]: e.target.value,
        submitStatus:false
     })

    componentWillUnmount() {
        this.props.resetUserEdit()
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

    onSubmitHandler =  e => {
        e.preventDefault();

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
        }

        this.setState({
            submitStatus:true
        })

        const stateArr = Object.keys(this.state)
        let emptyField = 0
        const state = stateArr.map((key,index)=> {
            if(this.state[key]==='') {
                emptyField++
            } 
            return ''
        })
    
        if(emptyField!==0) return alert("Silahkan Isi Semua Field")

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
        // console.log("NEWuser",this.state.date)
        return (
            <div className="bg">
             <h1 className="titleRegister" align="center">UNIVERSITY OF WIBU</h1>
             <h2 className="titleRegister" align="center">Form Registratis Mahasiswa</h2>
             <form className="bgform">
                 <div className="formName">
                    <div className="input-name">Nama</div>
                    <div className="input-name">Tanggal lahir</div>
                    <div className="input-name">Gender</div>
                    <div className="input-name">Email</div>
                    <div className="input-name">No. Telp</div>
                    <div className="input-name">Alamat</div>
                    <div className="input-name">Jurusan</div>
                    <div className="input-name">Tahun Akademik</div>
                    <div className="input-name">Strata</div>
                    
                 </div>
                <div className="formInput">

                <Input 
                    state={this.state} 
                    name="Nama" 
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={person} 
                    typeTx="text" 
                    handleChange={this.setValue}/>

                <Input 
                    state={this.state} 
                    name="Ttl" 
                    focus={this.focusHandler} 
                    icon={person} 
                    typeTx="date" 
                    handleChange={this.setValue}/>
                
                <Input 
                    state={this.state} 
                    name="Gender" 
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={genders} 
                    typeTx="radio"
                    handleChange={this.setValue}/>

                <Input 
                    state={this.state} 
                    name="Email" 
                    focus={this.focusHandler} 
                    blur={this.blurHandler} 
                    icon={envelope} 
                    typeTx="text" 
                    handleChange={this.setValue}/> 

            <Input 
                state={this.state} 
                name="Mobile" 
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={phone} 
                typeTx="text" 
                handleChange={this.setValue}/>

            <Input 
                state={this.state} 
                name="Alamat" 
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={map} 
                typeTx="text" 
                handleChange={this.setValue}/>

            <Input 
                state={this.state} 
                name="Jurusan" 
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={book} 
                typeTx="select" 
                dataArr = {["Select..","IT","Peternakan","Kedokteran"]}
                handleChange={this.setValue}/>

            <Input 
                state={this.state} 
                name="Tahun" 
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={check} 
                typeTx="select"  
                dataArr = {["Select..","Semester Genap 2020/2021","Semester Ganjil 2020/2021"]}
                handleChange={this.setValue}/>

            <Input 
                state={this.state} 
                name="Strata" 
                focus={this.focusHandler} 
                blur={this.blurHandler} 
                icon={graduate} 
                typeTx="select" 
                dataArr = {["Select..","S1","S2","S3"]} 
                handleChange={this.setValue}/>  
        </div>
            
            </form>
            <Dialog onClick={this.onSubmitHandler} /> 
            {/* <button className="button" onClick={this.onSubmitHandler} >Submit</button> */}
             {/* <table className="bgForm" width="700" border="0" align="center" cellPadding="0" cellSpacing="5">
                <thead>
                    <tr>
                        <td width="25%" height="60">&nbsp;</td>
                        <td><p>Form Registrasi Mahasiswa</p></td>
                        <td width="10%">&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Nama:</strong></td>
                        <td><input name="nama" type="text" size="35" onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Tanggal lahir:</strong></td>
                        <td><input name="ttl" type="date" type="number" size="35" required onChange={e => this.setState({[e.target.name]:e.target.value})
                        }/></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Jenis Kelamin:</strong></td>
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
                        <td><strong>Alamat:</strong></td>
                        <td><input name="alamat" type="text" size="35" required onChange={e => this.setState({[e.target.name]:e.target.value})}/></td>
                        <td>&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Jurusan:</strong></td>
                        <td><select id="slct2" name="jurusan" required onChange={e => this.setState({[e.target.name]:e.target.value})}>
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
                        <td><strong>Tahun Masuk:</strong></td>
                        <td><select id="slct2" name="tahun" required onChange={e => this.setState({[e.target.name]:e.target.value})}>
                                <option>Select..</option>
                                <option value="Semester Genap 2020/2021">Semester Genap 2020/2021</option>
                                <option value="Semester Ganjil 2020/2021">Semester Ganjil 2020/2021</option>
                                <option value="Semester Genap 2019/2020">Semester Genap 2019/2020</option>
                                <option value="Semester Ganjil 2019/2020">Semester Ganjil 2019/2020</option>    
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
                        <td><button className="button" type="reset">Reset</button></td>
                        <td><button className="button" onClick={this.onSubmitHandler}>Submit</button></td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                </table> */}
                
        {/* <div align="center">Start Your Impossible From Now</div> */}
      
        </div>
        );
    }
}

export default RegisterPage;
