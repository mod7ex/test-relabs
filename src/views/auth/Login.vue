<template>
      <div class="login">
            <form @submit.prevent="submit">
                  <div class="form-section form-header">
                        <h2>Aвторизоваться</h2>
                  </div>

                  <fieldset :disabled="processingLogin">
                        <Input
                              type="email"
                              :required="true"
                              name="email"
                              placeholder="user@example.com"
                              v-model.trim="login.email"
                              :valide="vHandler.email.valide"
                              :error="vHandler.email.error"
                              >электронноая почтa</Input
                        >

                        <Input
                              type="password"
                              :required="true"
                              name="password"
                              placeholder="********"
                              v-model.trim="login.password"
                              :valide="vHandler.password.valide"
                              :error="vHandler.password.error"
                              >пароль</Input
                        >

                        <div class="form-section form-submit">
                              <Button v-fill:blue :loading="processingLogin"
                                    >авторизоваться</Button
                              >
                        </div>
                  </fieldset>
            </form>
      </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { email, password, required } from "../../helpers/validators";
import validationHandler from "../../mixins/validation";

import { useStore } from "vuex";

export default {
      name: "Login",

      setup() {
            let router = useRouter();

            let store = useStore();

            let processingLogin = computed(() => store.getters.isLoading);

            let login = reactive({
                  email: "",
                  password: "",
            });

            let rules = {
                  email: {
                        required,
                        email,
                  },
                  password: {
                        required,
                        password,
                  },
            };
            let { vHandler, isValideForm, formTouch } = validationHandler(
                  rules,
                  login
            );

            let submit = async () => {
                  formTouch();

                  if (!isValideForm.value) return;

                  console.log(login);

                  await store.dispatch("switch_isloading", true);

                  // login ...

                  setTimeout(async () => {
                        await store.dispatch("switch_isloading", false);

                        router.push({ name: "Home" });
                  }, 2000);
            };

            return {
                  submit,
                  login,
                  vHandler,
                  processingLogin,
            };
      },
};
</script>

<style lang="scss">
.login {
      background-color: $login-color;
      min-height: 100vh;

      @include flex();

      form {
            padding: 2em;

            max-width: $form-width;
            width: 100%;

            color: $white;
            .form-section {
                  margin-bottom: 2em;

                  &.form-header {
                        text-align: center;
                  }

                  &.form-submit {
                        @include flex();

                        button {
                              font-size: 1rem;
                              min-width: 5em;
                        }
                  }
            }

            fieldset {
                  border: none;
            }
      }
}
</style>
