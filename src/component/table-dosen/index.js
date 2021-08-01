import React, { Component } from "react";
import "./tabeldosen.css";
import EditIcon from "@material-ui/icons/Edit";

class TabelDosen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNama: "",
      inputNID: "",
      inputJurusan: "",
      inputMataKuliah1: "",
      inputMataKuliah2: "",
      inputMataKuliah3: "",
      ListDosen: [],
    };
  }
  setEditDosen = this.props.setEditDosen;

  componentDidMount = () => {
    this.setState({
      ListDosen: this.props.ListDosen,
    });
  };

  editHandler = (id) => {
    const checkFilter = this.state.ListDosen.filter((admin) => admin.status);

    if (checkFilter.length > 0)
      return alert("Jangan Asal pergi, Save Dulu Ngapa sih!!");

    const admin = this.state.ListDosen[id];
    const newData = {
      id: id,
      nama: admin.nama,
      NID: admin.NID,
      jurusan: admin.jurusan,
      matkul1: admin.matkul1,
      matkul2: admin.matkul2,
      matkul3: admin.matkul3,
      status: "edit",
    };

    let adminUpdate = this.state.ListDosen;
    adminUpdate.splice(id, 1, newData);

    this.setState({
      ListDosen: adminUpdate,
      inputNama: admin.nama,
      inputNID: admin.NID,
      inputJurusan: admin.jurusan,
      inputMataKuliah1: admin.matkul1,
      inputMataKuliah2: admin.matkul2,
      inputMataKuliah3: admin.matkul3,
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
      nama: this.state.inputNama,
      NID: this.state.inputNID,
      jurusan: this.state.inputJurusan,
      matkul1: this.state.inputMataKuliah1,
      matkul2: this.state.inputMataKuliah2,
      matkul3: this.state.inputMataKuliah3,
      status: "",
    };

    let dosenUpdate = this.state.ListDosen;
    dosenUpdate.splice(id, 1, newData);
    this.setState({
      inputNama: "",
      inputNID: "",
      inputJurusan: "",
      inputMataKuliah1: "",
      inputMataKuliah2: "",
      inputMataKuliah3: "",
    });
  };

  onCancel = (id) => {
    const newData = {
      id: id + 1,
      nama: this.state.inputNama,
      NID: this.state.inputNID,
      jurusan: this.state.inputJurusan,
      matkul1: this.state.inputMataKuliah1,
      matkul2: this.state.inputMataKuliah2,
      matkul3: this.state.inputMataKuliah3,
      status: "",
    };

    let dosenUpdate = this.state.ListDosen;
    dosenUpdate.splice(id, 1, newData);
    this.setState({
      inputNama: "",
      inputNID: "",
      inputJurusan: "",
      inputMataKuliah1: "",
      inputMataKuliah2: "",
      inputMataKuliah3: "",
    });
  };

  deleteHandler = (id) => {
    let dosenUpdate = this.state.ListDosen;
    dosenUpdate.splice(id, 1);
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
      ListDosen: [newList, ...oldState.ListDosen],
    }));
  };

  renderList = () => {
    return this.state.ListDosen.map((admin, index) => {
      if (admin.status && admin.status === "edit")
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <input
                name="inputNama"
                type="text"
                value={this.state.inputNama}
                onChange={this.onChangeHandler}
              />
            </td>
            <td>
              <input
                name="inputNID"
                type="text"
                value={this.state.inputNID}
                onChange={this.onChangeHandler}
              />
            </td>
            <td>
              <input
                name="inputJurusan"
                type="text"
                value={this.state.inputJurusan}
                onChange={this.onChangeHandler}
              />
            </td>
            <td>
              <input
                name="inputMataKuliah1"
                type="text"
                value={this.state.inputMataKuliah1}
                onChange={this.onChangeHandler}
              />
              <br />
              <br />
              <input
                name="inputMataKuliah2"
                type="text"
                value={this.state.inputMataKuliah2}
                onChange={this.onChangeHandler}
              />
              <br />
              <br />
              <input
                name="inputMataKuliah3"
                type="text"
                value={this.state.inputMataKuliah3}
                onChange={this.onChangeHandler}
              />
            </td>
            <br />
            <br />
            <td>
              <button
                className="save"
                type="submit"
                onClick={() => this.onSaveEdit(index)}
              >
                Save
              </button>
              <button className="cancel" onClick={() => this.onCancel(index)}>
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
                name="inputNama"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="inputNID"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="inputJurusan"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="inputMataKuliah1"
                onChange={this.onChangeHandler}
              ></input>
              <br />
              <input
                type="text"
                name="inputMataKuliah2"
                onChange={this.onChangeHandler}
              ></input>
              <br />
              <input
                type="text"
                name="inputMataKuliah3"
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
          <td>{admin.nama}</td>
          <td>{admin.NID}</td>
          <td>{admin.jurusan}</td>
          <td>
            <ol>
              <hr />
              <li>{admin.matkul1}</li>
              <hr />
              <li>{admin.matkul2}</li>
              <hr />
              <li>{admin.matkul3}</li>
              <hr />
            </ol>
          </td>
          <td>
            <button className="btn" onClick={() => this.editHandler(index)}>
              <EditIcon />
            </button>
            {/* <button className="btn" onClick={() => this.deleteHandler(index)}>
              <DeleteIcon color="secondary" />
            </button> */}
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
            <h2>List Data Dosen</h2>
            <hr></hr>
          </div>
          <div>
            <button className="add-data" onClick={() => this.addHandler()}>
              Add New
            </button>
            <hr></hr>
          </div>
          <div className="thishome">
            <table className="customers-list" width="80%" id="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Dosen</th>
                  <th>
                    Nomor Induk <br /> Dosen
                  </th>
                  <th>
                    Mengajar <br />
                    Jurusan
                  </th>
                  <th>
                    Mengajar <br /> Mata Kuliah
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderList()}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default TabelDosen;
