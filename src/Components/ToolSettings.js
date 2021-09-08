import {Component} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import "../styles/ToolSettings.css";
import eraser from "../img/eraser.png";
import wall from "../img/trowel.png";
import pencil from "../img/pencil.png";

class ToolSettings extends Component {

    constructor(props) {
        super(props);

        this.handleClickErase = this.handleClickErase.bind(this);
        this.handleClickTarget = this.handleClickTarget.bind(this);
        this.handleClickWall = this.handleClickWall.bind(this);
    }

    handleClickErase() {
        let tool = "erase";
        this.props.handleTool(tool);
    }

    handleClickWall() {
        let tool = "wall";
        this.props.handleTool(tool);
    }

    handleClickTarget() {
        let tool = "target";
        this.props.handleTool(tool);
    }

    render() {

        const TYPES = ["tool-button","tool-button-clicked"];
        let buttonTypeErase = this.props.erase ? TYPES[1] : TYPES[0];
        let buttonTypeWall = this.props.wall ? TYPES[1] : TYPES[0];
        let buttonTypeTarget = this.props.target ? TYPES[1] : TYPES[0];

        return (
            <div>
                <h1>Edit the grid with chosen tool</h1>
                <ButtonGroup>
                    <Button id={buttonTypeErase} onClick={this.handleClickErase}><img src={eraser} alt={""} id={"img-tool"}/>Erase</Button>
                    <Button id={buttonTypeWall} onClick={this.handleClickWall}><img src={wall} alt={""} id={"img-tool"}/>Wall</Button>
                    <Button id={buttonTypeTarget} onClick={this.handleClickTarget}><img src={pencil} alt={""} id={"img-tool"}/>Target</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default ToolSettings;
