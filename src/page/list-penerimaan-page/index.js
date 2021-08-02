import React, { Component } from 'react';
import {Table} from '../../component';
import "./penerimaan.css"

class Penerimaan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listPenerimaan : []
         }
    }

    clickHandler = e => {
        console.log("click",e)
    }

    clickHandler2 = e => {
        console.log("click2",e)
    }

    render() { 
        const {listPenerimaan} = this.props
        const list = listPenerimaan.map((data,index)=> {
            return{
                nama:data.nama,
                nim:`${index+1}${index+1}2021`,
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
             <button className="backButtonToForm" onClick={() => this.props.goToPage("form")}> Back to Form </button>
            </div>
         );
    }
}
 
export default Penerimaan;