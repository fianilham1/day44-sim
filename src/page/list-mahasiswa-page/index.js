import React, { Component } from 'react'
import {Mahasiswa} from "../../master";

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        const {gtp}=this.props
        return (
            <Mahasiswa dataEditMhs={this.props.dataEditMhs} gtp={gtp} />
        );
    }
}

export default ListMahasiswa;