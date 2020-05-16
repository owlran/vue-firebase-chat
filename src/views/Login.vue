<template lang="pug">
  .login(class="w-full h-full flex flex-col justify-center items-center")
    div(class="max-w-xs md:max-w-md w-full")
      h1(class="text-gray-600 uppercase text-center mb-4 text-2xl font-bold") Vue firebase chat
      form(class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4")
        div(class="mb-4")
          label(class="block text-gray-700 text-sm font-bold mb-2" for="username") Username
          input(
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="[{'border-red-500': displayError }]"
            id="username"
            type="text"
            placeholder="Username")
          p(class="text-red-500 text-xs italic" v-if="displayError") Please input the username for chat
        div(class="flex items-center justify-between")
          button(
            @click="login"
            :disabled="displayError"
            :class="loginClassObject"
            class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button") Login
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
    };
  },
  computed: {
    displayError() {
      return this.username.length === 0;
    },
    loginClassObject() {
      return {
        'bg-gray-300': this.displayError,
        'hover:bg-blue-700': !this.displayError,
        'bg-blue-500': !this.displayError,
        'cursor-not-allowed': this.displayError,
      };
    },
  },
  methods: {
    ...mapActions({
      setUser: 'setUser',
    }),
    login() {
      this.setUser({
        name: this.username,
      });
      this.$router.push('/');
    },
  },
};
</script>
