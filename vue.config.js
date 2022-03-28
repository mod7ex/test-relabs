module.exports = {
      css: {
            loaderOptions: {
                  sass: {
                        // import in the same order
                        prependData: `
                              @import "@/assets/scss/_variables.scss";
                              @import "@/assets/scss/_mixins.scss";`,
                  },
            },
      },
};

/*

      @import "@/assets/scss/_functions.scss";
      @import "@/assets/scss/_reset.scss";
      @import "@/assets/scss/_keyframes.scss";

*/
