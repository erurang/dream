import { HashRouter as Router, Route, Switch } from "react-router-dom";

// brouserRouter와의 차이는 url에 #의 존재와, 배포할때의 차이, brouserRouter는 배포할때 다른 설정을 더 해줘야함.

function App() {
  return (
    <div className="App">
      <Router>
        {/* http://localhost:3000/#/ */}
        {/* /로시작하는걸 모두 렌더하는걸 막기위해, 한url에 하나만 렌더하는 switch사용 */}
        <Switch>
          {/* 이렇게 하면 우리는 / 로시작하는 모든 라우터에 홈이 적히게됨 */}
          <Route path="/" exact>
            <h1>home</h1>
          </Route>
          {/* http://localhost:3000/#/potato */}
          <Route path="/potato">
            <h1>potato</h1>
          </Route>
          {/* http://localhost:3000/#/banana */}
          <Route path="/banana">
            <h1>banana</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
