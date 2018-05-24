'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  STATS: '"dev"',
  ISJAP: 'true', //是否需要埋点
  ISMARK: 'true' //是否需要水印
})
