import React, { Component } from 'react';
import Habit from "./habit"
import Input from "./input"

class Habits extends Component {

    render() {

        return (
            <>
                <Input onAdd={this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit =>
                        <Habit
                            key={habit.id}
                            habit={habit}
                            handleIncrement={this.props.handleIncrement}
                            handleDecrement={this.props.handleDecrement}
                            handleDelete={this.props.handleDelete}
                        />
                    )}
                </ul>
            </>
        )
    }
}

export default Habits;