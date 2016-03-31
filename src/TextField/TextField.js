import React, { Component } from "react";

import styles from "./styles";

class TextField extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e) {
        const { onChange } = this.props;
        onChange && onChange(e.currentTarget.value);
    }
    render() {
        const {
            normal,
            error
        } = styles;
        const {
            isError,
            disabled,
            value,
            onChange,
            inputStyle,
            placeholder
        } = this.props;
        return (
            <input
                type="text"
                style={inputStyle}
                value={value}
                className={isError ? error : normal}
                placeholder={placeholder}
                onChange={this.onInputChange}
                disabled={disabled} />
        );
    }
}

export default TextField;
