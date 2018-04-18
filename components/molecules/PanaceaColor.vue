<template>
<div class="color">
  <div class="color__swatch" :style="{backgroundColor: colorValue}"></div>
  <div class="color__details">
    <h3 class="color__name">{{ colorName }}</h3>
    <code class="color__var">{{ colorVar }}</code>
    <code class="color__value">{{ colorValue }}</code>
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
    'colorName',
    'colorVar',
    'colorValue'
  ]
}
</script>

<style lang="scss">
.color {
  flex-basis: 25%;
  padding: ($spacing / 2);

  &__swatch {
    height: 100px;
    border: $border solid $color--navy;
    border-bottom: 0;
    border-radius: $border-radius $border-radius 0 0;
  }

  &__details {
    border: $border solid $color--navy;
    border-radius: 0 0 $border-radius $border-radius;
    padding: ($spacing / 2);
    display: flex;
    flex-direction: column;
  }

  &__name {
    margin: 0;
  }

  &__var {
    margin-bottom: ($spacing / 4);
  }

}
</style>
