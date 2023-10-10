<template>
  <AuthFormWrapperVue>
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
          style="color: white"
          @click.prevent="passwordValidation"
          class="form__btn"
          type="submit"
        >
          Login
        </button>

        <p class="">
          Don’t have account?
          <router-link to="/register">Create account</router-link>
        </p>
      </ul>
    </form>
  </AuthFormWrapperVue>
</template>

<script>
import AuthFormWrapperVue from "../components/AuthFormWrapper.vue";

export default {
  name: "Authorization",

  components: {
    AuthFormWrapperVue,
  },

  data() {
    return {
      TESTcorrectPassword: "adminaboba",
      password: "",
      isWrongPassword: false,
    };
  },

  computed: {
    passwordValidation() {
      if (this.password == this.TESTcorrectPassword) {
        this.isWrongPassword = false;
        this.$router.push("/Dashboard");
      } else {
        this.isWrongPassword = true;
      }

      this.password = "";
    },
  },
};
</script>

<style lang="scss"></style>
