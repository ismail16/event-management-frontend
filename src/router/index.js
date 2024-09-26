import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage/HomePage.vue'
import Home from '../views/Home.vue'
import HomeSingle from '../components/HomeSingle/HomeSingle.vue'
import Details from '../views/Details.vue'
import Register from '../views/Register.vue'
import Registerform from '../views/RegisterForm.vue'
import PaymentSuccess from "../components/PaymentSuccessfull/PaymentSuccessful.vue"
import PaymentPaid from "../components/Payment/Payment.vue"

import RegisterformSingle from '../components/Form/RegisterForm.vue'
import Tin from '../components/Footer/Tin.vue'
import AboutUs from '../components/AboutUs/AboutUs.vue'
import ReturnRefundPolicy from '../components/ReturnRefundPolicy/ReturnRefundPolicy.vue'
import TermsCondition from '../components/TermsCondition/TermsCondition.vue'
import Policy from '../components/PrivacyPolicy/PrivacyPolicy.vue'
import Faq from '../components/Faq/Faq.vue'
import Blog from '../components/Blog/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=>resolve({ top: 0, behavior: "smooth"},300))
    })
  },
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/event/:id',
      name: 'event',
      component: HomeSingle
    },
    {
      path: '/details',
      name: 'details',
      component: Details
      
     
    },
    {
      path: '/event/:id/registerform',
      name: 'registerform',
      component: Register
      
     
    },
    {
      path: '/event/:id/register',
      name: 'register',
      component: RegisterformSingle
      
     
    },
    {
      path: '/tin',
      name: 'tin',
      component: Tin
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/return-refund-policy',
      name: 'return-refund-policy',
      component: ReturnRefundPolicy
    },
    {
      path: '/terms-condition',
      name: 'terms-condition',
      component: TermsCondition
    },{
      path: '/policy',
      name: 'policy',
      component: Policy
    },
    {
      path: '/paymentsuccess',
      name: 'paymentsuccess',
      component: PaymentSuccess
    },
    {
      path: '/paymentpaid',
      name: 'paymentpaid',
      component: PaymentPaid
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export default router
