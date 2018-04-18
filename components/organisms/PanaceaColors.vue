<template>
<div class="colors">
  <h2 class="colors__title">{{ title }}</h2>
  <div class="colors__contain">
    <PanaceaColor v-for="(color, colorIndex) in colors" :key="colorIndex" :colorName="color.colorName" :colorVar="color.colorVar" :colorValue="color.colorValue"/>
  </div>
</div>
</template>

<script>
import PanaceaColor from '~/components/molecules/PanaceaColor.vue'
export default {
  components: {
    PanaceaColor
  },
  data () {
    return {
      title: 'Colours',
      colors: [
        {colorName: 'Green', colorVar: '$color--green', colorValue: '#b4d455'},
        {colorName: 'Navy', colorVar: '$color--navy', colorValue: '#3a3a46'},
        {colorName: 'Red', colorVar: '$color--red', colorValue: '#ca372a'},
        {colorName: 'Purple', colorVar: '$color--purple', colorValue: '#661b87'},
        {colorName: 'Pink', colorVar: '$color--pink', colorValue: '#e61973'},
        {colorName: 'Black', colorVar: '$color--black', colorValue: '#222222'},
        {colorName: 'Grey', colorVar: '$color--grey', colorValue: '#ebebec'},
        {colorName: 'White', colorVar: '$color--white', colorValue: '#ffffff'}
      ]
    }
  }
}
</script>

<style lang="scss">
.colors {
  margin-bottom: $spacing;

  &__contain {
    display: flex;
    flex-wrap: wrap;
    margin: -($spacing / 2);
  }

}
</style>
