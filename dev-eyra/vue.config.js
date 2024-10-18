const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'), // Polyfill for 'crypto'
        stream: require.resolve('stream-browserify'), // Polyfill for 'stream'
        util: require.resolve('util/'), // Polyfill for 'util'
        process: require.resolve('process/browser'), // Polyfill for 'process'
        buffer: require.resolve('buffer/'), // Polyfill for 'Buffer'
      },
    },
    plugins: [
      new (require('webpack')).ProvidePlugin({
        process: 'process/browser', // Provide 'process'
        Buffer: ['buffer', 'Buffer'], // Provide 'Buffer'
      }),
    ],
  },
});
