import React, { Component } from "react";
import { Dosen } from "../../master";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ListDosen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.changePage("/list-dosen")
}

  render() {
    if (!this.props.isLogedIn)
    return <Redirect to="/login" />

    if (this.props.userLogin==="Mahasiswa")
    return <Redirect to="/detail-krs-mahasiswa" />

    return <Dosen />;
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.Auth.statusLogin,
  userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListDosen);
