import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: require('../components/thulj/Home.vue').default}
    // { path: '/article/:id', component: require('../components/article/Article.vue').default }
  ]
})
