<template>
  <transition name="form" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.form-enter-active,
.form-leave-active {
  transition: all 0.3s ease-in-out;
}
.form-leave-active {
  transition-delay: 0.25s;
}

.form-enter-from,
.form-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.form-enter-active .inner,
.form-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.form-enter-active .inner {
  transition-delay: 0.25s;
}

.form-enter-from .inner,
.form-leave-to .inner {
  transform: translateX(30px);

  opacity: 0.01;
}
</style>
