const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // clean: true,
  },
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true,
    compress: true,
    port: 3000,
  },

  // plugins: [
    // new HtmlWebpackPlugin({
    //     hash: true,
    //     filename: './index.html' //relative to root of the application
    // }),
    // new CleanWebpackPlugin(),
  // ],

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },
};
