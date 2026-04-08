// next.config.js
module.exports = {
  output: 'export',
  env: {
    buildTimestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  }
};
