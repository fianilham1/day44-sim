import React, {Component} from 'react'
import {TableMahasiswa} from "../../component";

class Mahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMahasiswa:{

            },
            mahasiswas: [
                {
                    id: 1,
                    nama: "ridhwan",
                    nim: "2107001",
                    jurusan: "IT",
                    strata: "S1",
                    semester: 4,
                    mataKuliah: "Basic PHP",
                    nilai: "",
                    ipk: 3.15,
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
                    nilai: "",
                    ipk: 3.05,
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
                    nilai: "",
                    ipk: 3.35,
                    namaDosen: "Edi"
                }
            ]
        };
    }

    handleSubmitNilai=id=>{
        const oldMahasiswas = this.state.mahasiswas
        const idxUser = oldMahasiswas.map(user => user.id).indexOf(id)

        this.props.dataEditMhs(oldMahasiswas[idxUser])

        this.setState({
            editMahasiswa: oldMahasiswas[idxUser]
        })
    }

    handleUpdateSubmitNilai=e=>{
        e.preventDefault()

        let mahasiswaNew={
            id: e.target.id.value,
            nama: e.target.nama.value,
            nim: e.target.nim.value,
            jurusan: e.target.jurusan.value,
            strata: e.target.strata.value,
            semester: e.target.semester.value,
            mataKuliah: e.target.mataKuliah.value,
            nilai: e.target.nilai.value,
            ipk: e.target.ipk.value,
            namaDosen: e.target.namaDosen.value
        }
        const oldMahasiswas = this.state.mahasiswas
        const idxUser = oldMahasiswas.map(user => user.id).indexOf(mahasiswaNew.id)
        console.log(idxUser);
        oldMahasiswas.splice(idxUser, 1, mahasiswaNew)
        this.setState({
            mahasiswas: oldMahasiswas
        }, () => this.props.gtp("list-mahasiswa"))
    }

    render() {
        const {gtp}=this.props
        return (
            <TableMahasiswa handleSubmitNilai={this.handleSubmitNilai} gtp={gtp} dataMahasiswa={this.state.mahasiswas}/>
        );
    }
}

export default Mahasiswa;