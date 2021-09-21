<template>
  <article class="mainTodoWrap">
    <ul class="mainTodoTop">
      <li class="mainTodoTitle">Upcoming To-do</li>
      <li class="mainTodoAll">See All</li>
    </ul>

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
@mixin object($w, $h, $p) {
  width: $w;
  height: $h;
  position: $p;
}

@mixin flex($j, $a, $d) {
  display: flex;
  justify-content: $j;
  align-items: $a;
  flex-direction: $d;
}

$space: 16px;

.mainTodoWrap {
  padding: 0 $space;
  margin-bottom: 24px;
}

.mainTodoTop {
  @include flex(space-between, center, "");
}

.mainTodoTitle {
  margin: $space 0;
  text-align: left;
  font-weight: 600;
  font-size: 1.1em;
}

.mainTodoAll {
  font-size: 0.9em;
  color: gray;
}

.mainTodo {
  li {
    display: flex;
    margin-bottom: 12px;
    font-size: 0.9em;
    text-align: left;
    position: relative;
    cursor: default;
  }
}

.mainTodoTime {
  font-size: 0.9em;
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
}
</style>
