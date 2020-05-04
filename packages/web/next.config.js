require('dotenv').config()

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')

module.exports = withCSS(
  withSass(
    withTM({
      transpileModules: ['react-flexbox-grid', 'react-syntax-highlighter'],
      webpack(config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })
        return config
      },
      target: 'serverless',
      env: {
        RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
        KUMAR_BACKEND_URL: process.env.KUMAR_BACKEND_URL,
      },
    })
  )
)
