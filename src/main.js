import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueCookies from "vue3-cookies";
//import store from './state.text'

import App from './App.vue'
import router from './router'
import 'flowbite'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleDown, faAngleRight,faCalendarDays, faClock,faLandmark,faEnvelope,faHandPointRight,faCircleChevronDown, faLocationDot, faPhone,faStar} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import{faFacebook,faFacebookF,faLinkedinIn,faYoutube} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLocationDot, faPhone,faAngleRight,faAngleDown,faCircleChevronDown,faCalendarDays,faClock,faLandmark,faEnvelope,faHandPointRight,faFacebook, faCircleQuestion ,faFacebookF,faLinkedinIn,faYoutube,faStar)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(VueCookies,{
        expireTimes: "30s",
        path: "/",
        domain: "",
        secure: true,
        sameSite: "None"
});
app.mount('#app')
