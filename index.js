const path = require("path");
const fs = require("fs");
const core = require("@actions/core");
const tc = require("@actions/tool-cache");
const { to_js_data, parse_cirru_edn } = require("@calcit/procs");

let version = null;

const bundler = core.getInput("bundler") === "true";

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
  if (fs.existsSync("deps.cirru")) {
    console.log("Reading deps.cirru");
    const depsCirru = fs.readFileSync("deps.cirru", "utf8");
    const deps = to_js_data(parse_cirru_edn(depsCirru));
    // console.log("deps", deps);
    version = deps["calcit-version"];
  }

  const inputVersion = core.getInput("version");
  if (inputVersion) {
    version = inputVersion;
  }

  if (!version) {
    core.setFailed(
      "Version is not set, neither in deps.cirru (calcit-verison) nor in input(version)"
    );
    return;
  }

  console.log(`Setting up Calcit ${version}, with bundler: ${bundler}`);
  setup("cr");
  setup("caps");
  if (bundler) {
    setup("bundle_calcit");
  }
}
