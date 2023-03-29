const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './resources/scripts/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'welcome',
      template: 'index.html',
    }),
    new htmlWebpackPlugin({
      filename: 'about.html',
      template: 'about.html',
    }),
    new htmlWebpackPlugin({
      filename: 'contact.html',
      template: 'contact.html',
    }),
    new htmlWebpackPlugin({
      filename: 'single_product_man.html',
      template: 'single_product_man.html',
    }),
    new htmlWebpackPlugin({
      filename: 'single_product_woman.html',
      template: 'single_product_woman.html',
    }),
    new htmlWebpackPlugin({
      filename: 'cart.html',
      template: 'cart.html',
    }),
    new htmlWebpackPlugin({
      filename: 'checkout.html',
      template: 'checkout.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(gif|png|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'src/assets/images/',
            },
          },
        ],
      },
    ],
  },
};
