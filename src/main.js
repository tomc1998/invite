// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './index.scss';
import Vue from 'vue'
import App from './App'
import RoomList from '@/comp/RoomList'
import UserList from '@/comp/UserList'
import Chat from '@/comp/Chat'
import ChatInput from '@/comp/ChatInput'
import ChatMessageList from '@/comp/ChatMessageList'
import ChatMessage from '@/comp/ChatMessage'
import Home from '@/comp/Home'
import CircleAvatar from '@/comp/CircleAvatar'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

Vue.component('RoomList', RoomList);
Vue.component('UserList', UserList);
Vue.component('Chat', Chat);
Vue.component('ChatInput', ChatInput);
Vue.component('ChatMessageList', ChatMessageList);
Vue.component('ChatMessage', ChatMessage);
Vue.component('Home', Home);
Vue.component('CircleAvatar', CircleAvatar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
