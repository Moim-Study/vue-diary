<template>
  <div class="mainTodoWrap">
    <h2 class="mainTodoTitle">TO-DO</h2>

    <ul class="mainTodo">
      <li>
        <label class="mainTodoCheck"></label>
        Meeting with Client
        <p class="mainTodoTime">06:58pm</p>
      </li>
      <li>
        <label class="mainTodoCheck"></label>
        Take my pet to veteran
        <p class="mainTodoTime">06:58pm</p>
      </li>
      <li>
        <label class="mainTodoCheck"></label>
        Call CEO for meeting
        <p class="mainTodoTime">06:58pm</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mainTodoWrap {
  margin: 32px;
}

.mainTodoTitle {
  margin-bottom: 32px;
}

.mainTodo {
  li {
    display: flex;
    align-items: center;
    padding-bottom: 24px;
    text-align: left;
    position: relative;
    cursor: default;
  }
}

.mainTodoTime {
  font-size: 0.85em;
  color: #ccc;
  position: absolute;
  right: 0;

  &::after {
    content: " >";
    right: 0;
    color: #ccc;
  }
}

.mainTodoCheck {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid #ccc;
  margin-right: 14px;
  cursor: pointer;
}
</style>
