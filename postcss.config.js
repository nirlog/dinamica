const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer({
      browsers:['ie >= 8', 'last 4 version']
  }),
    cssnano({ preset: 'default' })
  ]
};
