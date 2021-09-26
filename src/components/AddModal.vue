<template>
  <div class="BlackScreen">
    <div class="WhiteScreen">
      <div class="AddTitle" v-text="AddTitle"></div>
      <AddTodo />
      <div class="AddModalBtn" v-text="'Save' + Add"></div>
    </div>
  </div>
</template>

<script>
  import AddTodo from '../views/AddTodo.vue';

  export default {
    data: function() {
      return {
        AddTitle: {
          default: 'Add',
          type: String,
        },
        Add: {
          default: 'TimeLine',
          type: String,
        },
      };
    },
    components: {
      AddTodo,
    },
  };
</script>

<style lang="scss" scoped>
  .BlackScreen {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
    .WhiteScreen {
      width: 80%;
      height: 80%;
      z-index: 2;
      background: #ffffff;
      .AddTitle {
        width: 100%;
        text-align: center;
        font: {
          weight: 700;
          size: 20px;
        }
      }
    }
  }
</style>
