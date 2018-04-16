<template>
<div class="card">
  <div class="card__contain">
    <img class="card__image" :src="imgSrc" :alt="imgAlt">
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
    margin: ($spacing / 4) 0;
  }

  &__teaser {
    flex-grow: 1;
    margin: 0 0 ($spacing / 4);
  }

}
</style>
