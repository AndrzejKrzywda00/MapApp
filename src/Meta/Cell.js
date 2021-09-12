const cellColors = {
    WALL: "wall",
    TARGET: "target",
    NONE: null,
    PATH: "path",
    VISITED: "visited",
    SEARCHED: "searched"
};

/***
 * This class represents cell in grid in pathfinding page
 * Wraps data like:
 * i,j position (starting from 1)(row, column)
 * color - defined by enum
 */
class Cell {

    constructor(data) {
        var i = data.i;
        var j = data.j;
        var parentI = data.parentI;
        var parentJ = data.parentJ;
        var h = data.h;
        var color = cellColors.NONE;
    }

    setParentData(data) {

    }

}