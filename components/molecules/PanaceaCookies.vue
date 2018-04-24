<template>
<no-ssr>
  <cookie-law theme="panacea">
    <div slot="message">
      Here is my message for more info <router-link to="legal-notes">Click here</router-link>
    </div>
  </cookie-law>
</no-ssr>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw }
}
</script>

<style lang="scss">
.Cookie--panacea {
  $root: '.Cookie';
  // Overrides
  width: auto !important;
  right: $spacing !important;
  bottom: $spacing !important;
  left: $spacing !important;
  // Custom
  background: $color--navy;
  color: $color--white;
  padding: ($spacing / 2);

  @include media-query(tablet) {
    right: ($spacing * 2) !important;
    left: ($spacing * 2) !important;
  }

  @include media-query(desktop) {
    right: ($spacing * 4) !important;
    left: ($spacing * 4) !important;
  }

  #{$root}__button {
    background-color: $color--green;
    color: $color--navy;
    padding: ($spacing / 4) ($spacing / 2);
    margin-top: -($border * 3);
    font-family: $font--display;
    font-weight: $bold;
    position: relative;
    transition: transform ($timing / 8) ease;
    will-change: transform;

    &::after {
      content: '';
      position: absolute;
      bottom: -($border * 2);
      left: 0;
      width: 100%;
      height: ($border * 2);
      background-color: darken($color--green, 20);
      transform-origin: top center;
      transition: transform ($timing / 8) ease;
      will-change: transform;
    }

    &:hover,
    &:focus {
      outline: none;
      transform: translate3d(0, ($border * 2), 0);

      &::after {
        transform: scale3d(1, 0, 1);
      }

    }

  }
}
</style>
