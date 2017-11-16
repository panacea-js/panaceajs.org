<template>
  <main class="content" role="main">
    <div class="github-docs" v-html="commonmark(githubDocs)"></div>
  </main>
</template>

<script>
  import axios from 'axios'
  import commonmark from 'commonmark'

  export default {
    components: {

    },
    methods: {
      commonmark: (input) => {
        const reader = new commonmark.Parser()
        const writer = new commonmark.HtmlRenderer()
        const parsed = reader.parse(input) // node tree
        return writer.render(parsed) // string
      }
    },
    data () {
      return {
        githubDocs: []
      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get('https://raw.githubusercontent.com/panacea-js/core/master/README.md')
        .then(response => {
          console.log(response)
          this.githubDocs = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="scss">
  .content {
    padding: 0 $spacing;
  }
</style>
