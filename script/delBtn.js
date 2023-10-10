$(document).on("mouseenter", ".card", function () {
  // 마우스를 올렸을 때 삭제 버튼 표시
  $(this).find(".show-button").hide();
  $(this).find(".delete-button").show();
});

// 카드에서 마우스가 벗어났을 때 이벤트
$(document).on("mouseleave", ".card", function () {
  // 마우스를 떼면 삭제 버튼 숨김
  $(this).find(".delete-button").hide();
  $(this).find(".show-button").show();
});
