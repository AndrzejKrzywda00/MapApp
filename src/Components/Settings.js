import React, {Component} from 'react';
import "../styles/Settings.css";
import ToolSettings from "./ToolSettings";
import DataOutput from "./DataOutput";
import PathFindingMainSettings from "./PathFindingMainSettings";

class Settings extends Component {
    render() {
        return (
            <div className={"options"}>
                <div className={"column"}>
                    <PathFindingMainSettings/>
                </div>
                <div className={"column"}>
                    <ToolSettings/>
                </div>
                <div className={"column"}>
                    <DataOutput/>
                </div>
            </div>
        );
    }
}

export default Settings;