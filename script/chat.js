const storedData = localStorage.getItem("mbtiData");

const mbtiData = JSON.parse(storedData);
console.log(mbtiData, "떳!!!!!!!냐!!!!!!!!!!");

// octagonRadarChart.data.data.set;

Chart.defaults.plugins.legend.display = false;
// Chart.defaults.scale.ticks.fontSize = 0.1;
// 데이터 및 옵션 설정
var data = {
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
    },
  ],
};

var options = {
  scale: {
    type: "polygon", // polygon 스케일 사용
    angleLines: {
      display: true,
    },
    ticks: {
      // suggestedMin: 0,
      // suggestedMax: 10,
      max: 10,
      stepSize: 2,
    },
  },
  maintainAspectRatio: false, // 이 옵션을 추가하여 캔버스 크기를 수동으로 제어
  legend: {
    display: false, // 레전드 숨기기
  },
};

// 팔각형 레이더 차트 생성
var ctx = document.getElementById("octagonRadarChart").getContext("2d");
var octagonRadarChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});

// octagonRadarChart.data.datasets[0].pointRadius = 0;
// octagonRadarChart.update();
