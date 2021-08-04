import React, { Component } from 'react';
import {Body, Header, Nav} from "./template";
import {BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "list-mahasiswa",
            view:""
        }
    }

    setPage = page => this.setState({ 
        page: page ? page : "list" 
    })



    render() {
        const { page } = this.state
        return (
     
            <Router>
                <Header></Header>
                <Nav/>
                <Body currentPage={page} goToPage={this.setPage} />
            </Router>
               
  
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