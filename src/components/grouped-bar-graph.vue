<template>
  <section class="grouped-bar-graph">
    <h2 class="title">Report</h2>
    <div class="chart-container">
      <Bar :id="chartId" :options="chartOptions" :data="chartData" />
    </div>
  </section>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: ["labels", "firstDataSet", "secondDataSet"],

  data() {
    return {
      chartId: "my-chart-id",
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: this.firstDataSet[0],
            data: this.firstDataSet[1],
            backgroundColor: this.firstDataSet[2],
          },
          {
            label: this.secondDataSet[0],
            data: this.secondDataSet[1],
            backgroundColor: this.secondDataSet[2],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

        onResize(chart, size) {
          chart.update();
        },

        borderRadius: 5,
      },
    };
  },
};
</script>

<style scoped>
.title {
  margin: 0;
  padding: 0;
}

.grouped-bar-graph {
  background: white;
  border-radius: 20px;
  padding: 20px;
}

.chart-container {
  width: 100%;
  height: 24vh;
}
</style>
