<template>
  <div class="noteComp">
    <h3 class="noteComp__title">{{ props.title }}</h3>
    <p class="noteComp__content">{{ props.content }}</p>
    <p class="noteComp__priority">{{ props.priority }}</p>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';

const props = defineProps({
  title: String,
  content: String,
  priority: String,
});

const prioColor = {
  Urgent: 'red',
  Important: 'yellow',
  Normal: 'grey',
};
const getPrio = computed(() => {
  return prioColor[props.priority];
});

onMounted(() => {
  console.log(prioColor[props.priority]);
});
</script>

<style lang="scss" scoped>
@import 'node_modules/pixel-borders/src/styles/pixel-borders.scss';
@import '../../../node_modules/nes.css/css/nes.css';

.noteComp {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  @include pixel-borders($corner-size: 2, $border-color: $border-color);

  &__title {
    margin: 0;
  }
  &__content,
  &__priority {
    margin: 0;
    font-size: 12px;
  }
  &__priority {
    color: v-bind(getPrio);
  }
}
</style>
