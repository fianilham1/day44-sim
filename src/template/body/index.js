import React, {Component} from 'react';
import {ListMahasiswa, RegisterPage, DetailProfile, ListPenerimaanPage} from "../../page";
import FormSubmitNilaiPage from "../../page/form-submit-nilai-page";
import DetailMahasiswaPage from "../../page/detail-mahasiswa-page";
import ListSKS from '../../page/list-sks-page';
import { ListDosen, ListJurusan } from "../../page";
import { Switch, Route} from 'react-router-dom'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSks :[ {idsks: 1, matkul:"Basic Java", jmlsks:"4", idjurusan: "IT", dosen:""},
                       {idsks: 2, matkul:"Basic PHP", jmlsks:"4", idjurusan: "IT", dosen:""},
                       {idsks: 3, matkul:"Basis Data", jmlsks:"3", idjurusan: "IT", dosen:""},
                       {idsks: 4, matkul:"Ilmu Nutrisi Ternak Dasar", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:""},
                       {idsks: 5, matkul:"Anatomi Ternak", jmlsks:"3", idjurusan: "PETERNAKAN", dosen:""},
                       {idsks: 6, matkul:"Ilmu Ternak Potong", jmlsks:"4", idjurusan: "PETERNAKAN", dosen:""},
                       {idsks: 7, matkul:"Biologi Seluler", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:""},
                       {idsks: 8, matkul:"Genetika", jmlsks:"4", idjurusan: "KEDOKTERAN", dosen:""},
                       {idsks: 9, matkul:"Ilmu Bedah", jmlsks:"3", idjurusan: "KEDOKTERAN", dosen:""} ],
            users: [],
            mhsEdit: {},
            listPenerimaan: [
                {
                    nama:"fian",
                    id:1,
                    nim:"112021",
                    ttl:"2020-03-13",
                    gender:"Male",
                    mobile:"999",
                    email:"ff@gmail.com",
                    alamat:"Jkt",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"IT",
                    strata:"S1",
                    foto:"foto.jpeg"
                },
                {
                    nama:"john",
                    id:2,
                    nim:"222021",
                    ttl:"2020-05-13",
                    gender:"Male",
                    mobile:"119",
                    email:"john@gmail.com",
                    alamat:"Sby",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"Peternakan",
                    strata:"S1",
                    foto:"foto.jpeg"
                },
                {
                    nama:"steve",
                    id:3,
                    nim:"332021",
                    ttl:"2020-11-01",
                    gender:"Male",
                    mobile:"555",
                    email:"ff@gmail.com",
                    alamat:"Mlg",
                    tahun:"Semester Ganjil 2020/2021",
                    jurusan:"Kedokteran",
                    strata:"S1",
                    foto:"foto.jpeg"
                }
            ],
            detailMhs: {},
            nilaiMhs:{},
            userEdit: {},
            mhsProfileDetail: {
                // nama:"fian",
                // nim:"112021",
                // ttl:"2020-03-13",
                // gender:"Male",
                // mobile:"999",
                // email:"ff@gmail.com",
                // alamat:"Jkt",
                // tahun:"Semester Ganjil 2020/2021",
                // jurusan:"IT",
                // strata:"S1",
                // foto:"foto_fian.jpg"
            }
        }
    }

    setNilaiMhs=(newNilai)=>{
        this.setState({
            nilaiMhs:newNilai
        })
    }

    setDetailMhs = detailMhs => {
        this.setState({
            detailMhs: detailMhs
        })
    }

    setProfileDetailMhs = detailMhs => {
        let mhsObject = {
            nama:detailMhs.nama,
            nim:detailMhs.nim,
            ttl:detailMhs.ttl,
            gender:detailMhs.gender,
            mobile:detailMhs.mobile,
            email:detailMhs.email,
            alamat:detailMhs.alamat,
            tahun:detailMhs.tahun,
            jurusan:detailMhs.jurusan,
            strata:detailMhs.strata,
            foto:detailMhs.foto
        }
        
        this.setState({
            mhsProfileDetail: mhsObject
        })
    }

    addNewListPenerimaanHandler = newMahasiswa => {
        // const {goToPage} = this.props
        const listPenerimaan = this.state.listPenerimaan
        const idNew = Math.max(...listPenerimaan.map(mhs => mhs.id)) + 1
        console.log("IDCEK",idNew)
        const mhsObject = {
            ...newMahasiswa,
            id:idNew,
            nim:`${idNew}${idNew}2021`
        }
        listPenerimaan.push(mhsObject)
        this.setState({
            listPenerimaan
        })


    }

    handlerEditMahasiswa = mhs => {
        this.setState({
            mhsEdit: mhs
        })
    }

    saveProfileHandler = newMahasiswa => {
        const oldMhs = this.state.listPenerimaan
        const nimMhs = oldMhs.map(mhs => mhs.nim).indexOf(newMahasiswa.nim)
        // console.log(idxUser);
        oldMhs.splice(nimMhs, 1, newMahasiswa)
        this.setState({
            listPenerimaan: oldMhs
        })
    }

    editlist = newData =>{
        this.setState({
            listSks:newData
        })
    }

    renderPage = () => {
        console.log("PROFILE SELECTED",this.state.mhsProfileDetail)
        const {currentPage, goToPage} = this.props
        const {users, userEdit} = this.state

        return (
        <Switch>
            <Route path="/list-dosen">
                <ListDosen />
            </Route>
            <Route path="/list-jurusan">
                <ListJurusan />
            </Route>
            <Route path="/form">
                <RegisterPage
                    goToPage={goToPage}
                    addNewListPenerimaan={this.addNewListPenerimaanHandler}
                    selectedUser={userEdit}
                    resetUserEdit={this.clearUserEdit}
                    saveUser={this.updateUsers}/>
            </Route>
            <Route path="/penerimaan">
                <ListPenerimaanPage 
                    listPenerimaan={this.state.listPenerimaan}
                    goToPage={goToPage}/>
            </Route>
            <Route path="/list-mahasiswa" exact >
                <ListMahasiswa
                    updateNilaiMhs={  this.state.mhsEdit  }
                    setDetailMhs={this.setDetailMhs}
                    setProfileDetailMhs={this.setProfileDetailMhs}
                    dataEditMhs={this.handlerEditMahasiswa}
                    gtp={goToPage}
                    dataMhsBaru={this.state.listPenerimaan}/>
            </Route>
            <Route path="/submit-nilai-mahasiswa">
                <FormSubmitNilaiPage setNilaiMhs={this.setNilaiMhs} dataEditMhs={this.state.mhsEdit} gtp={goToPage}/>
            </Route>
            <Route path="/detail-krs-mahasiswa">
                <DetailMahasiswaPage dataDetailMhs={this.state.detailMhs} gtp={goToPage}/>
            </Route>
            <Route path="/detail-profile-mahasiswa">
                <DetailProfile 
                    mhsProfileDetail={this.state.mhsProfileDetail} 
                    goToPage={goToPage} 
                    saveProfile={this.saveProfileHandler}/>
            </Route>
            <Route path="/sks">
            <ListSKS listSks={this.state.listSks} editlist={this.editlist}/>
            </Route>
        </Switch>
        )
        // if (currentPage === "list-dosen") return <ListDosen />;

        // if (currentPage === "list-jurusan") return <ListJurusan />;
        
        // if (currentPage === "form")
        //     return <RegisterPage
        //         goToPage={goToPage}
        //         addNewListPenerimaan={this.addNewListPenerimaanHandler}
        //         selectedUser={userEdit}
        //         resetUserEdit={this.clearUserEdit}
        //         saveUser={this.updateUsers}/>
       

        // if (currentPage === "penerimaan")
        //     return <ListPenerimaanPage 
        //     listPenerimaan={this.state.listPenerimaan}
        //     goToPage={goToPage}/>

        // if (currentPage === "list-mahasiswa")
        //     return <ListMahasiswa
        //         updateNilaiMhs={  this.state.mhsEdit  }
        //         setDetailMhs={this.setDetailMhs}
        //         setProfileDetailMhs={this.setProfileDetailMhs}
        //         dataEditMhs={this.handlerEditMahasiswa}
        //         gtp={goToPage}
        //         dataMhsBaru={this.state.listPenerimaan}/>

        // if (currentPage === "submit-nilai-mahasiswa")
        //     return <FormSubmitNilaiPage setNilaiMhs={this.setNilaiMhs} dataEditMhs={this.state.mhsEdit} gtp={goToPage}/>

        // if (currentPage === "detail-krs-mahasiswa")
        //     return <DetailMahasiswaPage dataDetailMhs={this.state.detailMhs} gtp={goToPage}/>
        
        // if (currentPage === "detail-profile-mahasiswa")
        //     return <DetailProfile mhsProfileDetail={this.state.mhsProfileDetail} goToPage={goToPage} saveProfile={this.saveProfileHandler}/>

        // if (currentPage === "sks")
        //     return <ListSKS listSks={this.state.listSks} editlist={this.editlist}/>

        // return ""

    }

    updateUsers = newUser => {
        console.log(newUser);

        if (newUser.id === "") {
            const oldUsers = this.state.users
            oldUsers.push({
                id: oldUsers.length ? Math.max(...oldUsers.map(user => user.id)) + 1 : 1,
                name: newUser.name,
                address: newUser.address
            })
            return this.setState({
                userList: oldUsers
            }, () => this.props.goToPage("list"))
        }

        const oldUsers = this.state.users
        const idxUser = oldUsers.map(user => user.id).indexOf(newUser.id)
        console.log(idxUser);
        oldUsers.splice(idxUser, 1, newUser)
        this.setState({
            userList: oldUsers
        }, () => this.props.goToPage("list"))
    }

    setUserEdit = userEdit => this.setState({userEdit}, () => this.props.goToPage("form"))

    clearUserEdit = () => this.setState({userEdit: {}})

    render() {
        console.log("detail state", this.state.detailMhs)
        return (
            this.renderPage()
        
        )
    }
}

export default Body
