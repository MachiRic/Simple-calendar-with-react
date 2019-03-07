import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="">
                <div className="container">
                    <Link to="/" style={{ textDecoration: "white", color: "white" }}>
                        <div className="row align-items-center mx-auto">
                            <h1 className="mx-auto">Calendar</h1>
                        </div>
                    </Link>
                </div>
            </nav >
        );
    }
}

export default Header;
