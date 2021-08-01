import React, { Component } from 'react'

class FormButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {title, type, onClick }=this.props
        return (
          <div id="button" class="row">
            <button type={type} onClick={onClick}>{title}</button>
          </div>
        );
    }
}

export default FormButton;