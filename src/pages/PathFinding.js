import React, {Component} from 'react';
import Settings from "../Components/Settings";
import PathFindingGrid from "../Components/PathFindingGrid";
import ReadMore from "../Components/ReadMore";
import ContextProvider from "../Meta/MContext";

class PathFinding extends Component {

    constructor(props) {
        super(props);

        this.state = {
            childData: {}
        }

    }

    render() {
        return (
            <div>
                <ContextProvider>
                    <div>
                        <Settings/>
                        <PathFindingGrid/>
                        <ReadMore/>
                    </div>
                </ContextProvider>
            </div>
        );
    }
}

export default PathFinding;
