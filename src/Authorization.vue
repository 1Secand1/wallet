<template>
  <main class="form-wrapper">
    <form class="form" action="">
      <h1 class="form__title">login</h1>

      <ul class="form__list-fields">
        <li class="form__field-box">
          <label class="form__field-title" for="email">Email</label>
          <input class="form__field" type="email" name="" id="email" />
        </li>

        <li class="form__field-box">
          <div class="row">
            <label class="form__field-title" for="password">Password</label>
            <a href="">Forgot password?</a>
          </div>

          <input class="form__field" type="password" name="" id="password" />
        </li>

        <button class="form__btn" type="submit">Login</button>

        <p class="">Don’t have account? <a href="">Create new account</a></p>
      </ul>
    </form>

    
  </main>
</template>
<script>
export default {
  name: "Authorization",

  components: {},
};
</script>

<style lang="scss">
.form-wrapper {
  display: grid;
  place-items: center;
  text-align: center;

  min-width: 90vw;
  min-height: 100vh;

  padding-left: 16px;
  padding-right: 16px;
}

.form {
  width: 70%;
  min-width: 350px;
  max-width: 500px;
  padding: 23px 32px;

  border-radius: 20px;
  background: #ffffff;

  color: black;

  &__list-fields {
    display: grid;
    gap: 24px;
  }
  &__field-box {
    display: grid;
  }

  &__field-title {
    text-align: left;
  }
  &__field {
    padding: 3px;
    margin-top: 2px;

    outline: #007aff;
  }
  &__btn {
    padding: 8px;

    background: #007aff;
    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
      background: #298ef9;
    }
  }
  .row {
    width: 100%;
    justify-content: space-between;
    display: flex;
  }
}
</style>
