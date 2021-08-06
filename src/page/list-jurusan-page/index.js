import React, { Component } from "react";
import { Jurusan } from "../../master";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ListJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.changePage("/list-jurusan")
}

  render() {
    if (!this.props.isLogedIn)
    return <Redirect to="/login" />
    
    if (this.props.userLogin==="Mahasiswa")
    return <Redirect to="/detail-krs-mahasiswa" />

    return <Jurusan />;
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.Auth.statusLogin,
  userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListJurusan);
