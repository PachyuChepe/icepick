const storedData = localStorage.getItem("mbtiData");
const mbtiData = JSON.parse(storedData);
console.log(mbtiData, "떳!!!!!!!냐!!!!!!!!!!");

// Chart.defaults.scale.ticks.color = "black"; // 폰트 색상 변경
// Chart.defaults.scale.grid.display = true; // 그리드 라인 표시
// Chart.defaults.scale.grid.color = "gray"; // 그리드 라인 색상 변경
// Chart.defaults.scale.ticks.fontSize = 3;
// Chart.defaults.color = "#000";
// Chart.defaults.angleLines.color = "red";
// Chart.defaults.plugins.legend.display = false;
// Chart.defaults.scale.ticks.display = false;
// Chart.defaults.font = "10";

// 데이터 및 옵션 설정
const data = {
  labels: ["E", "I", "N", "T", "J", "P", "F", "S"],
  datasets: [
    {
      label: "",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: [
        mbtiData.mbtiE,
        mbtiData.mbtiI,
        mbtiData.mbtiN,
        mbtiData.mbtiT,
        mbtiData.mbtiJ,
        mbtiData.mbtiP,
        mbtiData.mbtiF,
        mbtiData.mbtiS,
      ],
      pointRadius: 0, // 데이터 포인트 크기 0으로 설정하여 숨김
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // 레전드 숨기기
      // labels: {
      //   // This more specific font property overrides the global property
      //   font: {
      //     size: 50,
      //   },
      // },
    },
    tooltip: {
      enabled: false, // 툴팁 비활성화
    },
  },
  scales: {
    r: {
      angleLines: {
        color: "red", // 각도 라인 색상 변경
      },
      pointLabels: {
        color: "red", // 라벨 텍스트 색상 변경
        // fontsize: 100,
      },
      grid: {
        color: "red",
      },
      ticks: {
        display: false,
        max: 10,
        stepSize: 5,
        maxTicksLimit: 0,
      },
    },
  },
  maintainAspectRatio: false, // 이 옵션을 추가하여 캔버스 크기를 수동으로 제어
};

// 팔각형 레이더 차트 생성
var ctx = document.getElementById("octagonRadarChart").getContext("2d");
var octagonRadarChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});
