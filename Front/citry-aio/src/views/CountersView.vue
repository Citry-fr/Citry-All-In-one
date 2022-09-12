<template>
  <div>
    <h1>Counter</h1>
    <input type="file" accept="image/*" @change="log" ref="file" />
    <button v-if="filePresent" @click="del">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const img = ref('');
const filePresent = ref(false);
const file = ref();

const log = (event) => {
  img.value = URL.createObjectURL(event.target.files[0]);
  console.log(file.value.value);
  if (event.target.files[0]) {
    filePresent.value = true;
  }
};

const del = () => {
  file.value.value = '';
  filePresent.value = false;
};
</script>

<style lang="scss" scoped></style>
