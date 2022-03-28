<template>
      <div class="text-input form-section" :class="{ invalide: !valide }">
            <label :for="name"
                  ><b v-if="required">&#42; </b><slot>lorum label</slot></label
            >
            <input
                  :id="name"
                  :placeholder="placeholder"
                  :type="type"
                  @input="$emit('update:modelValue', $event.target.value)"
            />
            <small class="error-text">{{ error }}</small>
      </div>
</template>

<script>
export default {
      name: "BaseTextInput",

      props: {
            name: {
                  // unique
                  type: String,
                  default: "lorem",
            },

            required: {
                  type: Boolean,
                  default: false,
            },

            type: {
                  type: String,
                  default: "text",
            },

            placeholder: {
                  type: String,
                  default: "lorem placeholder",
            },

            error: {
                  type: String,
                  default: "lorum error",
            },

            valide: {
                  type: Boolean,
                  default: true,
            },

            modelValue: String,
      },

      emits: ["update:modelValue"],
};
</script>

<style lang="scss">
.text-input {
      label {
            b {
                  color: $red;
            }
      }

      input {
            border-radius: $radius;
            margin-top: 0.5em;
            display: block;
            width: 100%;
            padding: 0.7em;

            border: 2px solid transparent;

            &:focus {
                  border: 2px solid $blue;
                  @include shadow($spread: 4px, $c: $blue);
            }
      }

      .error-text {
            padding-right: 0.5em;
            color: transparent;
      }

      &.invalide {
            input {
                  border: 2px solid $red;
                  @include shadow($spread: 4px, $c: $red);

                  &:focus {
                        border: 2px solid $red;
                  }
            }

            .error-text {
                  color: $red;
            }
      }
}
</style>
