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



}

function isNeighborExisting(cell,rows,columns) {

    return cell.i <= rows && cell.j <= columns;

}

function isNeighborNotWall(grid,cell) {

    return grid[cell.i][cell.j].content !== 1;

}

