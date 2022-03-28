<template>
      <div class="area events">
            <h1>Cобытия</h1>
            <table>
                  <thead>
                        <tr>
                              <th>Дата</th>
                              <th>Cобытиe</th>
                        </tr>
                  </thead>

                  <tbody>
                        <tr v-for="(event, i) in events" :key="i">
                              <td>{{ event.name }}</td>
                              <td>{{ event.datetime }}</td>
                        </tr>
                  </tbody>
            </table>
      </div>
</template>

<script>
import { computed, ref, getCurrentInstance } from "vue";

import Pagination from "./Pagination.vue";

import { useStore } from "vuex";

export default {
      name: "EventsTable",

      components: {
            Pagination,
      },

      setup() {
            const { proxy } = getCurrentInstance();

            let store = useStore();

            let events = computed(() => store.getters.eventsList);

            proxy.$socket.onmessage = (res) => {
                  store.dispatch("add_event", JSON.parse(res.data));
            };

            return {
                  events,
            };
      },
};
</script>
