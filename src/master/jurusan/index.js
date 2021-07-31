import React, { Component } from "react";
import { TabelJurusan } from "../../component";

class jurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jurusan: [
        {
          id: 1,
          jurusan: "IT",
        },
        {
          id: 2,
          jurusan: "Kedokteran",
        },
        {
          id: 3,
          jurusan: "Peternakan",
        },
      ],
    };
  }
  render() {
    return <TabelJurusan dataJurusan={this.state.jurusan} />;
  }
}

export default jurusan;
