<template>
<button class="btn" @click="onClick">
  <div class="btn__slime">
    <svg class="slime" x="0px" y="0px" viewBox="0 0 40 100" width="100%" height="200" preserveAspectRatio="none" xml:space="preserve" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path class="slime__path" d="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z">
        <animate attributeName="d" values="M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.19H100z; M40,8.19V2.986c0,0-7.774,6.665-19.955,0C10.413-2.285,2.263,4.665,0,3.356V100.100H400z; M40,8.19V2.986c0,0-8.99-6.718-19.955,0C10.683,8.722,2.263,4.665,0,3.356V100.100H40z" dur="1s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
  <div class="btn__details">
    <div class="btn__text">
      <slot name="text"></slot>
    </div>
    <div class="btn__svg">
      <slot name="svg"></slot>
    </div>
  </div>  
</button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.btn {
  $root: &;
  display: inline-block;
  background: transparent;
  border: $border solid $color--navy;
  border-radius: 0;
  margin: ($spacing / 2) ($spacing / 2) ($spacing / 2) 0;
  padding: ($spacing / 2) ($spacing / 2) (($spacing / 2) + ($border * 2));
  font-family: $font--display;
  color: $color--navy;
  font-weight: $bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform ($timing / 8) ease;
  will-change: transform;
  
  &__slime {
    position: absolute;
    left: 0;
    top: -20px;
    right: 0;
    transform: translateY(100px);
    transition: transform ( $timing * 2 ) ease;
    will-change: transform;
    z-index: -1;
  }

  &__details {
    display: flex;
    align-items: center;
  }

  &__text {
    display: block;
    line-height: 1.2;
  }

  &__svg {
    display: flex;

    svg {
      width: 22px;
      height: 22px;
      fill: $color--navy;
      margin-left: ($spacing / 8);
    }

  }

  &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ($border * 2);
      background-color: $color--navy;
      transform-origin: bottom center;
      transition: transform ($timing / 8) ease;
      will-change: transform;
    }

  &:focus,
  &:active,
  &:hover {
    transform: translate3d(0, $border, 0);

    .btn__slime {
      transform: translateY(0);
    }

    &::after {
      transform: scale3d(1, 0, 1);
    }
    
  }

  &:focus {
    outline: none;

    #{$root}__text {
      text-decoration: underline;
    }

  }

}
</style>
