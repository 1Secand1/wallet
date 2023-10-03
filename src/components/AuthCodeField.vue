<template>
  <ul class="form__list-fields">
    <li class="form__row-box">
      <AuthCodeInputField
        @input="handleCodeEntry($event)"
        @click.prevent="focusCurrentInput"
      />
      <AuthCodeInputField
        @input="handleCodeEntry($event)"
        @click.prevent="focusCurrentInput"
      />
      <AuthCodeInputField
        @input="handleCodeEntry($event)"
        @click.prevent="focusCurrentInput"
      />
      <AuthCodeInputField
        @input="handleCodeEntry($event)"
        @click.prevent="focusCurrentInput"
      />
    </li>
  </ul>
</template>

<script>
import AuthCodeInputField from "./AuthCodeInputField.vue";
export default {
  emits: ["confirmationCodeEntered"],
  components: {
    AuthCodeInputField,
  },
  data() {
    return {
      inputElements: [],
      confirmationСode: [],
      currentInput: 0,
    };
  },

  mounted() {
    this.getInputElements();
    this.focusCurrentInput();
  },

  methods: {
    handleCodeEntry({ target }) {
      this.confirmationСode.push(target.value);

      if (this.currentInput === this.inputElements.length - 1) {
        this.emitConfirmationCode();
      }

      this.nextInput();
    },

    emitConfirmationCode() {
      let confirmationСode = this.confirmationСode.join("");

      this.$emit("confirmationCodeEntered", confirmationСode);
    },

    nextInput() {
      this.currentInput++;

      if (this.currentInput < this.inputElements.length) {
        this.focusCurrentInput();
      }

      if (this.currentInput > 0) {
        this.inputElements[this.currentInput - 1].readOnly = true;
      }

      if (this.currentInput == this.inputElements.length) {
        this.inputElements.forEach((input) => {
          input.value = "";
        });

        this.currentInput = 0;
        this.confirmationСode = [];
        this.inputElements[0].readOnly = false;
        this.focusCurrentInput();
      }
    },

    runIfCodeIsCorrect(confirmationСode) {
      alert(`Код ${confirmationСode} неверный`);
    },

    runIfCodeIsWrong(confirmationСode) {
      alert(`Код ${confirmationСode} верный !`);
    },

    focusCurrentInput() {
      this.inputElements[this.currentInput].readOnly = false;
      this.inputElements[this.currentInput].focus();
    },

    getInputElements() {
      this.inputElements = document.querySelectorAll(
        ".form__input-confirmation-code"
      );
    },
  },
};
</script>

<style>
.form__row-box {
  display: flex;
  justify-content: center;

  margin-top: 10px;
  gap: 15px;
}
</style>
