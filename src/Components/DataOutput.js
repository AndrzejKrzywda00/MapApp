import {Component} from "react";

class DataOutput extends Component {

    render() {

        const time = localStorage.getItem("time");

        return (
            <div>
                <h1>Algorithm output</h1>
                <h3>Computing time: {time} ms</h3>
                <h3>Shortest path: </h3>
                <h3>Path concluded: </h3>
            </div>
        );
    }

}

export default DataOutput;
