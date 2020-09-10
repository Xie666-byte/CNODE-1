import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article.vue'
import Postlist from '../components/Postlist.vue'
import Userinfo from '../components/Userinfo.vue'
import Slidebar from '../components/Slidebar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {name:"root",
    path:'/',
    components:{
      // 所有的组件名称都是main，和App.vue存在映射关系
      main:Postlist
    }},
    {
    name:"post_content",
    path:'/topic/:id & author=:name',
    components:{
      main:Article,
      cebianlan:Slidebar
    }
  },
  {
    name:'user_info',
    path:'/userinfo/:name',
    components:{
      main:Userinfo
    }
  }
  ]
})
