<template>
      <div class="area users">
            <h1>Cписок пользователей</h1>
            <table>
                  <thead>
                        <tr>
                              <th>ID</th>
                              <th>имя</th>
                              <th>роль</th>
                              <th>Дата создания</th>
                              <th>действия</th>
                        </tr>
                  </thead>

                  <tbody>
                        <tr v-for="(user, i) in users" :key="i">
                              <td>{{ user.id }}</td>
                              <td>{{ user.name }}</td>
                              <td>{{ user.role }}</td>
                              <td>{{ format_date_time(user.ctime) }}</td>
                              <td>
                                    <Button v-fill:red @click="dropUser(i)">
                                          удалять
                                    </Button>
                              </td>
                        </tr>
                  </tbody>
            </table>

            <Pagination :pages="pages" v-model="currentPage" />
      </div>
</template>

<script>
import { computed, reactive, watch, ref } from "vue";

import { formatDateTime } from "../helpers";

import Pagination from "./Pagination.vue";
import { useStore } from "vuex";
export default {
      name: "UsersTable",

      components: {
            Pagination,
      },

      setup() {
            let store = useStore();

            let users = ref([]);

            let query = reactive({
                  total: 0,
                  limit: 5,
            });

            let currentPage = ref(1);
            let pages = computed(() => Math.ceil(query.total / query.limit));
            let offset = computed(() => (currentPage.value - 1) * query.limit);

            let fetchUsers = () => {
                  api.get(
                        `/users/list?offset=${offset.value}&limit=${query.limit}`
                  )
                        .then(async (responce) => {
                              users.value = responce.data.items;

                              query.total = responce.data.total;
                              query.limit = responce.data.limit;

                              await store.dispatch("switch_isloading", false);
                        })
                        .catch((error) => {
                              if (error.response) {
                                    console.log(error.response.data);
                              } else if (error.request) {
                                    console.log(error.request);
                              } else {
                                    console.log("Error", error.message);
                              }
                        });
            };

            let format_date_time = formatDateTime;

            let dropUser = (i) => {
                  users.value.splice(i, 1);
            };

            watch(
                  () => currentPage.value,
                  () => {
                        fetchUsers();
                  },
                  {
                        immediate: true,
                  }
            );

            return {
                  users,
                  pages,
                  currentPage,
                  format_date_time,
                  dropUser,
            };
      },
};
</script>
