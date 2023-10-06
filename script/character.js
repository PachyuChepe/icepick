// X 아이콘 클릭 시 캐릭터 이미지와 이름을 모두 제거하는 함수
function deleteCharacter(characterId) {
  var characterDiv = document.getElementById(characterId); // 전달된 ID를 사용해 캐릭터 요소 가져오기
  characterDiv.remove(); // 캐릭터 요소 제거
}
