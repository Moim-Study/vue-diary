<template>
  <div id="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/timeLine">TimeLine</router-link>
  </div>
  <Calendar />
  <MainTodo />

  <div id="footer">
    <div class="footerBtns">
      <button><i class="fas fa-search"></i></button>
      <button class="footerPlusBtn">
        <img src="./assets/plus_btn.svg" alt="plus_btn" />
      </button>
      <button><i class="fas fa-cog"></i></button>
    </div>
  </div>

  <router-view />
</template>

<script>
import Calendar from "./components/Calendar";
import MainTodo from "./components/MainTodo";

export default {
  name: "App",
  components: {
    Calendar,
    MainTodo,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  background-color: #eee;
  padding: 24px 3rem;
}

.footerBtns {
  border-radius: 50px;
  background-color: white;
  color: black;
  @include flex(space-evenly, center, "");

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
