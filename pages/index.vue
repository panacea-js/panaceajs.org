<template>
<main class="content" role="main">
  <h1>A fast, lightweight, graphql first, headless cms.</h1>
  <p>A solution or remedy for all the difficulties you've ever faced when dealing with a CMS.</p>
  <p>PanaceaJS is written in node js, coupled with mongo and opinionated towards graphql.</p>
  <p>Stop battling with your current CMS and come and revel in the joy that is treating your data like a first class citizen, and passing it off to your happy front-end team who can write in whatever framework takes their fancy!</p>
  <p>The future of content management is now!</p>
  <div class="buttons">
    <PanaceaCta href="https://github.com/panacea-js">Get started</PanaceaCta>
    <PanaceaCta to="/documentation">Documentation</PanaceaCta>
  </div>
  <h2>Testing an H2</h2>
  <div class="buttons">
    <PanaceaButton :onClick="buttonAlert">
      <template slot="text">A really cool button with long text and an svg icon</template>
      <template slot="svg">
        <svg x="0px" y="0px" viewBox="0 0 256 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"/>
        </svg>
      </template>
    </PanaceaButton>
    <PanaceaButton :onClick="buttonAlert2">
      <template slot="text">And a short one</template>
    </PanaceaButton>
  </div>
  <h3>Testing an H3</h3>
  <PanaceaQuote>
    <template slot="quote">
      By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.
    </template>
    <template slot="cite">
      Confucius
    </template>
  </PanaceaQuote>
  <h4>And an H4</h4>
  <ul>
    <li v-for="(item, index) in ListItems" :key="'ul-li-eg-' + index">
      {{ item.text }}
    </li>
  </ul>
  <h5>And an H5</h5>
  <ol>
    <li v-for="(item, index) in ListItems" :key="'ol-li-eg-' + index">
      {{ item.text }}
    </li>
  </ol>
  <h6>And last but not least an H6</h6>
  <PanaceaCards/>
</main>
</template>

<script>
import PanaceaCta from '~/components/atoms/PanaceaCta.vue'
import PanaceaButton from '~/components/atoms/PanaceaButton.vue'
import PanaceaQuote from '~/components/atoms/PanaceaQuote.vue'
import PanaceaCards from '~/components/organisms/PanaceaCards.vue'
export default {
  components: {
    PanaceaCta,
    PanaceaButton,
    PanaceaQuote,
    PanaceaCards
  },
  methods: {
    buttonAlert () {
      alert('You clicked the long button')
    },
    buttonAlert2 () {
      alert('You clicked the short button')
    }
  },
  data () {
    return {
      ListItems: [
        {text: 'One item'},
        {text: 'Second item'},
        {text: 'Another one'},
        {text: 'What comes after three'},
        {text: '5ive will make you get down now'}
      ]
    }
  }
}
</script>

<style lang="scss">
.content {
  padding: 0 $spacing;
}
</style>
