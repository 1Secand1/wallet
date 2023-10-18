<template>
  <li class="form__columns-box">
    <label class="form__field-label" :for="id">
      {{ label }}
    </label>
    <input
      class="form__field"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="change"
    />
  </li>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    label: String,
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
  },

  data() {
    return {
      id: "input-" + Math.random(),
    };
  },

  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.form__columns-box {
  display: grid;
}
.form__field-label {
  text-align: left;
}
.form__field {
  padding: 3px;
  margin-top: 2px;

  outline: #007aff;
}
</style>
