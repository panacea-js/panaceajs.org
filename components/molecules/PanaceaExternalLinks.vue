<template>
<nav class="menu-ext-links">
  <ul class="menu-ext-links__contain">
    <li class="menu-ext-links__item" v-for="(item, index) in MenuExtLinksItems" :key="index">
      <a :href="item.url" class="menu-ext-links__link" target="_blank" rel="noopener">
        <div class="menu-ext-links__icon" v-html="item.icon"></div>
        <span class="menu-ext-links__text">{{ item.text }}</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {
      MenuExtLinksItems: [
        {
          text: 'github',
          url: 'https://github.com/panacea-js',
          icon: '<svg aria-labelledby="simpleicons-github-icon" role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
        },
        {
          text: 'npm',
          url: 'https://www.npmjs.com/org/panaceajs',
          icon: '<svg aria-labelledby="simpleicons-npm-icon" role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-npm-icon">NPM icon</title><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/><path d="M10.665 10H12v2.667h-1.335V10z"/></svg>'
        },
        {
          text: 'twitter',
          url: 'https://twitter.com/RLDtweets',
          icon: '<svg aria-labelledby="simpleicons-twitter-icon" role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>'
        },
        {
          text: 'youtube',
          url: 'https://www.youtube.com/channel/UCsezbC0jiV486A7hnmP2z8Q',
          icon: '<svg aria-labelledby="simpleicons-youtube-icon" role="img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title id="simpleicons-youtube-icon">YouTube icon</title><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu-ext-links {
  background: $color--navy;

  &__contain {
    @include reset-list;
    display: flex;
    padding: ( $spacing / 2);
  }

  &__item {
    margin: 0 ( $spacing / 2 );

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

  }

  &__link {
    @include reset-link;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {

      .menu-ext-links__icon {
        fill: $color--green;
        transform: scale(1.5) skewY(-5deg);
      }

      .menu-ext-links__text {
        color: $color--green;
        transform: scale(1.2) skewY(-5deg);
      }

    }

  }

  &__icon {
    fill: $color--white;
    transition: all ( $timing / 2 ) ease;
    transform: scale(1) skewY(-5deg);
    will-change: fill, transform;
  }

  &__text {
    display: block;
    color: $color--white;
    font-size: $s;
    font-family: $font--display;
    line-height: 1;
    text-transform: lowercase;
    transition: all ( $timing / 2 ) ease;
    transform: scale(1) skewY(-5deg);
    will-change: color, transform;
  }

}
</style>
