import React, { Component } from "react";
import { TabelDosen } from "../../component";

class dosen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosen: [
        {
          id: 1,
          nama: "Abidin",
          NID: "12312322",
          jurusan: "IT",
          mataKuliah: "Biologi Seluler",
        },
        {
          id: 2,
          nama: "Burhan",
          NID: "46323987987",
          jurusan: "Peternakan",
          mataKuliah: "Genetika",
        },
        {
          id: 3,
          nama: "Edi",
          NID: "23242345233",
          jurusan: "Kedokteran",
          mataKuliah: "Ilmu Bedah",
        },
      ],
      deleteDosen: {},
    };
  }

  handlerDelete = (index) => {
    // const newDosen = this.state.dosen.filter(
    //   (element) => element.id !== index.id
    // );
    // this.setState({ dosen: newDosen });
    const dltData = [...this.state.dosen];
    dltData.splice(index, 1);
    this.setState((state) => ({
      dosen: dltData,
    }));
  };

  render() {
    return (
      <TabelDosen
        dosenData={this.state.dosen}
        deleteDosen={this.handlerDelete}
      />
    );
  }
}

export default dosen;
