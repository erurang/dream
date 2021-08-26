// const rect = document.querySelector(".root") as HTMLElement;
const special = document.querySelector(".box_event");

const gotoEvent = document.querySelector(".gotoEvent") as HTMLButtonElement;
const gotoHundred = document.querySelector(".goto") as HTMLButtonElement;
const move = document.querySelector(".move") as HTMLButtonElement;

gotoEvent.addEventListener("click", () => {
  special?.scrollIntoView();
});

gotoHundred.addEventListener("click", () => {
  window.scrollTo(0, 100);
});

move.addEventListener("click", () => {
  window.scrollBy(0, 100);
});

// 옵션으로 smooth behavior 가능!
// rect.addEventListener("click", (e) => {
//   console.log(special?.getBoundingClientRect());

//   console.log(e.pageX, e.pageY, e.clientX, e.clientY);
// });
