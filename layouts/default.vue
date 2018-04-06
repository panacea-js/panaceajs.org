<template>
  <div class="panacea-default">
    <PanaceaSiteHeader/>
    <nuxt/>
    <PanaceaSiteFooter/>
  </div>
</template>

<script>
  import PanaceaSiteHeader from '~/components/organisms/PanaceaSiteHeader.vue'
  import PanaceaSiteFooter from '~/components/organisms/PanaceaSiteFooter.vue'
  export default {
    components: {
      PanaceaSiteHeader,
      PanaceaSiteFooter
    }
  }
</script>

<style lang="scss">
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :root {
    font-family: $body;
    color: $grey;
    line-height: 2;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;

    @include media-query(tiny) {
      font-size: 16px;
    }

    @include media-query(mobile) {
      font-size: 18px;
    }

    @include media-query(laptop) {
      font-size: 20px;
    }

  }

  body {
    background-color: $white;
    background-image: url("/assets/images/blue-triangles.svg");
    background-size: 200px;
    counter-reset: list-ordered;
  }

  p {
    font-size: $s;
  }

  a {
    font-weight: bold;
    color: $red;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $display;
    font-weight: $bold;
    line-height: 1.5;
    box-shadow: 0 0 0 ( $spacing / 4 ) $green;
    background: $green;
    margin: 0;
    display: inline;
    white-space: pre-wrap;

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      margin-top: $spacing;
    }

    &::after {
      margin-bottom: $spacing;
    }

  }

  h1 {
    font-size: $xxxl;
  }

  h2 {
    font-size: $xxl;
  }

  h3 {
    font-size: $xl;
  }

  h4 {
    font-size: $l;
  }

  h5 {
    font-size: $m;
  }

  h6 {
    font-size: $s;
  }

  ul {
    padding: 0 0 0 $spacing;
    list-style: none;
    margin: ( $spacing / 2 ) 0;

    li {
      padding: 0 0 0 ( $spacing * -1 );
      
      &::before {
        content: "";
        display: block;
        float: left;
        width: ( $spacing / 3 );
        height: ( $spacing / 3 );
        background: $green;
        margin: ( $spacing / 3 ) 0 0 ( $spacing / -1 );
        transform-origin: center center;
        transform: rotate(45deg);
      }

    }

  }

  ol {
    padding: 0 0 0 $spacing;
    list-style: none;
    margin: ( $spacing / 2 ) 0;

    li {
      counter-increment: list-ordered;

      &::before {
        content: counter(list-ordered) ".";
        display: block;
        float: left;
        margin: 0 0 0 ( $spacing / -1 );
        font-family: $display;
        color: $green;
      }

    }

  }

  pre,
  code {
    background: $grey;
    color: $white;
    line-height: 1.2;
  }

  pre {
    display: block;
    padding: ( $spacing / 2 );
    overflow-x: auto;

    code {
      padding: 0;
      width: 100%;
    }

  }

  code {
    display: inline-block;
    padding: ( $spacing / 8 ) ( $spacing / 4 );
  }

  .panacea-default {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .header,
    .footer {
      flex-grow: 0;
    }
    
    .content {
      flex-grow: 1;
    }
    
  }
</style>
