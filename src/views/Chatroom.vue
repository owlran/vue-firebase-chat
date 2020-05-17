<template lang="pug">
  .chatroom(class="relative")
    ChatList(
      :chats="getChats"
      :stitckyText="stitckyText"
    )
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
      stitckyText: '最近淘寶辦 1111 慶祝，有推薦的店家嘛 ?',
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
    sendMessage(messageObj) {
      this.sendMessageToFirebase(messageObj);
    },
  },
  created() {
    this.loadUserChats();
  },
  mounted() {
  },
};
</script>
