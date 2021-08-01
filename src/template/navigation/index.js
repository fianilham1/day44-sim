import React, {Component} from 'react';
import './nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {currentPage, goToPage} = this.props
        return (
            <div className="nav-container">
                <div className="logo">
                    Ini Logo
                </div>
                <div className="menu">
                    <div
                        onClick={() => goToPage("list")}
                        className={`menu-item ${currentPage === "list" ? "active" : ""}`}>List
                    </div>
                    <div
                        onClick={() => goToPage("form")}
                        className={`menu-item ${currentPage === "form" ? "active" : ""}`}>Form
                    </div>
                    <div
                        onClick={() => goToPage("login")}
                        className={`menu-item ${currentPage === "login" ? "active" : ""}`}>Login
                    </div>
                    <div
<<<<<<< HEAD
                        onClick={() => goToPage("list-mahasiswa")}
                        className={`menu-item ${currentPage === "list-mahasiswa" ? "active" : ""}`}>List Penilaian Mahasiswa
=======
                        onClick={() => goToPage("penerimaan")}
                        className={`menu-item ${currentPage === "penerimaan" ? "active" : ""}`}>List Penerimaan
>>>>>>> 0881797be63094044e02bd190c0ce51f68e2740c
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;