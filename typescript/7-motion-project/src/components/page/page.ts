export class PageComponent {
  private element: HTMLUListElement;
  // 생성시에 ul이 만들어짐
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "this is page component";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    // 부모컨테이너에 추가함,
    parent.insertAdjacentElement(position, this.element);
  }
}
