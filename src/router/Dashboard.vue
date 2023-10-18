<template>
  <main class="main">
    <section class="sidebar-menu-wrapper">
      <sidebarMenu></sidebarMenu>
    </section>

    <section class="bank-account-info-wrapper">
      <bankAccountInfoVue></bankAccountInfoVue>
    </section>

    <section class="grouped-bar-graph-wrapper">
      <groupedBarGraph
        :labels="[`April`, `May`, `June`, `July`, `August`, `September`]"
        :firstDataSet="[
          `Доход`,
          [8120, 8510, 6042, 7510, 9505, 10043],
          `#4C49ED`,
        ]"
        :secondDataSet="[
          `Расход`,
          [3400, 5501, 9230, 4841, 7041, 7560],
          `#AFAEFE`,
        ]"
      />
    </section>

    <section class="report-cards-wrapper">
      <report-card title="Total Income" sum="6437.45"></report-card>
      <report-card title="Total Income" sum="232.41"></report-card>
      <report-card title="Total Income" sum="546.23"></report-card>
      <report-card title="Total Income" sum="32.34"></report-card>
    </section>

    <section class="transaction-history-wrapper">
      <transactionHistory></transactionHistory>
    </section>

    <section class="monthly-stats-wrapper">
      <monthly-stats
        :labels="['Кофты', 'Обувь', 'Ещё что-то']"
        :data="[450, 220, 800]"
        :backgroundColor="['#41B883', '#00D8FF', '#DD1B16']"
      />
    </section>
  </main>
</template>

<script>
import "../normalize.css";
import reportCard from "../components/AppReportCard.vue";
import transactionHistory from "../components/transaction-history.vue";
import sidebarMenu from "../components/AppSidebarMenu.vue";
import bankAccountInfoVue from "../components/bankAccountInfo.vue";
import groupedBarGraph from "../components/groupedBarGraph.vue";
import monthlyStats from "../components/monthly-stats";

export default {
  name: "App",

  components: {
    reportCard,
    transactionHistory,
    sidebarMenu,
    bankAccountInfoVue,
    groupedBarGraph,
    monthlyStats,
  },
};

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

body {
  background: #f4f3fa;
  font-family: "Montserrat";
}

.main {
  display: grid;
  grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(267px, 1fr) minmax(145px, 0.7fr) minmax(0, 2fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  padding: 20px 20px 0 0;
  height: 100vh;
}

.sidebar-menu-wrapper {
  grid-area: 1 / 1 / 4 / 2;
}
.bank-account-info-wrapper {
  grid-area: 1 / 2 / 2 / 3;
}
.grouped-bar-graph-wrapper {
  grid-area: 1 / 3 / 2 / 4;
}
.report-cards-wrapper {
  display: flex;
  align-items: center;

  column-gap: 20px;

  justify-content: space-between;
  grid-area: 2 / 2 / 3 / 4;
}
.transaction-history-wrapper {
  grid-area: 3 / 2 / 4 / 3;
}
.monthly-stats-wrapper {
  grid-area: 3 / 3 / 4 / 4;
}
</style>
