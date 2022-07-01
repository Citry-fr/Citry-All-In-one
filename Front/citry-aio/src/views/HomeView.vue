<template>
  <div class="content">
    <h2 class="content__title">Home</h2>
    <p>Bienvenue sur le site Citry All In One !</p>
    <p>
      Ce site comprend plusieur petite application que je vais coder les une
      après les autres.
    </p>
    <p>Voici les application présente sur le site:</p>
    <ul class="nes-list">
      <li>Notes</li>
      <li>Counter</li>
      <li>Timer</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex-direction: column;
  align-items: center;
  &__title {
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
.is-disc {
  color: white;
}
</style>
