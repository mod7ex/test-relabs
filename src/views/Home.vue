<template>
      <Default>
            <div class="tables">
                  <UsersTable />
                  <EventsTable />
            </div>
      </Default>
</template>

<script>
import UsersTable from "../components/UsersTable.vue";
import EventsTable from "../components/EventsTable.vue";

export default {
      name: "Home",
      components: { UsersTable, EventsTable },
};
</script>

<style lang="scss">
.tables {
      @include flex($gap: 3em, $wrap: wrap, $align: flex-start);

      .area {
            h1 {
                  text-align: center;
                  margin-bottom: 1em;
            }

            table {
                  color: $secondary-black;
                  margin-bottom: 1em;
                  width: 100%;

                  thead,
                  tbody {
                        position: relative;

                        tr {
                              @include shadow(
                                    $x: 0px,
                                    $y: 3px,
                                    $blure: 5px,
                                    $spread: -4px,
                                    // $c: rgba(17, 17, 17, 0.3),
                                    $c: black,
                                    $inset: false
                              );

                              th,
                              td {
                                    text-align: left;
                                    padding: 0.7em;
                                    padding-right: 2em;
                              }
                        }
                  }
            }

            width: 100%;
            &.users {
                  max-width: $form-width;
            }

            &.events {
                  max-width: $form-width * 0.7;
            }
      }
}
</style>
