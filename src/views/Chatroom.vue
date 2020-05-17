<template lang="pug">
  .chats
    ChatList(:chats="getChats")
    div(class="mb-4")
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
// @ is an alias to /src
import ChatList from '@/components/ChatList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      messages: null,
      chat: '',
    };
  },
  components: {
    ChatList,
  },
  computed: {
    ...mapGetters({
      getChats: 'chat/getChats',
    }),
  },
  methods: {
    ...mapActions({
      sendMessageToFirebase: 'chat/sendMessage',
      loadUserChats: 'chat/loadUserChats',
    }),
    sendMessage() {
      this.sendMessageToFirebase(this.chat);
      this.chat = '';
    },
  },
  created() {
    this.loadUserChats();
  },
  mounted() {
  },
};
</script>
