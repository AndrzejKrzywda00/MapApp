import {Component} from "react";
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
            newStart: false,
            testStart: {i:15,j:15,g:0,h:Infinity,metric:Infinity},
            testEnd: {i:21,j:32},
            updateTrigger: false,
            time: 0
        }

        this.handleClick = this.handleClick.bind(this);
        // TODO -- add dragging and painting, clean the code!!!
    }

    handleClick(position) {

        let currentI = position[0];
        let currentJ = position[1];

        let tool = localStorage.getItem("tool");

        if(tool === "target") {
            if(this.state.grid[currentI-1][currentJ-1].content !== 1) {
                let newStart = {i:currentI, j:currentJ, g:0, h:Infinity, metric: Infinity};
                this.setState({testStart: newStart});
                this.setState({newStart: true});
            }
        }

        if(tool === "erase") {
            this.state.grid[currentI-1][currentJ-1].content = 0;
            this.state.grid[currentI-1][currentJ-1].color = null;
            this.setState({updateTrigger: true});
        }

        if(tool === "wall") {
            this.state.grid[currentI-1][currentJ-1].content = 1;
            this.state.grid[currentI-1][currentJ-1].color = "wall";
            this.setState({updateTrigger: true});
        }

    }

    async componentDidMount() {

        let mainGrid = [];
        let line = [];
        for(let i=1; i<=this.state.size_x; i++) {
            for (let j=1; j<=this.state.size_y; j++) {
                if(i === 5 && j>10 && j<50) {
                    let item = {i:i,j:j,content:1,color:"wall"};
                    line.push(item);
                }
                else {
                    let item = {i: i, j: j, content: 0, color: "white"};
                    line.push(item);
                }
            }
            mainGrid.push(line);
            line = [];
        }
        this.setState({grid: mainGrid});
        this.setState({gridLoaded: true});
    }

    colorTheGrid(node,visited,grid,pathLength) {

        if(node.iP !== undefined && node.jP !== undefined) {
            let currentI = node.i;
            let currentJ = node.j;
            this.state.grid[currentI-1][currentJ-1].color = "path";
            let parentI = node.iP;
            let parentJ = node.jP;
            this.colorTheGrid(visited.getElementAtPosition(parentI,parentJ),visited,pathLength+1);
        }
        else {
            return pathLength;
        }

    }

    colorTheSearchedArea(grid,visited) {

        for(const cell of visited.data) {
            let currentI = cell.i;
            let currentJ = cell.j;
            if(currentI !== this.state.testStart.i || currentJ !== this.state.testStart.j) {
                grid[currentI-1][currentJ-1].color = "visited";
            }
        }
    }

    colorLeftOutArea(leftOut) {

        const {testStart, testEnd} = this.state;

        for(const cell of leftOut.data) {
            if ((cell.i !== testStart.i || cell.j !== testStart.j) && (cell.i !== testEnd.i || cell.j !== testEnd.j)) {
                let currentI = cell.i;
                let currentJ = cell.j;
                this.state.grid[currentI - 1][currentJ - 1].color = "searched";
            }
        }

    }

    updateData(data) {
        // what data to send to DataOutput Component ?
        // path concluded
        // length of the path
        // time
    }

    unColorTheGrid(grid) {

        const {testStart, testEnd} = this.state;

        for(const line of grid) {
            for(const cell of line) {
                if((cell.i !== testStart.i || cell.j !== testStart.j) || (cell.i !== testEnd.i || cell.j !== testEnd.j)) {
                    if(cell.color !== "wall") {
                        cell.color = null;
                    }
                }
            }
        }

    }

    render() {

        const {gridLoaded, grid, testStart, testEnd, newStart} = this.state;

        if(gridLoaded) {
            if (newStart) {
                this.unColorTheGrid(grid);
            }
            let t0 = performance.now();
            let output = astar(grid, testStart, testEnd);
            let t1 = performance.now();
            let time = t1 - t0;
            let pathLength;
            let pathConcluded = false;
            let response;
            if (output !== false) {
                let path = output[0];
                let leftOut = output[1];
                this.colorTheSearchedArea(grid, path, grid);
                this.colorLeftOutArea(leftOut);
                let pathLength = this.colorTheGrid(path.getClosestElement(), path, grid, 0);
                response = {time: time, pathLength: pathLength, pathConcluded: true};
            }
            response = {time: time, pathLength: null, pathConcluded: false};
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
