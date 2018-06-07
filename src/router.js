import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Denglu from '@/components/Denglu'
import Shouye from '@/components/Shouye'
import Search from '@/components/Search'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/denglu',
            component: Denglu
        },
        {
            path: '/shouye',
            component: Shouye,
        },
        {
            path: '/news',
            component: News,
        }
    ]
})