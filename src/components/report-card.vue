<template>
  <div class="card">
    <p class="card__title">{{ title }}</p>
    <h2 class="card__value">
      $ {{ splittedSum[0]
      }}<small class="card__value--fractional">.{{ splittedSum[1] }}</small>
    </h2>
    <div><small>какойто элемент</small></div>
  </div>
</template>

<script>
export default {
  name: "report-card",
  props: ["title", "sum"],

  computed: {
    splittedSum() {
      return this.sum.split(".");
    },
  },
};
</script>

<style lang="scss">
.card {
  display: grid;

  max-width: 260px;
  max-height: 140px;
  height: 100%;
  width: 100%;

  padding: 14px 30px;

  background: white;
  border-radius: 11px;

  &__title {
    color: #a1a0bd;
    font-size: 16px;
    font-weight: 700;
  }

  &__value {
    display: inline-block;
    font-size: 29px;
    font-weight: 800;

    &--fractional {
      color: #afadfe;
      font-size: 19px;
    }
  }
}
</style>
