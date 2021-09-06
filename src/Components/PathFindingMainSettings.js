import React, {Component} from 'react';
import {Form, FormGroup} from "react-bootstrap";
import "../styles/PathFindingMainSettings.css";

class PathFindingMainSettings extends Component {

    render() {
        return (
            <div>
                <h1>Adjust algorithm & grid size</h1>
                <Form>
                    <FormGroup className={"form-group"}>
                        <label>Algorithm</label>
                        <select>
                            <option className={"option"}>A*</option>
                            <option className={"option"}>Dijkstra</option>
                            <option className={"option"}>Deep First Search</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <label>Grid size</label>
                        <select>
                            <option>20 x 10</option>
                            <option>30 x 10</option>
                            <option>50 x 25</option>
                            <option>70 x 30</option>
                        </select>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default PathFindingMainSettings;