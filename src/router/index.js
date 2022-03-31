// noinspection ES6CheckImport
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 // {
 //  path:'/',
 //  name:'Main',
 //  redirect:'/home'
 // },
 {
  path:'/',
  name:'Main',
  component:()=>import('../views/Main.vue'),
  children:[
   {
    path:'/home',
    name:'Home',
    component:()=>import('../views/Home')
   },
   {
    path:'/goods',
    name:'Goods',
    component:()=>import('../views/Goods')
   },
   {
    path:'/user',
    name:'User',
    component:()=>import('../views/User')
   }
  ]
 },

]

const router = new VueRouter({
 mode:'history',
 routes,
})

export default router