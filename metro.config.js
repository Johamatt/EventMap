const blacklist = require("metro-config/src/defaults/exclusionList");
module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

// https://stackoverflow.com/questions/62134722/jest-haste-map-haste-module-naming-collision-aws-rn
