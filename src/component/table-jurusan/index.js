import React, { Component } from "react";
import "./tabeljurusan.css";

class TableJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderListMahasiswas = () => {
    const { dataJurusan } = this.props;
    return dataJurusan.map((data, index) => {
      return (
        <tr key={index}>
          <td className="cell num">{index + 1}</td>
          <td className="cell">{data.jurusan}</td>
          <td className="cell action">
            <button
              className={data.id}
              itemID={data.id}
              id="editButton"
              // onClick={this.handleEdit}
            >
              Edit
            </button>
            <button
              className={data.id}
              itemID={data.id}
              id="deleteButton"
              // onClick={this.handleDetail}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { dataJurusan } = this.props;
    console.log("data =", dataJurusan);
    return (
      <>
        <table className="ListJurusan" width="80%">
          <thead>
            <th>No</th>
            <th>Jurusan</th>
            <th>Actions</th>
          </thead>

          <tbody>{this.renderListMahasiswas()}</tbody>
        </table>
      </>
    );
  }
}

export default TableJurusan;
