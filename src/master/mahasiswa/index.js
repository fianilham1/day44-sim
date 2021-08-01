import React, {Component} from 'react'
import {TableMahasiswa} from "../../component";

class Mahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMahasiswa: {},
            mahasiswas: [
                {
                    id: 1,
                    nama: "ridhwan",
                    nim: "2107001",
                    jurusan: "IT",
                    strata: "S1",
                    semester: 4,
                    ipk: 3.15,
                    krs: [
                        {
                            mataKuliah: "Basic PHP",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 20,
                            namaDosen: "Abidin"
                        },
                        {
                            mataKuliah: "Basic Java",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 20,
                            namaDosen: "Abidin"
                        },
                        {
                            mataKuliah: "Basic Phyton",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 20,
                            namaDosen: "Abidin"
                        }
                    ]

                },
                {
                    id: 2,
                    nama: "fian",
                    nim: "2107002",
                    jurusan: "PETERNAKAN",
                    strata: "S1",
                    semester: 4,
                    ipk: 3.05,
                    krs: [
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 19,
                            namaDosen: "Burhan"
                        },
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 19,
                            namaDosen: "Burhan"
                        },
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 19,
                            namaDosen: "Burhan"
                        }
                    ]
                },
                {
                    id: 3,
                    nama: "johanes",
                    nim: "2107003",
                    jurusan: "KEDOKTERAN",
                    strata: "S1",
                    semester: 4,
                    ipk: 3.35,
                    krs: [
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 18,
                            namaDosen: "Edi"
                        },
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 18,
                            namaDosen: "Edi"
                        },
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 18,
                            namaDosen: "Edi"
                        }
                    ]
                }
            ]
        };
    }

    componentDidMount() {
        const {updateNilaiMhs, gtp} = this.props
        console.log("cekcek", updateNilaiMhs)
        const dataArr = Object.keys(updateNilaiMhs)
        console.log("data arr", dataArr)
        if (dataArr.length!==0) {
            let mahasiswaNew = updateNilaiMhs

            let oldMahasiswas = this.state.mahasiswas
            const idxUser = oldMahasiswas.map(user => user.id).indexOf(mahasiswaNew.id)
            console.log(idxUser);
            oldMahasiswas.splice(idxUser, 1, mahasiswaNew)

            this.setState({
                mahasiswas: oldMahasiswas
            })
        } else {

        }
    }


    handleUpdateSubmitNilai = e => {
        e.preventDefault()

        let mahasiswaNew = {
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

    findMhsById = idToSearch => {
        return this.state.mahasiswas.filter(item => {
            return item.id == idToSearch
        })
    }

    handleDetail = idMhsDetail => {
        const {setDetailMhs} = this.props
        const id = idMhsDetail
        const mhsFound = this.findMhsById(id)
        console.log("mhs", mhsFound[0])
        setDetailMhs(mhsFound[0])
    }

    handleSubmitNilai = id => {
        const {dataEditMhs} = this.props
        const mhsFound = this.findMhsById(id)
        console.log("mhs edit", mhsFound[0])
        dataEditMhs(mhsFound[0])
    }

    render() {
        const {gtp} = this.props
        return (
            <TableMahasiswa
                handleDetail={this.handleDetail}
                handleSubmitNilai={this.handleSubmitNilai}
                gtp={gtp}
                dataMahasiswa={this.state.mahasiswas}
            />
        );
    }
}

export default Mahasiswa;