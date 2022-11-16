import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function Nav() {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My Stocks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/market">Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">More</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}
export default Nav;