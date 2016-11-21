module.exports = {
  npm: {
    globals: {
      Vue: 'vue/dist/vue.js'
    }
  },
  files: {
      javascripts: {
          joinTo: 'app.js'
      },
      templates: {
          joinTo: 'app.js'
      }
  },
  plugins: {
      babel: {
          presets: ['es2015']
      }
  }
};
