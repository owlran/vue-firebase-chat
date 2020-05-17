<template lang="pug">
  .chatroom(class="relative")
    ChatList(:chats="getChats")
    Typer(@sendMessage="sendMessage")
</template>

<script>
import Typer from '@/components/Typer.vue';
import ChatList from '@/components/ChatList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      messages: null,
    };
  },
  components: {
    Typer,
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
    sendMessage(chat) {
      this.sendMessageToFirebase(chat);
    },
  },
  created() {
    this.loadUserChats();
  },
  mounted() {
  },
};
</script>
