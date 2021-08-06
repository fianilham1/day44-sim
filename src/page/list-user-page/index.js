import React, { Component } from 'react';
// import "./register.css"
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import {Table} from '../../component';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./list-user.css"


class ListUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceStatus:'',
            editStatus:false,
            deleteStatus:false,
            open:false,
            idDelete:-1,
            idEdit:-1,
            nameEdit:'',
            usernameEdit:'',
            passwordEdit:'',
            roleEdit:'',
            showPassword:false
          
        }
        this.baseSate=this.state
       
    }

    componentDidMount(){
        this.props.changePage("/list-user")
    }

    setValue = e => {
        const keyEdit = `${e.target.name}Edit`
        this.setState({ 
        [keyEdit]: e.target.value
     })
    }

    resetForm = () => {
        this.setState(this.baseSate)
    }

    deleteHandler = e => {
        this.setState({
            idDelete:parseInt(e.target.id),
            deleteStatus:true,
            open:true
        })
        console.log("id delete",e.target.id)
    }

    yesDeleteHandler = e => {
        this.setState({
            deleteStatus:false,
            open:false
        })
        const deletedUser = {
            id:this.state.idDelete
        }
        this.props.deleteUser(deletedUser)
        this.props.deleteTriggerApi()
        this.triggerRender()
    }

    editHandler = e => {
        const idxUser = this.props.userList.map(user => user.id).indexOf(parseInt(e.target.id))
        const userChosen = this.props.userList[idxUser]
        this.setState({
            editStatus:true,
            open:true,
            idEdit:userChosen.id,
            nameEdit: userChosen.name,
            usernameEdit: userChosen.username,
            passwordEdit: userChosen.password,
            roleEdit: userChosen.role
        })
        console.log("id edit",e.target.id)
    }
      
    saveHandler = e => {
        this.setState({
            open:false,
            editStatus:false})
        const user = {
            id:this.state.idEdit,
            name:this.state.nameEdit,
            username:this.state.usernameEdit,
            password:this.state.passwordEdit,
            role:this.state.roleEdit
        }
        if(user.id===this.props.userLogin.id){
            this.props.doUpdateLogin(user)
        }

        this.props.updateUser(user)
        this.props.editTriggerApi()
        this.triggerRender()
      };

    cancelHandler = e => {
        this.setState({
            open:false,
            editStatus:false,
            deleteStatus:false
        })
    };

    handleClickShowPassword = () => {
        this.setState({
            showPassword:!this.state.showPassword
        })
      };

    triggerRender = () => { //to render userlist page >>>>>>>>>>>>>>>>>. for update data
        this.setState({
            serviceStatus:"loading"
        })
        console.log("***DELAY START -> re render of current page....")
        const timeInterval = setInterval(() => { 
          
            if(this.props.changeStatusFromBody==="waitingAnyReq"){ //loading page until get api DONE
                console.log("**DONE delay re render....")
                this.setState({
                    serviceStatus:"reRender"
                })
                clearInterval(timeInterval)
            }
           
        }, 5000);
      
      }

    renderDialogContent = () => {
        if(this.state.editStatus) return (
            <>
            <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="email"
                value={this.state.nameEdit}
                onChange={this.setValue}
                className="inputDialog"
            />
            <TextField
                autoFocus
                margin="dense"
                name="username"
                label="Username"
                type="email"
                value={this.state.usernameEdit}
                onChange={this.setValue}
                className="inputDialog"
            />
              <TextField
                autoFocus
                margin="dense"
                name="password"
                label="Password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.passwordEdit}
                onChange={this.setValue}
                className="inputDialog"
            />
            <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                edge="end">
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            </>
        )

        if(this.state.deleteStatus) return  "Apakah Anda Yakin Ingin Delete?"  

        return ''
    }

    renderDialog = () => {
        return (
        <Dialog open={this.state.open} className="dialog-container">
            <DialogTitle>{this.state.editStatus ? "Edit User" : "Delete User"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {this.renderDialogContent()}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.state.editStatus ? this.saveHandler : this.yesDeleteHandler} 
                    color="primary" autoFocus>
                {this.state.editStatus ? "Save" : "Ya"}
            </Button>
            <Button onClick={this.cancelHandler}
                    color="primary" autoFocus>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
        )
    }

    
    render() {

        if (!this.props.isLogedIn)
        return <Redirect to="/login" />

        if (this.props.userLogin==="Mahasiswa")
        return <Redirect to="/detail-krs-mahasiswa" />
        
        const list = this.props.userList.map((data,index)=>{
            return {
                ...data,
                 clickEvent:{
                    editUser:{
                        clickFunc:this.editHandler,
                        idUser:data.id,
                        label:"Edit"},
                    deleteUser:{
                        clickFunc:this.deleteHandler,
                        idUser:data.id,
                        label:"Delete"}
                }
            }
        })
        // if (this.props.isLogedIn && this.props.userLogin.role==="Admin")
        //     return <Redirect to="/list-mahasiswa" />
        // console.log("List",list)

        return (
            
            <div className="user-container">
                <Table 
                    className="customers-list"
                    dataList={list} 
                    userLogin={this.props.userLogin}
                    headerName={["No","Id","Username","Password","Nama","Role","Action"]}
                    //NOTE : dataList.length must be headerName.length-1 (for cell number)
                />
              {this.renderDialog()}
              <div className={`lds-ring modal ${this.state.serviceStatus==="loading" ? "loading":''}`}><div></div><div></div><div></div></div>
            </div>
        
    
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userList: state.UserList.users,
    userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page }),
    updateUser: user => dispatch({ type: "EDIT_USER", payload:{user}}),
    deleteUser: idUser => dispatch({ type: "DELETE_USER", payload:{idUser}}),
    doUpdateLogin: user => dispatch({ type: "UPDATE_LOGIN_USER", payload: { user } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
