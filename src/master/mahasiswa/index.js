import React, {Component} from 'react'
import {TableMahasiswa} from "../../component";

class Mahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mahasiswas: [
                {
                    id: 1,
                    nama: "ridhwan",
                    nim: "2107001",
                    jurusan: "IT",
                    strata: "S1",
                    semester: 4,
                    mataKuliah: "Basic PHP",
                    nilai: "A",
                    namaDosen: "Abidin"
                },
                {
                    id: 2,
                    nama: "fian",
                    nim: "2107002",
                    jurusan: "PETERNAKAN",
                    strata: "S1",
                    semester: 4,
                    mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                    nilai: "B+",
                    namaDosen: "Burhan"
                },
                {
                    id: 3,
                    nama: "johanes",
                    nim: "2107003",
                    jurusan: "KEDOKTERAN",
                    strata: "S1",
                    semester: 4,
                    mataKuliah: "Ilmu Bedah",
                    nilai: "B-",
                    namaDosen: "Edi"
                }
            ]
        };
    }

    render() {
        return (
            <TableMahasiswa dataMahasiswa={this.state.mahasiswas}/>
        );
    }
}

export default Mahasiswa;