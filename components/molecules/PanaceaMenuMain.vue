<template>
  <nav class="menu-main">
    <ul class="menu-main__contain">
      <li class="menu-main__item" v-for="item in MenuMainItems">
        <nuxt-link :to="item.url" class="menu-main__link">
          <div class="menu-main__slime">
            <svg class="slime" x="0px" y="0px" viewBox="0 0 40 100" width="100%" height="200" preserveAspectRatio="none" xml:space="preserve" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path class="slime__path" d="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z">
                <animate attributeName="d" values="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z; M40,8.19V2.986c0,0-7.774,6.665-19.955,0C10.413-2.285,2.263,4.665,0,3.356V100.100H400z; M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.100H40z" dur="1s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <span class="menu-main__text">{{ item.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        MenuMainItems: [
          {text: 'overview', url: '/'},
          {text: 'ecosystem', url: '/ecosystem'},
          {text: 'documentation', url: '/documentation'},
          {text: 'support', url: '/support'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .menu-main {

    &__contain {
      @include reset-list;
      height: 100%;
      display: flex;
      align-items: stretch;
    }

    &__item {
      position: relative;
      overflow: hidden;
    }

    &__link {
      @include reset-link;
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
      padding: ( $spacing / 4 );
      position: relative;
      transform: skewY(-5deg);

      @include media-query(laptop) {
        padding: ( $spacing / 2 );
      }

      &:hover {

        .menu-main__slime {
          transform: skewY(5deg) translateY(50px);

          @include media-query(mobile) {
            transform: skewY(5deg) translateY(60px);
          }

          @include media-query(laptop) {
            transform: skewY(5deg) translateY(90px);
          }

        }

      }

      &.nuxt-link-exact-active,
      &:active {

        .menu-main__slime {
          transform: skewY(5deg) translateY(0);
        }

        .menu-main__text {
          color: $grey;
        }

      }

    }

    &__slime {
      position: absolute;
      left: 0;
      top: -20px;
      right: 0;
      transform: skewY(5deg) translateY(65px);
      transition: all ( $timing * 2 ) ease;
      will-change: transform;

      @include media-query(mobile) {
        transform: skewY(5deg) translateY(80px);
      }

      @include media-query(laptop) {
        transform: skewY(5deg) translateY(120px);
      }

      .slime__path {
        transition: fill $timing ease;
        will-change: fill;
      }

    }

    &__text {
      display: block;
      color: $white;
      font-size: $xs;
      font-family: $display;
      text-transform: lowercase;
      transition: color ( $timing * 2 ) ease;
      will-change: color;
      position: relative;
      z-index: 1;

      @include media-query(mobile) {
        font-size: $s;
      }

      @include media-query(laptop) {
        font-size: $m;
      }

    }

  }

  .slime {

    &__path {
      fill: $green;
    }
    
  }
</style>
