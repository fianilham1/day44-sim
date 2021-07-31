import React, { Component } from "react";
import "./tabeldosen.css";

class TableDosen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteDosen() {
    const { id } = this.props.dosenData;
    this.props.deleteDosen(id);
  }
  renderListDosen = () => {
    const { dosenData } = this.props;
    return dosenData.map((data, index) => {
      return (
        <tr key={index}>
          <td className="cell num">{index + 1}</td>
          <td className="cell">{data.nama}</td>
          <td className="cell">{data.NID}</td>
          <td className="cell">{data.jurusan}</td>
          <td className="cell">{data.mataKuliah}</td>
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
            onClick={this.deleteDosen}
          >
            Delete
          </button>
        </tr>
      );
    });
  };

  render() {
    const { dosenData } = this.props;
    console.log("data =", dosenData);
    return (
      <>
        <table className="ListDosen" width="80%">
          <thead>
            <th>No</th>
            <th>Nama</th>
            <th>NID</th>
            <th>Jurusan</th>
            <th>Mata Kuliah</th>
            <th>Action</th>
          </thead>

          <tbody>{this.renderListDosen()}</tbody>
        </table>
      </>
    );
  }
}

export default TableDosen;
