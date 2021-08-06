import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutHandler = e => {
    this.props.doLogout()
    this.props.changePage("/login")
    Swal.fire({
      icon: 'success',
      title: 'Logout',
      showConfirmButton: false,
      timer: 1500
    })
  }

  renderWelcome = () => {
    if (this.props.isLogedIn) return <div className="welcome"> Welcome, <span className="nameWelcome">{this.props.userLogin.name}</span><div className="nameWelcome">{this.props.userLogin.role}</div> </div>

    return <div></div>
  }

  renderLoggedNav = () => {
    const {currentPage} = this.props
    if (this.props.isLogedIn) return (
      <>
      <Link to="/login">
        <div onClick={this.logoutHandler} className={`menu-item ${currentPage === "/logout" ? "active" : ""}`}>Logout
        </div>
      </Link>
      </>
    )

    return (
      <>
      <Link to="/login">
        <div className={`menu-item ${currentPage === "/login" ? "active" : ""}`}>Login
        </div>
      </Link>
      </>
    )
  }

  renderNav = () => {
    const {currentPage} = this.props
    if (this.props.isLogedIn && this.props.userLogin.role==="Admin"){
      return (
        <>
                  <Link to="/list-user">
                    <div className={`menu-item ${currentPage === "/list-user" ? "active" : ""}`}>List User
                    </div>
                  </Link>
                  <Link to="/sign-up">
                    <div className={`menu-item ${currentPage === "/sign-up" ? "active" : ""}`}>Sign Up
                    </div>
                  </Link>
                  <Link to="/list-sks">
                    <div className={`menu-item ${currentPage === "/list-sks" ? "active" : ""}`}>SKS
                    </div>
                  </Link>
                  <Link to="/registrasi-mahasiswa">
                    <div className={`menu-item ${currentPage === "/registrasi-mahasiswa" ? "active" : ""}`}>Registrasi Mhs
                    </div>
                  </Link>
                  <Link to="/list-dosen">
                    <div className={`menu-item ${currentPage === "/list-dosen" ? "active" : ""}`}> List Data Dosen
                    </div>
                  </Link>
                  <Link to="/list-jurusan">
                    <div className={`menu-item ${currentPage === "/list-jurusan" ? "active" : ""}`}> List Jurusan
                    </div>
                  </Link>
                  <Link to="/penerimaan">
                    <div className={`menu-item ${currentPage === "/penerimaan" ? "active" : ""}`}>List Penerimaan
                    </div>
                  </Link>
                  <Link to="/list-mahasiswa">
                    <div className={`menu-item ${currentPage === "/list-mahasiswa" ? "active" : ""}`}>List Mahasiswa
                    </div>
                  </Link>
        </>
      )
    }

    if (this.props.isLogedIn && this.props.userLogin.role==="Mahasiswa") return (
      <>
                  <Link to="/detail-krs-mahasiswa">
                    <div className={`menu-item ${currentPage === "/detail-krs-mahasiswa" ? "active" : ""}`}>Krs Mahasiswa
                    </div>
                  </Link>
      </>
    )

    return ''
  }

    render() {
        return (
            <div className="nav-container">
                <div className="logo" >
                    <img style={{width: 50, marginLeft: 10}} src="https://www.pngfind.com/pngs/m/595-5951984_broken-shield-icon-png-transparent-png.png" alt=""/>
                </div>
                <div className="menu">
                  {this.renderLoggedNav()}
                  {this.renderNav()}
                  
                </div>
                {this.renderWelcome()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  currentPage: state.pageConfig.currentPage,
  isLogedIn: state.Auth.statusLogin,
  userLogin: state.Auth.userLogin
})

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch({ type: "LOGOUT" }),
  changePage: page => dispatch({ type: page })
})

// export default Detail;
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
