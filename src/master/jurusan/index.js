import React, { Component } from "react";
import { TabelJurusan } from "../../component";

class MasterSKS extends Component {
  constructor(props) {
    super(props);
    // List Data Jurusan
    this.state = {
      ListJurusan: [
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

  // Bagian Untuk Mengedit  Data Jurusan
  editListJurusan = (newDataJurusan) => {
    this.setState({
      ListJurusan: newDataJurusan,
    });
  };

  // Me renderData
  renderedMaster = () => {
    return (
      <TabelJurusan
        ListJurusan={this.state.ListJurusan}
        editListJurusan={this.editListJurusan}
      />
    );
  };

  render() {
    return <>{this.renderedMaster()}</>;
  }
}

export default MasterSKS;
