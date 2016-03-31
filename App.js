import React, { Component } from "react";

import { TextField } from "./src";

class App extends Component {
    constructor() {
        super();
        this.state = {
            textFieldValue: ""
        };
        this.onTextFieldChange = this.onTextFieldChange.bind(this);
    }
    onTextFieldChange(v) {
        this.setState({
            textFieldValue: v
        });
    }
    render() {
        const { textFieldValue } = this.state;
        return (
            <div>
                <h2>TextField</h2>
                <TextField
                    value={textFieldValue}
                    onChange={this.onTextFieldChange}
                    placeholder="normal" />{' '}
                <TextField
                    value={textFieldValue}
                    placeholder="disabled"
                    disabled />{' '}
                <TextField
                    value={textFieldValue}
                    placeholder="error"
                    isError />
            </div>
        );
    }
}

export default App;
