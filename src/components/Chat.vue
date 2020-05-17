<template lang="pug">
  .chat
    .chat__text(class="flex flex-col w-full" v-if="type === 'text'")
      p.chat__username(
        :style="styleObject"
        class="mb-2"
        :class="usernameClassObject") {{ username }}
      .chat__message(
        :style="styleObject"
        class="w-1/2"
        :class="chatClassObject")
        p {{ message }}
    .chat__image(class="flex flex-col" v-else-if="type === 'image'")
      p.chat__username(
        :style="styleObject"
        class="mb-2"
        :class="usernameClassObject") {{ username }}
      img(
        class=" max-w-sm"
        :class="imageClassObject"
        :src="message")

</template>

<script>
import { mapGetters } from 'vuex';
import { getRandomColorByUsername } from '@/utils/index';

export default {
  props: ['username', 'message', 'type', 'timestamp'],
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
    imageClassObject() {
      return {
        'chat__image--other': !this.isOwnChat,
        'chat__image--own': this.isOwnChat,
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
      @apply self-end text-blue-800;
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
  &__image {
    &--other {
      @apply self-start;
    }
    &--own {
      @apply self-end;
    }
  }
}
</style>
