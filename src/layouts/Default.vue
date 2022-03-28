<template>
      <Header />
      <main class="content">
            <slot>Default content goes here</slot>
      </main>
</template>

<script>
import Header from "../components/TheHeader.vue";

export default {
      name: "Default",

      components: {
            Header,
      },
};
</script>

<style lang="scss">
.content {
      padding: 0.7em;
      padding-top: 2.5em;
      @include center();
}
</style>
