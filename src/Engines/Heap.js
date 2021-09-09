/***
 * This is my implementation of heap to store data in wise way.
 * This class stores cells which have specific fields
 */
class Heap {

    constructor() {
        this.heap = [null];
    }

    insert(cell) {

        // pushing at the end
        this.heap.push(cell);

        // adjusting position to make smallest on top
        if(this.heap.length > 1) {

            let currentPosition = this.heap.length-1;
            let parentPosition = Math.floor(currentPosition/2);

            while (currentPosition > 1 && this.heap[parentPosition] > this.heap[currentPosition]) {
                [this.heap[parentPosition], this.heap[currentPosition]] = [this.heap[currentPosition],this.heap[parentPosition]];
                currentPosition = Math.floor(currentPosition/2);
            }
        }

    }

    delete(cell) {

    }

    getChildren(cell) {

    }

    getMinElement() {
        return this.heap[1];
    }

    getMaxElement() {

    }



}