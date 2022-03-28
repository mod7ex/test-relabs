import Input from "../components/BaseTextInput.vue";
import Button from "../components/BaseButton.vue";
import Default from "../layouts/Default.vue";

export default {
      install(app, options) {
            // registering base components globally
            app.component("Input", Input);
            app.component("Button", Button);
            app.component("Default", Default);

            /*
                  creating a directive for the base button,
                  fill directive if set to true,it allows to give
                  a blue background color to the element applied into
            */
            app.directive("fill", (el, binding, vnode) => {
                  if (binding.value == false) return;

                  if (!binding.arg) return;

                  el.style.color = "#fff";

                  if (binding.arg === "blue") {
                        el.style.backgroundColor = "#419eff";
                        return;
                  }

                  if (binding.arg === "red") {
                        el.style.backgroundColor = "#f46c6c";
                        return;
                  }

                  if (binding.arg === "purple") {
                        el.style.backgroundColor = "#cc46aa";
                        return;
                  }
            });
      },
};
