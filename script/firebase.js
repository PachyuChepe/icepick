import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보
const firebaseConfig = {
  apiKey: "AIzaSyAqgZTkIOU1FDJxLH8CZbBEtt4wA6UK0a0",
  authDomain: "sparta-Aleejin.firebaseapp.com",
  projectId: "sparta-leejin",
  storageBucket: "sparta-leejin.appspot.com",
  messagingSenderId: "44861350306",
  appId: "1:44861350306:web:3294770f6384aed70ed2fb",
  measurementId: "G-EWJVC04VRL",
};
// Firebase 인스턴스 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// 등록 버튼 클릭 이벤트 핸들러
$("#postingbtn").click(async function () {
  // 입력 필드 값 가져오기
  let image = $("#image").val();
  let mname = $("#mname").val();
  let lv = $("#lv").val();
  let dono = $("#dono").val();
  let skills = $("#skills").val();
  let mbti = $("#mbti").val();
  // 추가된 MBTI 세부 수치
  let mbti_i = $("#mbti_i").val();
  let mbti_e = $("#mbti_e").val();
  let mbti_s = $("#mbti_s").val();
  let mbti_n = $("#mbti_n").val();
  let mbti_t = $("#mbti_t").val();
  let mbti_f = $("#mbti_f").val();
  let mbti_j = $("#mbti_j").val();
  let mbti_p = $("#mbti_p").val();
  let comment = $("#comment").val();
  // 문서 객체 생성
  let doc = {
    image: image,
    mname: mname,
    lv: lv,
    dono: dono,
    skills: skills,
    mbti: mbti,
    mbti_i: mbti_i,
    mbti_e: mbti_e,
    mbti_s: mbti_s,
    mbti_n: mbti_n,
    mbti_t: mbti_t,
    mbti_f: mbti_f,
    mbti_j: mbti_j,
    mbti_p: mbti_p,
    comment: comment,
    timestamp: new Date(),
  };

  if (
    !image ||
    !mname ||
    !lv ||
    !dono ||
    !skills ||
    !mbti ||
    !mbti_i ||
    !mbti_e ||
    !mbti_s ||
    !mbti_n ||
    !mbti_t ||
    !mbti_f ||
    !mbti_j ||
    !mbti_p ||
    !comment
  )
    return alert("모든 정보를 입력해주세요");

  // Firestore에 문서 추가
  await addDoc(collection(db, "mambers"), doc);

  // 알림 메시지 표시
  alert("저장 완료!");
  window.location.reload();
});

// Firebase에서 데이터 가져오기
let querySnapshot = await getDocs(query(collection(db, "mambers"), orderBy("timestamp")));

let sortedDocs = querySnapshot.docs.sort((a, b) => {
  return a.data().timestamp - b.data().timestamp;
});

