<template>
  <div>
    <h2>Goal</h2>
    <progress :max="todoArray.length" :value="doneArray.length">{{
      doneArray.length
    }}</progress>
  </div>
  <div>
    <h2>Todo</h2>
    <div v-for="(i, j) in todoArray" :key="j">
      <span>{{ i.todo }}</span>
      <span>{{ i.primary }}</span>
    </div>
  </div>
  <div>
    <h2>Done</h2>
    <div v-for="(i, j) in doneArray" :key="j">
      <span>{{ i.todo }}</span>
      <span>{{ i.primary }}</span>
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

<style lang="scss" scoped></style>
