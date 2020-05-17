<template lang="pug">
  #app(class="w-full h-screen max-h-full bg-gray-200")
    Navbar(
      v-if="getUser"
      class="fixed h-12 flex flex-row w-full justify-start")
    router-view(class="pt-12")
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      getUser: 'getUser',
    }),
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
