<template lang="pug">
  #app(class="w-full h-screen max-h-full bg-gray-200")
    Navbar
    router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
