const path = require("path");
const fs = require("fs");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");

const version = core.getInput("version");

const binFolder = `/home/runner/bin/`;

async function setup(bin) {
  try {
    // Get version of tool to be installed

    let url = `https://github.com/calcit-lang/calcit/releases/download/${version}/${bin}`;
    let binPath = `${binFolder}${bin}`;

    const pathToCr = await tc.downloadTool(url, binPath);
    console.log(`downloaded to: ${pathToCr}`);

    fs.chmodSync(binPath, 0o755);
    core.addPath(binFolder);
    console.log(`add binary to path: ${binPath}`);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup;

if (require.main === module) {
  console.log(`Setting up Calcit ${version}`);
  setup("cr");
  setup("caps");
}
