import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue";
import Contact from "@/components/contact.vue";
import NosServices from "@/components/nosServices.vue";

const routes = [
    {
        path: '/' , component:  Home
    } ,
    {
        path: '/contact' , component: Contact
    } ,
    {
        path: '/nosServices' , component: NosServices
    } ,
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes: routes
    }
)

const app = createApp(App)
app.use(router);
app.mount('#app')
