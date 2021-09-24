<template>
  <div id="nav" v-if="url[3] !== 'loading'">
    <router-link to="/todo">Todo</router-link>
  </div>
  <router-view />
</template>
<script>
  export default {
    data() {
      return {
        url: document.location.href.split('/'),
      };
    },
  };
</script>
<style lang="scss">
  @import 'App.scss';
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
</style>
