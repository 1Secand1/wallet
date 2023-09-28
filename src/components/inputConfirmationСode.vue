<template>
  <form class="form" action="">
    <p>Код подтверждения</p>

    <ul class="form__list-fields">
      <li class="form__row-box">
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusInput"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusInput"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusInput"
          class="form__field form__input-confirmation-code"
          type="text"
        />
        <input
          @input="runNumberCrunching($event)"
          @click.prevent="focusInput"
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
  },
  methods: {
    runNumberCrunching(event) {
      this.confirmationСode.push(event.data);

      this.currentInput++;

      if (this.currentInput < 4) {
        this.focusInput();
        return;
      }

      let confirmationСode = +this.confirmationСode.join("");

      if (confirmationСode == 1234) {
        alert("Верный код !");
      } else {
        alert(`Код ${confirmationСode} неверный`);

        this.inputElements.forEach((input) => {
          input.value = "";
          this.currentInput = 0;
        });
        this.confirmationСode = [];
        this.inputElements[0].focus();
      }
    },
    findInputElements() {
      this.inputElements = document.querySelectorAll(
        ".form__input-confirmation-code"
      );
    },
    focusInput() {
      this.inputElements[this.currentInput].focus();
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
