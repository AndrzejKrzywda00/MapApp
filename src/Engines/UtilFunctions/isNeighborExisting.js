function isNeighborExisting(cell,rows,columns) {
    return (cell.i <= rows && cell.i > 0) && (cell.j <= columns && cell.j > 0);
}

export default isNeighborExisting;