import React, { Component } from 'react';
import TabelSks from '../../component/tabel-sks';


class MasterSKS extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // listSks :[ {idsks: 1, matkul:"Basic Java", jmlsks:"4", idjurusan: "IT", dosen:""},
            //            {idsks: 2, matkul:"Basic PHP", jmlsks:"4", idjurusan: "IT", dosen:""},
            //            {idsks: 3, matkul:"Basis Data", jmlsks:"3", idjurusan: "IT", dosen:""},
            //            {idsks: 4, matkul:"Ilmu Nutrisi Ternak Dasar", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:""},
            //            {idsks: 5, matkul:"Anatomi Ternak", jmlsks:"3", idjurusan: "PETERNAKAN", dosen:""},
            //            {idsks: 6, matkul:"Ilmu Ternak Potong", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:""},
            //            {idsks: 7, matkul:"Biologi Seluler", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:""},
            //            {idsks: 8, matkul:"Genetika", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:""},
            //            {idsks: 9, matkul:"Ilmu Bedah", jmlsks:"3", idjurusan: "KEDOKTERAN", dosen:""} ]
         }
    }

    // editlist = newData =>{
    //     this.setState({
    //         listSks:newData
    //     })
    // }

    renderedMaster= () =>{
        const {editlist, listSks} = this.props
        return <TabelSks listSks={listSks} editlist={editlist}/>
    }

    render() { 
        return ( 
            <>
            {this.renderedMaster()}
            </>
         );
    }
}
 
export default MasterSKS;