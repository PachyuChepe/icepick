// numericInput 클래스를 가진 모든 input 요소 선택
const numericInputs = document.querySelectorAll(".numericInput");

// 각 input 요소에 이벤트 리스너 추가
numericInputs.forEach((input) => {
  input.addEventListener("input", function () {
    // 이벤트 핸들러 함수 내에서 this가 가리키는 대상이 input 요소인지 확인
    // 숫자가 아닌 문자가 입력된 경우
    if (this.value !== this.value.replace(/[^0-9]/g, "")) {
      // 경고창 띄우기
      alert("숫자만 입력하세요!");
    }
    if (this && typeof this.value !== "undefined") {
      // 입력값에서 숫자가 아닌 문자 제거
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  });
});
