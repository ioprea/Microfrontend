import { registerApplication, start } from 'single-spa'
console.log(location.pathname)

function loadVue() {
  return import('./react-app/src/index.js')
}

function loadReact() {
  return import('./vue-app/src/main.js')
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
