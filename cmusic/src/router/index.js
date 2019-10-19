import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/index/index"
import Navitem1 from "@/components/index/navitem/navitem1"
import Navitem2 from "@/components/index/navitem/navitem2"
import Navitem3 from "@/components/index/navitem/navitem3"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: Index},
    {path: '/index',name: 'index',component: Index},
    {path: '/navitem1',name: 'Navitem1',component: Navitem1},
    {path: '/navitem2',name: 'Navitem1',component: Navitem2},
    {path: '/navitem3',name: 'Navitem1',component: Navitem3},
  ]
})
