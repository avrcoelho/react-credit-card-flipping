const { resolve, join } = require('path');

const config = {
  entry: {
    main: resolve('./src/index.tsx'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    // nome do arquivo que vai ser gerado
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  devServer: {
    contentBase: join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'source-map-loader',
        },
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  externals: { react: 'commonjs react' },
};

module.exports = config;
