import "./app.css";
import React, { Component } from "react";
import Habits from "./components/habits";

import Header from "./components/header";
import ResetButton from "./components/reset";

class App extends Component {
  handleIncrement = (e) => {

    const habits = this.state.habits.map(item => {
      if(item.id === e.id) {
        return {...e, count : e.count +1}
      } 
      return item

    })

    this.setState({habits})

    // const habits = [...this.state.habits];
    // const index = habits.indexOf(e);

    // habits[index].count++;
    // this.setState({ habits });

    console.log(e, "증가");
  };

  handleDecrement = (e) => {


    const habits = this.state.habits.map(item => {
      if(item.id === e.id) {
        return {...e, count : e.count -1}
      } 
      return item

    })

    this.setState({habits})
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(e);

    // habits[index].count--;
    // this.setState({ habits });

    console.log(e, "감소");
  };

  handleDelete = (e) => {
    const habits = this.state.habits.filter((n) => n.id !== e.id);
    this.setState({ habits });

    console.log(e, "삭제");
  };

  handleReset = () => {
    const habits = this.state.habits.map(e => {
      if (e.count !== 0) {
        return {...e, count : 0}
      }

      return e
    })

    // const habits = [...this.state.habits]  

    // for (let x of habits) {
    //   x.count = 0
    // }

    this.setState({habits})

    console.log("리셋");
  };

  onAdd = (name) => {
    const habits = [...this.state.habits, {id:Date.now(),name,count:0}]
    this.setState({habits})
  }

  state = {
    habits: [
      { name: "reading", count: 0, id: 1 },
      { name: "running", count: 0, id: 2 },
      { name: "coding", count: 0, id: 3 },
    ],
  };

  render() {
    console.log('app');
    return (
      <>
        <Header habits={this.state.habits} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          onAdd={this.onAdd}
        />
        <ResetButton handleReset={this.handleReset} />
      </>
    );
  }
}

export default App;
