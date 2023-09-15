<template>
  <div class="monthly-stats">
    <div class="monthly-schedule">
      <Doughnut :data="data" :options="options" />
    </div>
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
  props: ["labels", "data", "backgroundColor"],

  data() {
    return {
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.backgroundColor,
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
<style>
.monthly-stats {
  display: flex;
  align-items: center;

  height: 100%;

  background: #ffffff;
  border-radius: 20px;

  padding: 20px;
}
.monthly-schedule {
  width: 100%;
}
</style>
