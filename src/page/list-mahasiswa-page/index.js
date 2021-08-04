import React, { Component } from 'react'
import {Mahasiswa} from "../../master";
import { connect } from 'react-redux';

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
       
        const {dataMhsBaru, dataEditMhs, setDetailMhs,  setProfileDetailMhs}=this.props
        return (
            <Mahasiswa dataMhsBaru={dataMhsBaru} setDetailMhs={setDetailMhs}  setProfileDetailMhs={ setProfileDetailMhs} dataEditMhs={dataEditMhs} />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(ListMahasiswa);