/***
 * Works for objects that have numeric fields i,j,metric
 */
class PriorityQueue {

    data;

    constructor() {
        this.data = [];
    }

    pushElement(cell) {

        if(!this.updateMetric(cell)) {
            this.data.push(cell);
        }

        this.data.sort(function compareMetric(firstCell, secondCell) {
            if(firstCell.metric === secondCell.metric) {
                return firstCell.h - secondCell.h;
            }
            else {
                return firstCell.metric - secondCell.metric;
            }
        });
    }

    popElement() {
        this.data.shift();
    }

    isTopElement(cell) {
        return cell.i === this.data[0].i && cell.j === this.data[0].j;
    }

    isNotEmpty() {
        return this.data.length > 0;
    }

    getBestCell() {
        return this.data[0];
    }

    contains(cell) {
        for(const node of this.data) {
            if(node.i === cell.i && node.j === cell.j) {
                return true;
            }
        }
        return false;
    }

    updateMetric(cell) {
        for(const node of this.data) {
            if(node.i === cell.i && node.j === cell.j) {
                if(cell.metric < node.metric) {
                    node.metric = cell.metric;
                    node.g = cell.g;
                    return true;
                }
            }
        }
        return false;
    }

}