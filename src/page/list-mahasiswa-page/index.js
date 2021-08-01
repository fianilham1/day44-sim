import React, { Component } from 'react'
import {Mahasiswa} from "../../master";

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        const {gtp, dataEditMhs, setDetailMhs, updateNilaiMhs}=this.props
        return (
            <Mahasiswa updateNilaiMhs={updateNilaiMhs} setDetailMhs={setDetailMhs} dataEditMhs={dataEditMhs} gtp={gtp} />
        );
    }
}

export default ListMahasiswa;