path         = require('path')
webpack      = require('webpack')
WebpackStrip = require('strip-loader')

NODE_ENV = process.env.NODE_ENV

module.exports =
  entry:
    'vendor' : [
      'underscore',
      'velocity-animate'
      'jquery'
    ]
    'index' : path.join( __dirname, 'resources/main.js' )

  output:
    path          : path.join(__dirname, 'dist' )
    filename      : '[name].bundle.js'
    libraryTarget : 'umd'


  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: if NODE_ENV=='production' then WebpackStrip.loader( 'debug', 'debugger', 'console.log', 'console.info', 'console.warn', 'console.error', 'console.assert', 'window.console.log' )
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
        'vendor'
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
