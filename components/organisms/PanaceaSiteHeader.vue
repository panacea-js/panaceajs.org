<template>
  <header class="header" role="banner">
    <div class="header__contain">
      <PanaceaLogo/>
      <PanaceaMenuMain/>
    </div>
  </header>
</template>

<script>
  import PanaceaLogo from '~/components/atoms/PanaceaLogo.vue'
  import PanaceaMenuMain from '~/components/molecules/PanaceaMenuMain.vue'
  export default {
    components: {
      PanaceaLogo,
      PanaceaMenuMain
    }
  }
</script>

<style lang="scss">
  .header {
    background: $grey;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: $border solid $green;

    &__contain {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;

      @include media-query(laptop) {
        flex-wrap: nowrap;
        justify-content: space-between;
      }

    }

  }

  .logo,
  .menu-main {
    flex-basis: 100%;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;

    @include media-query(laptop) {
      flex-basis: unset;
      min-width: unset;
      max-width: unset;
      display: block;
    }
    
  }
</style>
