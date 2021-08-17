export class ImageComponent {
  private element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement("template");

    // 여기에 바로 ${title} ${url}을 넣어서 쓰는 방법도 있지만
    // 만약 유저가 html js를 인자로 주게되면 유저가 조작하는 사태가 발생함
    // 만약 title에 <p>zz</p>를 넣으면 zz가 나오는 사태가 발생함
    // 이런걸 미연에 방지하기위해
    template.innerHTML = `
    <section class="image">
        <div class="image__holder">
            <img class="image__thumbnail">
        </div>
        <p class="image__title"></p>
    </section>
    `;

    // 하나하나 접근하여 처리함
    this.element = template.content.firstElementChild as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    ) as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = template.content.querySelector(
      ".image__title"
    ) as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
