import {Component} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import "../styles/ToolSettings.css";
import eraser from "../img/eraser.png";
import wall from "../img/trowel.png";
import pencil from "../img/pencil.png";

class ToolSettings extends Component {

    constructor(props) {
        super(props);
    }

    handleClickErase() {

    }

    handleClickWall() {

    }

    handleClickTarget() {

    }

    render() {
        return (
            <div>
                <h1>Edit the grid with chosen tool</h1>
                <ButtonGroup>
                    <Button id={"tool-button"} onClick={this.handleClickErase}><img src={eraser} alt={""} id={"img-tool"}/>Erase</Button>
                    <Button id={"tool-button"} onClick={this.handleClickWall}><img src={wall} alt={""} id={"img-tool"}/>Wall</Button>
                    <Button id={"tool-button"} onClick={this.handleClickTarget}><img src={pencil} alt={""} id={"img-tool"}/>Target</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default ToolSettings;
