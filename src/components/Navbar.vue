<template lang="pug">
  .nav(class="bg-white overflow-hidden shadow")
    div(class="h-100 flex flex-row justify-between w-full items-center")
      div(class="inline-flex flex-row")
        router-link.nav__button(to="/" exact-active-class="nav__button--active") 首頁
        router-link.nav__button(to="/topics" exact-active-class="nav__button--active") 本日話題
        router-link.nav__button(to="/chats" exact-active-class="nav__button--active") 偷偷說
      div(class="inline-flex")
        router-link.nav__button.nav__button--user(to="/login") {{ userName }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getUser: 'getUser',
    }),
    userName() {
      return this.getUser.name;
    },
  },
};
</script>

<style lang="scss">
.nav {
  &__button {
    @apply text-black p-3 h-full;
    &--user {
      @apply bg-blue-900 text-white;
    }
    &--active {
      @apply border-b-8 border-blue-900;
    }
  }
}
</style>
