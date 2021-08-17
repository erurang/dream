import { PageComponent } from "./components/page/page.js";

class App {
  // 수정안됨!
  private readonly page: PageComponent;

  // 1. 생성된후에(document에 연결된후)
  constructor(appRoot: HTMLElement) {
    // 페이지 컴포넌트
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

// 앱이 실행된후에 연결됨
new App(document.querySelector(".document")! as HTMLElement);
