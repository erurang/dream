import React, { Component } from 'react';

class ResetButton extends Component {

    render() {
        console.log('reset');
        return (
            <button onClick={() => this.props.handleReset()}>Reset All</button>
        )
    }
}

export default ResetButton;