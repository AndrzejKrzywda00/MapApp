import {createContext} from "react";

export const MContext = createContext("");

class ContextProvider extends Component {
    state = {
        message: ""
    }

    render() {

        return (
            <MContext.Provider value={
                {state: this.state,
                    setMessage: (value) => this.setState({message: value})
                }}>
                {this.props.children}
            </MContext.Provider>
        );

    }

}

export default ContextProvider;
