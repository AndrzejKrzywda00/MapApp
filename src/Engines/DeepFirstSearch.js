import isNeighborNotWall from "./UtilFunctions/isNeighborNotWall";
import isNeighborExisting from "./UtilFunctions/isNeighborExisting";

function DeepFirstSearch(grid,start,end,cell,visitedGrid) {

    const rows = grid.length;
    const columns = grid[0].length;

    visitedGrid[start.i-1][start.j-1].visited = true;

    if(cell.i !== end.i || cell.j !== end.j) {

        let currentI = cell.i;
        let currentJ = cell.j;

        let cellTop = {i:currentI-1, j:currentJ, iP:currentI, jP:currentJ};
        let cellDown = {i:currentI+1, j:currentJ, iP:currentI, jP:currentJ};
        let cellRight = {i:currentI, j:currentJ+1, iP:currentI, jP:currentJ};
        let cellLeft = {i:currentI, j:currentJ-1, iP:currentI, jP:currentJ};

        let neighbors = [cellTop,cellDown,cellRight,cellLeft];

        for(const neighbor of neighbors) {

            if(isNeighborExisting(neighbor,rows,columns)) {
                if(isNeighborNotWall(grid,neighbor)) {
                    if(visitedGrid[neighbor.i-1][neighbor.j-1].visited === false) {
                        DeepFirstSearch(grid,start,end,neighbor,visitedGrid);
                    }
                }
            }

        }

    }
    else {
        return visitedGrid;
    }

}

export default DeepFirstSearch;