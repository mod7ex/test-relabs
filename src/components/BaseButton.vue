<template>
      <button :class="classes">
            <span v-if="!loading"><slot>Submit</slot></span>
            <img v-if="loading" src="../assets/svg/loading.svg" />
      </button>
</template>

<script>
export default {
      name: "BaseButton",

      props: {
            class: {
                  type: String,
                  default: "",
            },

            loading: {
                  type: Boolean,
                  default: false,
            },
      },

      setup(props) {
            let classes = {
                  "base-button": true,
            };

            classes[props.class] = true;

            return {
                  classes,
            };
      },
};
</script>

<style lang="scss">
.base-button {
      padding: 0.5em 1em;
      font-weight: bold;
      border-radius: $radius;
      background-color: $white;
      border: none;
      cursor: pointer;

      @include flex();
}
</style>
