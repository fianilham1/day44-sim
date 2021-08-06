import React, { Component } from 'react'
import {Mahasiswa} from "../../master";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }

    componentDidMount(){
        this.props.changePage("/list-mahasiswa")
    }

    render() {

        if (!this.props.isLogedIn)
        return <Redirect to="/login" />

        if (this.props.userLogin==="Mahasiswa")
        return <Redirect to="/detail-krs-mahasiswa" />
       
        const {dataMhsBaru, dataEditMhs, setDetailMhs,  setProfileDetailMhs}=this.props
        return (
            <Mahasiswa dataMhsBaru={dataMhsBaru} setDetailMhs={setDetailMhs}  setProfileDetailMhs={ setProfileDetailMhs} dataEditMhs={dataEditMhs} />
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListMahasiswa);