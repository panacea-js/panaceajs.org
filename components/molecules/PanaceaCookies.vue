<template>
<no-ssr>
  <cookie-law 
    theme="panacea"
    buttonText="Got it!"
    buttonLink="/legal"
    buttonLinkText="Read more"
    message="This website uses cookies to ensure you get the best experience on our website."
  >
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

  @include media-query(mobile) {
    flex-direction: row !important;
  }

  // Custom
  background: rgba($color--black, 0.9);
  color: $color--white;
  padding: ($spacing / 2);
  border: $border solid $color--white;

  @include media-query(tablet) {
    right: ($spacing * 2) !important;
    left: ($spacing * 2) !important;
  }

  @include media-query(desktop) {
    right: ($spacing * 4) !important;
    left: ($spacing * 4) !important;
  }

  #{$root}__content {
    margin: 0 0 ($spacing / 2);

    @include media-query(mobile) {
      margin: 0;
    }
  }

  #{$root}__buttons {
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 0;

     @include media-query(mobile) {
       flex-grow: 1;
       margin: 0 0 0 ($spacing / 2);
     }

  }

  #{$root}__button {
    background-color: $color--green;
    color: $color--navy;
    padding: ($spacing / 4) ($spacing / 2);
    margin: -($border * 3) ($spacing / 4) 0;
    font-family: $font--display;
    font-weight: $bold;
    position: relative;
    transition: transform ($timing / 8) ease;
    will-change: transform;
    white-space: nowrap;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

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
      box-shadow: none;
      text-decoration: none;

      &::after {
        transform: scale3d(1, 0, 1);
      }

    }

  }
}
</style>
