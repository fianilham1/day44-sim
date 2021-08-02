import React, { Component } from 'react';
import './tabel.css'

class TabelSks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: "",
            sksList:[],
         }
    }

    componentDidMount = () => {
		this.setState({
			sksList: this.props.listSks,
		})
	}

    addHandler = () => {
		const newList = {
			idsks: "",
			matkul: "",
            jmlsks: "",
            idjurusan: "",
			dosen:"",
			status: "new"
		}
		this.setState(oldState => ({
			sksList: [newList,...oldState.sksList]
		}))
	}

    editHandler = id => {
        const checkFilter = this.state.sksList.filter(users => users.status)
		
		if(checkFilter.length > 0)
		return alert("Save terlebih dahulu!!")
  
		const user = this.state.sksList[id]
		const newData = {
            idsks: id,
			matkul: user.matkul,
			jmlsks: user.jmlsks,
			idjurusan: user.idjurusan,
			dosen: user.dosen,
			status: "edit"
		}
	
		let userUpdate = this.state.sksList
		userUpdate.splice(id, 1, newData)
	
		this.setState({
			sksList: userUpdate,
			inputMatkul: user.matkul,
			inputJmlsks: user.jmlsks,
			inputIdjurusan: user.idjurusan,
			inputDosen: user.dosen

		})
	}
    
    onChangeHandler = e => {
		this.setState({
		  [e.target.name]: e.target.value
		})
	}


    onSaveEdit = id =>{
        const editlist = this.props.editlist
		const newData = {
			idsks: id + 1,
			matkul: this.state.inputMatkul,
			jmlsks: this.state.inputJmlsks,
			idjurusan: this.state.inputIdjurusan,
			dosen: this.state.inputDosen,
			status: ""
		}
	
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1, newData)
        this.setState({
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: ""

        })
        editlist(sksUpdate)
	}

    onCancel = id =>{
        const editlist = this.props.editlist
		const newData = {
			idsks: id + 1,
			matkul: this.state.inputMatkul,
			jmlsks: this.state.inputJmlsks,
			idjurusan: this.state.inputIdjurusan,
			dosen: this.state.inputDosen,
			status: ""
		}
	
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1, newData)
        this.setState({
            inputMatkul: "",
			inputJmlsks: "",
			inputIdjurusan: "",
			inputDosen: ""
        })
        editlist(sksUpdate)
    }

    deleteHandler = id =>{
        const editlist = this.props.editlist
	
		let sksUpdate = this.state.sksList
		sksUpdate.splice(id, 1)
        editlist(sksUpdate)
    }

    renderList = () =>{
		return this.state.sksList.map((users, index) => {
            if(users.status && users.status === "new")
				return(
					<tr key={index}>
						<td></td>
						<td><input type="text" name="inputMatkul" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputJmlsks" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputIdjurusan" onChange={this.onChangeHandler}></input></td>
						<td><input type="text" name="inputDosen" onChange={this.onChangeHandler}></input></td>
						<td>
							<button type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
							<button onClick={() => this.onCancel(index)}>Cancel</button>
						</td>
					</tr>
				)
			if(users.status && users.status === "edit")
				return (<tr key={index}>
					<td>{index + 1}</td>
					<td>
					<input
						name="inputMatkul"
						type="text" value={this.state.inputMatkul} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputJmlsks"
						type="text" value={this.state.inputJmlsks} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputIdjurusan"
						type="text" value={this.state.inputIdjurusan} onChange={this.onChangeHandler} />
					</td>
					<td>
					<input
						name="inputDosen"
						type="text" value={this.state.inputDosen} onChange={this.onChangeHandler} />
					</td>
					<td>
					<button type="submit" onClick={() => this.onSaveEdit(index)}>Save</button>
					<button onClick={() => this.onCancel(index)}>Cancel</button>
					</td>
				</tr>)
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{users.matkul}</td>
					<td>{users.jmlsks}</td>
					<td>{users.idjurusan}</td>
					<td>{users.dosen}</td>
					<td>
						<button className="btn-save-edit" onClick={() => this.editHandler(index)}>Edit</button>
						<button className="btn-delete" onClick={() => this.deleteHandler(index)}>Delet</button>
					</td>
				</tr>
			)
		})
	}



    render() { 
        return ( 
            <>
                <div className="main">
                    <div>
						<button style={{marginLeft: 100}} className="btn-add" onClick={() => this.addHandler()}>Add New</button>
                        <hr></hr>
                    </div>
                <div className="thishome">
					{/* <table id="table" className="customers-list"> */}
					<table className="customers-list" width="80%">
					<thead>
						<tr>
							<th>No</th>
							<th>Mata Kuliah</th>
							<th>Jumlah SKS</th>
							<th>Jurusan</th>
							<th>Dosen</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
					</table>
				</div>
			</div>
            </>
         );
    }
}
 
export default TabelSks;