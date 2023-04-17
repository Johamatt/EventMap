const { getDefaultConfig } = require("@expo/metro-config");
const blacklist = require("metro-config/src/defaults/exclusionList");

const config = getDefaultConfig(__dirname);

config.resolver.blacklistRE = blacklist([/#current-cloud-backend\/.*/]);

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = config;
