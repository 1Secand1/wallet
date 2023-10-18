<template>
  <p class="">
    <slot name="text"> </slot>

    <router-link :to="{ name: nameRouter }">
      <slot name="linkText"></slot>
    </router-link>
  </p>
</template>

<script>
export default {
  props: ["nameRouter"],
};
</script>

<style></style>
