"use strict";
var Btn = document.querySelector(".BtnBox");
Btn === null || Btn === void 0 ? void 0 : Btn.addEventListener("click", function (e) {
    var target = e.target;
    console.log(target.className);
});
