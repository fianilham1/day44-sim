import React, { Component } from 'react'
import {Mahasiswa} from "../../master";

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        const {dataMhsBaru, gtp, dataEditMhs, setDetailMhs, updateNilaiMhs,  setProfileDetailMhs}=this.props
        return (
            <Mahasiswa dataMhsBaru={dataMhsBaru} updateNilaiMhs={updateNilaiMhs} setDetailMhs={setDetailMhs}  setProfileDetailMhs={ setProfileDetailMhs} dataEditMhs={dataEditMhs} gtp={gtp} />
        );
    }
}

export default ListMahasiswa;