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


    getJumlahSks = () => {
        const {dataDetailMhs}=this.props
        let jumlahSks = 0
        if(dataDetailMhs.krs.length!==0){
            dataDetailMhs.krs.map((mk,index)=>{
                jumlahSks += mk.jumlahSks
            })
            return jumlahSks
        }
        return 0
    }

    getNilaiIPS = () => {
        const {dataDetailMhs}=this.props
        let totalPoin = 0
        let jumlahSks = 0
        if(dataDetailMhs.krs.length!==0){
            dataDetailMhs.krs.map((mk,index)=>{
                totalPoin += mk.jumlahSks*this.getPoin(mk.nilaiHuruf)
                jumlahSks += mk.jumlahSks
               
            })
         
            return (totalPoin/jumlahSks)
        }

        return 0.00
    }

    getNilaiIPK = () => {
        const {dataDetailMhs}=this.props
        let ipkSekarang = dataDetailMhs.ipk

        if(ipkSekarang!==0.00 && this.getNilaiIPS()!==0.00){
            return (ipkSekarang+this.getNilaiIPS())/2
        }

        return ipkSekarang
    }

    getPoin = huruf => {
        if(huruf === "A"){
            return 4
        }else if (huruf === "B"){
            return 3
        } else if (huruf === "C"){
            return 2
        } else if (huruf === "D"){
            return 1
        }else if (huruf === "E"){
            return 0
        } else {
            return 0
        }
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
                <h3 style={{marginLeft: 100}}>Jumlah SKS : {this.getJumlahSks()}</h3>
                <h3 style={{marginLeft: 100}}>IPS : {this.getNilaiIPS().toFixed(2)}</h3>
                <h3 style={{marginLeft: 100}}>IPK : {this.getNilaiIPK().toFixed(2)}</h3>

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