<template>
  <Calendar />
  <MainTodo />
</template>

<script>

import Calendar from "./Calendar";
import MainTodo from "./MainTodo";

export default {
  name: "Main",
  components: {
    Calendar,
    MainTodo,
  },
};
</script>

<style></style>
