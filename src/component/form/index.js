import React, { Component } from 'react'
import {FormButton, FormInput} from "../index";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        // const {dataEditMhs}=this.props
        return (
          <div>
            <FormInput
              description="Nama"
              type="text"
              name="nama"
              disabled={true}
              // defaultValue={dataEditMhs.name}
            />
            <FormInput
              description="NIM"
              type="text"
              name="password"
            />
            <FormButton title="Log in" type="submit" />
          </div>
        );
    }
}

export default Form;