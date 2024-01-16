const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: ['glsl-shader-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.json$/,
        type: 'json'
      },
      {
        test: /\.(gltf)$/i,
        use: 'raw-loader',
      },
    ],
  },
  devServer: {
    static: './docs',
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
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
      title: "Julio Del Valle - threeJS 3d webgl GLSL development",
    }),
    new HtmlWebpackPartialsPlugin({
      path: './src/partials/google-analytics.html',
      location: 'head',
      priority: 'high'
    }),
    new CnameWebpackPlugin({
      domain: 'juliodelvalle.com',
    }),
    new FaviconsWebpackPlugin('./src/public/images/favicon.png')
  ],
};
