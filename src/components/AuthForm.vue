<template>
  <form class="form" @submit.prevent="">
    <h2 class="form__title">{{ formTitle }}</h2>
    <slot />
  </form>
</template>

<script>
export default {
  props: ["formTitle"],
};
</script>

<style lang="scss">
.form {
  width: 70%;
  min-width: 350px;
  max-width: 500px;
  padding: 23px 32px;

  border-radius: 20px;
  background: #ffffff;

  color: black;
}

.form__title {
  font-size: 2em;
}
</style>
