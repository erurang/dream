```
yarn create react-app
```

### 리액트란?

리액트는 컴포넌트 들로 이루어진 UI 언어이다.

데이터가 업데이트되면 전체적으로 어플리케이션이 re-render가 된다.

컴포넌트에 변화가 일어나려면, **state 또는 props의 값이 변경되야한다.**

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

### 성능 관리

리액트에서 컴포넌트 변경이 일어나 모든 컴포넌트가 리렌더가 일어날때

만약 컴포넌트 자체에 (network.. 시간이 오래걸리는 로직..) 등이 존재한다고 해보자.

다른 컴포넌트가 업데이트가 되었을때 업데이트할 필요 없는 컴포넌트가 함께 리렌더가 된다.

렌더를 조정하는것, 이것이 성능관리의 첫걸음이다.

클래스 컴포넌트에서는 PureComponent / 리액트 훅에서는 memo가 존재한다.

이번 프로젝트의 예로 성능개선을 해보자. PureComponent를 사용할것이다.

<img width="1012" alt="스크린샷 2021-07-22 오전 12 05 17" src="https://user-images.githubusercontent.com/56789064/126512038-16ec4afd-8af7-447f-a0a9-eaa795f3fc4b.png">

처음 렌더가 되고 모든 컴포넌트가 생성된걸 볼수있다. 다음으로 + 버튼을 눌러보면 Input 이 업데이트된것을 볼수있다.

<img width="1007" alt="스크린샷 2021-07-22 오전 12 08 33" src="https://user-images.githubusercontent.com/56789064/126512597-491f8fc4-bb51-4ccc-8f48-dacb9692e3f7.png">

우린 +버튼을 눌럿을 뿐인데 input까지 업데이트는 필요가없다. 그래서 input컴포넌트를 PureComponent로 바꿔준다.

```
import React, { PureComponent } from 'react';

class Input extends PureComponent {
    ...
}
```

적용후에, 다시 + 버튼을 눌러보자. input 컴포넌트가 렌더링이 안된것을 볼수있다.

<img width="1005" alt="스크린샷 2021-07-22 오전 12 10 12" src="https://user-images.githubusercontent.com/56789064/126512876-6aa0ceac-9577-470c-aae2-a7f88e68fd5e.png">

PureComponent는 자체적으로 shouldComponentUpdate()가 구현되어있다.

이것은 컴포넌트가 업데이트되기전과 되고난후의 state,props를 비교한후 변경이 생겼을때 true를 통해 변경한다.

shallow 하게 얕은 비교를 하는데, 이것은 {} {} 객체의 주소가 변경이 되어있는지만 (참조값이 변경되었는가?) 만 체크한다.

오브젝트의 내부값까지는 변경되는걸 확인하지않는다는뜻이다. 그래서 리액트 자체에서 불변성을 지켜줘야

리액트는 변경점을 알아채고 컴포넌트를 업데이트하게 되는것이다. (상태변경을할때 spreadOperater ..를 쓰는이유임.)