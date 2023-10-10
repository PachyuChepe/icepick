// 팀원등록 모달창 스크립트
const modalOpenButton = document.getElementById("modalOpenButton");
const modalCloseButton = document.getElementById("modalCloseButton");
const modal = document.getElementById("modalContainer");

modalOpenButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});