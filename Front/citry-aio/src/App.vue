<template>
  <header class="header">
    <p class="header__p">Soon le bg</p>
    <div class="header__nav">
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

* {
  font-family: 'Press Start 2P', cursive;
}

body {
  background-color: grey;
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
  background-color: white;
  @include pixel-borders($corner-size: 2);
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom: 0;
  &__p {
    margin: 10px 0;
  }
  &__nav {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    border-bottom: 4px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      @include pixel-borders($corner-size: 2);
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom: 0;
      border-right: 0;
      background-color: white;
      position: relative;
      bottom: -3px;
      width: 150px;
      display: flex;
      justify-content: center;
      padding: 5px 0px;
    }
    &__link + .second {
      left: -4px;
    }
    &__link + .third {
      left: -8px;
    }
    &__border {
      position: absolute;
      top: 0;
      right: 0px;
      width: 100%;
      height: 100%;
      border-right: 4px solid black;
      border-bottom: 4px solid black;
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
</style>
