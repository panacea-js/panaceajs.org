<template>
  <main class="content" role="main">
    <ul class="errors" v-if="errors.length > 0" v-for="(error, key) in errors" :key="key">
      <li>{{ error.message }}</li>
    </ul>
    <h2 class="loading" v-if="showLoading">Loading...</h2>
    <div class="github-docs" v-if="githubDocs.length > 0" v-html="githubDocs"></div>
  </main>
</template>

<script>
  import axios from 'axios'
  import commonmark from 'commonmark'

  export default {
    data () {
      return {
        githubDocsRawURL: 'https://raw.githubusercontent.com/panacea-js/core/master/README.md',
        githubDocs: '',
        errors: []
      }
    },
    computed: {
      showLoading: function() {
        return !this.githubDocs.length && !this.errors.length
      }
    },
    methods: {
      convertMarkdownOutput: function (input) {
        const reader = new commonmark.Parser()
        const writer = new commonmark.HtmlRenderer()
        const parsed = reader.parse(input) // node tree
        return writer.render(parsed) // string
      }
    },
    // Fetches posts when the component is mounted.
    mounted () {
      axios.get(this.githubDocsRawURL)
        .then(response => {
          this.githubDocs = this.convertMarkdownOutput(response.data)
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
