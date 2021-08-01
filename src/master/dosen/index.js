import React, { Component } from "react";
import { TabelDosen } from "../../component";

class Dosen extends Component {
  constructor(props) {
    super(props);
    // List Data Dosen
    this.state = {
      ListDosen: [
        {
          id: 1,
          nama: "Abidin Salamah",
          NID: "12.31232.2123",
          jurusan: "IT",
          matkul1: "Basic Java",
          matkul2: "Basic PHP",
          matkul3: "Basis Data",
        },
        {
          id: 2,
          nama: "Burhan Udin",
          NID: "46.32398.7987",
          jurusan: "Peternakan",
          matkul1: "Ilmu Nutrisi Ternak Dasar",
          matkul2: "Ilmu Ternak Potong",
          matkul3: "Anatomi Ternak",
        },
        {
          id: 3,
          nama: "Edi Sujoko",
          NID: "23.24234.5233",
          jurusan: "Kedokteran",
          matkul1: "Biologi Seluler",
          matkul2: "Genetika",
          matkul3: "Ilmu Bedah",
        },
      ],
    };
  }

  // Bagian Edit Data Dosen
  editlist = (newData) => {
    this.setState({
      ListDosen: newData,
    });
    console.log("editlist", newData);
  };

  // Me render Data
  renderedMaster = () => {
    return (
      <TabelDosen ListDosen={this.state.ListDosen} editlist={this.editlist} />
    );
  };

  render() {
    return <>{this.renderedMaster()}</>;
  }
}

export default Dosen;
