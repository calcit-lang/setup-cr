const path = require("path");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");

let getCrDownloadUrl = (version) => {
  return `https://github.com/calcit-lang/calcit/releases/download/${version}/cr`;
};

let getCapsDownloadUrl = (version) => {
  return `https://github.com/calcit-lang/calcit/releases/download/${version}/caps`;
};

async function setup() {
  try {
    // Get version of tool to be installed
    const version = core.getInput("version");

    const pathToCr = await tc.downloadTool(getCrDownloadUrl(version));
    const pathToCaps = await tc.downloadTool(getCapsDownloadUrl(version));

    // Expose the tool by adding it to the PATH
    core.addPath(pathToCr);
    core.addPath(pathToCaps);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup;

if (require.main === module) {
  setup();
}
