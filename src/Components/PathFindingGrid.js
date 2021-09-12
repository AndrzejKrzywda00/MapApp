import {Component} from "react";
import "../styles/PathFindingGrid.css";
import {Grid} from "./Grid";
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
            start: {i:15,j:15,g:0,h:Infinity,metric:Infinity},
            end: {i:21,j:32},
            time: 0
        }

        this.handleClick = this.handleClick.bind(this);
        // TODO -- add dragging and painting, clean the code!!!
    }

    handleClick(position) {

        let currentI = position[0];
        let currentJ = position[1];

        let tool = localStorage.getItem("tool");
        setTool(tool,currentI,currentJ);
    }

    getPath() {

    }

    getVisited() {

    }

    getSearched() {

    }

    setTool(tool,currentI,currentJ) {

        if(tool === "target") {
            if(this.state.grid[currentI-1][currentJ-1].content !== 1) {
                let newStart = {i:currentI, j:currentJ, g:0, h:Infinity, metric: Infinity};
                this.setState({start: newStart});
                this.setState({newStart: true});
            }
        }

        if(tool === "erase") {
            this.state.grid[currentI-1][currentJ-1].content = 0;
            this.state.grid[currentI-1][currentJ-1].color = cellColors.NONE;
        }

        if(tool === "wall") {
            this.state.grid[currentI-1][currentJ-1].content = 1;
            this.state.grid[currentI-1][currentJ-1].color = cellColors.WALL;
        }

    }

    async componentDidMount() {
        this.generateStartingGrid();
    }

    generateStartingGrid() {

        let mainGrid = [];

        for(let i=1; i<=this.state.size_x; i++) {
            let line = [];
            for (let j=1; j<=this.state.size_y; j++) {
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

        const {gridLoaded, grid, testStart, testEnd} = this.state;

        return (
            gridLoaded ?
            <div>
                <Grid
                data={grid}
                start={testStart}
                end={testEnd}
                path={}
                visited={}
                searched={}
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
