<template>
<!-- If an 'href' prop is passed to component use <a> tag -->
<a v-if="href" class="cta" :href="href" target="_blank" rel="noopener">
  <span class="cta__text">
    <slot></slot>
  </span>
  <div class="cta__icon">
    <svg class="arrow-right" x="0px" y="0px" viewBox="0 0 256 512" width="30px" height="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path class="arrow-right__path" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"/>
    </svg>
  </div>
</a>
<!-- Else if a 'to' prop is passed to component use <nuxt-link> tag -->
<nuxt-link v-else-if="to" class="cta" :to="to">
  <span class="cta__text">
    <slot></slot>
  </span>
  <div class="cta__icon">
    <svg class="arrow-right" x="0px" y="0px" viewBox="0 0 256 512" width="30px" height="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path class="arrow-right__path" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"/>
    </svg>
  </div>
</nuxt-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String
    },
    to: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.cta {
  $root: &;
  @include reset-link;
  display: inline-flex;
  align-items: center;
  margin: ( $spacing / 2 ) ( $spacing / 2 ) ( $spacing / 2 ) 0;
  font-family: $font--display;
  font-size: $m;
  color: $color--pink;
  font-weight: $bold;

  &__text {
    display: block;
    position: relative;
    margin-bottom: -($border);
    transition: color ($timing / 2) ease;
    will-change: color;

    &::after {
      content: '';
      display: block;
      right: 0;
      bottom: $border;
      left: 0;
      height: $border;
      background-color: $color--pink;
      transform-origin: left;
      transform: scale3d(0, 1, 1);
      transition: transform ($timing / 2) ease,
                  background-color ($timing / 2) ease;
      will-change: transform, background-color;
    }

  }

  &__icon {
    display: flex;
    align-items: center;
    transition: transform ($timing / 4) ease;
    will-change: transform;
  }

  .arrow-right {
    fill: $color--pink;
    transition: fill ($timing / 4) ease;
    will-change: fill;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;

    #{$root}__text {
      color: $color--purple;

      &::after {
        transform: scale3d(1, 1, 1);
        background-color: $color--purple;
      }
      
    }

    #{$root}__icon {
      transform: translateX(($border / 2));
    }

    .arrow-right {
      fill: $color--purple;
    }

  }
  
}
</style>
