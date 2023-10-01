<template>
  <form class="form" action="">
    <p>Код подтверждения</p>

    <ul class="form__list-fields">
      <li class="form__row-box">
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusCurrentInput"
          maxlength="1"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusCurrentInput"
          maxlength="1"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusCurrentInput"
          maxlength="1"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusCurrentInput"
          maxlength="1"
          class="form__field form__input-confirmation-code"
          type="text"
        />
      </li>
    </ul>

    <button class="form__btn form__btn-repeated-request" type="submit">
      Отправить повторно
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputElements: [],
      confirmationСode: [],
      currentInput: 0,
    };
  },

  mounted() {
    this.findInputElements();
    this.lockInputs();
  },
  methods: {
    runNumberCrunching({ target }) {
      if (target.value === "" || isNaN(target.value)) {
        target.value = "";
        return;
      }

      this.confirmationСode.push(target.value);

      this.currentInput++;

      if (this.currentInput < 4) {
        this.nextInput();
        return;
      }

      let confirmationСode = this.confirmationСode.join("");

      if (confirmationСode == "1234") {
        //переход на след страницу
        this.runIfCodeIsWrong(confirmationСode);
      } else {
        this.runIfCodeIsCorrect(confirmationСode);
      }
    },

    runIfCodeIsCorrect(confirmationСode) {
      alert(`Код ${confirmationСode} неверный`);

      this.inputElements.forEach((input) => {
        input.value = "";
      });
      this.currentInput = 0;
      this.confirmationСode = [];
      this.inputElements[0].removeAttribute("readonly");
      this.focusCurrentInput();
    },
    
    runIfCodeIsWrong(confirmationСode) {
      alert(`Код ${confirmationСode} верный !`);
    },

    focusCurrentInput() {
      this.inputElements[this.currentInput].focus();
    },

    nextInput() {
      this.inputElements[this.currentInput].removeAttribute("readonly");

      this.focusCurrentInput();

      if (this.currentInput > 0) {
        this.inputElements[this.currentInput - 1].setAttribute("readonly", "");
      }
    },

    findInputElements() {
      this.inputElements = document.querySelectorAll(
        ".form__input-confirmation-code"
      );
    },

    lockInputs() {
      this.inputElements.forEach((input, index) => {
        if (index != 0) {
          input.setAttribute("readonly", "true");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.form {
  &__input-confirmation-code {
    display: grid;
    place-items: center;
    text-align: center;

    height: 42px;
    width: 42px;

    border-radius: 5px;

    font-size: 19px;
  }
  &__row-box {
    display: flex;
    justify-content: center;

    margin-top: 10px;
    gap: 15px;
  }

  &__btn-repeated-request {
    margin-top: 15px;
  }
}
</style>
