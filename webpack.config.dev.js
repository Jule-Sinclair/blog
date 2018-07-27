const webpack = require('webpack');
const { ProgressPlugin, NamedChunksPlugin } = webpack;
const { resolve, join } = require('path');

const baseDir =  process.cwd();
const srcDir = join(baseDir, 'src');
const outputDir = join(baseDir, 'dist');


module.exports = {
  mode: 'development',
  entry: {
    app: 'src/app.ts',
  },
  output: {
    path: outputDir,
    // publicPath: '//static.ridibooks.com/unlimited/dist/',
    filename: '[name].min.js',
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    noEmitOnErrors: true,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          chunks: 'all',
          test (chunk) {
            return chunk.context && chunk.context.includes('node_modules');
          }
        }
      }
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        include: srcDir,
        use: {
          loader: 'tslint-loader',
          options: {
            fix: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new NamedChunksPlugin(chunk => {
      if (chunk.name) return chunk.name;
      return chunk.mapModules((m) => (
        path.relative(m.context, m.userRequest).replace(/.tsx?/, '').toLowerCase()
      )).join('_');
    }),
  ],
  optimization: {},
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      srcDir,
      'node_modules',
      baseDir, // To resolve css imports in storybook files
    ],
  },
};