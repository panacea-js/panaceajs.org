<template>
<div class="cards">
  <h2 class="cards__title">{{ title }}</h2>
  <div class="cards__contain">
    <PanaceaCard v-for="(card, index) in cards" :key="index" :imgSrc="card.imgSrc" :imgAlt="card.imgAlt" :title="card.title" :teaser="card.teaser" :url="card.url"/>
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
        {
          imgSrc: '/images/cards/base-bordon.jpg',
          imgAlt: 'alt1',
          title: 'Title 1',
          teaser: 'This is the first item teaser',
          url: '/'
        },
        {
          imgSrc: '/images/cards/vienna.jpg',
          imgAlt: 'alt2',
          title: 'Second title',
          teaser: 'A teaser for the second item',
          url: '/'
        },
        {
          imgSrc: '/images/cards/photographer.jpg',
          imgAlt: 'alt3',
          title: 'This one be the third',
          teaser: 'The teaser for this one is three times as good',
          url: '/'
        },
        {
          imgSrc: '/images/cards/sass-flex.jpg',
          imgAlt: 'alt4',
          title: 'May the fourth be with you',
          teaser: 'Fourth time lucky for a beautiful teaser which runs on for far too long to see what will happen and no doubt it will be awful but in order to experience how awful I\'ll need to add lots more!',
          url: '/'
        }
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
    flex-wrap: wrap;
    margin: -($spacing / 2);
  }

}

.card {
  flex-basis: 100%;
  padding: ($spacing / 2);

  @include media-query(mobile) {
    flex-basis: 50%;
  }

  @include media-query (desktop) {
    flex-basis: 25%;
  }

}
</style>
