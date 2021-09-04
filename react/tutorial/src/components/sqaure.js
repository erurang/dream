import React from "react"

class Square extends React.Component {
    // 상태를 변화시키면 리액트는 컴포넌트를 업데이트한다
    // 이렇게 컴포넌트에서 상태를 관리하게되면.. 나중에 상위컴포넌트에서 하위 컴포넌트 상태를 알기위해
    // 요청하고 요청하고.. 받아오고 코드가 복잡해짐
    // 그래서 하위 -> 상위 상태 끌어올리기를 해야함
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value : null,
    //     }
    // }

    render() {
        
      return (
        <button className="square"
        onClick={this.props.onClick}
            >
          {this.props.value}
        </button>
      );
    }
  }

  export default Square