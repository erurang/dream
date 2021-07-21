import React, { Component } from 'react';
import Habit from "./habit"

class Habits extends Component {

    handleIncrement = e => {
        console.log(e, '증가');
    }

    handleDecrement = e => {
        console.log(e, '감소');
    }

    handleDelete = e => {
        console.log(e, '삭제');
    }

    state = {
        habits: [
            { name: 'reading', count: 0, id: 1 },
            { name: 'running', count: 0, id: 2 },
            { name: 'coding', count: 0, id: 3 },
        ]
    }

    render() {
        return <ul>
            {this.state.habits.map(habit =>
                <Habit
                    key={habit.id}
                    habit={habit}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    handleDelete={this.handleDelete}
                />
            )}
        </ul>
    }
}

export default Habits;