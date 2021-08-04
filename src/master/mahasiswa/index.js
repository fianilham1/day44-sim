import React, {Component} from 'react'
import {TableMahasiswa} from "../../component";
import { connect } from 'react-redux';
// import { Redirect } from "react-router-dom"

class Mahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMahasiswa: {},
            mahasiswas: props.mhsList
        };
    }

    // resetsubmitNilaiStatus = () => {
    //     this.setState({

    //     })
    // }


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
        })
    }

    findMhsById = idToSearch => {
        return this.state.mahasiswas.filter(item => {
            return item.id === idToSearch
        })
    }

    handleDetail = (idMhsDetail,typeDetail) => {
        const {setDetailMhs,  setProfileDetailMhs} = this.props
        const id = idMhsDetail
        const mhsFound = this.findMhsById(parseInt(id))
       
        if(typeDetail==="nilaiDetail"){
            setDetailMhs(mhsFound[0])
        }else{
            setProfileDetailMhs(mhsFound[0])
        }
      
    }

    handleSubmitNilai = id => {
        const {dataEditMhs} = this.props
        const mhsFound = this.findMhsById(parseInt(id))
        console.log("mhs edit", mhsFound[0])
        dataEditMhs(mhsFound[0])
    }

    render() {
       console.log("mastermahasiswa",this.state.mahasiswas)
        // if (!this.props.isLogedIn)
        //     return <Redirect to="/list" />

        return (
            <TableMahasiswa
                handleDetail={this.handleDetail}
                handleSubmitNilai={this.handleSubmitNilai}
                dataMahasiswa={this.state.mahasiswas}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogedIn: state.Auth.username,
    mhsList: state.MhsList.mahasiswas
})

// export default Detail;
export default connect(mapStateToProps)(Mahasiswa);