<template>
  <AuthFormWrapperVue>
    <form class="form" action="">
      <h2 class="form__title">Регистрация</h2>

      <ul class="form__list-fields">
        <li class="form__columns-box">
          <label class="form__field-title" for="login">Логин</label>
          <input class="form__field" type="text" id="login" />
        </li>

        <li class="form__columns-box">
          <label class="form__field-title" for="email">Email</label>
          <input class="form__field" type="email" id="email" />
        </li>

        <li class="form__columns-box">
          <label class="form__field-title" for="password">Пароль</label>
          <input class="form__field" type="password" id="password" />
        </li>

        <li class="form__columns-box">
          <label class="form__field-title" for="repetitionPassword"
            >Подтверждение пароля</label
          >
          <input class="form__field" type="password" id="repetitionPassword" />
        </li>

        <button class="form__btn" type="submit">
          <router-link style="color: white" :to="{ name: ' confirmation ' }">
            Зарегистрироватся
          </router-link>
        </button>

        <p class="">
          I have an account ?
          <router-link :to="{ name: 'login' }"
            >proceed to authorization
          </router-link>
        </p>
      </ul>
    </form>
  </AuthFormWrapperVue>
</template>

<script>
import AuthFormWrapperVue from "../components/AuthFormWrapper.vue";
export default {
  name: "registration",

  components: {
    AuthFormWrapperVue,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
