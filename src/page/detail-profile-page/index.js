import React, { Component } from 'react';
import "./detail.css"
import profileImg from "./profile.svg";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class DetailProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mhsProfileDetail:{},
            editStatus:false,
            saveStatus:false
         }
        this.baseState=this.state
    }

    componentDidMount(){
        this.setState({
            mhsProfileDetail:this.props.mhsProfileDetail
        })
        this.props.changePage("/detail-profile-mahasiswa")
    }

    componentWillUnmount(){
        this.resetState()
    }

    resetState = () => {
        this.setState(this.baseState)
    }

    editHandler = e => {
        this.setState({
            editStatus:true
        })
    }

    saveHandler = e => {

        this.setState({
            editStatus:false,
            saveStatus:true
        })

         this.props.editProfile(this.state.mhsProfileDetail)

    }

    handleChange = e => {
        const dataCopy = this.state.mhsProfileDetail
        dataCopy[e.target.id]=e.target.value
        console.log("cek",dataCopy)
        this.setState({
            mhsProfileDetail:dataCopy
        })
    }

    renderPage = () => {
        console.log("editProfile",this.state.editStatus)
        const {mhsProfileDetail} = this.props;
        const NameArr = ["Nama","NIM","Tanggal Lahir","Gender","No. Telp","Email","Alamat","Tahun Masuk Akademik","Jurusan","Strata"]
        const dataArr = Object.keys(mhsProfileDetail)
        dataArr.splice(dataArr.length-1,1)
        return dataArr.map((key, index) => {

            if(this.state.editStatus && (key==="nama" || key==="mobile" || key==="email" || key==="alamat")) return (
                <div key={index} className="rowDetail"> 
                    <div className="cellDetail">{NameArr[index]}</div>
                    <div className="cellDetail ddot">:</div>
                    <input 
                        id={key} 
                        className="inputProfile" 
                        value={this.state.mhsProfileDetail[key]}
                        onChange={this.handleChange}/>
                </div>
            )

            return (
            <div key={index} className="rowDetail"> 
                <div className="cellDetail">{NameArr[index]}</div>
                <div className="cellDetail ddot">:</div>
                <div className="cellDetail">{mhsProfileDetail[key]}</div>
            </div>
            )               
        })
    }
    
    render() {     
        if (!this.props.isLogedIn)
        return <Redirect to="/login" />

        if (this.state.saveStatus)
            return <Redirect to="/list-mahasiswa" />
        
        const {mhsProfileDetail} = this.props
        let image = profileImg
        let defaultImg = true

        try{
            image = require(`../register-mhs-page/${mhsProfileDetail.foto}`).default;
            defaultImg = false
        }catch{
            console.log("img not found>> display default img")
        }
        
        return ( 
            <>
            <div className="detailbg">
               
                <h2>Detail Profile Mahasiswa </h2>
                
                <img className={`${defaultImg ? 'defAvatar' : 'avatar'}`} src={image} alt=""/>
                <button 
                        className={`editButton ${this.state.editStatus ? 'hide':''}`} 
                        onClick={this.editHandler}>
                        Edit
                </button>
                <button 
                        className={`saveButton ${this.state.editStatus ? '':'hide'}`} 
                        onClick={this.saveHandler}>
                        Save
                </button>
                <div className="detail-container">
                    <div className="rowDetail"> 
                        <div className="cellDetail header">Detail</div>
                        <div></div>
                        <div></div>
                    </div>
                    {this.renderPage()}
                </div>
                <Link to="/list-mahasiswa">
                    <button className="backButton">Back
                    </button>
                </Link>
              
            </div>
            </>
         );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogin: state.Auth.userLogin
  })
 
const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page }),
    editProfile: mhsProfileDetail => dispatch({ type: "EDIT_PROFILE", payload:{mhsProfileDetail} })
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailProfilePage);