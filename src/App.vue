<template>
  <Modal :step="step" />
  <!-- <div id="nav" v-if="url[3] !== 'loading'"> -->
  <div id="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/timeline">TimeLine</router-link>
    <router-link to="/todo">Todo</router-link>
    <router-link to="/diary">Diary</router-link>
  </div>
  <router-view></router-view>

  <footer id="Footer">
    <div class="FooterBtns">
      <button @click="step = 1">
        <img src="./assets/main/search_btn.svg" alt="search_btn" />
      </button>
      <button class="FooterPlusBtn" @click="step = 2">
        <img src="./assets/main/plus_btn.svg" alt="plus_btn" />
      </button>
      <router-link to="/setting">
        <img src="./assets/main/setting_btn.svg" alt="setting_btn" />
      </router-link>
    </div>
  </footer>
</template>

<script>
  import Modal from './views/Modal';

  export default {
    name: 'App',
    data() {
      return {
        step: 0,
        // url: document.location.href.split('/'),
      };
    },
    components: {
      Modal,
    },
  };
</script>

<style lang="scss">
  @import 'App.scss';
  @import 'Mixin.scss';

  #app {
    box-sizing: border-box;
    text-align: center;
  }

  #nav {
    @include object(flex, 100%, 7vh);
    flex-flow: wrap row;
    justify-content: space-evenly;
    align-content: center;
    padding: 1vh 6vh 1vh;
  }

  #nav a {
    height: 25px;
    line-height: 25px;
    font-weight: 300;
  }

  #nav a.router-link-exact-active {
    color: orangered;
    font-weight: 700;
  }

  #Footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 24px 3rem;
    z-index: 2;
  }

  .FooterBtns {
    @include flex(space-evenly, center, '');
    border-radius: 50px;
    background-color: #eee;
    color: black;

    img {
      @include object('', 1.5em, 1.5em);
      @include flex(center, center, '');
    }
  }

  .FooterPlusBtn {
    @include object('', 4em, 4em);
    background-color: black;
    border-radius: 100%;
    padding: 0.8em;
    color: white;
    text-align: center;

    img {
      width: 100%;
    }
  }
</style>
