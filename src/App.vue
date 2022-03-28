<template>
      <router-view />
</template>

<style lang="scss">
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: all 500ms ease;
}

#app {
      button,
      input {
            outline: none;

            &:focus {
                  outline: none;
            }
      }

      li {
            list-style: none;
      }

      a {
            text-decoration: none;
      }
}
</style>
