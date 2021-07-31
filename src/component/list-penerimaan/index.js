import React, {Component} from 'react'
import './list-penerimaan.css'

class ListPenerimaan extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderListMahasiswas = () => {
        const {dataMahasiswa} = this.props
        return dataMahasiswa.map((data, index) => {
            return (
                <tr key={index}>
                    <td className="cell num">{index + 1}</td>
                    <td className="cell">{data.name}</td>
                    <td className="cell">{data.nim}</td>
                    <td className="cell">{data.dept}</td>
                    <td className="cell">{data.strata}</td>
                    {/* <td className="cell">{data.semester}</td>
                    <td className="cell">{data.mataKuliah}</td>
                    <td className="cell">{data.nilai}</td>
                    <td className="cell">{data.namaDosen}</td>
                    <td className="cell action">
                        <button className={data.id} itemID={data.id} id="editButton"
                            // onClick={this.handleEdit}
                        >Edit
                        </button>
                        <button className={data.id} itemID={data.id} id="deleteButton"
                            // onClick={this.handleDetail}
                        >Delete
                        </button>
                    </td> */}
                </tr>
            )
        })
    }

    render() {
        const {dataMahasiswa} = this.props
        console.log("data =", dataMahasiswa)
        return (
            <>
                <table className="customers-list" width="80%">
                    <thead>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th>Strata</th>
                    </thead>

                    <tbody>
                    {this.renderListMahasiswas()}
                    </tbody>
                </table>
            </>
        );
    }
}

export default ListPenerimaan;