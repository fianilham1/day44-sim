import React, { Component } from 'react';
import "./detail.css"
// import profileImg from "./profile.svg";
// import EditIcon from "@material-ui/icons/Edit";


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mhsProfileDetail:{},
            editStatus:false
         }
    }

    componentDidMount(){
        this.setState({
            mhsProfileDetail:this.props.mhsProfileDetail
        })
    }

    editHandler = e => {
        this.setState({
            editStatus:true
        })
    }

    saveHandler = e => {

        this.setState({
            editStatus:false
        },this.props.saveProfile(this.state.mhsProfileDetail))
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
        const {goToPage, mhsProfileDetail} = this.props
        const image = require(`../register-page/${mhsProfileDetail.foto}`).default
        return ( 
            <>
            <div className="detailbg">
               
                <h2>Detail Profile Mahasiswa </h2>
                
                <img className="avatar" src={image} alt=""/>
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
                    </div>
                    {this.renderPage()}
                </div>
                <button className="backButton" onClick={() => goToPage("penerimaan")}> Back to List </button>
            </div>
            </>
         );
    }
}
 
export default Detail;