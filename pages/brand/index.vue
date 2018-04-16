<template>
<main class="content" role="main">
  <h1>Brand</h1>
  <PanaceaLogos/>
  <PanaceaColors/>
</main>
</template>

<script>
import PanaceaLogos from '~/components/organisms/PanaceaLogos.vue'
import PanaceaColors from '~/components/organisms/PanaceaColors.vue'
export default {
  components: {
    PanaceaLogos,
    PanaceaColors
  }
}
</script>

<style lang="scss">
.content {
  padding: 0 $spacing;
}
</style>
