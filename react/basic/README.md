```
yarn create react-app
```

### 상태관리와 이벤트 함수관리

컴포넌트가 하위로 내려갈수록, 각 컴포넌트에서 데이터를 가지고있는것이 아닌 상위에서 데이터를 관리하고

하위로 데이터를 props로 상속해주는 방법을 사용한다.

![image](https://user-images.githubusercontent.com/56789064/126483597-fa68093f-9751-4569-9701-af123173d7eb.png)

하위 컴포넌트에서 OnClick이 일어나면 우리는 상위컴포넌트에서 내려준 함수를 이용해 `함수(인자)` 를 넘기고

상위 컴포넌트에선 하위컴포넌트에서 전달된 값으로 상태 처리를 한다.


### 인풋

```
class Input extends Component {

    inputRef = React.createRef()

    onSubmit = e => {
        e.preventDefault()
        console.log(this.inputRef.current.value)

        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Habit" ref={this.inputRef}/>
                <button type="submit">추가</button>
            </form>
        )
    }
}
```

onSubmit 이벤트가 생기면 페이지가 리프레시됨, 막기위해서 preventDefault()사용

js에서는 querySelector를 이용하여 input의 value를 받아왔지만 React에서는 Ref를 사용

