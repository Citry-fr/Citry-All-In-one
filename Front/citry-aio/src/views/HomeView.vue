<template>
  <div class="content">
    <h2 class="content__title">Home</h2>
    <p>Welcome in the Citry All In One website !</p>
    <p>
      This site includes several small applications that I will code some after
      the others.
    </p>
    <p>Here are the apps on the site:</p>
    <ul class="nes-list">
      <li>Notes</li>
      <li>Counter</li>
      <li>Timer</li>
    </ul>
    <p>
      I will add applications as I go along, in the meantime do not hesitate
      looking at my LinkedIn and my GitHub
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
  padding: 0px 150px;
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
