const path = require('path');

module.exports = (env) => {
  const isProd = env === 'production';

  return {
    entry: './src/app.js',
    // entry:'./src/playground/redux-101.js',
    // entry:'./src/playground/redux-expensify.js',
    // entry:'./src/playground/destructuring.js',
    // entry:'./src/playground/higher-order-components.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 1111
    }
  };
};
