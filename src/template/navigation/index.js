import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import { FirebaseContext } from '../../config/firebase';

class NavFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false
    };
  }

  componentDidMount(){
    this.props.firebase.currentLoggedFirebaseUser(user=>{
      if(user) {
        this.setState({
          isLogin:true
        })

      }else{

      }
    })
  }

  logoutHandler = e => {
   
    this.props.firebase
    .logoutFirebaseUser()
    .then(res => 
      this.props.changePage("/login"),
        Swal.fire({
            icon: 'success',
            title: 'Logout',
            showConfirmButton: false,
            timer: 1500
          }),
          this.setState({
            isLogin:false
          })
        )
    .catch(err => 
        Swal.fire({
            icon: 'error',
            title: err.message,
            showConfirmButton: false,
            timer: 1500
          })
        )

  }

  renderWelcome = () => {
    
    if(this.state.isLogin) return <div className="welcome"> Welcome, <span className="nameWelcome">nama?</span><div className="nameWelcome">nama?</div> </div>
  
    return ''
  }


  renderLoggedNav = () => {
    const {currentPage} = this.props

    if(this.state.isLogin) return (
      <Link to="/login">
      <div onClick={this.logoutHandler} className={`menu-item ${currentPage === "/logout" ? "active" : ""}`}>Logout
      </div>
      </Link>
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
    if(this.state.isLogin) return (
        <>
                  <Link to="/dashboard">
                    <div className={`menu-item ${currentPage === "/dashboard" ? "active" : ""}`}>Dashboard
                    </div>
                  </Link>
                  <Link to="/book-park">
                    <div className={`menu-item ${currentPage === "/book-park" ? "active" : ""}`}>Book Parking
                    </div>
                  </Link>
                  <Link to="/sign-up">
                    <div className={`menu-item ${currentPage === "/sign-up" ? "active" : ""}`}>Sign Up
                    </div>
                  </Link>
                
        </>
      )

    return ''
  }

    render() {
      console.log(this.state.isLogin)
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

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <FirebaseContext.Consumer>
      {firebase => <NavFirebase {...this.props} firebase={firebase} />}
      </FirebaseContext.Consumer>
     );
  }
}

// const mapStateToProps = state => ({
//   currentPage: state.pageConfig.currentPage,
//   isLogedIn: state.Auth.statusLogin,
//   userLogin: state.Auth.userLogin
// })

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch({ type: page })
})

// export default Detail;
export default connect(null,mapDispatchToProps)(Nav);
