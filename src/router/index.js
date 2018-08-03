import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import InvestorDashboard from '@/components/InvestorDashboard'
import CreatorDashboard from '@/components/CreatorDashboard'
import ProjectView from '@/components/ProjectView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/investor-dashboard',
      name: 'investor-dashboard',
      component: InvestorDashboard
    },
    {
      path: '/creator-dashboard',
      name: 'creator-dashboard',
      component: CreatorDashboard
    },
    {
      path: '/project/:id',
      name: 'project-view',
      component: ProjectView
    }
  ]
})
