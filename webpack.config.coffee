path    = require('path')
webpack = require('webpack')

NODE_ENV = process.env.NODE_ENV

module.exports =
  entry:
    app    : './resource/main.js'
    vendor : [
        'jquery'
        'velocity'
      ]
    'js/test'     : path.join(__dirname, 'resources/main.js' )

  output:
    path          : path.join(__dirname, '../../../../app/webroot' )
    filename      : '[name].bundle.js'
    libraryTarget : 'umd'

  # 元々読みこんでいるグローバル変数を読み込む
  externals:
    '$': 'jQuery'
    'jquery': 'jQuery'
    'velocity': 'velocity'

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: if NODE_ENV=='production' then WebpackStrip.loader( 'debug', 'debugger', 'console.log', 'console.info', 'console.warn', 'console.error', 'console.assert' )
      }
      { test: require.resolve("jquery"), loader: 'expose-loader?$!expose-loader?jQuery' },
    ]
  }

  plugins: [
    new webpack.NoEmitOnErrorsPlugin
    new webpack.IgnorePlugin(/vertx/)
    new webpack.optimize.OccurrenceOrderPlugin
    new webpack.optimize.AggressiveMergingPlugin
    new webpack.optimize.CommonsChunkPlugin({
      names    : [
        '2017/js/vendor'
      ]
    })
    new webpack.ProvidePlugin({
      jQuery          : 'jquery',
      $               : 'jquery',
      'window.jQuery' : 'jquery'
      Velocity        : 'velocity-animate'
    })
  ].concat(
    if process.argv.some (arg) ->
      /^(?:-p|--optimize-minimize)$/.test(arg)
    then [
      # compile時にuglifyでminimizeする。
      new webpack.optimize.UglifyJsPlugin(
        compress:
          pure_funcs: [
            'log'
          ]
        output:
          comments: require('uglify-save-license') # /*!から始まるコメントを残す
      )
    ]
    else [
      new webpack.DefinePlugin(
        log: ->
          if console?
            # for IE8 and IE9
            if typeof console.log is 'object'
              Function::apply.call(console.log, console, arguments)
            # for other browsers
            else
              console.log.apply(console, arguments)
          return
      )
    ]
  )
