const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',

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
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     "...",
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           // Lossless optimization with custom option
  //           // Feel free to experiment with options for better result for you
  //           plugins: [
  //             ["gifsicle", { interlaced: true }],
  //             ["jpegtran", { progressive: true }],
  //             ["optipng", { optimizationLevel: 5 }],
  //             // Svgo configuration here https://github.com/svg/svgo#configuration
  //             [
  //               "svgo",
  //               {
  //                 plugins: [
  //                   {
  //                     name: "preset-default",
  //                     params: {
  //                       overrides: {
  //                         removeViewBox: false,
  //                         addAttributesToSVGElement: {
  //                           params: {
  //                             attributes: [
  //                               { xmlns: "http://www.w3.org/2000/svg" },
  //                             ],
  //                           },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 ],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },
};
