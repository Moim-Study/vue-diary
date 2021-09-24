<template>
  <div class="todoContainer">
    <span class="todoTitle">Goal</span>
    <progress :max="todoArray.length" :value="doneArray.length">{{
      doneArray.length
    }}</progress>
  </div>
  <div class="todoContainer">
    <span class="todoTitle">Todo</span>
    <div class="todoContents" v-for="(i, j) in todoArray" :key="j">
      <span>{{ i.primary }}</span>
      <span>{{ i.todo }}</span>
      <span>
        <img src="../assets/todo/edit.svg" />
        <img src="../assets/todo/check-circle.svg" />
        <img src="../assets/todo/trash.svg" />
      </span>
    </div>
  </div>
  <div class="todoContainer">
    <span class="todoTitle">Done</span>
    <div class="todoContents doneContents" v-for="(i, j) in doneArray" :key="j">
      <span>{{ i.primary }}</span>
      <span
        ><s>{{ i.todo }}</s></span
      >
      <span><img src="../assets/todo/trash.svg"/></span>
    </div>
  </div>
</template>

<script>
  // https://github.com/dzwillia/vue-simple-progress
  export default {
    props: {
      max: Number,
      value: Number,
    },
    data() {
      return {
        todoArray: [
          { todo: '강아지 산책시키기', primary: '🔴' },
          { todo: '뷰 공부하기', primary: '🟢' },
          { todo: '밥먹기', primary: '🔵' },
          { todo: 'Todo 예시1', primary: '🟡' },
          { todo: 'Todo 예시2', primary: '🟠' },
        ],
        doneArray: [{ todo: 'Done 예시1', primary: '🟠' }],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../Mixin.scss';
  .todoContainer {
    @include flex(center, center, column);
    margin-bottom: 30px;
    .todoTitle {
      width: 100vw;
      font: {
        size: 20px;
        weight: 500;
        family: 'Roboto Mono', monospace;
      }
    }
    .todoContents {
      @include flex(space-between, center, row);
      width: 70%;
      span {
        display: inline-block;
        &:first-of-type {
          width: 5%;
          font-size: 10px;
          line-height: 2.5;
        }
        &:nth-of-type(2) {
          width: 65%;
          text: {
            align: left;
            indent: 10px;
          }
        }
        &:last-of-type {
          width: 30%;
          text-align: right;
          img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-left: 10%;
            cursor: pointer;
            &:first-of-type {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
</style>
