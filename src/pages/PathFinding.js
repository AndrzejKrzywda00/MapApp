import React, {Component} from 'react';
import Settings from "../Components/Settings";
import PathFindingGrid from "../Components/PathFindingGrid";
import ReadMore from "../Components/ReadMore";

class PathFinding extends Component {
    render() {
        return (
            <div>
                <Settings/>
                <PathFindingGrid/>
                <ReadMore/>
            </div>
        );
    }
}

export default PathFinding;
