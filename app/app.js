var require = meteorInstall({"client":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/main.js                                                              //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var Vue;
module.watch(require("meteor/meteormogul:vue-dist"), {
  Vue: function (v) {
    Vue = v;
  }
}, 0);
var Vuetify;
module.watch(require("meteor/meteormogul:vuetify-dist"), {
  Vuetify: function (v) {
    Vuetify = v;
  }
}, 1);
var VueRouter;
module.watch(require("meteor/meteormogul:vue-router-dist"), {
  VueRouter: function (v) {
    VueRouter = v;
  }
}, 2);
// Use Vuetify for style and UI widgets.
Vue.use(Vuetify); // Use Vue Router for routes.
// We're using client-side routes, which just changes state of app in browser.
// With client-side routes, server does not get involved.
// Server just delivers a Single Page App, then browser runs JavaScript to
// provide app functionality.

Vue.use(VueRouter); // Declare two templates for two routes, Happy and Sad.
// Templates must have one enclosing tag.

var Happy = {
  template: '<v-icon>mood</v-icon>'
};
var Sad = {
  template: '<v-icon>mood_bad</v-icon>'
}; // Declare Happy and Sad routes...

var routes = [{
  path: '/happy',
  component: Happy
}, {
  path: '/sad',
  component: Sad
}]; // ... then add them to the router ...

var router = new VueRouter({
  routes: routes // short for `routes: routes`

}); // ... then inject the router into the Vue instance.
// This Vue instance uses the template with id="app-template".
// We're getting fancy with the $mount API.
// See https://vuejs.org/v2/api/#vm-mount

vm = new Vue({
  router: router,
  template: '#app-template',
  data: {
    message: 'Getting started...'
  }
}).$mount('#app');
/////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/main.js");