<template>
  <div>
    <div class="AddTodoPrimary">
      <label class="PrimaryContainer">
        <span>Primary</span>
        <span class="PrimaryButtons">
          <button value="🔴">🔴</button>
          <button value="🟠">🟠</button>
          <button value="🟡">🟡</button>
          <button value="🟢">🟢</button>
          <button value="🔵">🔵</button>
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
  };
</script>

<style lang="scss" scoped>
  @import '../Mixin.scss';

  .AddTodoPrimary {
    margin-bottom: 10%;
    width: 90%;
    margin: 10% auto;
    .PrimaryContainer {
      @include flex(space-between, center, row);
      width: 80%;
      flex-wrap: nowrap;
      margin: 0 auto;
    }
    .Tip {
      width: 80%;
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
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  .AddTodo {
    width: 70%;
    height: auto;
    padding: 3%;
    font-weight: 500;
    &:focus {
      outline-color: #2c3e50;
    }
  }
</style>
