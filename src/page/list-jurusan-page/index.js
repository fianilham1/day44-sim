import React, { Component } from "react";
import { Jurusan } from "../../master";
import { connect } from 'react-redux';

class ListJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.changePage("/list-jurusan")
}

  render() {
    return <Jurusan />;
  }
}

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(ListJurusan);
