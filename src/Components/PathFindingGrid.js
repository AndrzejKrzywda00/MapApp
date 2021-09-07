import {Component} from "react";
import {Cell} from "./Cell";
import "../styles/PathFindingGrid.css";
import {Gridline} from "./Gridline";
import astar from "../Engines/Astar";

class PathFindingGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size_x: 30,
            size_y: 70,
            gridLoaded: false,
            grid: [],
            testStart: {i:1,j:1,g:0,h:0,metric:Infinity},
            testEnd: {i:30,j:70}
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
                let item = {i: i, j: j, content: 0, color: "white"};
                line.push(item);
            }
            mainGrid.push(line);
            line = [];
        }
        this.setState({grid: mainGrid});
        this.setState({gridLoaded: true});

    }

    colorTheGrid(node,visited) {

        if(node.iP !== undefined && node.jP !== undefined) {
            let currentI = node.i;
            let currentJ = node.j;
            this.state.grid[currentI-1][currentJ-1].color = "path";
            let parentI = node.iP;
            let parentJ = node.jP;
            this.colorTheGrid(visited.getElementAtPosition(parentI,parentJ),visited);
        }
        else {
            return true;
        }

    }

    render() {

        const {gridLoaded, grid, testStart, testEnd} = this.state;

        if(gridLoaded) {
            let visited = astar(grid,testStart,testEnd);
            console.log(visited.data);
            this.colorTheGrid(visited.data[0],visited);
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
