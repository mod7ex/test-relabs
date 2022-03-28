<template>
      <header>
            <ul id="nav">
                  <li>
                        <router-link :to="{ name: 'Home' }"
                              >Главная страница</router-link
                        >
                  </li>
                  <li>
                        <router-link :to="{ name: 'Login' }"
                              >авторизоваться</router-link
                        >
                  </li>
                  <li>
                        <router-link :to="{ name: 'Shop' }"
                              >Магазин</router-link
                        >
                  </li>
            </ul>
      </header>
</template>

<script>
export default {
      name: "TheHeader",
};
</script>

<style lang="scss">
header {
      @include shadow($blure: 2px, $c: rgba(17, 17, 17, 0.3));

      #nav {
            @include center();
            @include flex($justify: flex-start, $gap: 1em);

            li {
                  a {
                        display: inline-block;
                        padding: 0.7em;
                        color: $secondary-black;
                        border-bottom: 3px solid transparent;

                        &.router-link-active {
                              color: $main-black;
                              border-bottom-color: $blue;
                        }
                  }
            }
      }
}
</style>
