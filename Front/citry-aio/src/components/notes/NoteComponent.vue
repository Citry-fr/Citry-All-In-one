<template>
  <div
    class="noteComp"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <h3 class="noteComp__title">{{ props.title }}</h3>
    <p class="noteComp__content">{{ props.content }}</p>
    <p class="noteComp__priority">{{ props.priority }}</p>
    <div class="noteComp__buttons" v-if="isHover">
      <button type="button" class="nes-btn is-success">Open</button>
      <note-modify-modal
        :title="props.title"
        :content="props.content"
        :priority="props.priority"
        :id="props.id"
        @confirmed="props.confirmed"
      ></note-modify-modal>
      <button
        type="button"
        class="nes-btn is-error noteComp__buttons__delete"
        @click="emitDelete"
      >
        X
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import NoteModifyModal from '../modals/NoteModifyModal.vue';
const props = defineProps({
  title: String,
  content: String,
  priority: String,
  id: String,
  confirmed: Function,
});

const emit = defineEmits(['modify', 'delete']);

const isHover = ref();

const prioColor = {
  Urgent: 'red',
  Important: 'yellow',
  Normal: 'grey',
};
const getPrio = computed(() => {
  return prioColor[props.priority];
});
const emitDelete = () => {
  emit('delete');
};

onMounted(() => {
  console.log(prioColor[props.priority]);
});
</script>

<style lang="scss" scoped>
@import 'node_modules/pixel-borders/src/styles/pixel-borders.scss';
@import '../../../node_modules/nes.css/css/nes.css';

.noteComp {
  position: relative;
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
  &__content {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }
  &__content,
  &__priority {
    margin: 0;
    font-size: 12px;
  }
  &__priority {
    color: v-bind(getPrio);
  }
  &__buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    @include pixel-borders($corner-size: 1, $border-color: rgba(0, 0, 0, 0.2));
    background-color: rgba(0, 0, 0, 0.5);
    &__modify,
    &__delete {
      height: 40px;
    }
  }
}
</style>
