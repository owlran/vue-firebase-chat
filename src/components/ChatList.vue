<template lang='pug'>
  .chatList(class="flex flex-col border border-red-500 overflow-y-auto" refs="chatList")
    div(class="flex flex-col message p-5 mb-2" v-for="{ username, text, timestamp } in chats")
      chat(
        :username="username"
        :text="text"
        :timestamp="timestamp"
        )
</template>

<script>
import firebase from '@/plugins/firebase';
import chat from '@/components/Chat.vue';

export default {
  data() {
    return {
      chats: [],
      ref: firebase.database().ref('messages'),
    };
  },
  components: {
    chat,
  },
  methods: {
    scrollToEnd() {
      this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
    },
  },
  created() {
    this.ref.on('value', (snapshot) => {
      const chatsData = snapshot.val();
      const chatsDataList = Object.entries(chatsData);
      this.chats = chatsDataList && chatsDataList.map(([key, data], index) => ({
        id: index,
        key,
        ...data,
      }));
    });
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  },
};
</script>

<style lang="scss">
.chatList {
  height: 80vh;
}

</style>
