<template>
  <div class="cards">
    <h2 class="cards__title">{{ title }}</h2>
    <div class="cards__contain">
      <PanaceaCard v-for="(card, index) in cards" :key="index" :imgSrc="card.imgSrc" :imgAlt="card.imgAlt" :title="card.title" :teaser="card.teaser" :url="card.url"></PanaceaCard>
    </div>
  </div>
</template>

<script>
  import PanaceaCard from '~/components/molecules/PanaceaCard.vue'
  export default {
    components: {
      PanaceaCard
    },
    data () {
      return {
        title: 'This is the overall cards title',
        cards: [
          {imgSrc: 'https://www.reallifedigital.com/sites/default/files/styles/medium/public/fields/articles/images/front-base-bordon_0.jpg?itok=M_fXp3RK', imgAlt: 'alt1', title: 'Title 1', teaser: 'This is the first item teaser', url: '/'},
          {imgSrc: 'https://www.reallifedigital.com/sites/default/files/styles/medium/public/fields/articles/images/vienna-2997032.jpg?itok=MkNID8EX', imgAlt: 'alt2', title: 'Second title', teaser: 'A teaser for the second item', url: '/'},
          {imgSrc: 'https://www.reallifedigital.com/sites/default/files/styles/medium/public/fields/articles/images/photographer-16022.jpg?itok=HZgkfkPQ', imgAlt: 'alt3', title: 'This one be the third', teaser: 'The teaser for this one is three times as good', url: '/'},
          {imgSrc: 'https://www.reallifedigital.com/sites/default/files/styles/medium/public/fields/articles/images/rld_website-element_blog-sass-flex_wide-1.jpg?itok=4Wl91lma', imgAlt: 'alt4', title: 'May the fourth be with you', teaser: 'Fourth time lucky for a beautiful teaser', url: '/'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .cards {
    margin-bottom: $spacing;

    &__contain {
      display: flex;
      margin: -($spacing / 2);
    }

  }

  .card {
    flex-basis: 25%;
    padding: ($spacing / 2);
  }
</style>
