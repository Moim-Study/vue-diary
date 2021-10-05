<template>
  <Modal :step="step" :showModal="showModal" @modalStatus="showModal = false" />
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
      <button @click="step_1">
        <img src="./assets/main/search_btn.svg" alt="search_btn" />
      </button>
      <button class="FooterPlusBtn" @click="step_2">
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
      showModal: false,
      // url: document.location.href.split('/'),
    };
  },
  methods: {
    step_1() {
      this.step = 1;
      this.showModal = true;
    },
    step_2() {
      this.step = 2;
      this.showModal = true;
    },
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
  text-align: center;
}

#nav {
  font-size: 1.4em;
  padding: 16px;
  /*border: 1px solid red;*/
  @include flex(space-evenly, center, '');
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /*color: #42b983;*/
  color: orangered;
  text-decoration: underline;
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
