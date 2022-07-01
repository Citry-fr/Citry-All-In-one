<template>
  <div class="content">
    <h2 class="content__title">Home</h2>
    <p>Bienvenue sur le site Citry All In One !</p>
    <p>
      Ce site comprend plusieurs petites applications que je vais coder les unes
      après les autres.
    </p>
    <p>Voici les applications présentes sur le site:</p>
    <ul class="nes-list">
      <li>Notes</li>
      <li>Counter</li>
      <li>Timer</li>
    </ul>
    <p>
      J'ajouterais d'application au fur et à mesure, en attendant n'hésitez pas
      à regarder mon LinkedIn et mon GitHub
    </p>
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
  padding: 0px 30px;
  &__title {
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
.is-disc {
  color: white;
}

li {
  font-weight: bold;
}
</style>
