<template>
  <section class="sidebar-menu">
    <div class="sidebar-menu__logo-wrapper">
      <span class="sidebar-menu__icon">Кошель</span>
      <h2 class="sidebar-menu__logo-title"></h2>
    </div>

    <ul class="sidebar-menu__list">
      <li class="sidebar-menu__element">Dashboard</li>
      <li class="sidebar-menu__element">Invoice</li>
      <li class="sidebar-menu__element">Wallets</li>
      <li class="sidebar-menu__element">Reports</li>
      <li class="sidebar-menu__element">Transactions</li>

      <hr />

      <li class="sidebar-menu__element">Settings</li>
      <li class="sidebar-menu__element">Help</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "sidebar-menu",
  props: [],

  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.sidebar-menu {
  display: flex;

  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px;

  background: white;
  border-radius: 0px 26px 26px 0px;

  
  &__logo-wrapper {
    margin-top: 42px;
    height: min-content;
  }

  &__logo {
  }

  &__list {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    row-gap: 22px;
    margin-top: 73px;
  }
  &__element {
    border-radius: 6px;
    padding: 15px;

    color: #a1a0bd;
    font-size: 17px;
    font-weight: 800;
  }
}
</style>
