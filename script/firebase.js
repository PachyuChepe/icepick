// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyDtOvFC9tQwK8U5NvlpE1gfxFQ8zBgpEQM",
  authDomain: "sparta-cbc39.firebaseapp.com",
  projectId: "sparta-cbc39",
  storageBucket: "sparta-cbc39.appspot.com",
  messagingSenderId: "31781052233",
  appId: "1:31781052233:web:bf3f7c3fd94939fa160498",
  measurementId: "G-GMSP950JXK",
};

// Firebase 인스턴스 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//getFirestore: Firestore 데이터베이스 객체를 초기화하고 반환하며 Firestore 데이터베이스를 사용하기 위해 먼저 이것을 호출허여 Firestore 인스턴스를 가져와야됨
//collection: Firestore 데이터베이스 내에서 컬렉션을 참조하기 위해 사용하며, 컬렉션은 문서그룹
//addDoc: Firestore 컬렉션에서 새로운 문서를 추가하며 문서를 추가할 시 데이터를 전달해야됨
//getDocs:
