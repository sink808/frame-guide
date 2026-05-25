const path = require('path');
const CracoCSSModules = require('craco-css-modules');

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
  plugins: [{ plugin: CracoCSSModules }],
};
