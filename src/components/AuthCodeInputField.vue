<template>
  <input
    @input="handleCodeEntry($event)"
    @click.prevent="focusCurrentInput"
    inputmode="numeric"
    pattern="[0-9]*"
    maxlength="1"
    class="form__field form__input-confirmation-code"
    type="text"
  />
</template>

<script>
export default {};
</script>

<style></style>
