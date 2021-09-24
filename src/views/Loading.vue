<template>
  <div class="logo">
    <img alt="Vue logo" src="../assets/logo.png" /><span>iary</span>
  </div>
</template>

<script>
  export default {
    name: 'Viary',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // color: #42b983;
  .logo {
    width: 100vw;
    height: 100vh;
    span {
      font: {
        family: 'Black Han Sans', sans-serif;
        weight: 900;
      }
    }
    img {
      width: 15%;
      height: auto;
      box-sizing: border-box;
    }
  }
</style>
