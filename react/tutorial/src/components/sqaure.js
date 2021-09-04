import React from "react"

class Square extends React.Component {
    // 상태를 변화시키면 리액트는 컴포넌트를 업데이트한다
    
    constructor(props) {
        super(props)
        this.state = {
            value : null,
        }
    }

    render() {
      return (
        <button className="square"
        onClick={() => this.setState({value: 'X'})}
            >
          {this.state.value}
        </button>
      );
    }
  }

  export default Square