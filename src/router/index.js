import Vue from 'vue'
import VueRouter from 'vue-router'
import practicioner from '../views/practicioner'
import user from '../views/user'
Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		name: '/practicioner',
		component: practicioner,
	},
	{
		path: '/',
		name: '/practicioner',
		component: practicioner,
	},
	{
		path: '/practicioner',
		name: 'practicioner',
		component: practicioner,
	},
	{
		path: '/user',
		name: 'user',
		component: user,
	},
]

const router = new VueRouter({
	routes,
})

export default router
