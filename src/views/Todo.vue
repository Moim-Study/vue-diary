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
      <label>
        <span class="TodoPrimary">{{ i.primary }}</span>
        <span class="Todo">{{ i.todo }}</span>
        <span class="TodoDay">{{ i.day }}</span>
        <span class="TodoTime">{{ i.time }}</span>
        <span class="TodoIcons">
          <img src="../assets/todo/edit.svg" />
          <img src="../assets/todo/check-circle.svg" />
          <img src="../assets/todo/trash.svg" />
        </span>
      </label>
    </div>
  </div>
  <div class="TodoContainer">
    <span class="TodoTitle">Done</span>
    <div class="TodoContents" v-for="(i, j) in doneArray" :key="j">
      <label>
        <span class="TodoPrimary">{{ i.primary }}</span>
        <span class="Todo">
          <s>{{ i.todo }}</s>
        </span>
        <span class="TodoDay">{{ i.day }}</span>
        <span class="TodoTime">{{ i.time }}</span>
        <span class="TodoIcons"><img src="../assets/todo/trash.svg"/></span>
      </label>
    </div>
  </div>
  <AddTodo />
</template>

<script>
  // https://github.com/dzwillia/vue-simple-progress
  import AddTodo from './AddTodo.vue';
  export default {
    props: {
      max: Number,
      value: Number,
    },
    components: { AddTodo },
    data() {
      return {
        todoArray: [
          {
            todo: '강아지 산책시키기',
            primary: '🔴',
            day: '2021.09.26',
            time: '14:51',
          },
          {
            todo: '뷰 공부하기',
            primary: '🟢',
            day: '2021.09.25',
            time: '15:40',
          },
          { todo: '밥먹기', primary: '🔵', day: '2021.09.26', time: '14:51' },
          {
            todo: 'Todo 예시1',
            primary: '🟡',
            day: '2021.09.26',
            time: '14:51',
          },
          {
            todo: 'Todo 예시2',
            primary: '🟠',
            day: '2021.09.26',
            time: '14:51',
          },
        ],
        doneArray: [
          {
            todo: 'Done 예시1',
            primary: '🟠',
            day: '2021.09.24',
            time: '21:00',
          },
        ],
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
        weight: 600;
        family: 'Roboto Mono', monospace;
      }
    }
    .TodoContents {
      @include flex(space-between, center, column);
      width: 80%;
      & > label {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        span {
          height: 100%;
          line-height: 30px;
        }
        .TodoPrimary {
          width: 5%;
          font-size: 10px;
        }
        .Todo {
          width: 50%;
          text: {
            align: left;
            indent: 10px;
          }
        }
        .TodoDay {
          width: 8%;
          font-size: 10px;
          text-align: right;
        }
        .TodoTime {
          width: 7%;
          padding-left: 5px;
          font-size: 10px;
          text-align: left;
        }
        .TodoIcons {
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
        width: 80%;
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
