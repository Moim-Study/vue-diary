<template>
  <Calendar />
  <MainTodo />
</template>

<script>
  import Calendar from '../components/Calendar';
  import MainTodo from '../components/MainTodo';

  export default {
    name: 'Main',
    components: {
      Calendar,
      MainTodo,
    },
  };
</script>

<style></style>
