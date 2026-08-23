import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

// ViteSSG replaces createApp().mount(). It builds the router for us and, at
// build time, renders each route to static HTML. `npm run dev` is unaffected.
export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior: (to, from) => {
    // Opening or closing a card overlay must not jump the gallery to the top.
    if (to.path.startsWith('/cards') && from.path.startsWith('/cards')) return
    return { top: 0 }
  },
})
