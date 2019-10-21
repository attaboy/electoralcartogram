// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
  env: {
    buildTimestamp: new Date().toISOString()
  }
});
