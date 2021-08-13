{
  /**
   * Union Type : OR
   */

  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }

  //  move('') // down up left right 가능한인자 4가지를 보여줌
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type LoginSuccess = {
    ok: string;
    error: string;
  };
  type LoginFail = {
    ok: string;
    error: string;
  };

  type LoginResult = LoginSuccess | LoginFail;

  function login(id: string, password: string): LoginResult {
    if (id === "erurang" && password === "1234")
      return { ok: "loginSuccess", error: "null" };
    else return { ok: "loginFail", error: "id or password is not correct" };
  }

  console.log(login("erurang", "1234"));
  console.log(login("zzzz", "1234"));

  // 2

  type Login2Success = {
    response: {
      body: string;
    };
  };

  type Lgoin2Fail = {
    reason: string;
  };

  type Login2Result = Login2Success | Lgoin2Fail;

  function login2(state: Login2Result) {
    // Login2Result에는 2가지경우가있는데 리턴되는경우가다르니
    // state.response 하면 오류가뜸. 왜? 타입스크립트는 이게 성공하는경운지 실패하는경운지 모르기때문

    // 이렇게 in을 쓰는경우도있지만 아래처럼 아예 공통된 타입을 두어서 구분을 하는방법이 있음
    if ("response" in state) {
      console.log(state.response.body);
    } else console.log(state.reason);
  }

  // 3

  type Login3Success = {
    result: "success";
    response: {
      body: string;
    };
  };

  type Lgoin3Fail = {
    result: "fail";
    reason: string;
  };

  type Login3Result = Login3Success | Lgoin3Fail;

  function login3(state: Login3Result) {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
