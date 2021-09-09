function manhattanHeuristic(cell,end) {
    return Math.abs(cell.i-end.i) + Math.abs(cell.j-end.j);
}

export default manhattanHeuristic;