/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.js',
  },
  optimization: {
    moduleIds: 'named',
    minimize: false,
  },
};
