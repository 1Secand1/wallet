<template>
  <form class="form" @submit.prevent="submitHandler">
    <p>Код подтверждения</p>

    <AuthCodeField @confirmationCodeEntered="validateCodeEntry" />

    <button class="form__btn form__btn-repeated-request" type="submit">
      Отправить повторно
    </button>
  </form>
</template>

<script>
import AuthCodeField from "./AuthCodeField.vue";
export default {
  components: {
    AuthCodeField,
  },
  data() {
    return {};
  },
  methods: {
    submitHandler() {},
    validateCodeEntry(confirmationСode) {
      if (confirmationСode == "1234") {
        this.runIfCodeIsWrong(confirmationСode);
      } else {
        this.runIfCodeIsCorrect(confirmationСode);
      }
    },

    runIfCodeIsCorrect(confirmationСode) {
      alert(`Код ${confirmationСode} неверный`);
    },

    runIfCodeIsWrong(confirmationСode) {
      alert(`Код ${confirmationСode} верный !`);
    },
  },
};
</script>

<style lang="scss">
.form {
  &__btn-repeated-request {
    margin-top: 15px;
  }
}
</style>
