import React, {Component} from 'react';
import "../styles/Settings.css";

class Settings extends Component {
    render() {
        return (
            <div className={"options"}>
                <div className={"column"}>
                    <h1>This column will adjust which algorithm to use & how big is the grid</h1>
                </div>
                <div className={"column"}>
                    <h1>In this column you will choose to paint target, start and walls, erase</h1>
                </div>
                <div className={"column"}>
                    <h1>Here will be algorithm data output</h1>
                </div>

            </div>
        );
    }
}

export default Settings;