// 로컬 스토리지에서 "mbtiData" 키로 저장된 데이터를 겟
// const storedData = localStorage.getItem("mbtiData");

// JSON 형식으로 저장된 데이터를 파싱하여 변수 mbtiData에 할당
// const mbtiData = JSON.parse(storedData);

// mbtiData를 콘솔에 출력
// console.log(mbtiData, "떳!!!!!!!냐!!!!!!!!!!");

// 데이터 및 옵션 설정
const data = {
  labels: ["E", "I", "N", "T", "J", "P", "F", "S"], // 라벨 설정
  datasets: [
    {
      label: "",
      backgroundColor: "rgba(232, 52, 78, 0.5)", // 그래프 배경 CSS
      borderColor: "rgba(232, 52, 78, 10)", // 그래프 선 CSS
      data: [],
      pointRadius: 0, // 데이터 포인트 크기 0으로 설정하여 숨김
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // 레전드 숨기기
    },
    tooltip: {
      enabled: false, // 툴팁 비활성화
    },
  },
  scales: {
    r: {
      angleLines: {
        color: "black", // 각도 라인 색상 변경
      },
      pointLabels: {
        color: "black", // 라벨 텍스트 색상 변경
        // fontsize: 100,
      },
      grid: {
        color: "black", // 그리드 색상 변경
      },
      ticks: {
        display: false,
        max: 100, // 차트 최대 값
        stepSize: 50, //스택사이즈 제한
        maxTicksLimit: 100, // 맥시멈 최대 값 제한
      },
    },
  },
  maintainAspectRatio: false, // 캔버스 크기를 수동으로 제어 옵션
};

// 팔각형 레이더 차트 생성
var ctx = document.getElementById("octagonRadarChart").getContext("2d");
var octagonRadarChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});
