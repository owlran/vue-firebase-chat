<template lang='pug'>
  .typer(
    :class="typeClassObj"
    class="fixed bottom-0 flex flex-col w-full bg-white")
    .typer-wrapper(class="flex flex-row justify-around items-center h-20")
      .typer__functions(class="w-2/12 flex flex-row justify-around text-blue-900")
        font-awesome-icon(class="cursor-not-allowed" :icon="['far', 'image']" size="lg")
        font-awesome-icon(
          @click="isImagePickerActived = !isImagePickerActived"
          class="cursor-pointer" :icon="['far', 'laugh']" size="lg")
      .typer__inputField(class="w-8/12")
        input(
          v-model="chat"
          class="shadow appearance-none border border-blue-900 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          @keyup.enter="sendMessage"
          type="text")
      .typer__submit(class="w-2/12 flex flex-row justify-center items-center")
        font-awesome-icon(
          class="cursor-pointer"
          @click="sendMessage"
          :icon="['fas', 'arrow-right']" size="lg")
    ImagePicker(@addStitcker="addStitcker")
</template>

<script>
import ImagePicker from '@/components/ImagePicker.vue';

export default {
  data() {
    return {
      chat: '',
      isImagePickerActived: false,
    };
  },
  computed: {
    typeClassObj() {
      return {
        'typer--active': this.isImagePickerActived,
      };
    },
  },
  components: {
    ImagePicker,
  },
  methods: {
    addStitcker(imgSrc) {
      this.$emit('addStitcker', imgSrc);
      this.isImagePickerActived = false;
    },
    sendMessage() {
      this.$emit('sendMessage', this.chat);
      this.chat = '';
    },
  },
};
</script>

<style lang='scss'>
.typer {
  bottom: -235px;
  transition: all .3s ease;

  &--active {
    bottom: 0;
  }
}
</style>
