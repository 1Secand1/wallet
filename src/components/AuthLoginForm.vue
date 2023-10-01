<template>
  <form class="form" action="">
    <h2 class="form__title">Авторизация</h2>

    <ul class="form__list-fields">
      <li class="form__columns-box">
        <label class="form__field-title" for="email">Email</label>
        <input class="form__field" type="email" name="" id="email" />
      </li>

      <li class="form__columns-box">
        <div class="row">
          <label class="form__field-title" for="password">Пароль</label>
          <a href="">Forgot password?</a>
        </div>

        <input
          class="form__field"
          v-model="password"
          type="password"
          name=""
          id="password"
        />
        <p class="form__password-error" v-if="isWrongPassword">
          Не верный пароль
        </p>
      </li>

      <button
        @click.prevent="passwordValidation"
        class="form__btn"
        type="submit"
      >
        Login
      </button>

      <p class="">Don’t have account? <a href="">Create new account</a></p>
    </ul>
  </form>
</template>
<script>
export default {
  name: "Authorization",
  components: {},

  data() {
    return {
      TESTcorrectPassword: "1234",
      password: "",
      isWrongPassword: false,
    };
  },

  computed: {
    passwordValidation() {
      if (this.password == this.TESTcorrectPassword) {
        this.isWrongPassword = false;
      } else {
        this.isWrongPassword = true;
      }

      this.password = "";
    },
  },
};
</script>

<style scoped lang="scss"></style>
