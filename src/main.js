import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import VueNativeSock from "vue-native-websocket-vue3";

import basePlugin from "../src/plugins";

window.api = axios.create({
      baseURL: "https://test.relabs.ru/api",
      timeout: 2000,
      headers: {
            Accept: "application/json",
      },
});

let app = createApp(App);

app.use(VueNativeSock, "wss://test.relabs.ru/event", {
      // store: store,
      // connectManually: true,
});

app.use(basePlugin);

app.use(store);
app.use(router);
app.mount("#app");
