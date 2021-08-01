import React, { Component } from 'react';

import {RegisterPage, ListPenerimaanPage, DetailProfile} from "../../page";
import ListSKS from '../../page/list-sks-page';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userEdit: {},
            mhsProfileDetail: {
                nama:"fian",
                nim:"112021",
                ttl:"2020-03-13",
                gender:"Male",
                mobile:"999",
                email:"ff@gmail.com",
                alamat:"Jkt",
                tahun:"Semester Ganjil 2020/2021",
                jurusan:"IT",
                strata:"S1",
                foto:"foto_fian.jpg"
            },
            listPenerimaan:[]
        }
    }

    addNewListPenerimaanHandler = newMahasiswa => {
        // const {goToPage} = this.props
        const listPenerimaan = this.state.listPenerimaan
        listPenerimaan.push(newMahasiswa)
        this.setState({
            listPenerimaan
        },console.log("listpenerimaan",this.state.listPenerimaan))
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

    renderPage = () => {
        const { currentPage, goToPage } = this.props
        const { userEdit } = this.state

        if (currentPage === "form")
            return <RegisterPage addNewListPenerimaan={this.addNewListPenerimaanHandler} selectedUser={userEdit} resetUserEdit={this.clearUserEdit} saveUser={this.updateUsers} />

        if (currentPage === "penerimaan")
            return <ListPenerimaanPage listPenerimaan={this.state.listPenerimaan} />

        if (currentPage === "detail-profile")
            return <DetailProfile mhsProfileDetail={this.state.mhsProfileDetail} goToPage={goToPage} saveProfile={this.saveProfileHandler}/>

        if (currentPage === "sks")
            return <ListSKS />

        return ""
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

    setUserEdit = userEdit => this.setState({ userEdit }, () => this.props.goToPage("form"))

    clearUserEdit = () => this.setState({ userEdit: {} })

    render() {
        return (
            this.renderPage()
        );
    }
}

export default Body;