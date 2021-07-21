import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">8</span>
            <button className="habit-button habit-increase">+</button>
            <button className="habit-button habit-decrease">-</button>
            <button className="habit-button habit-delete">x</button>
        </li>
    }
}

export default Habit;