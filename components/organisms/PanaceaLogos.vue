<template>
<div class="logos">
  <h2 class="logos__title">{{ title }}</h2>
  <div class="logos__contain">
    <div class="logos__item">
      <PanaceaLogo/>
      <div class="logos__description">
        The animated logo for use on light backgrounds
      </div>
    </div>
    <div class="logos__item">
      <PanaceaLogo class="logo--reverse"/>
      <div class="logos__description">
        The animated logo for use on dark backgrounds
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PanaceaLogo from '~/components/atoms/PanaceaLogo.vue'
export default {
  components: {
    PanaceaLogo
  },
  data () {
    return {
      title: 'Logos'
    }
  }
}
</script>

<style lang="scss">
.logos {
  margin-bottom: $spacing;

  &__contain {
    display: flex;
    flex-wrap: wrap;
    margin: -($spacing / 2);
  }

  &__item {
    flex-basis: 25%;
    padding: ($spacing / 2);
  }

  &__description {
    padding: ($spacing / 2);
    border: ($border / 2) solid $color--navy;
    border-radius: 0 0 $border-radius $border-radius;
  }

  .logo {
    border: ($border / 2) solid $color--navy;
    border-bottom: 0;
    border-radius: $border-radius $border-radius 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--reverse {
      background-color: $color--navy;
    }

  }

}
</style>
