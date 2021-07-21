import React, { Component } from 'react';

class ResetButton extends Component {

    render() {
        return (
            <button onClick={() => this.props.handleReset()}>Reset All</button>
        )
    }
}

export default ResetButton;