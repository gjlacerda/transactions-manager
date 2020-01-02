const HtmlPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const R = require('ramda')

const toWebpackDefinitions = R.pipe(
  R.toPairs,
  R.map(([key, value]) => ([`process.env.${key}`, JSON.stringify(value)])),
  R.fromPairs,
)

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { node: '10' },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      title: 'Transactions Manager',
      template: 'src/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    }),
    new webpack.DefinePlugin(toWebpackDefinitions(process.env)),
  ],
}
