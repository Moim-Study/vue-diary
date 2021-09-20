<template>
  <article class="mainTodoWrap">
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
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
$space: 16px;

.mainTodoWrap {
  margin-bottom: 24px;
}
.mainTodoTitle {
  margin: $space 0;
}

.mainTodo {
  padding: 0 $space;

  li {
    display: flex;
    margin-bottom: 8px;
    font-size: 0.8em;
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
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  border: 1px solid #ccc;
  margin-right: 14px;
  cursor: pointer;
}
</style>
