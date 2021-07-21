import React, { Component } from 'react';

class Habit extends Component {

    state = {
        count: 0
    }

    handleIncrement = e => {
        // this.state.count++ // 불변성을 지켜야함
        this.setState({count: this.state.count+1})
    }

    handleDecrement = e => {
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count})
    }

    handleDelete = e => {
        
    }

    render() {
        return <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>+</button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>-</button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}> x</button>
        </li>
    }
}

export default Habit;