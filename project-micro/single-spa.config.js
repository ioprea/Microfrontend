import { registerApplication, start } from 'single-spa'
console.log(location.pathname)

function loadVue() {
  return import('./vue-app/src/main.js')
}

function loadReact() {
  return import('./react-app/src/index.js')

}

registerApplication(
  'vue',
  loadVue,
  () => window.location.pathname === '/vue'
)

registerApplication(
  'react',
  loadReact,
  () => location.pathname === '/react'
)

start()
