import React, { Component } from 'react';
import MasterSKS from '../../master/sks'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ListSKS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.changePage("/list-sks")
    }

    render() { 
        if (!this.props.isLogedIn)
        return <Redirect to="/login" />
        
        if (this.props.userLogin==="Mahasiswa")
        return <Redirect to="/detail-krs-mahasiswa" />

        const { editlist, listSks } =this.props
        return ( 
            <>
            <MasterSKS editlist={editlist} listSks={listSks}/>
            </>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListSKS);

