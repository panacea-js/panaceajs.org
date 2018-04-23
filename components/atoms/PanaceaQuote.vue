<template>
<blockquote class="quote">
  <q class="quote__text"><slot name="quote"></slot></q>
  <cite class="quote__cite"><slot name="cite"></slot></cite>
</blockquote>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.quote {
  font-family: $font--display;
  margin: $spacing 0;
  padding: ($spacing / 2);
  border-left: ($border * 2) solid $color--green;

  &__text {
    display: block;
    font-size: $xl;
    margin: 0 0 ($spacing / 4);

    &::before,
    &::after {
      content: none;
    }
    
  }

  &__cite {
    display: block;
    font-size: $m;

    &::before {
      content: "- "
    }

  }

}
</style>
