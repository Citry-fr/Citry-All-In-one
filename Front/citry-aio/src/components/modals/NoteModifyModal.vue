<template>
  <div class="container">
    <vue-final-modal
      class="modal"
      classes="modal-container"
      v-model="showModal"
      @closed="emitConfirmed"
    >
      <div class="modal__content">
        <h3 class="modal__content__title">Modifier une note</h3>
        <div class="nes-field modal__content__title-input">
          <label for="name_field">Titre</label>
          <input
            v-model="noteData.title"
            type="text"
            id="name_field"
            class="nes-input is-dark"
            autocomplete="off"
          />
        </div>
        <div>
          <label for="textarea_field">Contenu</label>
          <textarea
            v-model="noteData.content"
            id="textarea_field"
            class="nes-textarea is-dark"
            autocomplete="off"
          ></textarea>
        </div>
        <div class="modal__content__radio">
          <label class="modal__content__radio__choice">
            <input
              type="radio"
              class="nes-radio is-dark"
              name="answer-dark"
              value="Normal"
              v-model="noteData.priority"
              checked
            />
            <span class="modal__content__radio__choice__normal">Normal</span>
          </label>

          <label class="modal__content__radio__choice">
            <input
              value="Important"
              type="radio"
              class="nes-radio is-dark"
              name="answer-dark"
              v-model="noteData.priority"
            />
            <span class="modal__content__radio__choice__important"
              >Important</span
            >
          </label>

          <label class="modal__content__radio__choice">
            <input
              value="Urgent"
              type="radio"
              class="nes-radio is-dark"
              name="answer-dark"
              v-model="noteData.priority"
            />
            <span class="modal__content__radio__choice__urgent">Urgent</span>
          </label>
        </div>
        <p class="modal__content__prio">{{ noteData.priority }}</p>
        <button
          type="button"
          class="nes-btn"
          v-bind:class="{
            'is-disabled': isFormFilled,
            'is-success': !isFormFilled,
          }"
          @click="getNoteData"
          :disabled="isFormFilled"
        >
          Confirmer
        </button>
      </div>
    </vue-final-modal>
    <button type="button" class="nes-btn is-primary" @click="showModal = true">
      Edit
    </button>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/note.js';
import { computed, ref } from 'vue';

const props = defineProps({
  title: String,
  content: String,
  priority: String,
  id: String,
});

const showModal = ref(false);
const noteData = ref({
  title: props.title,
  content: props.content,
  priority: props.priority,
});

const prioColor = {
  Urgent: 'red',
  Important: 'yellow',
  Normal: 'grey',
};

const getPrio = computed(() => {
  console.log(prioColor[noteData.value.priority], noteData.value.priority);
  return prioColor[noteData.value.priority];
});

const isFormFilled = computed(() => {
  return noteData.value.title === '' || noteData.value.content === '';
});

const emit = defineEmits(['confirmed']);

const getNoteData = () => {
  const note = useNoteStore();
  note.modifyNote(props.id, noteData.value);
  showModal.value = false;
};
const emitConfirmed = () => {
  emit('confirmed');
};
</script>

<style lang="scss" scoped>
@import 'node_modules/pixel-borders/src/styles/pixel-borders.scss';
@import '../../../node_modules/nes.css/css/nes.css';

:deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  &__content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 600px;
    background-color: $bg-light;
    @include pixel-borders($corner-size: 2, $border-color: $border-color);
    &__title {
      font-weight: 1.5rem;
      font-weight: 700;
    }
    &__title-input {
      width: 495px;
    }
    &__radio {
      display: flex;
      justify-content: space-around;
      width: 495px;
      &__choice {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        &__normal {
          color: gray !important;
        }
        &__important {
          color: yellow !important;
        }
        &__urgent {
          color: red !important;
        }
      }
    }
    &__prio {
      color: v-bind(getPrio) !important;
    }
  }
}
</style>
