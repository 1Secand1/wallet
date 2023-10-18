<template>
  <AuthFormWrapperVue>
    <AuthForm formTitle="Регистрация">
      <ul class="form__list-fields">
        <AuthNamedInputField label="Login" />

        <AuthNamedInputField label="Email" />

        <AuthNamedInputField label="Password" />

        <AuthNamedInputField label="Password confirmation" />

        <AuthFormBtn>
          <router-link style="color: white" :to="{ name: 'confirmation' }">
            Зарегистрироватся
          </router-link>
        </AuthFormBtn>

        <AuthFormRedirectLink nameRouter="login">
          <template v-slot:text> I have an account ? </template>
          <template v-slot:linkText> proceed to authorization </template>
        </AuthFormRedirectLink>
      </ul>
    </AuthForm>
  </AuthFormWrapperVue>
</template>

<script>
import AuthFormWrapperVue from "@/components/AuthFormWrapper.vue";
import AuthNamedInputField from "../components/AuthNamedInputField.vue";
import AuthForm from "@/components/AuthForm";
import AuthFormBtn from "@/components/AuthFormBtn";
import AuthFormRedirectLink from "@/components/AuthFormRedirectLink";

export default {
  name: "registration",

  components: {
    AuthFormWrapperVue,
    AuthNamedInputField,
    AuthForm,
    AuthFormBtn,
    AuthFormRedirectLink,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
