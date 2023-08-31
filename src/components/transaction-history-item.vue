<template>
  <li class="transaction-history-item">
    <span class="transaction-history-item__status-icon" :class="getIconStatus">
    </span>

    <div class="transaction-history-item__text-box">
      <h3 class="transaction-history-item__title">{{ title }}</h3>
      <p class="transaction-history-item__text">{{ text }}</p>
    </div>

    <p class="transaction-history-item__sum" :class="getColorStatus">
      <span>{{ type == "refill" ? "+" : "-" }}</span
      >{{ sum }} руб
    </p>
  </li>
</template>

<script>
export default {
  name: "transaction-history-item",
  props: ["type", "title", "text", "sum"],

  data() {
    return {};
  },
  computed: {
    getIconStatus() {
      return {
        "transaction-history-item__status-icon--refill": this.type == "refill",
        "transaction-history-item__status-icon--writeDowns":
          this.type == "writeDowns",
      };
    },
    getColorStatus() {
      return {
        "transaction-history-item__sum--refill": this.type == "refill",
        "transaction-history-item__sum--writeDowns": this.type == "writeDowns",
      };
    },
  },
};
</script>

<style lang="scss">
.transaction-history-item {
  display: flex;
  align-items: center;

  &__status-icon {
    width: 42px;
    height: 42px;
    background-color: #bcbcbc;

    border-radius: 100%;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 35px;

    &--refill {
      background-color: #dcf5e8;
      background-image: url("../img/transaction-history-item/icon-refill.svg");
    }

    &--writeDowns {
      background-color: #f5dcdc;
      background-image: url("../img/transaction-history-item/icon-writeDowns.svg");
    }
  }

  &__text-box {
    margin-left: 20px;
  }

  &__title {
    font-size: 17px;
    font-weight: 800;
  }

  &__text {
    color: #a29ebc;
    font-size: 14px;
    font-weight: 700;
  }

  &__sum {
    margin-left: auto;

    font-size: 20px;
    font-weight: 800;

    &--refill {
      color: #6ed69e;
    }

    &--writeDowns {
      color: #d14f4f;
    }
  }
}
</style>
