<template>
  <header class="header">
    <p class="header__p">Soon le bg</p>
    <div class="header__nav">
      <router-link class="header__nav__link home" to="/"
        >H
        <div class="header__nav__border"></div
      ></router-link>
      <router-link class="header__nav__link first" to="/notes"
        >Notes
        <div class="header__nav__border"></div
      ></router-link>
      <router-link class="header__nav__link second" to="/counters"
        >Counter
        <div class="header__nav__border"></div
      ></router-link>
      <router-link class="header__nav__link third" to="/timers"
        >Timer
        <div class="header__nav__border"></div
      ></router-link>
    </div>
    <router-view />
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import '../node_modules/nes.css/css/nes.css';
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import 'node_modules/pixel-borders/src/styles/pixel-borders.scss';
@import './scss/variable.scss';

* {
  font-family: 'Press Start 2P', cursive;
  color: $text-primary;
}

body {
  background-color: $bg-dark;
}

.header {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 15px;
  left: 50%;
  margin-left: -45%;
  padding: 5px 0 0 0;
  background-color: $bg-light;
  @include pixel-borders($corner-size: 2, $border-color: $border-color);
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom: 0;
  &__p {
    margin: 10px 0;
    color: $text-primary;
  }
  &__nav {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    border-bottom: 4px solid $border-color;
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    align-items: center;
    &__link {
      @include pixel-borders($corner-size: 2, $border-color: $border-color);
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom: 0;
      border-right: 0;
      background-color: $bg-light;
      color: $text-primary;
      text-decoration: none;
      position: relative;
      bottom: -3px;
      width: 150px;
      display: flex;
      justify-content: center;
      padding: 5px 0px;
      &:hover {
        text-decoration: none;
        color: $text-secondary;
      }
    }
    &__link + .first {
      left: -4px;
    }
    &__link + .second {
      left: -8px;
    }
    &__link + .third {
      left: -12px;
    }
    &__border {
      position: absolute;
      top: 0;
      right: 0px;
      width: 100%;
      height: 100%;
      border-right: 4px solid $border-color;
      border-bottom: 4px solid $border-color;
    }
    & a.router-link-active {
      padding: 10px 0px;
      bottom: 2px;
      .header__nav__border {
        border-bottom: 0;
      }
    }
  }
}
.home {
  width: 50px;
}
</style>
