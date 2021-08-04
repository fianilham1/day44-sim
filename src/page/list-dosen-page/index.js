import React, { Component } from "react";
import { Dosen } from "../../master";
import { connect } from 'react-redux';

class ListDosen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.changePage("/list-dosen")
}

  render() {
    return <Dosen />;
  }
}

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(ListDosen);
