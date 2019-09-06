import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./src/vue-app/src/main.js'),
  () => location.pathname === "/vue" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react-app/src/index.js'),
  () => location.pathname === "/react"  ? false : true
);

start();