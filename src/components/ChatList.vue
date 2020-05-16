<template lang='pug'>
  .chatList
    h3 chats
    div(class="message border border-gray-500 p-5 mb-2" v-for="chat in chats")
      p {{ chat.username }}
      p {{ chat.text }}
      p {{ chat.timestamp }}

</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  data() {
    return {
      chats: [],
      ref: firebase.database().ref('messages'),
    };
  },
  mounted() {
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
};
</script>

<style>

</style>
