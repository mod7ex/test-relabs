<template>
      <div class="pagination" :key="target">
            <Button :disabled="target == 1" @click="switchPage(false)"
                  >&#60;
            </Button>
            <Button
                  v-for="page in pages"
                  :key="page"
                  @click="switchPage(page)"
                  v-fill:blue="target === page"
                  :loading="processingRequest && target === page"
            >
                  {{ page }}
            </Button>
            <Button :disabled="target == pages" @click="switchPage(true)"
                  >&#62;
            </Button>
      </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
      name: "Pagination",

      props: {
            pages: Number,

            modelValue: Number,
      },

      emits: ["update:modelValue"],

      setup(props, { emit }) {
            let store = useStore();

            let processingRequest = computed(() => store.getters.isLoading);

            let target = ref(1);

            let switchPage = async (payload) => {
                  await store.dispatch("switch_isloading", true);

                  if (payload === true) {
                        if (props.modelValue < props.pages)
                              payload = props.modelValue + 1;
                  }

                  if (payload === false) {
                        if (props.modelValue > 1)
                              payload = props.modelValue - 1;
                  }

                  target.value = payload;

                  setTimeout(async () => {
                        emit("update:modelValue", payload);
                  }, 2000);
            };

            watch(
                  () => props.modelValue,
                  (v) => {
                        target.value = v;
                  },
                  {
                        immediate: true,
                  }
            );

            return {
                  switchPage,
                  processingRequest,
                  target,
            };
      },
};
</script>

<style lang="scss">
.pagination {
      @include flex($gap: 0.3em, $align: stretch);
      button {
            background-color: #e2e8f0;

            color: $secondary-black;

            &:disabled {
                  color: rgba($secondary-black, 0.3);
                  cursor: default;
            }

            img {
                  width: 10px;
                  height: 100%;
            }
      }
}
</style>
