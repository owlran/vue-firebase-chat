<template lang="pug">
  .chat(class="flex flex-col w-full")
    p.chat__username(
      :style="styleObject"
      class="mb-2"
      :class="usernameClassObject") {{ username }}
    .chat__message(
      :style="styleObject"
      class="w-1/2"
      :class="chatClassObject")
      p {{ text }}
</template>

<script>
import { mapGetters } from 'vuex';
import { getRandomColorByUsername } from '@/utils/index';

export default {
  props: ['username', 'text', 'timestamp'],
  data() {
    return {
      color: null,
    };
  },
  computed: {
    ...mapGetters({
      getUser: 'getUser',
    }),
    isOwnChat() {
      const { name } = this.getUser;
      return name === this.username;
    },
    usernameClassObject() {
      return {
        'chat__username--own': this.isOwnChat,
      };
    },
    chatClassObject() {
      return {
        'chat__message--other': !this.isOwnChat,
        'chat__message--own': this.isOwnChat,
      };
    },
    styleObject() {
      return {
        color: !this.isOwnChat
          ? this.color
          : '',
        borderColor: !this.isOwnChat
          ? this.color
          : '',
      };
    },
  },
  mounted() {
    this.color = getRandomColorByUsername(this.username);
  },
};

</script>

<style lang="scss">
.chat {
  &__username {
    &--own {
      @apply self-end;
    }
  }
  &__message {
    @apply border border-gray-700 p-3;
    &--other {
      @apply border rounded-tr-full rounded-br-full rounded-bl-full;
    }
    &--own {
      @apply border rounded-tl-full rounded-br-full rounded-bl-full self-end bg-blue-800 text-white;
    }
  }
}
</style>
