import React, {Component} from 'react';
import {ListMahasiswa, RegisterMahasiswaPage, DetailProfile, ListPenerimaanPage, Login, SignUp, ListUser} from "../../page";
import FormSubmitNilaiPage from "../../page/form-submit-nilai-page";
import DetailMahasiswaPage from "../../page/detail-mahasiswa-page";
import ListSKS from '../../page/list-sks-page';
import { ListDosen, ListJurusan } from "../../page";
import { Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

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
            changeStatus:"getApiFirstTime",
            listPenerimaan: [
              
            ],
            detailMhs: {},
            userEdit: {},
            mhsProfileDetail: {
          
            }
        }
    }

    componentDidMount(){
        if(this.state.changeStatus==="getApiFirstTime"){
            this.props.getApiUsers()
            this.setState({
                changeStatus:"waitingAnyReq"
            })
        }
    }

    componentDidUpdate(){
        if(this.state.changeStatus==="doEdit" || this.state.changeStatus==="doDelete" ||  this.state.changeStatus==="doAdd"){
            console.log("^^^SERVICE START -> Wait... before get users api again")
            // const timeInterval = setInterval(() => { 
            //     console.log("Loading redux? =",this.props.loadingStatus)
            //     if(!this.props.loadingStatus){ //waiting until service api DONE(edit/add/delete)
            //         console.log("^^DONE -> get users api again to update")
            //         this.setState({
            //             changeStatus:"waitingAnyReq"
            //         })
            //         this.props.getApiUsers()
            //         clearInterval(timeInterval)
            //     }
            // }, 5000);
            setTimeout(() => { 
                this.props.getApiUsers()
                console.log("^^DONE -> get users api again to update")
                setTimeout(() => {  //delay re render userlist page
                    this.setState({
                        changeStatus:"waitingAnyReq"
                    })
                }, 7000);
            }, 8000);
        }
    }

    editUser = () => {
        this.setState({
            changeStatus:"doEdit"
        })
    }

    deleteUser = () => {
        this.setState({
            changeStatus:"doDelete"
        })
    }

    addNewUser = () => {
        this.setState({
            changeStatus:"doAdd"
        })
    }

    //Code Above is Related to Api ^
    //////////////////////////////////////////////////
    //Code Below is Others 


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
        const listMhs = this.props.mhsList
        const idNew = listMhs.length===0 ? 1 : Math.max(...listMhs.map(mhs => mhs.id)) + 1
        console.log("IDCEK",idNew)
        const mhsObject = {
            ...newMahasiswa,
            id:idNew,
            nim:`210700${idNew}`
        }
        listPenerimaan.push(mhsObject) //save to temp list for penerimaan new mhs only
        this.setState({
            listPenerimaan
        })
        this.props.addNewMhs(mhsObject) //save to master mahasiswa list in redux

    }

    setEditMahasiswa = mhs => {
        this.setState({
            mhsEdit: mhs
        })
    }

    editlist = newData =>{
        this.setState({
            listSks:newData
        })
    }

    getDetailMhsLogged = () => {
        const listMhs = this.props.mhsList
        const idxMhs = listMhs.map(mhs => mhs.email).indexOf(this.props.userLogin.username)
        // console.log("CEK LOGGED MHS",idxMhs)
        return listMhs[idxMhs]
    }

   

    renderPage = () => {
        console.log("PROFILE SELECTED",this.state.mhsProfileDetail)
        const {userEdit} = this.state

        return (
        <Switch>
             <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/sign-up">
                <SignUp addNewTriggerApi={this.addNewUser}/>
            </Route>
            <Route path="/list-user">
                <ListUser 
                editTriggerApi={this.editUser} 
                deleteTriggerApi={this.deleteUser}
                changeStatusFromBody={this.state.changeStatus}/>
            </Route>
            <Route path="/list-dosen">
                <ListDosen />
            </Route>
            <Route path="/list-jurusan">
                <ListJurusan />
            </Route>
            <Route path="/registrasi-mahasiswa">
                <RegisterMahasiswaPage
                    addNewListPenerimaan={this.addNewListPenerimaanHandler}/>
            </Route>
            <Route path="/penerimaan">
                <ListPenerimaanPage 
                    listPenerimaan={this.state.listPenerimaan}/>
            </Route>
            <Route path="/list-mahasiswa" exact >
                <ListMahasiswa
                    setDetailMhs={this.setDetailMhs}
                    setProfileDetailMhs={this.setProfileDetailMhs}
                    dataEditMhs={this.setEditMahasiswa}/>
            </Route>
            <Route path="/submit-nilai-mahasiswa">
                <FormSubmitNilaiPage dataEditMhs={this.state.mhsEdit} />
            </Route>
            <Route path="/detail-krs-mahasiswa">
                <DetailMahasiswaPage dataDetailMhs={this.props.userLogin.role==="Mahasiswa"? this.getDetailMhsLogged() : this.state.detailMhs} />
            </Route>
            <Route path="/detail-profile-mahasiswa">
                <DetailProfile 
                    mhsProfileDetail={this.state.mhsProfileDetail}/>
            </Route>
            <Route path="/list-sks">
                <ListSKS listSks={this.state.listSks} editlist={this.editlist}/>
            </Route>
        </Switch>
        )
        
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
        // console.log("detail state", this.state.detailMhs)
        console.log("current change STATUS", this.state.changeStatus)
        return (
            this.renderPage()
        
        )
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    mhsList: state.MhsList.mahasiswas,
    userLogin: state.Auth.userLogin,
    loadingStatus: state.UserList.loadingStatus
})

const mapDispatchToProps = dispatch => ({
    addNewMhs: newMhs => dispatch({ type: "ADD_NEW", payload:{newMhs} }),
    getApiUsers: () =>  dispatch({ type: "GETALLUSERS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Body);
