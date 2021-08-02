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

    hitungIps=()=>{
        const {dataDetailMhs}=this.props
        //jumlah nilai dibagi 3 x 4 dibagi 100
        let ipsTotal = dataDetailMhs.krs[0].nilai+dataDetailMhs.krs[1].nilai+dataDetailMhs.krs[2].nilai
        console.log("ips total", ipsTotal)
        return ipsTotal
    }

    render() {
        const {dataDetailMhs}=this.props
        return(
            <>
                <h1 style={{marginLeft: 100}}>Detail Mahasiswa</h1>
                <button style={{marginLeft: 100, cursor: "pointer"}} onClick={this.buttonBack}>back</button>
                <h3 style={{marginLeft: 100}}>Nama : {dataDetailMhs.nama}</h3>
                <h3 style={{marginLeft: 100}}>NIM : {dataDetailMhs.nim}</h3>
                <h3 style={{marginLeft: 100}}>Jurusan : {dataDetailMhs.jurusan}</h3>
                <h3 style={{marginLeft: 100}}>Jumlah SKS : {dataDetailMhs.krs[0].jumlahSks+dataDetailMhs.krs[1].jumlahSks+dataDetailMhs.krs[2].jumlahSks}</h3>
                <h3 style={{marginLeft: 100}}>IPS : {
                    parseFloat((dataDetailMhs.krs[0].nilai+dataDetailMhs.krs[1].nilai+dataDetailMhs.krs[2].nilai)/3*(4/100)).toFixed(2)
                }</h3>
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