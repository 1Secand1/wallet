<template>

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
      chartId: "my-chart-id",
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
        responsive: true,
        maintainAspectRatio: false,
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

.c {
  position: relative;
  margin: auto;
  padding: 20px;
}

.chart-container {
  position: relative;
  width: 100%; 
  height: 24vh;
}
</style>
