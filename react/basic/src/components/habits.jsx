import React, { Component } from 'react';
import Habit from "./habit"

class Habits extends Component {

    state = {
        habits : [
            {name: 'reading', count : 0, id:1},
            {name: 'running', count : 0, id:2},
            {name: 'coding', count : 0, id:3},
        ]
    }

    render() {
        return <ul>
            {this.state.habits.map(habit => <Habit habit={habit} key={habit.id}/>)}
        </ul>
    }
}

export default Habits;