<template>
  <main class="form-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="form" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
body {
  overflow: hidden;
}

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

  &__title {
    font-size: 2em;
  }
  &__list-fields {
    display: grid;
    gap: 24px;
  }
  &__columns-box {
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

  &__password-error {
    margin-top: 2px;

    color: #fc4e68;
    text-align: left;
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
