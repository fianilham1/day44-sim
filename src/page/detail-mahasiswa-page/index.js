import React,{Component} from "react";

class DetailMahasiswaPage extends Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }

    buttonBack=()=>{
        this.props.gtp("list-mahasiswa")
    }

    renderPageDetail=()=>{
        const {dataDetailMhs}=this.props
        const dataKrs = dataDetailMhs.krs
        console.log("detail mhs", dataDetailMhs)
        return dataKrs.map((data, index) => {
            return(
                <tr>
                    <td className="cell">{data.mataKuliah}</td>
                    <td className="cell">{data.jumlahSks}</td>
                    <td className="cell">{data.nilai}</td>
                    <td className="cell">{data.nilaiHuruf}</td>
                    <td className="cell">{data.namaDosen}</td>
                </tr>
            )
        })

    }

    render() {
        const {dataDetailMhs}=this.props
        return(
            <>
                <h1 style={{marginLeft: 150}}>Detail Mahasiswa</h1>
                <button style={{marginLeft: 150, cursor: "pointer"}} onClick={this.buttonBack}>back</button>
                <h3 style={{marginLeft: 150}}>Nama : {dataDetailMhs.nama}</h3>
                <h3 style={{marginLeft: 150}}>NIM : {dataDetailMhs.nim}</h3>
                <h3 style={{marginLeft: 150}}>Jurusan : {dataDetailMhs.jurusan}</h3>
                <h3 style={{marginLeft: 150}}>Jumlah SKS : {dataDetailMhs.krs[0].jumlahSks+dataDetailMhs.krs[1].jumlahSks+dataDetailMhs.krs[2].jumlahSks}</h3>
                <h3 style={{marginLeft: 150}}>IPS : {dataDetailMhs.krs[0].nilai}</h3>
                <table className="customers-list" width="80%">
                    <thead>
                        <th>Mata Kuliah</th>
                        <th>Jumlah SKS</th>
                        <th>Nilai</th>
                        <th>Nilai</th>
                        <th>Nama Dosen</th>
                    </thead>
                    <tbody>
                    {this.renderPageDetail()}
                    </tbody>
                </table>
            </>
        )
    }
}

export default DetailMahasiswaPage