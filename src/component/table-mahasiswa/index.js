import React, {Component} from 'react'
import './table-mahasiswa.css'
import { Link } from "react-router-dom"

class TableMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitNilai = e => {
        const {gtp, handleSubmitNilai} = this.props
        let id = e.target.id
        console.log("edit id",id)
        handleSubmitNilai(id)
        // gtp("submit-nilai-mahasiswa")
    }

    handleDetail=(e)=>{
        const {gtp, handleDetail}=this.props
        let id = e.target.id
        let name = e.target.name
        console.log("id detail", id)
        handleDetail(id,name)

        // if(name==="nilaiDetail"){
        //     gtp("detail-krs-mahasiswa")
        // }else{
        //     gtp("detail-profile-mahasiswa")
        // }

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
                    <td className="cell action">
                      
                         <Link to="/submit-nilai-mahasiswa">
                            <button style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: 0}} id={data.id} onClick={this.handleSubmitNilai}>Submit Nilai
                            </button>
                        </Link>
                        
                        <Link to="/detail-krs-mahasiswa">
                            <button name="nilaiDetail" style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: 0}} id={data.id} onClick={this.handleDetail}>Detail KRS
                            </button>
                        </Link>

                        <Link to="/detail-profile-mahasiswa">
                            <button name="profileDetail" style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: 0}} id={data.id} onClick={this.handleDetail}>Detail Profile
                            </button>
                        </Link>

                    </td>
                </tr>
            )
        })
    }

    render() {
        const {gtp} = this.props
        const {dataMahasiswa} = this.props
        console.log("data =", dataMahasiswa)
        return (
            <>
                {/*<div style={{marginLeft: 150}}>*/}
                {/*    <button style={{cursor: "pointer"}}>Add Nilai Mahasiswa</button>*/}
                {/*</div>*/}
                <h2 style={{marginLeft: 100}}>List Data Nilai Mahasiswa</h2>

                <table className="customers-list" width="80%">
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Jurusan</th>
                        <th>Strata</th>
                        <th>Semester</th>
                        <th>Actions</th>
                        </tr>
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