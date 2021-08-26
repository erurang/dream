"use strict";
// const rect = document.querySelector(".root") as HTMLElement;
const special = document.querySelector(".box_event");
const gotoEvent = document.querySelector(".gotoEvent");
const gotoHundred = document.querySelector(".goto");
const move = document.querySelector(".move");
gotoEvent.addEventListener("click", () => {
    special === null || special === void 0 ? void 0 : special.scrollIntoView();
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
