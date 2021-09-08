import React, {Component} from 'react';
import appLogo from '../img/mp_logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav className={"nav"}>
                <img src={appLogo} alt={appLogo} className={"app-logo"}/>
                <h1 className={"app-name"}>Map App</h1>
                <div className={"links"}>
                    <Link className={"link-item"} to={"/path-finding"}>Pathfinding</Link>
                    <Link className={"link-item"} to={"/network-flow"}>Network flow</Link>
                    <Link className={"link-item"} to={"/traveling-salesman-problem"}>TSP</Link>
                    <Link className={"link-item"} to={"/routing-algorithm"}>Routing</Link>
                    <Link className={"link-item"} to={"/about"}>About</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;