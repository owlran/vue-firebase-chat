<template lang="pug">
  .chats
    ChatList(:chats="getChats")
    Typer
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
      chat: '',
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
