<template>
  <input
    @input="inputValidation($event)"
    readonly
    inputmode="numeric"
    pattern="[0-9]*"
    maxlength="1"
    class="form__input-confirmation-code"
    type="text"
  />
</template>

<script>
export default {
  methods: {
    inputValidation({ target }) {
      if (target.value === " " || isNaN(target.value)) {
        target.value = "";
      }
    },
  },
};
</script>

<style lang="scss">
.form__input-confirmation-code {
  display: grid;
  place-items: center;
  text-align: center;

  height: 42px;
  width: 42px;

  border-radius: 5px;

  font-size: 19px;
  outline: #007aff;
}
</style>
