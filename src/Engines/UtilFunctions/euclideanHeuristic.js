function euclideanHeuristic(cell,end) {
    return Math.sqrt((cell.i-end.i)*(cell.i-end.i) + (cell.j-end.j)*(cell.j-end.j));
}

export default euclideanHeuristic;