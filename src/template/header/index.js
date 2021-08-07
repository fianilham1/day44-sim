import React, { Component } from 'react'
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <><h1 className="headerName">Aplikasi Parking System Mall of WIBU</h1></>
        );
    }
}

export default Header;