console.log("파이어베이스 관음", sortedDocs);
sortedDocs.forEach((doc) => {
  let row = doc.data();
  console.log(doc, "관음");

  // 데이터 추출
  let image = row["image"];
  let mname = row["mname"];
  let lv = row["lv"];
  let dono = row["dono"];
  let skills = row["skills"];
  let mbti = row["mbti"];
  let comment = row["comment"];
  console.log("코멘트 추출", comment);
  let mbti_i = row["mbti_i"];
  let mbti_e = row["mbti_e"];
  let mbti_s = row["mbti_s"];
  let mbti_n = row["mbti_n"];
  let mbti_t = row["mbti_t"];
  let mbti_f = row["mbti_f"];
  let mbti_j = row["mbti_j"];
  let mbti_p = row["mbti_p"];
  // 카드 HTML 생성
  let temp_html = `            
      <div class="col">
          <div class="card h-100 bg-transparent border-black text-white text-center">
              <img src="${image}" class="card-img-top" alt="...">
                  <h5 class="card-title show-button">${mname}</h5>
                  <p id="mamber_id" class="delete-button" data-doc-id="${doc.id}">삭제</p>
                  <span class="burrow">
                  <p class="card-text">${dono}</p>
                  <p class="user-lv">${lv}</p>
                  <p class="user-skills">${skills}</p>
                  <p class="user-mbti">${mbti}</p>
                  <p class="user-comment">${comment}</p>
                  <p class="user-mbti-i">${mbti_i}</p>
                  <p class="user-mbti-e">${mbti_e}</p>
                  <p class="user-mbti-s">${mbti_s}</p>
                  <p class="user-mbti-n">${mbti_n}</p>
                  <p class="user-mbti-t">${mbti_t}</p>
                  <p class="user-mbti-f">${mbti_f}</p>
                  <p class="user-mbti-j">${mbti_j}</p>
                  <p class="user-mbti-p">${mbti_p}</p>
                  </span>
            </div>
        </div>
      `;
  // 카드 추가
  $("#card").append(temp_html);
});
// 카드 이미지 클릭 시 모달 열기 이벤트
$(document).on("click", ".card-img-top", function () {
  // 클릭한 이미지의 데이터 가져오기
  const imageSrc = $(this).attr("src");
  const cardTitle = $(this).siblings(".card-title").text();
  const cardText = $(this).siblings(".card-text").text();
  const userLv = $(this).closest(".card").find(".user-lv").text();
  const userSkills = $(this).closest(".card").find(".user-skills").text();
  const userMbti = $(this).closest(".card").find(".user-mbti").text();
  const userComment = $(this).closest(".card").find(".user-comment").text();
  const mbtiI = parseInt($(this).closest(".card").find(".user-mbti-i").text(), 10);
  const mbtiE = parseInt($(this).closest(".card").find(".user-mbti-e").text(), 10);
  const mbtiS = parseInt($(this).closest(".card").find(".user-mbti-s").text(), 10);
  const mbtiN = parseInt($(this).closest(".card").find(".user-mbti-n").text(), 10);
  const mbtiT = parseInt($(this).closest(".card").find(".user-mbti-t").text(), 10);
  const mbtiF = parseInt($(this).closest(".card").find(".user-mbti-f").text(), 10);
  const mbtiJ = parseInt($(this).closest(".card").find(".user-mbti-j").text(), 10);
  const mbtiP = parseInt($(this).closest(".card").find(".user-mbti-p").text(), 10);
  const mbtiData = {
    mbtiI,
    mbtiE,
    mbtiS,
    mbtiN,
    mbtiT,
    mbtiF,
    mbtiJ,
    mbtiP,
  };
  // DB 값을 로컬스토리지에 저장
  // localStorage.setItem("mbtiData", JSON.stringify(mbtiData));
  // 모달 창에 데이터 설정
  $("#modalImage1").attr("src", imageSrc);
  $("#modalTitle1").text(cardTitle);
  $("#modalText1").text(cardText);
  $("#modalUserLv").text(userLv);
  $("#modalUserSkills").text(userSkills);
  $("#modalUserMbti").text(userMbti);
  $("#modalUserComment").text(userComment);
  // 모달 창 열기
  $("#modalContainer1").removeClass("hidden");
  updateOctagonRadarChart(mbtiData);
});
// Octagon Radar Chart 업데이트 함수
function updateOctagonRadarChart(mbtiData) {
  console.log(mbtiData, "MBTI 콘솔");
  console.log(octagonRadarChart.data.datasets[0], "MBTI 데이터 갱신 확인 콘솔");
  octagonRadarChart.data.datasets[0].data = [
    mbtiData.mbtiE,
    mbtiData.mbtiI,
    mbtiData.mbtiN,
    mbtiData.mbtiT,
    mbtiData.mbtiJ,
    mbtiData.mbtiP,
    mbtiData.mbtiF,
    mbtiData.mbtiS,
  ];
  octagonRadarChart.update();
}
// 맴버카드 모달 닫기 버튼 이벤트
$("#modalCloseButton1").click(function () {
  // localStorage.clear();
  // location.reload();
  $("#modalContainer1").addClass("hidden");
});

// 삭제 버튼 클릭 이벤트 핸들러
$(document).on("click", ".delete-button", async function (event) {
  const docId = $(event.target).attr("data-doc-id");
  console.log("이벤트", docId);

  try {
    await deleteDoc(doc(db, "mambers", docId));
    alert("삭제 성공");
    window.location.reload();
  } catch (error) {
    alert("삭제 실패");
  }
});

$("#CheeringBtn").on("click", async () => {
  const mambersId = $("#mamber_id").data("doc-id");

  let password = prompt("비밀번호를 입력해주세요");

  const data = {
    memberId: mambersId,
    commentText: $("#commentsUsersInput").val(),
    date: new Date(),
    password: password,
  };

  if (data.commentText.length <= 0) {
    return alert("댓글을 작성해주세요");
  }

  if (password > 4) {
    await addDoc(collection(db, "comments"), data);
    try {
    } finally {
      $("#commentsUsersInput").val("");
    }
  } else {
    alert("비밀번호는 최소 5자리 입니다");
  }

  console.log("아이디?", mambersId);
});
