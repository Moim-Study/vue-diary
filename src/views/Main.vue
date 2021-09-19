<template>
  <div class="home">
    <Logo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Logo from '@/components/Logo.vue';

  export default {
    name: 'Home',
    components: {
      Logo,
    },
  };
</script>
