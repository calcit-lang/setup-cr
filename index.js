const path = require("path");
const fs = require("fs");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");

let getCrDownloadUrl = (version) => {
  return `https://github.com/calcit-lang/calcit/releases/download/${version}/cr`;
};

let getCapsDownloadUrl = (version) => {
  return `https://github.com/calcit-lang/calcit/releases/download/${version}/caps`;
};

const version = core.getInput("version");

async function setup() {
  try {
    // Get version of tool to be installed

    const pathToCr = await tc.downloadTool(
      getCrDownloadUrl(version),
      "/home/runner/bin/cr"
    );
    const pathToCaps = await tc.downloadTool(
      getCapsDownloadUrl(version),
      "/home/runner/bin/caps"
    );

    // TODO cache
    // https://github.com/actions/toolkit/tree/main/packages/tool-cache#cache

    // Expose the tool by adding it to the PATH
    fs.chmodSync(pathToCr, 0o755);
    core.addPath(path.dirname(pathToCr));

    console.log(`add to path: ${pathToCr}`);

    fs.chmodSync(pathToCaps, 0o755);
    core.addPath(path.dirname(pathToCaps));
    console.log(`add to path: ${pathToCaps}`);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup;

if (require.main === module) {
  console.log(`Setting up Calcit ${version}`);
  setup();
}
