<template>
  <Modal :step="step" />
  <!-- <div id="nav" v-if="url[3] !== 'loading'"> -->
  <div id="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/todo">Todo</router-link>
  </div>

  <router-view></router-view>

  <footer id="Footer">
    <div class="FooterBtns">
      <button @click="step = 1"><i class="fas fa-search"></i></button>
      <button class="FooterPlusBtn" @click="step = 2">
        <img src="./assets/plus_btn.svg" alt="plus_btn" />
      </button>
      <router-link to="/setting"><i class="fas fa-cog"></i></router-link>
    </div>
  </footer>
</template>

<script>
  import Modal from './components/Modal';

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

  @mixin object($w, $h, $d) {
    width: $w;
    height: $h;
    display: $d;
  }

  @mixin flex($j, $a, $d) {
    display: flex;
    justify-content: $j;
    align-items: $a;
    flex-direction: $d;
  }

  #app {
    text-align: center;
  }

  #nav {
    padding: 16px;
    border: 1px solid red;
  }

  #nav a {
    font-weight: 300;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
    font-weight: bold;
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

    i {
      @include flex(center, center, '');
      font-size: 1.5em;
    }
  }

  .FooterPlusBtn {
    background-color: black;
    border-radius: 100%;
    padding: 0.8em;
    color: white;

    img {
      width: 35px;
      vertical-align: middle;
    }
  }
</style>
