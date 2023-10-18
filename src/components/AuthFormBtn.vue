<template>
  <button class="form__btn" type="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.form__btn {
  padding: 8px;

  background: #007aff;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  color: white;

  &:hover {
    background: #298ef9;
  }
}
</style>
