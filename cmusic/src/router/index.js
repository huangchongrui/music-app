import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/components/search/search.vue'
import $ from 'jquery'
import SongSheet from '../components/list/SongSheet.vue'
import singer from '../components/list/singer.vue'
import CollectionLately from '../components/list/CollectionLately.vue'
import play from '../components/list/play.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/search',component:search},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/SongSheet',component:SongSheet},
    {path:'/singer',component:singer},
    {path:'/CollectionLately',component:CollectionLately},
    {path:'/play',component:play},
  ]
})
