import {Component} from "react";
import {Cell} from "./Cell";
import "../styles/PathFindingGrid.css";
import {Gridline} from "./Gridline";
import astar from "../Engines/Astar";

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
            grid: [],
            testStart: {i:19,j:3,g:0},
            testEnd: {i:7,j:23}
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
                let item = {i: i, j: j, content: 0};
                line.push(item);
            }
            mainGrid.push(line);
            line = [];
        }
        this.setState({grid: mainGrid});
        this.setState({gridLoaded: true});

    }

    render() {

        const {gridLoaded, grid, testStart, testEnd} = this.state;

        let visited = null;

        if(gridLoaded) {
            visited = astar(grid,testStart,testEnd);
        }


        return (
            gridLoaded ?
            <div className={"map"}>
                {grid.map(line => (
                    <Gridline
                        cells={line}
                        handleClick={this.handleClick}
                        start={testStart}
                        end={testEnd}
                        visited={visited}
                    />
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
