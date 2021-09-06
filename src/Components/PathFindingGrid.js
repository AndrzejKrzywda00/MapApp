import {Component} from "react";
import {Cell} from "./Cell";
import "../styles/PathFindingGrid.css";
import {Gridline} from "./Gridline";

class PathFindingGrid extends Component {

    constructor(props) {
        super(props);

        // size_x: 30
        // size_y: 70
        // cell size: 20px x 20px

        this.state = {
            size_x: 30,
            size_y: 70,
            gridLoaded: false,
            grid: []
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

    }

    componentDidMount() {

        let mainGrid = [];
        let line = [];
        for(let i=1; i<=this.state.size_x; i++) {
            for (let j=1; j<=this.state.size_y; j++) {
                let item = {i: i, j: j};
                line.push(item);
            }
            mainGrid.push(line);
            line = [];
        }
        this.setState({grid: mainGrid});
        this.setState({gridLoaded: true});
    }


    render() {
        const {gridLoaded, grid} = this.state;
        return (
            gridLoaded ?
            <div className={"map"}>
                {grid.map(line => (
                    <Gridline cells={line} handleClick={this.handleClick}/>
                ))}
            </div>
                :
                <div>
                    <p>Loading ...</p>
                </div>
        );
    }

}

export default PathFindingGrid;
