'use strict'

import  Vue from 'vue';

import VueRouter  from 'vue-router';

import ElementUI from 'element-ui';

import VueResource from 'vue-resource'; 

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource); 

var router = new VueRouter();

var APP = Vue.extend({});

import home  from './modules/home/index.vue';

var routes = [
	{path:'/',component:home}
];

var router = new VueRouter({
  routes 
})

var app = new Vue({
  router,
  el: '#app'
})