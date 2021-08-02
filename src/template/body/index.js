import React, { Component } from 'react';
import {RegisterPage} from "../../page";
import ListSKS from '../../page/list-sks-page';


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
            userEdit: {}
        }
    }

    editlist = newData =>{
        this.setState({
            listSks:newData
        })
    }

    renderPage = () => {
        const { currentPage } = this.props
        const { userEdit } = this.state

        if (currentPage === "form")
            return <RegisterPage selectedUser={userEdit} resetUserEdit={this.clearUserEdit} saveUser={this.updateUsers} />

        if (currentPage === "sks")
            return <ListSKS listSks={this.state.listSks} editlist={this.editlist}/>

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