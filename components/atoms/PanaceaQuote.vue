<template>
  <blockquote class="quote">
    <svg class="quote__quote-left quote-left" x="0px" y="0px" viewBox="0 0 40 40" xml:space="preserve" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="quote-left__title quote-left__desc" role="img">
      <title id="quote-left__title">Open quote</title>
      <desc id="quote-left__desc">A stylistic open quote character.</desc>
      <polygon class="quote-left__path" points="30.038,0 20.026,10 20.026,0 10.013,0 0,10 0,20 20.026,40 20.026,20 40.051,40 40.051,0 "/>
    </svg>
    <span class="quote__text"><slot name="quote" trim></slot></span>
    <cite class="quote__cite"><slot name="cite"></slot></cite>
    <svg class="quote__quote-right quote-right" x="0px" y="0px" viewBox="0 0 40 40" xml:space="preserve" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="quote-right__title quote-right__desc" role="img">
      <title id="quote-right__title">Close quote</title>
      <desc id="quote-right__desc">A stylistic close quote character.</desc>
      <polygon class="quote-right__path" points="20,0 20,20 -0.026,0 -0.026,40 9.987,40 20,30 20,40 30.013,40 40.026,30 40.026,20 "/>
    </svg>
  </blockquote>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .quote {
    font-family: $display;
    margin: $spacing 0;
    border-left: ( $spacing / 4 ) solid transparent;
    border-right: ( $spacing / 4 ) solid transparent;
    &__text {
      font-size: $xxl;
      line-height: 1.5;
      background: $green;
      box-shadow: 0 0 0 ( $spacing / 4 ) $green;
    }
    &__cite {
      white-space: nowrap;
      font-size: $l;
      line-height: 1.5;
      background: $grey;
      color: $white;
      box-shadow: 0 0 0 ( $spacing / 4 ) $grey;
      margin: 0 0 0 23px;
      &:before {
        content: "- "
      }
    }
    &__quote-left,
    &__quote-right {
      width: $spacing;
      height: $spacing;
    }
    &__quote-left {
      margin: 0 $spacing 0 ( $spacing / 2 );
    }
    &__quote-right {
      margin: 0 $spacing ( ($spacing / 4) * -1 );
    }
  }
  .quote-left,
  .quote-right {
    &__path {
      fill: $grey;
    }
  }
</style>
