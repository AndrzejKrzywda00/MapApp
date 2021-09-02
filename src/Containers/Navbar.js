import React, {Component} from 'react';
import appLogo from '../img/mp_logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className={"nav"}>
                <nav>
                    <img src={appLogo} alt={appLogo} className={"app-logo"}/>
                    <h1>Map App</h1>
                    <div className={"links"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/path-finding"}>Pathfinding</Link>
                        <Link to={"/network-flow"}>Network flow</Link>
                        <Link to={"/about"}>About</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;