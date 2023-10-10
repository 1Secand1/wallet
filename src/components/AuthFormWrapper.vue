<template>
  <main class="form-wrapper">
    <slot></slot>
  </main>
</template>

<script>
export default {};
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
</style>
