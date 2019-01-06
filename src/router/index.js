import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Musings from '@/components/Musings'
import Contact from '@/components/Contact'
import ProjectDetail from '@/components/ProjectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
    	path: '/projects',
    	name: 'Projects',
    	component: Projects
    },
    {
    	path: '/musings',
    	name: 'Musings',
    	component: Musings
    },
    {
    	path: '/contact',
    	name: 'Contact',
    	component: Contact
    },
    {
    	path: '/projects/:type/:project_name',
    	name: 'Project_Detail',
    	component: ProjectDetail
    }
  ]
})
