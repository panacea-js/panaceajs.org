<template>
  <nuxt-link class="btn" :to="to">
    <div class="btn__slime">
      <svg class="slime" x="0px" y="0px" viewBox="0 0 40 100" width="100%" height="200" preserveAspectRatio="none" xml:space="preserve" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path class="slime__path" d="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z">
          <animate attributeName="d" values="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z; M40,8.19V2.986c0,0-7.774,6.665-19.955,0C10.413-2.285,2.263,4.665,0,3.356V100.100H400z; M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.100H40z" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
    <span class="btn__text">
      <slot></slot>
    </span>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .btn {
    @include reset-link;
    display: inline-block;
    background: transparent;
    border: $border solid $grey;
    border-radius: 0;
    margin: ( $spacing / 2 ) ( $spacing / 2 ) ( $spacing / 2 ) 0;
    padding: ( $spacing / 2 );
    font-family: $display;
    font-size: $m;
    color: $grey;
    font-weight: $bold;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    backface-visibility: hidden;
    transform-origin: bottom left;

    &__slime {
      position: absolute;
      left: 0;
      top: -20px;
      right: 0;
      transform: translateY(100px);
      transition: all ( $timing * 2 ) ease;
      will-change: transform;
      z-index: -1;
    }

    &__text {
      display: block;
      transition: all ( $timing * 2 ) ease;
      line-height: 1.2;
    }

    &:focus,
    &:active,
    &:hover {

      .btn__slime {
        transform: translateY(0);
      }

    }
    
  }
</style>
