<template>
  <div class="card">
    <div class="card__contain">
      <img class="card__image" v-bind:src="imgSrc" v-bind:alt="imgAlt">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__teaser">{{ teaser }}</p>
      <nuxt-link :to="url" class="card__link">Read more</nuxt-link>
    </div>
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
    ]
  }
</script>

<style lang="scss">
  .card {

    &__contain {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
    }

    &__link {
      display: block;
    }

    &__image {
      display: block;
      width: 100%;
    }

    &__title {
      margin-right: ($spacing / 2);
      
      &::before {
        margin: 0;
      }

      &::after {
        margin: 0;
      }

    }

    &__teaser {
      flex-grow: 1;
    }

  }
</style>
