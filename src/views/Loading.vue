<template>
  <div class="loadingContainer">
    <div class="loading">
      <img alt="Vue logo" src="../assets/logo.png" /><span>iary</span>
    </div>
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
  .loadingContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .loading {
      position: relative;
      span {
        position: absolute;
        bottom: 10%;
        right: 6%;
        font: {
          family: 'Black Han Sans', sans-serif;
          weight: 900;
          size: 30px;
        }
      }
      img {
        width: 65%;
        height: auto;
        box-sizing: border-box;
      }
    }
  }
</style>
