import { app, db } from "./firebase";

$("#postingbtn").click(async function () {
  $("#postingbtn").click(async function () {
    let image = $("#image").val();
    let mname = $("#mname").val();
    let lv = $("#lv").val();
    let dono = $("#dono").val();
    let skills = $("#skills").val();
    let mbti = $("#mbti").val();
    let comment = $("#comment").val();

    let doc = {
      image: image,
      mname: mname,
      lv: lv,
      dono: dono,
      skills: skills,
      mbti: mbti,
      comment: comment,
    };
    await addDoc(collection(db, "mambers"), doc);
    alert("저장 완료!");
    window.location.reload();
  });
});

let docs = await getDocs(collection(db, "mambers"));
docs.forEach((doc) => {
  let row = doc.data();

  let image = row["image"];
  let mname = row["mname"];
  let lv = row["lv"];
  let dono = row["dono"];
  let skills = row["skills"];
  let mbti = row["mbti"];
  let comment = row["comment"];

  let temp_html = `            
				<div class="col">
						<div class="card h-100 bg-transparent border-black text-white text-center">
								<img src="${image}"
										class="card-img-top" alt="...">
								<div class="card-body">
										<h5 class="card-title">${mname}</h5>
										<p class="card-text">${dono}</p>
								</div>
						</div>
				</div>`;
  $("#card").append(temp_html);
});

$("#savebtn").click(async function () {
  $("#postingbox").toggle();
});
const modalOpenButton = document.getElementById("modalOpenButton");
const modalCloseButton = document.getElementById("modalCloseButton");
const modal = document.getElementById("modalContainer");

modalOpenButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
