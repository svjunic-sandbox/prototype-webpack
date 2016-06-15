path    = require('path')
webpack = require('webpack')

DIST_DIR = './dist/'

module.exports =
  entry:
    app    : './resource/main.js'
    vendor : [
        'jquery'
        'velocity'
      ]

  output:
    path     : DIST_DIR
    filename : 'app.js'

  # 元々読みこんでいるグローバル変数を読み込む
  externals:
    '$': 'jQuery'
    'jquery': 'jQuery'
    'velocity': 'velocity'

  #plugins: [
  #  new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  #]


# TODO: あとでいれたい
#
# module-loader
#   https://webpack.github.io/docs/configuration.html#module-loaders
#   http://webpack.github.io/docs/list-of-loaders.html
#
# require適当のパス書かなくていいように先に設定するやつ
#   https://webpack.github.io/docs/configuration.html#resolve-alias
