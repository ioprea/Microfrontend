import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import singleSpaReact, { SingleSpaContext } from 'single-spa-react'

function domElementGetter () {
  // This is where single-spa will mount our application
  return document.getElementById('react')
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
})

export const bootstrap = reactLifecycles.bootstrap
export const mount = reactLifecycles.mount
export const unmount = reactLifecycles.unmount
serviceWorker.unregister()
