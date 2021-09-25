<template>
  <div class="TodoContainer">
    <span class="TodoTitle">Goal</span>
    <span class="TodoProgressContainer">
      <img />
      <progress :max="todoArray.length" :value="doneArray.length">{{
        doneArray.length
      }}</progress>
      <img />
    </span>
  </div>
  <div class="TodoContainer">
    <span class="TodoTitle">Todo</span>
    <div class="TodoContents" v-for="(i, j) in todoArray" :key="j">
      <span>{{ i.primary }}</span>
      <span>{{ i.todo }}</span>
      <span>
        <img src="../assets/todo/edit.svg" />
        <img src="../assets/todo/check-circle.svg" />
        <img src="../assets/todo/trash.svg" />
      </span>
    </div>
  </div>
  <div class="TodoContainer">
    <span class="TodoTitle">Done</span>
    <div class="TodoContents" v-for="(i, j) in doneArray" :key="j">
      <span>{{ i.primary }}</span>
      <span>
        <s>{{ i.todo }}</s>
      </span>
      <span><img src="../assets/todo/trash.svg"/></span>
    </div>
  </div>
  <AddTodo />
</template>

<script>
  // https://github.com/dzwillia/vue-simple-progress
  import AddTodo from '@/components/AddTodo.vue';
  export default {
    props: {
      max: Number,
      value: Number,
    },
    components: { AddTodo },
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
  .TodoContainer {
    @include flex(center, center, column);
    margin-bottom: 30px;
    .TodoTitle {
      width: 100vw;
      font: {
        size: 20px;
        weight: 500;
        family: 'Roboto Mono', monospace;
      }
    }
    .TodoContents {
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
    .TodoProgressContainer {
      width: 100%;
      progress {
        width: 60%;
        height: 25px;
        color: #42b983;
      }
      progress::-webkit-progress-inner-element {
        color: #42b983;
      }
      progress::-webkit-progress-value {
        background: white;
      }
      progress::-moz-progress-bar {
        background: #42b983;
      }
    }
  }
</style>
