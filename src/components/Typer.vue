<template lang='pug'>
  .typer(class="mb-4")
    label(class="block text-gray-700 text-sm font-bold mb-2" for="chat") chat
    input(
      v-model="chat"
      class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      @keyup.enter="sendMessage"
      id="chat"
      type="text"
      placeholder="chat")
    button(class="border border-gray-600 p-2" @click="sendMessage") send
</template>

<script>
export default {

};
</script>

<style lang='scss'>

</style>
