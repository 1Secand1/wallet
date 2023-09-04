<template>
  <main class="main">
    <section class="sidebar-menu-wrapper">
      <sidebarMenu></sidebarMenu>
    </section>

    <section class="bank-account-info-wrapper">
      <bankAccountInfoVue></bankAccountInfoVue>
    </section>

    <section class="grouped-bar-graph-wrapper">
      <groupedBarGraph></groupedBarGraph>
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

    <section class="monthly-stats-wrapper"></section>
  </main>
</template>

<script>
import "./normalize.css";
import reportCard from "./components/report-card.vue";
import transactionHistory from "./components/transaction-history.vue";
import sidebarMenu from "./components/sidebar-menu.vue";
import bankAccountInfoVue from "./components/bank-account-info.vue";
import groupedBarGraph from "./components/grouped-bar-graph.vue";

export default {
  name: "App",

  components: {
    reportCard,
    transactionHistory,
    sidebarMenu,
    bankAccountInfoVue,
    groupedBarGraph,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

body {
  background: #f4f3fa;
  font-family: "Montserrat";
  padding-top: 20px;
}

.main {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr 0.5fr 1.5fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  margin-right: 24px;

  min-height: 100vh;
}

.sidebar-menu-wrapper {
  grid-area: 1 / 1 / 4 / 2;
}
.bank-account-info-wrapper {
  grid-area: 1 / 2 / 2 / 3;
}
.grouped-bar-graph-wrapper {
  grid-area: 1 / 3 / 2 / 4;
  background: white;
}
.report-cards-wrapper {
  display: flex;
  justify-content: space-between;
  grid-area: 2 / 2 / 3 / 4;
}
.transaction-history-wrapper {
  grid-area: 3 / 2 / 4 / 3;
}
.monthly-stats-wrapper {
  grid-area: 3 / 3 / 4 / 4;
  background: #9896963f;
}
</style>
