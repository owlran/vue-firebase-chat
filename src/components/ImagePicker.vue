<template lang="pug">
  .imagePicker(class="grid grid-cols-3 gap-4 bg-white")
    .imagePicker__grid(
      v-for="(img, index) in imgSrc" :key="index"
      @click="emitImg(index)"
      )
      img(:src="img")
</template>

<script>
import stitcker1 from '@/assets/stitcker/sticker1.png';
import stitcker2 from '@/assets/stitcker/sticker2.png';
import stitcker3 from '@/assets/stitcker/sticker3.png';

export default {
  methods: {
    emitImg(index) {
      this.$emit('addStitcker', this.imgSrc[index]);
    },
  },
  computed: {
    imgSrc() {
      return [stitcker1, stitcker2, stitcker3];
    },
    img1Src() {
      return stitcker1;
    },
  },
};
</script>

<style lang="scss">
.imagePicker {
  &__grid {
    @apply w-full h-full object-cover cursor-pointer;
  }
}
</style>
