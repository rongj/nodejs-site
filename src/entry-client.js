import 'es6-promise/auto'
import { app, store, router } from './main'

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__)
}


//异步组件
router.onReady(() => {
	app.$mount("#app")
})

