console.log(process.env.NODE_ENV);

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DOCUMENT_ROOT = '../docs/';

module.exports = function() {
  const entries = {
    'js/main': path.join(__dirname, './resources/main.js')
  };

  const watchOptions = {
    poll: true
  };

  const output = {
    path: path.join(__dirname, DOCUMENT_ROOT),
    filename: '[name].js'
  };

  let optimization = {
    splitChunks: {
      name: 'js/vendor',
      chunks: 'initial'
    }
  };

  if (process.env.NODE_ENV === 'production') {
    optimization = Object.assign(optimization, {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              pure_funcs: [
                'console.debug',
                'console.log',
                'console.info',
                'console.warn',
                'console.groupCollapsed',
                'console.groupEnd',
                'console.error'
              ]
            }
          }
        })
      ]
    });
  }

  const resolve = {
    // aliasを指定するとグローバルに展開されない
    alias: {
      //'jquery': 'jquery/src/jquery',
      'velocity-animate': 'velocity-animate/velocity.min.js'
    },
    // モジュール検索
    modules: [path.resolve(__dirname, 'resources'), 'node_modules']
  };

  const baseConfig = {
    target: 'web',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  };

  return [
    Object.assign(
      {
        mode: 'production',
        watchOptions: watchOptions,
        entry: entries,
        resolve: resolve,
        output: output,
        optimization: optimization
      },
      baseConfig
    )
  ];
};
