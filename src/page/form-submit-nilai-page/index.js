import React, { Component } from 'react'
import {Form, FormHeader} from "../../component";

class FormSubmitNilaiPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    edit=()=>{}

    render() {
        return (
            <form id="editform" onSubmit={this.edit}
                  ref={(el) => this.myFormRef = el}>
                <FormHeader title="Edit" />
                <Form dataEditMhs={this.props.dataEditMhs} />
            </form>
        );
    }
}

export default FormSubmitNilaiPage;