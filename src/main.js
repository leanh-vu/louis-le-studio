import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import { initializeApp } from 'firebase/app';
//
// const firebaseConfig = {
//   apiKey: "AIzaSyBZ2KeqjPPpz1ToVUUDHpdFK1s0rpYLP2c",
//   authDomain: "louis-le-studio-landingpage.firebaseapp.com",
//   projectId: "louis-le-studio-landingpage",
//   storageBucket: "louis-le-studio-landingpage.appspot.com",
//   messagingSenderId: "1008231854758",
//   appId: "1:1008231854758:web:75f202948701b3ee79fa67",
//   measurementId: "G-NV3R87W37Q"
// };
//
// const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
