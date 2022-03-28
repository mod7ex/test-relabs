import { createStore } from "vuex";

import { formatDateTime } from "../helpers";

export default createStore({
      state: {
            events: [],

            isLoading: false,

            // socket: {
            //       isConnected: false,
            //       message: "",
            //       reconnectError: false,
            //       heartBeatInterval: 50000,
            //       heartBeatTimer: 0,
            // },
      },

      getters: {
            eventsList(state) {
                  return state.events.map((item) => ({
                        name: item.event,
                        datetime: formatDateTime(item.ctime),
                  }));
            },

            isLoading(state) {
                  return state.isLoading;
            },
      },

      mutations: {
            ADD_EVENT(state, payload) {
                  state.events.push(payload);
            },

            SWITCH_ISLOADING(state, bool) {
                  state.isLoading = bool;
            },

            // SOCKET_ONOPEN(state, event) {
            //       main.config.globalProperties.$socket = event.currentTarget;
            //       state.socket.isConnected = true;

            //       state.socket.heartBeatTimer = setInterval(() => {
            //             const message = "socket is connected";
            //             state.socket.isConnected &&
            //                   main.config.globalProperties.$socket.sendObj({
            //                         code: 200,
            //                         msg: message,
            //                   });
            //       }, state.socket.heartBeatInterval);
            // },

            // SOCKET_ONCLOSE(state, event) {
            //       state.socket.isConnected = false;

            //       clearInterval(state.socket.heartBeatTimer);
            //       state.socket.heartBeatTimer = 0;
            //       console.log("socket disconnected: " + new Date());
            //       console.log(event);
            // },

            // SOCKET_ONERROR(state, event) {
            //       console.error(state, event);
            // },

            // SOCKET_ONMESSAGE(state, message) {
            //       state.socket.message = message;
            // },

            // SOCKET_RECONNECT(state, count) {
            //       console.info("socket reconnecting...", state, count);
            // },

            // SOCKET_RECONNECT_ERROR(state) {
            //       state.socket.reconnectError = true;
            // },
      },

      actions: {
            add_event({ commit }, payload) {
                  commit("ADD_EVENT", payload);
            },

            switch_isloading({ commit }, payload) {
                  commit("SWITCH_ISLOADING", payload);
            },
      },
});
