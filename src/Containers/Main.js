import React, {Component} from 'react';
import '../styles/Main.css';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Main;
