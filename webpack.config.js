const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
console.log('start build');
module.exports = {
  entry: './src/main',
  target: 'node',
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true, happyPackMode: false },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.ts', '.json'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, './src/generated/client/schema.prisma'),
          to: resolve(__dirname, './dist/src/generated/client/schema.prisma'),
          toType: 'file',
          noErrorOnMissing: true,
        },
      ],
    }),
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          'cache-manager',
          'class-validator',
          'class-transformer',
          'class-transformer/storage',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource, {
            paths: [process.cwd()],
          });
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
