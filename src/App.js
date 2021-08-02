import React, { Component } from 'react';
import {Body, Header, Nav} from "./template";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "list-mahasiswa"
        }
    }

    setPage = page => this.setState({ page: page ? page : "list" })

    render() {
        const { page } = this.state
        return (
            <>
                <Header></Header>
                <Nav currentPage={page} goToPage={this.setPage} />
                <Body currentPage={page} goToPage={this.setPage} />
            </>
        );
    }
}

export default App;

/**
 -pendaftaran mahasiswa
    -form create
 -penerimaan mahasiswa
    -list penerimaan dr pendaftaran/mahasiswa masuk/resmi
 -master/penilaian mahasiswa
    -list
        -column
         -id
         -nama
         -NIM
         -jurusan
         -strata
         -IPK
         -jumlah SKS
 -master dosen
    -list
        -column
         -id
         -nama
         -NID
         -jurusan
 -master jurusan
    -list
        -column
         -id
         -nama jurusan
 -master SKS
    -list
        -column
         -id
         -nama mata kuliah
         -jumlah sks
         -jurusan mata kuliah

 */