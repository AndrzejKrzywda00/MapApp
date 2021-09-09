function isNeighborNotWall(grid,cell) {
    return grid[parseInt(cell.i)-1][parseInt(cell.j)-1].content !== 1;
}

export default isNeighborNotWall;