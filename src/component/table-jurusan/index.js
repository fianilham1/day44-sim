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

  componentDidMount = () => {
    this.setState({
      ListJurusan: this.props.ListJurusan,
    });
  };

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
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
  };

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
  };

  deleteHandler = (id) => {
    let updateJurusan = this.state.ListJurusan;
    updateJurusan.splice(id, 1);
    this.setState({
      ListJurusan: updateJurusan,
    });
  };

  addHandler = () => {
    const newList = {
      id: "",
      nama: "",
      NID: "",
      jurusan: "",
      matkul1: "",
      matkul2: "",
      matkul3: "",
      status: "new",
    };
    this.setState((oldState) => ({
      ListJurusan: [newList, ...oldState.ListJurusan],
    }));
  };

  renderList = () => {
    return this.state.ListJurusan.map((admin, index) => {
      if (admin.status && admin.status === "edit")
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <input
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
            <hr></hr>
            <hr></hr>
            <h2>List Data Jurusan</h2>
            <hr></hr>
          </div>
          <div>
            <button className="add-data" onClick={() => this.addHandler()}>
              Add New
            </button>
            <hr></hr>
          </div>
          <table id="table" className="customers-list" width="80%">
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
