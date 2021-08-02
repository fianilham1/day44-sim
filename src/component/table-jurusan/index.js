import React, { Component } from "react";
import "./tabeljurusan.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

class TabelJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputJurusan: "",
      ListJurusan: [],
    };
  }
  setEditDosen = this.props.setEditDosen;

  // ComponentDidMOunt
  componentDidMount = () => {
    this.setState({
      ListJurusan: this.props.ListJurusan,
    });
  };

  // Bagian Edit Data
  editHandler = (id) => {
    const checkFilter = this.state.ListJurusan.filter((admin) => admin.status);

    if (checkFilter.length > 0) return alert("SAVE First, OK!!!!!!!!!!!!!!");

    const admin = this.state.ListJurusan[id];
    const newData = {
      id: id,
      jurusan: admin.jurusan,
      status: "edit",
    };

    let adminUpdate = this.state.ListJurusan;
    adminUpdate.splice(id, 1, newData);

    this.setState({
      ListJurusan: adminUpdate,
      inputJurusan: admin.jurusan,
    });
    console.log("adminUpdate", adminUpdate);
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Bagian Untuk Save Data
  onSaveEdit = (id) => {
    const newData = {
      id: id + 1,
      jurusan: this.state.inputJurusan,
      status: "",
    };

    let updateJurusan = this.state.ListJurusan;
    updateJurusan.splice(id, 1, newData);
    this.setState({
      inputJurusan: "",
    });
    console.log("newData", newData);
  };

  // BAGIAN Untuk Membatalkan save Data
  onCancel = (id) => {
    const newData = {
      id: id + 1,
      jurusan: this.state.inputJurusan,
      status: "",
    };

    let updateJurusan = this.state.ListJurusan;
    updateJurusan.splice(id, 1, newData);
    this.setState({
      inputJurusan: "",
    });
    console.log("updateJurusan", updateJurusan);
  };

  // Bagian Delete Data
  deleteHandler = (id) => {
    let updateJurusan = this.state.ListJurusan;
    updateJurusan.splice(id, 1);
    this.setState({
      ListJurusan: updateJurusan,
    });
    console.log("delete", updateJurusan);
  };

  // Bagian Untuk Tambah Data
  addHandler = () => {
    const newList = {
      id: "",
      jurusan: "",
      status: "new",
    };
    this.setState((oldState) => ({
      ListJurusan: [newList, ...oldState.ListJurusan],
    }));
    console.log("add", newList);
  };

  renderList = () => {
    return this.state.ListJurusan.map((admin, index) => {
      if (admin.status && admin.status === "edit")
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <input
                placeholder="Jurusan"
                name="inputJurusan"
                type="text"
                value={this.state.inputJurusan}
                onChange={this.onChangeHandler}
              />
            </td>
            <td>
              <button
                className="save"
                cursor="pointer"
                type="submit"
                onClick={() => this.onSaveEdit(index)}
              >
                Save
              </button>
              <button
                className="cancel"
                cursor="pointer"
                onClick={() => this.onCancel(index)}
              >
                Cancel
              </button>
            </td>
          </tr>
        );
      if (admin.status && admin.status === "new")
        return (
          <tr key={index}>
            <td></td>
            <td>
              <input
                placeholder="Jurusan"
                type="text"
                name="inputJurusan"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <button type="submit" onClick={() => this.onSaveEdit(index)}>
                Save
              </button>
              <button onClick={() => this.onCancel(index)}>Cancel</button>
            </td>
          </tr>
        );
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{admin.jurusan}</td>
          <td>
            <button
              cursor="pointer"
              className="btn"
              onClick={() => this.editHandler(index)}
            >
              <EditIcon />
            </button>
            <button
              cursor="pointer"
              className="btn-delt"
              onClick={() => this.deleteHandler(index)}
            >
              <DeleteIcon color="secondary" />
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <div className="main">
          <div>
            <h2 style={{marginLeft: 100}}>List Data Jurusan</h2>
          </div>
          <div>
            <button style={{marginLeft: 100}} className="add-data" onClick={() => this.addHandler()}>
              Add New
            </button>
          </div>
          <table  className="customers-list" width="80%">
            <thead>
              <tr>
                <th>No</th>
                <th>Jurusan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TabelJurusan;
