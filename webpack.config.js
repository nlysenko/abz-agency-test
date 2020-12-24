var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const DEBUG = process.env.NODE_ENV == 'development'

module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        extractComments: {
          condition: false,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  entry: './src/app',

  output: {
    filename: DEBUG ? 'bundle.js' : 'bundle.min.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: DEBUG ? 'style.css' : 'style.min.css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      favicon: path.join(__dirname, 'assets', 'img', 'favicon.png'),
    }),
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.m?js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },

      {
        test: /\.(jpe?g|gif|png|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[ext]',
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [new DirectoryNamedWebpackPlugin(true)],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },

  devtool: 'inline-source-map',
}
