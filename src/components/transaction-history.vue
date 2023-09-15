<template>
  <div class="transaction-history">
    <div class="transaction-history__header">
      <h2>Latest Transaction</h2>
      <span>...</span>
    </div>

    <ul class="transaction-history__list">
      <transaction-History-Item
        type="writeDowns"
        title="Transfer to Johdi"
        text="Personal Payment"
        sum="212.42"
      ></transaction-History-Item>
      <transaction-History-Item
        type="refill"
        title="Transfer to Johdi"
        text="Personal Payment"
        sum="1223.00"
      ></transaction-History-Item>
    </ul>
  </div>
</template>

<script>
import transactionHistoryItem from "./transaction-history-item.vue";
export default {
  name: "transaction-history",
  props: [],
  components: {
    transactionHistoryItem,
  },
};
</script>

<style lang="scss">
.transaction-history {
  height: 100%;

  background: white;
  border-radius: 20px;

  padding: 24px 25px;
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: grid;
    row-gap: 15px;
    margin-top: 24px;
  }
}
</style>
