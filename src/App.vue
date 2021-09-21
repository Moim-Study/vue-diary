<template>
  <Modal :step="step" />

  <div id="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/timeLine">TimeLine</router-link>
  </div>

  <Calendar />
  <MainTodo />

  <footer id="footer">
    <div class="footerBtns">
      <button @click="step = 1"><i class="fas fa-search"></i></button>
      <button class="footerPlusBtn" @click="step = 2">
        <img src="./assets/plus_btn.svg" alt="plus_btn" />
      </button>
      <router-link to="/setting"><i class="fas fa-cog"></i></router-link>
    </div>
  </footer>
</template>

<script>
import Calendar from "./components/Calendar";
import MainTodo from "./components/MainTodo";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      step: 0,
    };
  },
  components: {
    Calendar,
    MainTodo,
    Modal,
  },
};
</script>

<style lang="scss">
@import "App.scss";
@mixin object($w, $h, $p) {
  width: $w;
  height: $h;
  position: $p;
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #eee;
  padding: 24px 3rem;
  z-index: 2;
}

.footerBtns {
  @include flex(space-evenly, center, "");
  border-radius: 50px;
  background-color: white;
  color: black;

  i {
    @include flex(center, center, "");
    font-size: 1.5em;
    cursor: pointer;
  }
}

.footerPlusBtn {
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
