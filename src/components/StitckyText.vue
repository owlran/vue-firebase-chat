<template lang='pug'>
  .stitckyText(class="fixed top-12 bg-red-200 w-full flex justify-center items-center shadow py-8" v-if="stitckyText")
    p {{ stitckyText }}
    .stitckyText__arrow-down
</template>

<script>

export default {
  props: ['stitckyText'],
};
</script>

<style lang='scss'>
.stitckyText {
  background-color: #EAC8FF;
  &__arrow-down {
    position: absolute;
    right: 10%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }
}

</style>
