import React, { Component } from 'react';

class Habit extends Component {

    // 데이터를 전달받아서 표현만할뿐 컴포넌트 자체에서 상태를 가지고있는것은 좋지못함
    // 상태를 끌어올려줘야함
    // state = {
    //     count: 0
    // }

    render() {
        // props를 통해 받아온 habit들은 this.props에 저장이됨
        // console.log(this.props);
        const { name, count } = this.props.habit


        return <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase"
                onClick={() => this.props.handleIncrement(this.props.habit)}>+</button>
            <button className="habit-button habit-decrease"
                onClick={() => this.props.handleDecrement(this.props.habit)}>-</button>
            <button className="habit-button habit-delete"
                onClick={() => this.props.handleDelete(this.props.habit)}> x</button>
        </li>
    }
}

export default Habit;