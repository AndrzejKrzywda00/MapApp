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
function Astar(grid,start,end) {

    const {rows,columns} = [grid.length,grid[0].length];

    // take starting point and find its neighbors
    let openList = new PriorityQueue();
    let closedList = new PriorityQueue();

    openList.pushElement(start);

    while(openList.isNotEmpty()) {

        let cell = openList.getBestCell();
        openList.popElement();

        let currentI = cell.i;
        let currentJ = cell.j;

        let cellTop = {i:currentI-1, j:currentJ, g:0, h:0, metric: Infinity};
        let cellDown = {i:currentI+1, j:currentJ, g:0, h:0, metric: Infinity};
        let cellRight = {i:currentI, j:currentJ+1, g:0, h:0, metric: Infinity};
        let cellLeft = {i:currentI, j:currentJ-1, g:0, h:0, metric: Infinity};

        let neighbors = [cellTop,cellDown,cellRight,cellLeft];

        for (const neighbor of neighbors) {

            if(isNeighborNotWall(grid,neighbor) && isNeighborExisting(neighbor,rows,columns)) {
                neighbor.g = cell.g + 1;
                neighbor.h = euclideanHeuristic(neighbor,end);
                neighbor.metric = neighbor.g + neighbor.h;

                if(!closedList.contains(neighbor)) {
                    openList.pushElement(neighbor);
                }
            }
        }

        if(openList.isTopElement(end)) {
            return true;
        }

        closedList.pushElement(cell);
    }
    return false;
}

function isNeighborExisting(cell,rows,columns) {

    return (cell.i <= rows && cell.i > 0) && (cell.j <= columns && cell.j > 0);

}

function isNeighborNotWall(grid,cell) {

    return grid[cell.i][cell.j].content !== 1;

}

function euclideanHeuristic(cell,end) {
    return Math.sqrt((cell.i-end.i)*(cell.i-end.i) + (cell.j-end.j)*(cell.j-end.j));
}

function manhattanHeuristic(cell,end) {
    return Math.abs(cell.i-end.i) + Math.abs(cell.j-end.j);
}

