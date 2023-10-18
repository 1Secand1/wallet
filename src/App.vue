<template>
  <router-view v-slot="{ Component }">
    <AppTransition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </AppTransition>
  </router-view>
</template>

<script>
import AppTransition from "@/components/AppTransition.vue";

export default {
  components: {
    AppTransition,
  },

  data() {
    return {};
  },

  mounted() {
    //  this.$router.push({ name: "login" });
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

.form__list-fields {
  display: grid;
  gap: 24px;
}

.form__password-error {
  margin-top: 2px;

  color: #fc4e68;
  text-align: left;
}

.row {
  width: 100%;
  justify-content: space-between;
  display: flex;
}
</style>
