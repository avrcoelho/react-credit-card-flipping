const { resolve, join } = require('path');

const config = {
  entry: {
    main: resolve('./src/index.tsx'),
  },
  output: {
    path: resolve(__dirname, 'public'),
    // nome do arquivo que vai ser gerado
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};

module.exports = config;
