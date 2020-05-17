<template lang='pug'>
  .chatList(class="flex flex-col overflow-y-auto relative")
    StitckyTextComponent(:stitckyText="stitckyText")
    div(class="flex flex-col message p-5 mb-2" v-for="{ username, message, type, timestamp } in chats")
      chat(
        :username="username"
        :message="message"
        :type="type"
        :timestamp="timestamp"
        )
</template>

<script>
import firebase from '@/plugins/firebase';
import chat from '@/components/Chat.vue';
import StitckyTextComponent from '@/components/StitckyText.vue';

export default {
  props: ['chats', 'stitckyText'],
  data() {
    return {
      ref: firebase.database().ref('messages'),
    };
  },
  components: {
    chat,
    StitckyTextComponent,
  },
  methods: {
    scrollToEnd() {
      if (this.$el && this.$el.lastElementChild) {
        this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
      }
    },
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
  height: calc(100vh - 8rem);
}

</style>
