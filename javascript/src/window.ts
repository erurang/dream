const root = document.querySelector(".root")!;
const template = document.createElement("div");

function update() {
  root.innerHTML = `
  <h1>window.screen : ${window.screen.width}, ${window.screen.height}</h1>
  <h1>window.outer : ${window.outerWidth} ${window.outerWidth}</h1>
  <h1>window.inner : ${window.innerWidth} ${window.innerHeight}</h1>
  <h1>documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}</h1>
`;
}
window.addEventListener("resize", () => {
  update();
});

update();
