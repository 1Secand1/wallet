<template>
  <form class="form" action="">
    <h2 class="form__title">Регистрация</h2>

    <ul class="form__list-fields">
      <li class="form__columns-box">
        <label class="form__field-title" for="login">Логин</label>
        <input class="form__field" type="text" name="" id="login" />
      </li>

      <li class="form__columns-box">
        <label class="form__field-title" for="email">Email</label>
        <input class="form__field" type="email" name="" id="email" />
      </li>

      <li class="form__columns-box">
        <label class="form__field-title" for="password">Пароль</label>
        <input class="form__field" type="password" name="" id="password" />
      </li>

      <li class="form__columns-box">
        <label class="form__field-title" for="repetitionPassword"
          >Подтверждение пароля</label
        >
        <input
          class="form__field"
          type="password"
          name=""
          id="repetitionPassword"
        />
      </li>

      <button class="form__btn" type="submit">Зарегистрироватся</button>
    </ul>
  </form>
</template>
<script>
export default {
  name: "registration",
  components: {},

  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
