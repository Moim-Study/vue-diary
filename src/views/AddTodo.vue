<template>
  <div>
    <div class="AddTodoPrimary">
      <label class="PrimaryContainer">
        <span>Primary</span>
        <span class="PrimaryButtons">
          <button @click="PrimaryBtnFunc('red')" value="red">🔴</button>
          <button @click="PrimaryBtnFunc('orange')" value="orange">🟠</button>
          <button @click="PrimaryBtnFunc('yellow')" value="yellow">🟡</button>
          <button @click="PrimaryBtnFunc('green')" value="green">🟢</button>
          <button @click="PrimaryBtnFunc('blue')" value="blue">🔵</button>
        </span>
      </label>
      <label class="Tip"><b>Tip!</b><b>Emargency</b></label>
    </div>
    <textarea
      name="AddTodo"
      class="AddTodo"
      placeholder="What do you have to do?"
      cols="2"
      rows="2"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: 'AddTodo',
    setup() {
      return {
        PrimaryBtnFunc(color) {
          switch (color) {
            case 'red':
              console.log('red');
              break;
            case 'orange':
              console.log('orange');
              break;
            case 'yellow':
              console.log('yellow');
              break;
            case 'green':
              console.log('green');
              break;
            case 'blue':
              console.log('blue');
              break;
            default:
              break;
          }
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../Mixin.scss';

  .AddTodoPrimary {
    margin-bottom: 10%;
    width: 100%;
    .PrimaryContainer {
      @include flex(space-between, center, row);
      flex-wrap: nowrap;
      margin: 0 auto;
      & > span:first-of-type {
        font-weight: 600;
      }
    }
    .Tip {
      margin: 10px auto 0;
      text-align: left;
      font-size: 11px;
      display: block;
      & > b:last-of-type {
        color: red;
      }
    }
    .PrimaryButtons {
      & > button {
        border: 0;
        background: transparent;
        width: 20px;
        height: 20px;
        text-align: center;
        &:focus,
        &:focus-visible {
          font-size: 16px;
        }
      }
    }
  }

  .AddTodo {
    width: 100%;
    height: auto;
    padding: 3%;
    font-weight: 500;
    &:focus {
      outline-color: #2c3e50;
    }
  }
</style>
