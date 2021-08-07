import React, { Component } from 'react';
import { FirebaseContext } from '../../config/firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class DashboardFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin:false
         }
    }

    componentDidMount(){
        this.props.changePage("/dashboard")
        this.props.firebase.currentLoggedFirebaseUser(user=>{
            if(user) {
              this.setState({
                isLogin:true
              })
            }else{
              
            }
          })
    }

    componentWillUnmount(){
        this.setState({
            isLogin:false
        })
    }
    render() { 
        // if (!this.state.isLogin)
        // return <Redirect to="/login" />

        return ( 
            <>
            <h1>WELCOME</h1>
            </>
         );
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
            {firebase => <DashboardFirebase {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
} 


const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch({ type: page })
})

export default connect(null, mapDispatchToProps)(Dashboard);