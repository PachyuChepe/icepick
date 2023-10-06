import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { app, db } from "./firebase";

// $("#postingbtn").click(async function () {
$("#postingbtn").click(async function () {
  let image = $("#image").val();
  let mname = $("#mname").val();
  let lv = $("#lv").val();
  let dono = $("#dono").val();
  let skills = $("#skills").val();
  let mbti = $("#mbti").val();
  // 추가
  let mbti_i = $("#mbti_i").val();
  let mbti_e = $("#mbti_e").val();
  let mbti_s = $("#mbti_s").val();
  let mbti_n = $("#mbti_n").val();
  let mbti_t = $("#mbti_t").val();
  let mbti_f = $("#mbti_f").val();
  let mbti_j = $("#mbti_j").val();
  let mbti_p = $("#mbti_p").val();
  let comment = $("#comment").val();

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
  };
  await addDoc(collection(db, "mambers"), doc);
  alert("저장 완료!");
  window.location.reload();
});
// });

// let docs = await getDocs(collection(db, "mambers"));
// docs.forEach((doc) => {
//   let row = doc.data();

//   let image = row["image"];
//   let mname = row["mname"];
//   let lv = row["lv"];
//   let dono = row["dono"];
//   let skills = row["skills"];
//   let mbti = row["mbti"];
//   let mbti_i = row["mbti_i"];
//   let mbti_e = row["mbti_e"];
//   let mbti_s = row["mbti_s"];
//   let mbti_n = row["mbti_n"];
//   let mbti_t = row["mbti_t"];
//   let mbti_f = row["mbti_f"];
//   let mbti_j = row["mbti_j"];
//   let mbti_p = row["mbti_p"];
//   let comment = row["comment"];

//   let temp_html = `
// 				<div class="col">
// 						<div class="card h-100 bg-transparent border-black text-white text-center">
// 								<img src="${image}" class="card-img-top" alt="...">
// 										<h5 class="card-title">${mname}</h5>
// 										<p class="card-text">${dono}</p>
// 						</div>
// 				</div>`;
//   $("#card").append(temp_html);
// });

// $("#savebtn").click(async function () {
//   $("#postingbox").toggle();
// });
