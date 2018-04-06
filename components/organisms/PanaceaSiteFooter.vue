<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__contain">
      <PanaceaExternalLinks/>
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
    background: $grey;

    &__contain {
      display: flex;
      justify-content: center;
    }
    
  }
</style>
