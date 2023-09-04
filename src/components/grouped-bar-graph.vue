<template>
  <section class="c">
    <h2>Report</h2>
    <Bar id="my-chart-id" :optwions="chartOptions" :data="chartData" />
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
  data() {
    return {
      chartData: {
        labels: ["April", "May", "June", "July", "August", "September"],
        datasets: [
          {
            label: "Доход",
            data: [8120, 8510, 6042, 7510, 9505, 10043],
            backgroundColor: "#4C49ED",
          },
          {
            label: "Расход",
            data: [3400, 5501, 9230, 4841, 7041, 7560],
            backgroundColor: "#AFAEFE",
          },
        ],
      },
      chartOptions: {
        borderRadius: 5,
        aspectRatio: [2, 2],
      },
    };
  },
};
</script>

<style>
#my-chart-id {
}

.c {
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 24px;

  width: 90%;
  height: 90%;
}
</style>
