<template>
  <AuthFormWrapperVue>
    <form class="form" @submit.prevent="submitHandler">
      <p>Код подтверждения</p>

      <AuthCodeField @confirmationCodeEntered="validateCodeEntry" />

      <button class="form__btn form__btn-repeated-request" type="submit">
        Отправить повторно
      </button>
    </form>
  </AuthFormWrapperVue>
</template>

<script>
import AuthCodeField from "../components/AuthCodeField.vue";
import AuthFormWrapperVue from "../components/AuthFormWrapper.vue";
export default {
  components: {
    AuthCodeField,
    AuthFormWrapperVue,
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
      this.$router.push("/register");
    },

    runIfCodeIsWrong(confirmationСode) {
      alert(`Код ${confirmationСode} верный !`);
      this.$router.push("/login");
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
