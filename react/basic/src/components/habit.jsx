import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        // 컴포넌트가 ui에 등록이되어 사용자에게 보여질때
        // 데이터를 받아오거나..
        console.log(`habit : ${this.props.habit.name} Did Mount`);
    }

    componentWillUnmount() {
        // 컴포넌트가 ui에서 지워지기전에
        // 
        console.log(`habit : ${this.props.habit.name} Did unmount`);
    }

    // 데이터를 전달받아서 표현만할뿐 컴포넌트 자체에서 상태를 가지고있는것은 좋지못함
    // 상태를 끌어올려줘야함
    // state = {
    //     count: 0
    // }

    render() {
        // props를 통해 받아온 habit들은 this.props에 저장이됨
        // console.log(this.props);
        const { name, count } = this.props.habit
        console.log(name);

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