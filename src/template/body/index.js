import React, { Component } from 'react';
import {ListMahasiswa, RegisterPage, ListPenerimaanPage} from "../../page";
import FormSubmitNilaiPage from "../../page/form-submit-nilai-page";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

            userEdit: {},
            listPenerimaan:[]
        }
    }

    addNewListPenerimaanHandler = newMahasiswa => {
        const {goToPage} = this.props
        const listPenerimaan = this.state.listPenerimaan
        listPenerimaan.push(newMahasiswa)
        this.setState({
            listPenerimaan
        },console.log("listpenerimaan",this.state.listPenerimaan))

            mhsEdit: {}
        }
    }

    handlerEditMahasiswa=mhs=>{
        this.setState({
            mhsEdit: mhs
        })
    }

    renderPage = () => {
        const { currentPage, goToPage } = this.props
        const { users, userEdit } = this.state

        if (currentPage === "form")
            return <RegisterPage addNewListPenerimaan={this.addNewListPenerimaanHandler} selectedUser={userEdit} resetUserEdit={this.clearUserEdit} saveUser={this.updateUsers} />

        if (currentPage === "penerimaan")
            return <ListPenerimaanPage listPenerimaan={this.state.listPenerimaan} />

        

        // if (currentPage === "login")
        //     return <Login />

        if (currentPage === "list-mahasiswa")
            return <ListMahasiswa dataEditMhs={this.handlerEditMahasiswa} gtp={goToPage} />

        if (currentPage === "submit-nilai-mahasiswa")
            return <FormSubmitNilaiPage dataEditMhs={this.state.mhsEdit} />

        // return <List userList={users} updateUser={this.setUserEdit} />
        return ''
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