
import './app.css'
import './assets/scss/tailwind.scss'
import './assets/css/materialdesignicons.min.css'
import 'tiny-slider/dist/tiny-slider.css'
// @ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
