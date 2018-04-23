<template>
<div class="card">
  <nuxt-link :to="url" class="card__link">
    <img class="card__image" :src="imgSrc" :alt="imgAlt">
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__teaser">{{ teaser | truncate(80) }}</p>
  </nuxt-link>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'imgSrc',
    'imgAlt',
    'title',
    'teaser',
    'url'
  ],
  filters: {
    truncate (string, count, separator = ' ') {
      if (string.length <= count) return string
      return string.substr(0, string.lastIndexOf(separator, count)) + '…'
    }
  }
}
</script>

<style lang="scss">
@keyframes pulse {

  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }

}

.card {
  $root: &;

  &__link {
    display: block;
    position: relative;
    background-color: $color--navy;
    overflow: hidden;
    transition: transform $timing ease;
    will-change: transform;

    &:focus {
      background-color: $color--navy;
      box-shadow: unset;
    }

    &:hover,
    &:focus {
      background-color: $color--black;
      transform: scale3d(1.1, 1.1, 1.1);

      #{$root}__image {
        transform: scale3d(1.5, 1.5, 1.5);
      }

      #{$root}__title {
        transform: translateY(-100%);
      }

      #{$root}__teaser {
        transform: translateY(0);
      }

    }

  }

  &__image {
    display: block;
    width: 100%;
    position: relative;
    opacity: 0.2;
    transition: transform ($timing / 2) ease;
    will-change: transform;
  }

  &__title,
  &__teaser {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: $color--white;
    padding: ($spacing / 2) $spacing;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ($timing / 2) ease;
    will-change: transform;
  }

  &__title {
    transform: translateY(0);
  }

  &__teaser {
    transform: translateY(100%);

    &::after {
      content: '>';
      font-family: $font--display;
      font-size: $xs;
      background-color: $color--green;
      font-weight: $bold;
      color: $color--navy;
      padding: ($spacing / 16) ($spacing / 4);
      position: absolute;
      right: ($spacing / 4);
      bottom: ($spacing / 4);
      transform-origin: right bottom;
      will-change: transform;
      animation-name: pulse;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }

  }

}
</style>
