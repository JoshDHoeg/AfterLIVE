import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractVendorStyles = new ExtractTextPlugin('dist/vendor.css');
// const extractAppStyles = new ExtractTextPlugin('./[name]-[hash:8].css');
const extractAppStyles = new ExtractTextPlugin('./[name].css');

const PATHS = {
  app: path.join(__dirname, "src/index.js"),
  build: path.join(__dirname, "dist"),
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: "[name]-[hash:8].js",
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        include: [ path.resolve(__dirname, "src/assets/styles") ],
        use: extractAppStyles.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        use: extractVendorStyles.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true } }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(ejs)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
        'file-loader'
        ]
      }
    ],
  },
  devServer: {
    noInfo: true,
    contentBase: './dist',
    port: 9000,
    open: true
  },
  plugins: [
    extractAppStyles,
    new HtmlWebpackPlugin({
      title: "afterlive",
      template: "./src/index.ejs"
    }),
  ],
};
