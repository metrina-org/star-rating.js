module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 0 }),
    require('postcss-hexrgba'),
    require('postcss-custom-properties'),
    require('postcss-selector-namespace/lib/plugin')({ namespace: '' }), // add a custom namespace here
    require('autoprefixer'),
  ],
};
