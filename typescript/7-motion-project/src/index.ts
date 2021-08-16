const Btn = document.querySelector(".BtnBox");

Btn?.addEventListener("click", (e) => {
  const target = e.target as Element;
  console.log(target.className);
});
