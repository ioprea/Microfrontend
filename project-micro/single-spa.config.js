import { registerApplication, start } from 'single-spa'
console.log(location.pathname)

function loadingFunction() {
  return import('./vue-app/src/main.js')
}

registerApplication(
  'vue',
  loadingFunction,
  () => window.location.pathname === '/vue'
)

// registerApplication(
//   'react',
//   () => import('../micro-fe-boilerplate/src/react-app/src/index.js'),
//   () => location.pathname === "/react"  ? false : true
// );

start()
