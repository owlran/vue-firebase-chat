<template lang='pug'>
  .typer(class="flex flex-row justify-around items-center h-20 relative bottom-0")
    .typer__functions(class="w-2/12 flex flex-row justify-around text-blue-900")
      font-awesome-icon(class="cursor-not-allowed" :icon="['far', 'image']" size="lg")
      font-awesome-icon(class="cursor-pointer" :icon="['far', 'laugh']" size="lg")
    .typer__inputField(class="w-8/12")
      input(
        v-model="chat"
        class="shadow appearance-none border border-blue-900 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        @keyup.enter="sendMessage"
        type="text")
    .typer__submit(class="w-2/12 flex flex-row justify-center items-center")
      font-awesome-icon(
        class="cursor-pointer"
        @click="sendMessage"
        :icon="['fas', 'arrow-right']" size="lg")
</template>

<script>
export default {
  data() {
    return {
      chat: '',
    };
  },
  methods: {
    sendMessage() {
      this.$emit('sendMessage', this.chat);
      this.chat = '';
    },
  },
};
</script>

<style lang='scss'>
</style>
