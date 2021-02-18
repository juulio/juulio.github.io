const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    contentBase: './docs',
    open: true
  },
  mode : 'development',
  resolve: {
    alias: {
      OrbitControls: path.join(__dirname, 'node_modules/three/examples/jsm/controls/OrbitControls.js'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "juulio.com - threeJS development",
    }),
  ],
};
