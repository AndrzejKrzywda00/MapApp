import React, {Component} from 'react';
import "../styles/Settings.css";
import ToolSettings from "./ToolSettings";
import DataOutput from "./DataOutput";
import PathFindingMainSettings from "./PathFindingMainSettings";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            erase: false,
            wall: false,
            target: true
        }
        this.handleTool = this.handleTool.bind(this);
    }

    handleTool(tool) {

        switch(tool) {

            case "erase":
                if(this.state.erase === false) {
                    this.setState({erase: true});
                    this.setState({wall: false});
                    this.setState({target: false});
                }
                break;
            case "wall":
                if(this.state.wall === false) {
                    this.setState({erase: false});
                    this.setState({wall: true});
                    this.setState({target: false});
                }
                break;
            case "target":
                if(this.state.target === false) {
                    this.setState({erase: false});
                    this.setState({wall: false});
                    this.setState({target: true});
                }
                break;
        }

    }


    render() {

        const {erase,wall,target} = this.state;

        return (
            <div className={"options"}>
                <div className={"column"}>
                    <PathFindingMainSettings/>
                </div>
                <div className={"column"}>
                    <ToolSettings handleTool={this.handleTool} erase={erase} wall={wall} target={target}/>
                </div>
                <div className={"column"}>
                    <DataOutput/>
                </div>
            </div>
        );
    }
}

export default Settings;