const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  target: ['web', 'es5'],
  entry: {
    index: './src/pages/index.js',
    services: './src/pages/services.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
        publicPath: ''
  },
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    compress: true,
    port: 8081,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        generator: {
          filename: 'css/[name].[hash][ext]',
        },
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/polishing.html',
      filename: 'polishing.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/dry-cleaning.html',
      filename: 'dry-cleaning.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pasting-with-films.html',
      filename: 'pasting-with-films.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/professional-car-wash.html',
      filename: 'professional-car-wash.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/protective-coatings.html',
      filename: 'protective-coatings.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/removing-dents.html',
      filename: 'removing-dents.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/sound-insulation.html',
      filename: 'sound-insulation.html',
      chunks: ["services"],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/politics.html',
      filename: 'politics.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: path.resolve(path.join(__dirname, 'node_modules/jquery')),
      jQuery: path.resolve(path.join(__dirname, 'node_modules/jquery')),
      'window.jQuery': path.resolve(path.join(__dirname, 'node_modules/jquery')),
    }),
  ]
};
