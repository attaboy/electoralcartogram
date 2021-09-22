// next.config.js
module.exports = {
  env: {
    buildTimestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  }
};
