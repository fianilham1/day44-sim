import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
        const {currentPage, goToPage} = this.props
        return (
            <div className="nav-container">
                <div className="logo" >
                    <img style={{width: 50, marginLeft: 10}} src="https://www.pngfind.com/pngs/m/595-5951984_broken-shield-icon-png-transparent-png.png" alt=""/>
                </div>
                <div className="menu">
                  <Link to="/login">
                    <div onClick={() => goToPage("login")} className={`menu-item ${currentPage === "login" ? "active" : ""}`}>Login
                    </div>
                  </Link>
                  <Link to="/sks">
                    <div onClick={() => goToPage("sks")} className={`menu-item ${currentPage === "sks" ? "active" : ""}`}>SKS
                    </div>
                  </Link>
                  <Link to="/form">
                    <div onClick={() => goToPage("form")} className={`menu-item ${currentPage === "form" ? "active" : ""}`}>Form
                    </div>
                  </Link>
                  <Link to="/list-dosen">
                    <div onClick={() => goToPage("list-dosen")} className={`menu-item ${currentPage === "list-dosen" ? "active" : ""}`}> List Data Dosen
                    </div>
                  </Link>
                  <Link to="/list-jurusan">
                    <div onClick={() => goToPage("list-jurusan")} className={`menu-item ${currentPage === "list-jurusan" ? "active" : ""}`}> List Jurusan
                    </div>
                  </Link>
                  <Link to="/penerimaan">
                    <div onClick={() => goToPage("penerimaan")} className={`menu-item ${currentPage === "penerimaan" ? "active" : ""}`}>List Penerimaan
                    </div>
                  </Link>
                  <Link to="/list-mahasiswa">
                    <div onClick={() => goToPage("list-mahasiswa")} className={`menu-item ${currentPage === "list-mahasiswa" ? "active" : ""}`}>List Mahasiswa
                    </div>
                  </Link>
                
                    {/* <div
                        onClick={() => goToPage("login")}
                        className={`menu-item ${currentPage === "login" ? "active" : ""}`}>Login
                    </div>
                
                    <div
                        onClick={() => goToPage("sks")}
                        className={`menu-item ${currentPage === "sks" ? "active" : ""}`}>SKS
                    </div>
                    <div
                        onClick={() => goToPage("form")}
                        className={`menu-item ${currentPage === "form" ? "active" : ""}`}>Form
                    </div>

                    
                    <div
                      onClick={() => goToPage("list-dosen")}
                      className={`menu-item ${
                        currentPage === "list-dosen" ? "active" : ""
                      }`}
                    >
                      List Data Dosen
                    </div>
                    <div
                      onClick={() => goToPage("list-jurusan")}
                      className={`menu-item ${
                        currentPage === "list-jurusan" ? "active" : ""
                      }`}
                    >
                      List Jurusan
                    </div>
                    
                    <div

                        onClick={() => goToPage("penerimaan")}
                        className={`menu-item ${currentPage === "penerimaan" ? "active" : ""}`}>List Penerimaan
                    </div>
                    <div
                        onClick={() => goToPage("list-mahasiswa")}
                        className={`menu-item ${currentPage === "list-mahasiswa" ? "active" : ""}`}>List Penilaian
                        Mahasiswa

                    </div> */}

                </div>
            </div>
        );
    }
}

export default Nav;
