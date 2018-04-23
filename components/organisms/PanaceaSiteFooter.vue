<template>
<footer class="footer" role="contentinfo">
  <div class="footer__contain">
    <PanaceaExternalLinks/>
    <div class="footer__copyright">
      <p>Copyright © Real Life Digital 2017-{{ new Date().getFullYear() }}. PanaceaJS™ is a registered trademark of <a href="https://www.reallifedigital.com/" rel="nofollow" target="_blank">Real Life Digital</a>.</p>
    </div>
  </div>
</footer>
</template>

<script>
import PanaceaExternalLinks from '~/components/molecules/PanaceaExternalLinks.vue'
export default {
  components: {
    PanaceaExternalLinks
  }
}
</script>

<style lang="scss">
.footer {
  background: $color--navy;

  &__copyright {
    background-color: $color--black;
    padding: ($spacing / 4) ($spacing / 2);

    p {
      margin: 0;
      color: $color--white;
      font-size: $xxs;
      text-align: center;
    }

  }
  
}
</style>
