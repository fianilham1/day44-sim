import React, { Component } from 'react';
import MasterSKS from '../../master/sks'


class ListSKS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
 
export default ListSKS;

