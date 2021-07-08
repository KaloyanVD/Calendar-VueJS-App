import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAc9Gyko6Jpyeqr_wqIXQ4VmCU2Pr0MC24",
  authDomain: "calendar-nbu-project.firebaseapp.com",
  projectId: "calendar-nbu-project",
  storageBucket: "calendar-nbu-project.appspot.com",
  messagingSenderId: "937821877495",
  appId: "1:937821877495:web:ee0af28570afed79080ff2",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
