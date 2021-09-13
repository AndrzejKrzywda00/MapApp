import {Component} from "react";
import Grid from "./Grid";
import astar from "../Engines/Astar";
import cellColors from "../Meta/Cell";

class PathFindingGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: 30,
            columns: 70,
            gridLoaded: false,
            grid: [],
            start: {i:15, j:15, g:0, h:Infinity, metric:Infinity, iP:undefined, jP:undefined},
            end: {i:21,j:32},
            path: [],
            visited: [],
            searched: [],
            dataLoaded: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.setTool = this.setTool.bind(this);
        this.generateStartingGrid = this.generateStartingGrid.bind(this);
        this.solveTheProblem = this.solveTheProblem.bind(this);
    }

    handleClick(position) {

        let currentI = position[0];
        let currentJ = position[1];

        let tool = localStorage.getItem("tool");
        let toolChosen = this.setTool(tool,currentI,currentJ);

        if(toolChosen === true) {
            this.solveTheProblem();
        }
    }

    getPath(node,visited,path) {

        let parentI = node.iP;
        let parentJ = node.jP;

        if(parentI !== undefined && parentJ !== undefined) {
            path.push(node);
            this.getPath(visited.getElementAtPosition(parentI,parentJ),visited,path);
        }
        else {
            return path;
        }

    }

    setTool(tool,currentI,currentJ) {

        if(tool === "target") {
            if(this.state.grid[currentI-1][currentJ-1].content !== 1) {
                let newStart = {i:currentI, j:currentJ, g:0, h:Infinity, metric: Infinity};
                return newStart;
            }
        }

        if(tool === "erase") {
            this.state.grid[currentI-1][currentJ-1].content = 0;
            this.state.grid[currentI-1][currentJ-1].color = cellColors.NONE;
            return true;
        }

        if(tool === "wall") {
            this.state.grid[currentI-1][currentJ-1].content = 1;
            this.state.grid[currentI-1][currentJ-1].color = cellColors.WALL;
            return true;
        }

        return false;

    }

    async componentDidMount() {

        await this.generateStartingGrid();

        if(this.state.gridLoaded) {
            await this.solveTheProblem();
        }

    }

    solveTheProblem() {

        let t0 = performance.now();
        let result = astar(this.state.grid, this.state.start, this.state.end);
        let t1 = performance.now();

        if(result !== false) {

            let visited = result[0];
            let searched = result[1];
            let path = this.getPath(visited.getClosestElement(),visited,[]);

            this.setState({visited: visited});
            this.setState({searched: searched});
            this.setState({path: path});
            this.setState({dataLoaded: true});
        }

    }

    generateStartingGrid() {

        let mainGrid = [];

        for(let i=1; i<=this.state.rows; i++) {
            let line = [];
            for (let j=1; j<=this.state.columns; j++) {
                if(i === 5 && j>10 && j<50) {
                    // here generating a simple starting wall
                    let item = {i: i ,j: j, content: 1, color: cellColors.WALL};
                    line.push(item);
                }
                else {
                    let item = {i: i, j: j, content: 0, color: cellColors.NONE};
                    line.push(item);
                }
            }
            mainGrid.push(line);
            line = [];
        }

        this.setState({grid: mainGrid});
        this.setState({gridLoaded: true});
    }

    render() {

        const {dataLoaded, grid, start, end, path, visited, searched} = this.state;

        return (
            dataLoaded ?
            <div>
                <Grid
                data={grid}
                start={start}
                end={end}
                path={path}
                visited={visited}
                searched={searched}
                handleClick={this.handleClick}
                >
                </Grid>
            </div>
                :
                <div>
                    <p>Loading ...</p>
                </div>
        );
    }

}

export default PathFindingGrid;
