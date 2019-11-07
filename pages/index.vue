<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        vue-vuex
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <div>
      <button class="button--pink" @click="addCounter">1 증가</button>
      <div>{{count}}</div>
      <button class="button--pink" @click="addAction">action text</button>
      <button class="button--pink" @click="addActionParam">action parameter</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-module-decorators'
import { Getter } from 'vuex-class'
import MyModule from '~/store/mymodule'
import AppLogo from '~/components/AppLogo.vue'

@Component({
  components: {
    AppLogo
  }
})

export default class IndexPage extends Vue {
  @Getter('mymodule/getCounter') count: any

  @Mutation
   addCounter() {
    this.$store.commit('mymodule/addCount', 1)

    // this.count = this.$store.state.mymodule.counter
  }

  @Action
  addAction() {
    this.$store.dispatch('mymodule/addAction')
  }

  @Action
  addActionParam() {
    this.$store.dispatch('mymodule/addActionParam', { amount: 5 })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>