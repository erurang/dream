{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(dict: ResourceLoadState) {
    switch (dict.state) {
      case "fail":
        console.log(dict.reason, "😱 no network");
        break;
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(dict.response.body, "😃 loaded");
        break;
      default:
        throw new Error("no");
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
