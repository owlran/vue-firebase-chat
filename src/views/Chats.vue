<template lang="pug">
  .chats
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
    div(class="messages")
      ChatList
</template>

<script>
// @ is an alias to /src
import ChatList from '@/components/ChatList.vue';
import { mapGetters } from 'vuex';
import firebase from '@/plugins/firebase';

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
      getUser: 'getUser',
    }),
  },
  methods: {
    sendMessage() {
      console.log('in method send message');
      const { name } = this.getUser;
      if (this.chat) {
        const message = {
          username: name,
          text: this.chat,
          timestamp: Date.now(),
        };
        // Push message to firebase reference
        firebase.database().ref('messages').push(message);
        this.chat = '';
      }
    },
  },
  mounted() {
  },
};
</script>
