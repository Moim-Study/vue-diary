<template>
  <div class="TodoContainer">
    <span class="TodoTitle">Goal</span>
    <span class="TodoProgressContainer">
      <img src="../assets/todo/square.svg" />
      <progress :max="todoArray.length" :value="doneArray.length">{{
        doneArray.length
      }}</progress>
      <img src="../assets/todo/check-square.svg" />
    </span>
  </div>
  <div class="TodoContainer">
    <span class="TodoTitle">Todo</span>
    <div class="TodoContents" v-for="(i, j) in todoArray" :key="j">
      <span class="TodoPrimary">{{ i.primary }}</span>
      <span class="Todo">{{ i.todo }}</span>
      <span class="TodoIcons">
        <img src="../assets/todo/edit.svg" />
        <img src="../assets/todo/check-circle.svg" />
        <img src="../assets/todo/trash.svg" />
      </span>
    </div>
  </div>
  <div class="TodoContainer">
    <span class="TodoTitle">Done</span>
    <div class="TodoContents" v-for="(i, j) in doneArray" :key="j">
      <span class="TodoPrimary">{{ i.primary }}</span>
      <span class="Todo DoneTodo">
        {{ i.todo }}
      </span>
      <span class="TodoIcons"><img src="../assets/todo/trash.svg"/></span>
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
          },
          {
            todo: '뷰 공부하기',
            primary: '🟢',
          },
          { todo: '밥먹기', primary: '🔵' },
          {
            todo: 'Todo 예시1',
            primary: '🟡',
          },
          {
            todo: 'Todo 예시2',
            primary: '🟠',
          },
        ],
        doneArray: [
          {
            todo: 'Done 예시1',
            primary: '🟠',
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
      width: 100%;
      @extend %header;
    }
    .TodoContents {
      @include flex(space-between, center, row);
      width: 100%;
      height: 30px;
      span {
        height: 100%;
        line-height: 30px;
      }
      .TodoPrimary {
        width: 5%;
      }
      .Todo {
        width: 60%;
        text: {
          align: left;
          indent: 5px;
        }
      }
      .DoneTodo {
        text-decoration: line-through;
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
    .TodoProgressContainer {
      width: 100%;
      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
      progress {
        width: 80%;
        height: 25px;
        margin: 0 5px;
      }
    }
  }
</style>
