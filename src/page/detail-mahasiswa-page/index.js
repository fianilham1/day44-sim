import React,{Component} from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class DetailMahasiswaPage extends Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }

    componentDidMount(){
        this.props.changePage("/detail-krs-mahasiswa")
    }

    renderPageDetail=()=>{
        const {dataDetailMhs}=this.props
        const dataKrs = dataDetailMhs.krs
        console.log("detail mhs", dataDetailMhs)
        return dataKrs.map((data, index) => {
            return(
                <tr key={index}>
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
                return ''
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
                return ''
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

    renderButton = () => {
       
        if(this.props.userLogin.role!=="Mahasiswa") return (
            <Link to="/list-mahasiswa">
                <button  style={{marginLeft: 100, cursor: "pointer"}} >back
                </button>
            </Link>
        )

        return ''
    }

    render() {

        if (!this.props.isLogedIn)
        return <Redirect to="/login" />

        const {dataDetailMhs}=this.props
        return(
            <>

                <h1 style={{marginLeft: 100}}>Detail Mahasiswa</h1>
                {this.renderButton()}
                <h3 style={{marginLeft: 100}}>Nama : {dataDetailMhs.nama}</h3>
                <h3 style={{marginLeft: 100}}>NIM : {dataDetailMhs.nim}</h3>
                <h3 style={{marginLeft: 100}}>Jurusan : {dataDetailMhs.jurusan}</h3>
                <h3 style={{marginLeft: 100}}>Jumlah SKS : {this.getJumlahSks()}</h3>
                <h3 style={{marginLeft: 100}}>IPS : {this.getNilaiIPS().toFixed(2)}</h3>
                <h3 style={{marginLeft: 100}}>IPK : {this.getNilaiIPK().toFixed(2)}</h3>

                <table className="customers-list" width="80%">
                    <thead>
                        <tr>
                            <th>Mata Kuliah</th>
                            <th>Jumlah SKS</th>
                            <th>Nilai</th>
                            <th>Nilai</th>
                            <th>Nama Dosen</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderPageDetail()}
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailMahasiswaPage);