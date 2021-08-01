import React, { Component } from 'react';
import {ListPenerimaan} from '../../component';

class Penerimaan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listPenerimaan : []
         }
    }
    render() { 
        // var min = 10000;
        // var max = 99999;
        // var num = Math.floor(Math.random() * (max - min + 1)) + min;
        const {listPenerimaan} = this.props
        const list = listPenerimaan.map((data,index)=> {
            return{
                name:data.name,
                nim:`${index+1}${index+1}2021`,
                dept:data.dept,
                strata:data.strata
            }
        })
        console.log("list fix",list)
        return ( 
            <>
            <ListPenerimaan dataMahasiswa={list}/>
            </>
         );
    }
}
 
export default Penerimaan;