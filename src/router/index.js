import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/project/Head-navigation'
import client from '@/project/client'
import clientcss from '@/project/client.css'
import lxtwocss from '@/project/lxtwo.css'
import indexcss from '@/project/index.css'
import lxtwo from '@/project/lxtwo'
import index from '@/project/index'
import indcss from '@/project/index.css'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'lxtwo',
      component: lxtwo
    },
    {
      path: '/',
      name: 'client',
      component: client
    },
  ]
})
