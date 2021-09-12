import {Component} from "react";
import {Gridline} from "./Gridline";

/***
 * This class handles coloring and wraps all grid data into Gridlines which wraps its data into Cells
 * also, passes up and down functions to handle clicking and dragging
 */
class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: this.props.grid,
        }
        // TODO -- move to use Cell class instead
    }

    unColorTheGrid(grid) {

        const {start, end} = this.props;

        for(const line of grid) {
            for(const cell of line) {
                if((cell.i !== start.i || cell.j !== start.j) || (cell.i !== end.i || cell.j !== end.j)) {
                    if(cell.color !== cellColors.WALL) {
                        cell.color = cellColors.NONE;
                    }
                }
            }
        }

    }

    colorSearchedArea(searched) {

        const {start, end} = this.state;

        for(const cell of searched.data) {
            if ((cell.i !== start.i || cell.j !== start.j) && (cell.i !== end.i || cell.j !== end.j)) {
                let currentI = cell.i;
                let currentJ = cell.j;
                this.state.grid[currentI-1][currentJ-1].color = cellColors.SEARCHED;
            }
        }

    }

    colorVisitedArea(visited) {

        for(const cell of visited.data) {
            let currentI = cell.i;
            let currentJ = cell.j;
            if(currentI !== this.state.testStart.i || currentJ !== this.state.testStart.j) {
                this.state.grid[currentI-1][currentJ-1].color = cellColors.VISITED;
            }
        }

    }

    // TODO -- rebuild that to not take so much data in
    colorThePath(node, visited, grid, pathLength) {
        if(node.iP !== undefined && node.jP !== undefined) {
            let currentI = node.i;
            let currentJ = node.j;
            this.state.grid[currentI-1][currentJ-1].color = cellColors.PATH;
            let parentI = node.iP;
            let parentJ = node.jP;
            this.colorThePath(visited.getElementAtPosition(parentI,parentJ),visited,pathLength+1);
        }
        else {
            return pathLength;
        }
    }


    render() {

        const {data, start, end, handleClick} = this.props;

        return(
          <div className={"map"}>
              {data.map(line => (
                  <Gridline
                  cells={line}
                  handleClick={handleClick}
                  start={start}
                  end={end}
                  >
                  </Gridline>
              ))}
          </div>
        );

    }
}

export default Grid;