import React, { Component } from 'react'

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div className="row" hidden={this.props.hidden}>
            <label>{this.props.description}</label>
            <input disabled={this.props.disabled}
                   hidden={this.props.hidden}
                   defaultValue={this.props.defaultValue}
                   name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        );
    }
}

export default FormInput;