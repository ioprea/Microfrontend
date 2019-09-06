import Vue from '../vue-app/src/node_modules/vue'
import singleSpaVue from '../vue-app/src/node_modules/single-spa-vue'
import Hello from './main.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: r => r(Hello)
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap
]

export const mount = [
  vueLifecycles.mount
]

export const unmount = [
  vueLifecycles.unmount
]
