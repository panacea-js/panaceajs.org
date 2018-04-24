<template>
<ul class="copyright">
  <!-- Iterate over copyright items -->
  <li class="copyright__item" v-for="(item, index) in CopyrightItems" :key="index">
    <p class="copyright__text" v-html="item.string"></p>
  </li>
  <!-- And then append this specific item containing a nuxt-link -->
  <li class="copyright__item">
    <p class="copyright__text">See our obligatory <nuxt-link to="/legal">legal stuff</nuxt-link>.</p>
  </li>
</ul>
</template>

<script>
export default {
  data () {
    return {
      CopyrightItems: [
        {
          string: 'Copyright © Real Life Digital 2017-' + new Date().getFullYear() + '.'
        },
        {
          string: 'PanaceaJS™ is a registered trademark of <a href="https://www.reallifedigital.com/" rel="nofollow" target="_blank">Real Life Digital</a>.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.copyright {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: $color--black;
  padding: ($spacing / 4) ($spacing / 2);

  &__item {
    margin: 0 ($spacing / 4);

    &:first-child {
      margin-left: 0;
      flex-basis: 100%;

      @include media-query(laptop) {
        flex-basis: auto;
      }

    }

    &:last-child {
      margin-right: 0;
    }

  }

  &__text {
    color: $color--white;
    font-size: $xxs;
    text-align: center;
    margin: 0;
  }

}
</style>
