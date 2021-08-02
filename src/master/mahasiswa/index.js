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
                    ttl:"2020-05-13",
                    gender:"Male",
                    mobile:"119",
                    email:"rid@gmail.com",
                    alamat:"Sby",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"IT",
                    strata:"S1",
                    foto:"foto.jpeg",
                    semester: 4,
                    ipk: 3.15,
                    krs: [
                        {
                            mataKuliah: "Basic PHP",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Abidin"
                        },
                        {
                            mataKuliah: "Basic Java",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Abidin"
                        },
                        {
                            mataKuliah: "Basic Phyton",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Abidin"
                        }
                    ]

                },
                {
                    id: 2,
                    nama: "alfa",
                    nim: "2107002",
                    ttl:"2020-05-13",
                    gender:"Male",
                    mobile:"119",
                    email:"alfa@gmail.com",
                    alamat:"Sby",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"Peternakan",
                    strata:"S1",
                    foto:"foto.jpeg",
                    semester: 4,
                    ipk: 3.05,
                    krs: [
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 4,
                            namaDosen: "Burhan"
                        },
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 4,
                            namaDosen: "Burhan"
                        },
                        {
                            mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 4,
                            namaDosen: "Burhan"
                        }
                    ]
                },
                {
                    id: 3,
                    nama: "johanes",
                    nim: "2107003",
                    ttl:"2020-05-13",
                    gender:"Male",
                    mobile:"119",
                    email:"alfa@gmail.com",
                    alamat:"Sby",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"Kedokteran",
                    strata:"S1",
                    foto:"foto.jpeg",
                    semester: 4,
                    ipk: 3.35,
                    krs: [
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Edi"
                        },
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Edi"
                        },
                        {
                            mataKuliah: "Ilmu Bedah",
                            nilai: 0,
                            nilaiHuruf: "",
                            jumlahSks: 3,
                            namaDosen: "Edi"
                        }
                    ]
                }
            ]
        };
    }

    componentDidMount() {
        const {updateNilaiMhs, gtp, dataMhsBaru} = this.props
        console.log("cekcek", updateNilaiMhs)
        const dataArr = Object.keys(updateNilaiMhs)
        console.log("data arr", dataArr)

        if(dataMhsBaru.length!==0){
            let oldMahasiswas = this.state.mahasiswas
            console.log("DARI PENERIMAAN",dataMhsBaru)
            dataMhsBaru.map((data,index)=>{
                let mhsObject =  {
                    ...data,
                    id: Math.max(...oldMahasiswas.map(mhs => mhs.id)) + 1,
                    semester: 1,
                    ipk: 0.00,
                    krs: [
                        // {
                        //     mataKuliah: "",
                        //     nilai: 0,
                        //     nilaiHuruf: "",
                        //     jumlahSks: 0,
                        //     namaDosen: ""
                        // }
                    ]
                }
                oldMahasiswas.push(mhsObject)
            })
            
            console.log("msh baru dr penerimaan",dataMhsBaru)
            this.setState({
                mahasiswas: oldMahasiswas
            })
        }

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

    handleDetail = (idMhsDetail,typeDetail) => {
        const {setDetailMhs,  setProfileDetailMhs} = this.props
        const id = idMhsDetail
        const mhsFound = this.findMhsById(id)
        console.log("mhs", mhsFound[0])
        if(typeDetail==="nilaiDetail"){
            setDetailMhs(mhsFound[0])
        }else{
            setProfileDetailMhs(mhsFound[0])
        }
      
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