<template>
  <li class="transaction-history-item">
    <!-- <span ">
    </span> -->
    <svg
      class="transaction-history-item__status-icon"
      :class="classColorArrow"
      width="24"
      height="25"
      viewBox="0 0 24 25"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 18.3497C11.8011 18.3497 11.6103 18.2707 11.4697 18.13C11.329 17.9894 11.25 17.7986 11.25 17.5997L11.25 8.9102L8.031 12.1307C7.96127 12.2004 7.87848 12.2557 7.78737 12.2935C7.69626 12.3312 7.59861 12.3506 7.5 12.3506C7.40138 12.3506 7.30373 12.3312 7.21262 12.2935C7.12151 12.2557 7.03873 12.2004 6.969 12.1307C6.89927 12.061 6.84395 11.9782 6.80621 11.8871C6.76848 11.796 6.74905 11.6983 6.74905 11.5997C6.74905 11.5011 6.76848 11.4034 6.80621 11.3123C6.84395 11.2212 6.89927 11.1384 6.969 11.0687L11.469 6.5687C11.5387 6.49885 11.6214 6.44344 11.7125 6.40563C11.8037 6.36782 11.9013 6.34836 12 6.34836C12.0986 6.34836 12.1963 6.36782 12.2874 6.40563C12.3786 6.44344 12.4613 6.49885 12.531 6.5687L17.031 11.0687C17.1718 11.2095 17.2509 11.4005 17.2509 11.5997C17.2509 11.7989 17.1718 11.9899 17.031 12.1307C16.8902 12.2715 16.6992 12.3506 16.5 12.3506C16.3008 12.3506 16.1098 12.2715 15.969 12.1307L12.75 8.9102L12.75 17.5997C12.75 17.7986 12.671 17.9894 12.5303 18.13C12.3897 18.2707 12.1989 18.3497 12 18.3497Z"
      />
    </svg>

    <div class="transaction-history-item__text-box">
      <h3 class="transaction-history-item__title">{{ title }}</h3>
      <p class="transaction-history-item__text">{{ text }}</p>
    </div>

    <p class="transaction-history-item__sum" :class="classColorSymbol">
      <span>{{ transactionSymbol }} </span>{{ sum }} руб
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
    classColorArrow() {
      return {
        "transaction-history-item__status-icon--refill": this.type == "refill",
        "transaction-history-item__status-icon--writeDowns":
          this.type == "writeDowns",
      };
    },
    classColorSymbol() {
      return {
        "transaction-history-item__sum--refill": this.type == "refill",
        "transaction-history-item__sum--writeDowns": this.type == "writeDowns",
      };
    },
    transactionSymbol() {
      return this.type == "refill" ? "+" : "-";
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
    background-color: #000000;

    border-radius: 100%;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 35px;

    &--refill {
      fill: #4fd18b;
      background-color: #dcf5e8;
    }

    &--writeDowns {
      transform: rotate(180deg);
      fill: #d14f4f;
      background-color: #f5dcdc;
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
