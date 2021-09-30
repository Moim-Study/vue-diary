<template>
  <article class="MainTodoWrap">
    <ul class="MainTodoTop">
      <li class="MainTodoTitle">Upcoming To-do</li>
      <li class="MainTodoAll">See All</li>
    </ul>

    <ul class="MainTodo">
      <li>
        <label class="MainTodoCheck"></label>
        Meeting with Client
        <p class="MainTodoTime">06:58pm</p>
      </li>
      <li>
        <label class="MainTodoCheck"></label>
        Take my pet to veteran
        <p class="MainTodoTime">06:58pm</p>
      </li>
      <li>
        <label class="MainTodoCheck"></label>
        Call CEO for meeting
        <p class="MainTodoTime">06:58pm</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../Mixin.scss';

$Space: 16px;

.MainTodoWrap {
  padding: 0 $Space;
  margin-bottom: 24px;
}

.MainTodoTop {
  @include flex(space-between, center, '');
}

.MainTodoTitle {
  margin: $Space 0;
  text-align: left;
  font-weight: 600;
  font-size: 1.6em;
}

.MainTodoAll {
  font-size: 1.4em;
  color: gray;
}

.MainTodo {
  li {
    display: flex;
    margin-bottom: 12px;
    font-size: 1.2em;
    text-align: left;
    position: relative;
  }
}

.MainTodoTime {
  font-size: 1em;
  color: #ccc;
  position: absolute;
  right: 0;

  &::after {
    content: ' >';
    right: 0;
    color: #ccc;
  }
}

.MainTodoCheck {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  border: 1px solid #ccc;
  margin-right: 14px;
}
</style>
