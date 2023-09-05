<template>
  <div class="">
    <Doughnut :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["Кофты", "Обувь", "Ещё что-то"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#00D8FF", "#DD1B16"],
            weight: 1,

            data: [450, 220, 800],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
