import React, { Component } from 'react';
import MasterSKS from '../../master/sks'
import { connect } from 'react-redux';

class ListSKS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.changePage("/list-sks")
    }

    render() { 
        const { editlist, listSks } =this.props
        return ( 
            <>
            <MasterSKS editlist={editlist} listSks={listSks}/>
            </>
         );
    }
}
 
const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
  })
  
  export default connect(null, mapDispatchToProps)(ListSKS);

