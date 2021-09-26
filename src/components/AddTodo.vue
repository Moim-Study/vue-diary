<template>
  <div>
    <div class="AddTodoPrimary">
      <span>Primary</span>
      <label>
        <input value="🔴" type="button" />
        <input value="🟠" type="button" />
        <input value="🟡" type="button" />
        <input value="🟢" type="button" />
        <input value="🔵" type="button" />
      </label>
    </div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'AddTodo',
  };
</script>

<style lang="scss" scoped>
  .AddTodoPrimary {
  }
</style>
