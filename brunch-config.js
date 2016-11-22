module.exports = {
  npm: {
    aliases: {
      vue: 'vue/dist/vue.js'
    },
    styles: {
      'normalize.css': ['normalize.css']
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo: {
        'app.css': 'app/styles/app.styl',
        'vendor.css': /^(?!app)/
      },
      order: {
        before: ['node_modules/normalize.css/normalize.css']
      }
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
