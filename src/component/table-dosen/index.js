import React, { Component } from "react";
import "./tabeldosen.css";
import EditIcon from "@material-ui/icons/Edit";
import { ListDosen } from "../../page";

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

  // ComponentDidMount
  componentDidMount = () => {
    this.setState({
      ListDosen: this.props.ListDosen,
    });
    console.log("ListDosen", ListDosen);
  };

  // Bagian Edit Data Dosen
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
    console.log("Edit", newData);
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Bagian Save Data
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
    // if (!newData === null) {
    //   this.props.addNewDosen(newData);
    //   alert("success Input");
    // } else {
    //   this.props.onSaveEdit(newData);
    //   return alert("Data Kosong");
    // }
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
    console.log("save", newData);
  };

  // Bagian Tombol Cancel Untuk Membatalkan Edit
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
    console.log("cancel", newData);
  };

  // Bagian Delete Data
  deleteHandler = (id) => {
    let dosenUpdate = this.state.ListDosen;
    dosenUpdate.splice(id, 1);
    console.log("delete", dosenUpdate);
  };

  // Bagian Tambah Data
  addHandler = (e) => {
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
      // id: e.target[0].value,
      // nama: e.target[0].value,
      // NID: e.target[0].value,
      // jurusan: e.target[0].value,
      // matkul1: e.target[0].value,
      // matkul2: e.target[0].value,
      // matkul3: e.target[0].value,
    }));
    console.log("Add", ListDosen);
  };

  renderList = () => {
    return this.state.ListDosen.map((admin, index) => {
      if (admin.status && admin.status === "edit")
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <input
                placeholder="Nama"
                name="inputNama"
                type="text"
                value={this.state.inputNama}
                onChange={this.onChangeHandler}
              />
            </td>
            <td>
              <input
                placeholder="Nomor Induk Dosen"
                name="inputNID"
                type="text"
                value={this.state.inputNID}
                onChange={this.onChangeHandler}
              />
            </td>
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
              <input
                placeholder="Mata Kuliah Ke-1"
                name="inputMataKuliah1"
                type="text"
                value={this.state.inputMataKuliah1}
                onChange={this.onChangeHandler}
              />
              <br />
              <br />
              <input
                placeholder="Mata Kuliah Ke-2"
                name="inputMataKuliah2"
                type="text"
                value={this.state.inputMataKuliah2}
                onChange={this.onChangeHandler}
              />
              <br />
              <br />
              <input
                placeholder="Mata Kuliah Ke-3"
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
                placeholder="Nama"
                type="text"
                name="inputNama"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                placeholder="Nomor Induk Dosen"
                type="text"
                name="inputNID"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                placeholder="Jurusan"
                type="text"
                name="inputJurusan"
                onChange={this.onChangeHandler}
              ></input>
            </td>
            <td>
              <input
                placeholder="Mata Kuliah Ke-1"
                type="text"
                name="inputMataKuliah1"
                onChange={this.onChangeHandler}
              ></input>
              <br />
              <br />
              <input
                placeholder="Mata Kuliah Ke-2"
                type="text"
                name="inputMataKuliah2"
                onChange={this.onChangeHandler}
              ></input>
              <br />
              <br />
              <input
                placeholder="Mata Kuliah Ke-3"
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
            <h2 style={{marginLeft: 100}}>List Data Dosen</h2>
          </div>
          <div>
            <button style={{marginLeft: 100}} className="add-data" onClick={() => this.addHandler()}>
              Add New
            </button>
          </div>
          <div className="thishome">
            <table className="customers-list" width="80%" >
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
