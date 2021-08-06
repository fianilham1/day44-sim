import React, { Component } from 'react';
import {Table} from '../../component';
import "./penerimaan.css"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Penerimaan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listPenerimaan : []
         }
    }

    componentDidMount(){
        this.props.changePage("/penerimaan")
    }

    clickHandler = e => {
        console.log("click",e)
    }

    clickHandler2 = e => {
        console.log("click2",e)
    }

    render() { 

        if (!this.props.isLogedIn)
        return <Redirect to="/login" />
      
        const {listPenerimaan} = this.props
        const list = listPenerimaan.map((data,index)=> {
            return{
                nama:data.nama,
                nim:data.nim,
                jurusan:data.jurusan,
                strata:data.strata,
                tahun:data.tahun
                // clickEvent:{
                //     className1:this.clickHandler,
                //     className1:this.clickHandler2
                // }
            }
        })
        console.log("list fix",list)
       
        return ( 
            <div className="penerimaan-container">
                <Table 
                    className="customers-list"
                    dataList={list} 
                    headerName={["No","Nama","NIM","Jurusan","Strata","Tahun Masuk Akademik"]}
                    //NOTE : dataList.length must be headerName.length-1 (for cell number)
                />
                <Link to="/registrasi-mahasiswa">
                    <button className="backButtonToForm">Back to Form
                    </button>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Penerimaan);