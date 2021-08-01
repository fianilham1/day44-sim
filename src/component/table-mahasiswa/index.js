import React, {Component} from 'react'
import './table-mahasiswa.css'

class TableMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitNilai=e=>{
        const {handleSubmitNilai, gtp}=this.props
        let id = e.target.id
        console.log(id)
        handleSubmitNilai(id)
        gtp("submit-nilai-mahasiswa")

    }

    renderListMahasiswas = () => {
        const {dataMahasiswa} = this.props
        return dataMahasiswa.map((data, index) => {
            return (
                <tr key={index}>
                    <td className="cell num">{index + 1}</td>
                    <td className="cell">{data.nama}</td>
                    <td className="cell">{data.nim}</td>
                    <td className="cell">{data.jurusan}</td>
                    <td className="cell">{data.strata}</td>
                    <td className="cell">{data.semester}</td>
                    <td className="cell">{data.mataKuliah}</td>
                    <td className="cell">{data.nilai}</td>
                    <td className="cell">{data.ipk}</td>
                    <td className="cell">{data.namaDosen}</td>
                    <td className="cell action">
                        <button style={{cursor: "pointer", marginRight: 10}} id={data.id}
                            onClick={this.handleSubmitNilai}
                        >Submit Nilai
                        </button>
                        <button style={{cursor: "pointer"}} className={data.id} itemID={data.id} id="deleteButton"
                            // onClick={this.handleDetail}
                        >Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const {gtp}=this.props
        const {dataMahasiswa} = this.props
        console.log("data =", dataMahasiswa)
        return (
            <>
                <div style={{marginLeft: 150}}>
                    <button style={{cursor: "pointer"}}>Add Nilai Mahasiswa</button>
                </div>
                <table className="customers-list" width="80%">
                    <thead>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th>Strata</th>
                    <th>Semester</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>IPK</th>
                    <th>Nama Dosen</th>
                    <th>Actions</th>
                    </thead>

                    <tbody>
                    {this.renderListMahasiswas()}
                    </tbody>
                </table>
            </>
        );
    }
}

export default TableMahasiswa;