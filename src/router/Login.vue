<template>
  <AuthFormWrapperVue>
    <AuthForm formTitle="Авторизация">
      <ul class="form__list-fields">
        <AuthNamedInputField label="Email" />

        <AuthNamedInputField label="Password" v-model="password" />

        <AuthFormBtn @click="passwordValidation"> Login </AuthFormBtn>

        <AuthFormRedirectLink nameRouter="registration">
          <template v-slot:text> Don’t have account? </template>
          <template v-slot:linkText>Go to Register </template>
        </AuthFormRedirectLink>
      </ul>
    </AuthForm>
  </AuthFormWrapperVue>
</template>

<script>
import AuthFormWrapperVue from "@/components/AuthFormWrapper.vue";
import AuthNamedInputField from "@/components/AuthNamedInputField.vue";
import AuthForm from "@/components/AuthForm";
import AuthFormBtn from "@/components/AuthFormBtn";
import AuthFormRedirectLink from "@/components/AuthFormRedirectLink";

export default {
  name: "Authorization",

  components: {
    AuthFormWrapperVue,
    AuthNamedInputField,
    AuthForm,
    AuthFormBtn,
    AuthFormRedirectLink,
  },

  data() {
    return {
      TESTcorrectPassword: "1",
      password: "",
      isWrongPassword: false,
    };
  },

  methods: {
    passwordValidation() {
      if (this.password == this.TESTcorrectPassword) {
        localStorage.setItem("authorization", true);
        this.isWrongPassword = false;
        this.$router.push({ name: "dashboard" });
      } else {
        console.log("нельзя");
        localStorage.setItem("authorization", "");
        this.isWrongPassword = true;
      }

      this.password = "";
    },
  },
};
</script>

<style lang="scss"></style>
