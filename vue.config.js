module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/css/_variables.scss";
          @import "@/assets/css/app.scss";
        `
      }
    }
  }
}
