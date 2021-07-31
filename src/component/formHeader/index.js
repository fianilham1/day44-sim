import React, { Component } from 'react'

class FormHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return <h2 id="headerTitle">{this.props.title}</h2>;
    }
}

export default FormHeader;