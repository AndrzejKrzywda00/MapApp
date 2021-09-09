import PriorityQueue from "./PriorityQueue";
import isNeighborNotWall from "./UtilFunctions/isNeighborNotWall";
import isNeighborExisting from "./UtilFunctions/isNeighborExisting";
import manhattanHeuristic from "./UtilFunctions/manhattanHeuristic";

/***
 *
 * @param grid is the 2d array or array of arrays which single cell contains three parameters:
 * i - vertical position or row,
 * j - horizontal position or column,
 * and content {0: empty, 1: wall}
 *
 * @param start is the cell with information of position of starting point
 * @param end is the cell to which the path should be found
 *
 * @return an object with shortest path or info that path couldn't be found
 */
function astar(grid,start,end) {

    const rows = grid.length;
    const columns = grid[0].length;

    // take starting point and find its neighbors
    let openList = new PriorityQueue();
    let closedList = new PriorityQueue();

    openList.pushElement(start);

    while(openList.isNotEmpty()) {

        let cell = openList.getBestCell();
        openList.popElement();

        closedList.pushElement(cell);

        let currentI = cell.i;
        let currentJ = cell.j;

        let cellTop = {i:currentI-1, j:currentJ, g:0, h:0, metric: Infinity, iP:currentI, jP:currentJ};
        let cellDown = {i:currentI+1, j:currentJ, g:0, h:0, metric: Infinity, iP:currentI, jP:currentJ};
        let cellRight = {i:currentI, j:currentJ+1, g:0, h:0, metric: Infinity, iP:currentI, jP:currentJ};
        let cellLeft = {i:currentI, j:currentJ-1, g:0, h:0, metric: Infinity, iP:currentI, jP:currentJ};

        let neighbors = [cellTop,cellDown,cellRight,cellLeft];

        for (const neighbor of neighbors) {

            if(isNeighborExisting(neighbor,rows,columns)) {
                if(isNeighborNotWall(grid,neighbor)) {
                    neighbor.g = cell.g + 1;
                    neighbor.h = manhattanHeuristic(neighbor,end);
                    neighbor.metric = neighbor.g + neighbor.h;

                    if(!closedList.contains(neighbor)) {
                        openList.pushElement(neighbor);
                    }
                }
            }
        }

        if(openList.contains(end)) {
            return [closedList,openList];
        }

    }
    return false;
}

export default astar;

