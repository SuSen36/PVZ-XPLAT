// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != 'undefined';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && process.versions?.node && process.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {

}

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: C:\Users\Administrator\AppData\Local\Temp\tmpq2umepa2.js

  Module['expectedDataFileDownloads'] ??= 0;
  Module['expectedDataFileDownloads']++;
  (() => {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    var isPthread = typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD;
    var isWasmWorker = typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER;
    if (isPthread || isWasmWorker) return;
    var isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
    function loadPackage(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 're-plants-vs-zombies.data';
      var REMOTE_PACKAGE_BASE = 're-plants-vs-zombies.data';
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        if (isNode) {
          require('fs').readFile(packageName, (err, contents) => {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }
        Module['dataFileDownloads'] ??= {};
        fetch(packageName)
          .catch((cause) => Promise.reject(new Error(`Network Error: ${packageName}`, {cause}))) // If fetch fails, rewrite the error to include the failing URL & the cause.
          .then((response) => {
            if (!response.ok) {
              return Promise.reject(new Error(`${response.status}: ${response.url}`));
            }

            if (!response.body && response.arrayBuffer) { // If we're using the polyfill, readers won't be available...
              return response.arrayBuffer().then(callback);
            }

            const reader = response.body.getReader();
            const iterate = () => reader.read().then(handleChunk).catch((cause) => {
              return Promise.reject(new Error(`Unexpected error while handling : ${response.url} ${cause}`, {cause}));
            });

            const chunks = [];
            const headers = response.headers;
            const total = Number(headers.get('Content-Length') ?? packageSize);
            let loaded = 0;

            const handleChunk = ({done, value}) => {
              if (!done) {
                chunks.push(value);
                loaded += value.length;
                Module['dataFileDownloads'][packageName] = {loaded, total};

                let totalLoaded = 0;
                let totalSize = 0;

                for (const download of Object.values(Module['dataFileDownloads'])) {
                  totalLoaded += download.loaded;
                  totalSize += download.total;
                }

                Module['setStatus']?.(`Downloading data... (${totalLoaded}/${totalSize})`);
                return iterate();
              } else {
                const packageData = new Uint8Array(chunks.map((c) => c.length).reduce((a, b) => a + b, 0));
                let offset = 0;
                for (const chunk of chunks) {
                  packageData.set(chunk, offset);
                  offset += chunk.length;
                }
                callback(packageData.buffer);
              }
            };

            Module['setStatus']?.('Downloading data...');
            return iterate();
          });
      };

      function handleError(error) {
        console.error('package error:', error);
      };

      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, (data) => {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);

    function runWithFS(Module) {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "compiled", true, true);
Module['FS_createPath']("/compiled", "particles", true, true);
Module['FS_createPath']("/compiled", "reanim", true, true);
Module['FS_createPath']("/", "data", true, true);
Module['FS_createPath']("/data", "1", true, true);
Module['FS_createPath']("/", "images", true, true);
Module['FS_createPath']("/images", "_UNUSED", true, true);
Module['FS_createPath']("/images", "ad", true, true);
Module['FS_createPath']("/images", "reloaded", true, true);
Module['FS_createPath']("/images/reloaded", "9-slice", true, true);
Module['FS_createPath']("/images/reloaded", "acheese", true, true);
Module['FS_createPath']("/images/reloaded", "mainmenu", true, true);
Module['FS_createPath']("/images/reloaded", "quickplay", true, true);
Module['FS_createPath']("/images/reloaded/quickplay", "src", true, true);
Module['FS_createPath']("/images/reloaded", "zombatar", true, true);
Module['FS_createPath']("/", "particles", true, true);
Module['FS_createPath']("/", "properties", true, true);
Module['FS_createPath']("/", "reanim", true, true);
Module['FS_createPath']("/", "savedata", true, true);
Module['FS_createPath']("/savedata", "userdata", true, true);
Module['FS_createPath']("/", "sounds", true, true);
Module['FS_createPath']("/", "static", true, true);
Module['FS_createPath']("/static", "CMakeFiles", true, true);
Module['FS_createPath']("/static/CMakeFiles", "4.0.2", true, true);
Module['FS_createPath']("/static/CMakeFiles", "Export", true, true);
Module['FS_createPath']("/static/CMakeFiles/Export", "f084604df1a27ef5b4fef7c7544737d1", true, true);
Module['FS_createPath']("/static/CMakeFiles", "re-plants-vs-zombies.dir", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir", "src", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src", "Lawn", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn", "System", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn", "Widget", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src", "Sexy.TodLib", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src", "SexyAppFramework", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "glad", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "graphics", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "imagelib", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib", "jpeg", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib", "png", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib", "zlib", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "misc", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "paklib", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "platform", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/platform", "linux", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/platform/linux", "graphics", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "sound", true, true);
Module['FS_createPath']("/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework", "widget", true, true);
Module['FS_createPath']("/static", "Libs", true, true);
Module['FS_createPath']("/static/Libs", "SDL-Mixer-X", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X", "CMakeFiles", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X/CMakeFiles", "Export", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X/CMakeFiles/Export", "2dc727f3fe5f4dacfc15c5c57697918b", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X/CMakeFiles", "SDL2_mixer_ext_Static.dir", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir", "src", true, true);
Module['FS_createPath']("/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src", "codecs", true, true);
Module['FS_createPath']("/static/Libs", "SDL", true, true);
Module['FS_createPath']("/static/Libs/SDL", "CMakeFiles", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles", "SDL2-static.dir", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir", "src", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "atomic", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "audio", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio", "disk", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "cpuinfo", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "dynapi", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "events", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "file", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "filesystem", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/filesystem", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "haptic", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/haptic", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "hidapi", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "joystick", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick", "virtual", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "libm", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "loadso", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/loadso", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "locale", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/locale", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "misc", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/misc", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "power", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/power", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "render", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "direct3d", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "direct3d11", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "direct3d12", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "opengl", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "opengles", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "opengles2", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "ps2", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "psp", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "software", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render", "vitagxm", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "sensor", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/sensor", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "stdlib", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "thread", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread", "generic", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "timer", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/timer", "unix", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src", "video", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video", "emscripten", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video", "offscreen", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video", "yuv2rgb", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles", "SDL2_test.dir", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2_test.dir", "src", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src", "test", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles", "SDL2main.dir", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2main.dir", "src", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2main.dir/src", "main", true, true);
Module['FS_createPath']("/static/Libs/SDL/CMakeFiles/SDL2main.dir/src/main", "dummy", true, true);
Module['FS_createPath']("/static/Libs/SDL", "include-config-", true, true);
Module['FS_createPath']("/static/Libs/SDL/include-config-", "SDL2", true, true);
Module['FS_createPath']("/static/Libs/SDL", "include", true, true);
Module['FS_createPath']("/static/Libs/SDL/include", "SDL2", true, true);
Module['FS_createPath']("/static", "lib", true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency'](`fp ${this.name}`);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
          // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true);
          Module['removeRunDependency'](`fp ${that.name}`);
          this.requests[this.name] = null;
        }
      };

      var files = metadata['files'];
      for (var i = 0; i < files.length; ++i) {
        new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio'] || 0).open('GET', files[i]['filename']);
      }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }          Module['removeRunDependency']('datafile_re-plants-vs-zombies.data');

      };
      Module['addRunDependency']('datafile_re-plants-vs-zombies.data');

      Module['preloadResults'] ??= {};

      Module['preloadResults'][PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }

    }
    if (Module['calledRun']) {
      runWithFS(Module);
    } else {
      (Module['preRun'] ??= []).push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/application.properties", "start": 0, "end": 29}, {"filename": "/compiled/particles/Award.xml.compiled", "start": 29, "end": 1099}, {"filename": "/compiled/particles/AwardPickupArrow.xml.compiled", "start": 1099, "end": 1397}, {"filename": "/compiled/particles/BlastMark.xml.compiled", "start": 1397, "end": 1533}, {"filename": "/compiled/particles/BossExplosion.xml.compiled", "start": 1533, "end": 2207}, {"filename": "/compiled/particles/BossIceBallTrail.xml.compiled", "start": 2207, "end": 2537}, {"filename": "/compiled/particles/ButterSplat.xml.compiled", "start": 2537, "end": 2802}, {"filename": "/compiled/particles/CabbageSplat.xml.compiled", "start": 2802, "end": 3176}, {"filename": "/compiled/particles/CatapultExplosion.xml.compiled", "start": 3176, "end": 4171}, {"filename": "/compiled/particles/CoinPickupArrow.xml.compiled", "start": 4171, "end": 4378}, {"filename": "/compiled/particles/Credits_RaysWipe.xml.compiled", "start": 4378, "end": 5316}, {"filename": "/compiled/particles/Credits_Strobe.xml.compiled", "start": 5316, "end": 5494}, {"filename": "/compiled/particles/Credits_ZombieHeadWipe.xml.compiled", "start": 5494, "end": 5889}, {"filename": "/compiled/particles/Credits_fog.xml.compiled", "start": 5889, "end": 6166}, {"filename": "/compiled/particles/Daisy.xml.compiled", "start": 6166, "end": 6415}, {"filename": "/compiled/particles/DancerRise.xml.compiled", "start": 6415, "end": 6937}, {"filename": "/compiled/particles/DiggerRise.xml.compiled", "start": 6937, "end": 7236}, {"filename": "/compiled/particles/DiggerTunnel.xml.compiled", "start": 7236, "end": 7752}, {"filename": "/compiled/particles/Doom.xml.compiled", "start": 7752, "end": 9217}, {"filename": "/compiled/particles/Dust_Foot.xml.compiled", "start": 9217, "end": 9498}, {"filename": "/compiled/particles/Dust_Squash.xml.compiled", "start": 9498, "end": 9846}, {"filename": "/compiled/particles/FireballDeath.xml.compiled", "start": 9846, "end": 10147}, {"filename": "/compiled/particles/Fireball_Trail.xml.compiled", "start": 10147, "end": 10568}, {"filename": "/compiled/particles/FumeCloud.xml.compiled", "start": 10568, "end": 10861}, {"filename": "/compiled/particles/GloomCloud.xml.compiled", "start": 10861, "end": 11744}, {"filename": "/compiled/particles/GraveBuster.xml.compiled", "start": 11744, "end": 12046}, {"filename": "/compiled/particles/GraveBusterDie.xml.compiled", "start": 12046, "end": 12333}, {"filename": "/compiled/particles/GraveStoneRise.xml.compiled", "start": 12333, "end": 12672}, {"filename": "/compiled/particles/IceSparkle.xml.compiled", "start": 12672, "end": 12861}, {"filename": "/compiled/particles/IceTrail.trail.compiled", "start": 12861, "end": 12962}, {"filename": "/compiled/particles/IceTrap.xml.compiled", "start": 12962, "end": 13353}, {"filename": "/compiled/particles/IceTrapRelease.xml.compiled", "start": 13353, "end": 13618}, {"filename": "/compiled/particles/IceTrapZombie.xml.compiled", "start": 13618, "end": 13874}, {"filename": "/compiled/particles/IceballDeath.xml.compiled", "start": 13874, "end": 14143}, {"filename": "/compiled/particles/Iceball_Trail.xml.compiled", "start": 14143, "end": 14354}, {"filename": "/compiled/particles/ImitaterMorph.xml.compiled", "start": 14354, "end": 14755}, {"filename": "/compiled/particles/JackExplode.xml.compiled", "start": 14755, "end": 15472}, {"filename": "/compiled/particles/LanternShine.xml.compiled", "start": 15472, "end": 15690}, {"filename": "/compiled/particles/MelonImpact.xml.compiled", "start": 15690, "end": 15980}, {"filename": "/compiled/particles/MindControl.xml.compiled", "start": 15980, "end": 16240}, {"filename": "/compiled/particles/MowerCloud.xml.compiled", "start": 16240, "end": 16701}, {"filename": "/compiled/particles/MoweredZombieArm.xml.compiled", "start": 16701, "end": 16977}, {"filename": "/compiled/particles/MoweredZombieHead.xml.compiled", "start": 16977, "end": 17233}, {"filename": "/compiled/particles/PeaSplat.xml.compiled", "start": 17233, "end": 17603}, {"filename": "/compiled/particles/Pinata.xml.compiled", "start": 17603, "end": 17896}, {"filename": "/compiled/particles/Planting.xml.compiled", "start": 17896, "end": 18160}, {"filename": "/compiled/particles/PlantingPool.xml.compiled", "start": 18160, "end": 18433}, {"filename": "/compiled/particles/PoolSparkly.xml.compiled", "start": 18433, "end": 18761}, {"filename": "/compiled/particles/PoolSplash.xml.compiled", "start": 18761, "end": 19029}, {"filename": "/compiled/particles/PopcornSplash.xml.compiled", "start": 19029, "end": 19270}, {"filename": "/compiled/particles/PortalCircle.xml.compiled", "start": 19270, "end": 19540}, {"filename": "/compiled/particles/PortalSquare.xml.compiled", "start": 19540, "end": 19799}, {"filename": "/compiled/particles/PotatoMine.xml.compiled", "start": 19799, "end": 20572}, {"filename": "/compiled/particles/PotatoMineRise.xml.compiled", "start": 20572, "end": 20910}, {"filename": "/compiled/particles/PottedPlantGlow.xml.compiled", "start": 20910, "end": 21300}, {"filename": "/compiled/particles/PottedWaterPlantGlow.xml.compiled", "start": 21300, "end": 21698}, {"filename": "/compiled/particles/PottedZenGlow.xml.compiled", "start": 21698, "end": 21967}, {"filename": "/compiled/particles/Pow.xml.compiled", "start": 21967, "end": 22162}, {"filename": "/compiled/particles/Powie.xml.compiled", "start": 22162, "end": 22660}, {"filename": "/compiled/particles/PresentPickup.xml.compiled", "start": 22660, "end": 23159}, {"filename": "/compiled/particles/PuffShroomMuzzle.xml.compiled", "start": 23159, "end": 23439}, {"filename": "/compiled/particles/PuffShroomTrail.xml.compiled", "start": 23439, "end": 23757}, {"filename": "/compiled/particles/PuffSplat.xml.compiled", "start": 23757, "end": 24019}, {"filename": "/compiled/particles/ScreenFlash.xml.compiled", "start": 24019, "end": 24217}, {"filename": "/compiled/particles/SeedPacket.xml.compiled", "start": 24217, "end": 24514}, {"filename": "/compiled/particles/SeedPacketFlash.xml.compiled", "start": 24514, "end": 24678}, {"filename": "/compiled/particles/SeedPacketPick.xml.compiled", "start": 24678, "end": 24921}, {"filename": "/compiled/particles/SnowPeaPuff.xml.compiled", "start": 24921, "end": 25348}, {"filename": "/compiled/particles/SnowPeaSplat.xml.compiled", "start": 25348, "end": 25731}, {"filename": "/compiled/particles/SnowPeaTrail.xml.compiled", "start": 25731, "end": 26047}, {"filename": "/compiled/particles/SodRoll.xml.compiled", "start": 26047, "end": 26361}, {"filename": "/compiled/particles/StarSplat.xml.compiled", "start": 26361, "end": 26735}, {"filename": "/compiled/particles/Starburst.xml.compiled", "start": 26735, "end": 27231}, {"filename": "/compiled/particles/TallNutBlock.xml.compiled", "start": 27231, "end": 27507}, {"filename": "/compiled/particles/TrophySparkle.xml.compiled", "start": 27507, "end": 27804}, {"filename": "/compiled/particles/UmbrellaReflect.xml.compiled", "start": 27804, "end": 28028}, {"filename": "/compiled/particles/UpsellArrow.xml.compiled", "start": 28028, "end": 28272}, {"filename": "/compiled/particles/VaseShatter.xml.compiled", "start": 28272, "end": 28551}, {"filename": "/compiled/particles/VaseShatterLeaf.xml.compiled", "start": 28551, "end": 28832}, {"filename": "/compiled/particles/VaseShatterZombie.xml.compiled", "start": 28832, "end": 29114}, {"filename": "/compiled/particles/WallnutEatLarge.xml.compiled", "start": 29114, "end": 29423}, {"filename": "/compiled/particles/WallnutEatSmall.xml.compiled", "start": 29423, "end": 29717}, {"filename": "/compiled/particles/WhackAZombieRise.xml.compiled", "start": 29717, "end": 30237}, {"filename": "/compiled/particles/WinterMelonImpact.xml.compiled", "start": 30237, "end": 30532}, {"filename": "/compiled/particles/ZamboniExplosion.xml.compiled", "start": 30532, "end": 31491}, {"filename": "/compiled/particles/ZamboniExplosion2.xml.compiled", "start": 31491, "end": 32523}, {"filename": "/compiled/particles/ZamboniSmoke.xml.compiled", "start": 32523, "end": 32874}, {"filename": "/compiled/particles/ZamboniTire.xml.compiled", "start": 32874, "end": 33290}, {"filename": "/compiled/particles/ZombieArm.xml.compiled", "start": 33290, "end": 33535}, {"filename": "/compiled/particles/ZombieBalloonHead.xml.compiled", "start": 33535, "end": 34065}, {"filename": "/compiled/particles/ZombieDoor.xml.compiled", "start": 34065, "end": 34330}, {"filename": "/compiled/particles/ZombieFlag.xml.compiled", "start": 34330, "end": 34617}, {"filename": "/compiled/particles/ZombieFutureGlasses.xml.compiled", "start": 34617, "end": 34912}, {"filename": "/compiled/particles/ZombieHead.xml.compiled", "start": 34912, "end": 35190}, {"filename": "/compiled/particles/ZombieHeadLight.xml.compiled", "start": 35190, "end": 35464}, {"filename": "/compiled/particles/ZombieHeadPool.xml.compiled", "start": 35464, "end": 35700}, {"filename": "/compiled/particles/ZombieHelmet.xml.compiled", "start": 35700, "end": 35967}, {"filename": "/compiled/particles/ZombieLadder.xml.compiled", "start": 35967, "end": 36235}, {"filename": "/compiled/particles/ZombieMustache.xml.compiled", "start": 36235, "end": 36527}, {"filename": "/compiled/particles/ZombieNewspaper.xml.compiled", "start": 36527, "end": 36793}, {"filename": "/compiled/particles/ZombieNewspaperHead.xml.compiled", "start": 36793, "end": 37211}, {"filename": "/compiled/particles/ZombiePail.xml.compiled", "start": 37211, "end": 37471}, {"filename": "/compiled/particles/ZombiePogo.xml.compiled", "start": 37471, "end": 37739}, {"filename": "/compiled/particles/ZombiePogoHead.xml.compiled", "start": 37739, "end": 38158}, {"filename": "/compiled/particles/ZombieRise.xml.compiled", "start": 38158, "end": 38904}, {"filename": "/compiled/particles/ZombieTrafficCone.xml.compiled", "start": 38904, "end": 39161}, {"filename": "/compiled/particles/Zombie_boss_fireball.xml.compiled", "start": 39161, "end": 39552}, {"filename": "/compiled/particles/Zombie_seaweed.xml.compiled", "start": 39552, "end": 39728}, {"filename": "/compiled/reanim/Blover.reanim.compiled", "start": 39728, "end": 44172}, {"filename": "/compiled/reanim/Cabbagepult.reanim.compiled", "start": 44172, "end": 55644}, {"filename": "/compiled/reanim/Cactus.reanim.compiled", "start": 55644, "end": 66883}, {"filename": "/compiled/reanim/Caltrop.reanim.compiled", "start": 66883, "end": 68991}, {"filename": "/compiled/reanim/Cattail.reanim.compiled", "start": 68991, "end": 73180}, {"filename": "/compiled/reanim/CherryBomb.reanim.compiled", "start": 73180, "end": 78527}, {"filename": "/compiled/reanim/Chomper.reanim.compiled", "start": 78527, "end": 101514}, {"filename": "/compiled/reanim/CobCannon.reanim.compiled", "start": 101514, "end": 109098}, {"filename": "/compiled/reanim/Coffeebean.reanim.compiled", "start": 109098, "end": 109871}, {"filename": "/compiled/reanim/Coin_gold.reanim.compiled", "start": 109871, "end": 110998}, {"filename": "/compiled/reanim/Coin_silver.reanim.compiled", "start": 110998, "end": 111997}, {"filename": "/compiled/reanim/Cornpult.reanim.compiled", "start": 111997, "end": 123412}, {"filename": "/compiled/reanim/CrazyDave.reanim.compiled", "start": 123412, "end": 163548}, {"filename": "/compiled/reanim/Credits_Anyhour.reanim.compiled", "start": 163548, "end": 166864}, {"filename": "/compiled/reanim/Credits_BigBrain.reanim.compiled", "start": 166864, "end": 167171}, {"filename": "/compiled/reanim/Credits_Bossdance.reanim.compiled", "start": 167171, "end": 169730}, {"filename": "/compiled/reanim/Credits_CrazyDave.reanim.compiled", "start": 169730, "end": 175804}, {"filename": "/compiled/reanim/Credits_DiscoLights.reanim.compiled", "start": 175804, "end": 176265}, {"filename": "/compiled/reanim/Credits_Flower_petals.reanim.compiled", "start": 176265, "end": 176732}, {"filename": "/compiled/reanim/Credits_Football.reanim.compiled", "start": 176732, "end": 177585}, {"filename": "/compiled/reanim/Credits_Infantry.reanim.compiled", "start": 177585, "end": 178218}, {"filename": "/compiled/reanim/Credits_Jackbox.reanim.compiled", "start": 178218, "end": 178682}, {"filename": "/compiled/reanim/Credits_Main.reanim.compiled", "start": 178682, "end": 184672}, {"filename": "/compiled/reanim/Credits_Main2.reanim.compiled", "start": 184672, "end": 191183}, {"filename": "/compiled/reanim/Credits_Main3.reanim.compiled", "start": 191183, "end": 215469}, {"filename": "/compiled/reanim/Credits_SolarPower.reanim.compiled", "start": 215469, "end": 218183}, {"filename": "/compiled/reanim/Credits_Throat.reanim.compiled", "start": 218183, "end": 220102}, {"filename": "/compiled/reanim/Credits_Tombstones.reanim.compiled", "start": 220102, "end": 220469}, {"filename": "/compiled/reanim/Credits_WeAreTheUndead.reanim.compiled", "start": 220469, "end": 222133}, {"filename": "/compiled/reanim/Credits_ZombieArmy1.reanim.compiled", "start": 222133, "end": 223334}, {"filename": "/compiled/reanim/Credits_ZombieArmy2.reanim.compiled", "start": 223334, "end": 224273}, {"filename": "/compiled/reanim/Credits_stage.reanim.compiled", "start": 224273, "end": 225090}, {"filename": "/compiled/reanim/Diamond.reanim.compiled", "start": 225090, "end": 225583}, {"filename": "/compiled/reanim/Digger_rising_dirt.reanim.compiled", "start": 225583, "end": 225791}, {"filename": "/compiled/reanim/DoomShroom.reanim.compiled", "start": 225791, "end": 228105}, {"filename": "/compiled/reanim/FinalWave.reanim.compiled", "start": 228105, "end": 228416}, {"filename": "/compiled/reanim/FirePea.reanim.compiled", "start": 228416, "end": 229693}, {"filename": "/compiled/reanim/Fumeshroom.reanim.compiled", "start": 229693, "end": 232440}, {"filename": "/compiled/reanim/Garlic.reanim.compiled", "start": 232440, "end": 233810}, {"filename": "/compiled/reanim/GatlingPea.reanim.compiled", "start": 233810, "end": 242000}, {"filename": "/compiled/reanim/GloomShroom.reanim.compiled", "start": 242000, "end": 248010}, {"filename": "/compiled/reanim/GoldMagnet.reanim.compiled", "start": 248010, "end": 256465}, {"filename": "/compiled/reanim/Gravebuster.reanim.compiled", "start": 256465, "end": 261145}, {"filename": "/compiled/reanim/Hammer.reanim.compiled", "start": 261145, "end": 261934}, {"filename": "/compiled/reanim/Hypnoshroom.reanim.compiled", "start": 261934, "end": 264417}, {"filename": "/compiled/reanim/Iceshroom.reanim.compiled", "start": 264417, "end": 265329}, {"filename": "/compiled/reanim/Imitater.reanim.compiled", "start": 265329, "end": 270164}, {"filename": "/compiled/reanim/Jalapeno.reanim.compiled", "start": 270164, "end": 272905}, {"filename": "/compiled/reanim/LawnMower.reanim.compiled", "start": 272905, "end": 276324}, {"filename": "/compiled/reanim/LawnMoweredZombie.reanim.compiled", "start": 276324, "end": 276545}, {"filename": "/compiled/reanim/Lilypad.reanim.compiled", "start": 276545, "end": 276763}, {"filename": "/compiled/reanim/LoadBar_Zombiehead.reanim.compiled", "start": 276763, "end": 278979}, {"filename": "/compiled/reanim/LoadBar_sprout.reanim.compiled", "start": 278979, "end": 280233}, {"filename": "/compiled/reanim/Magnetshroom.reanim.compiled", "start": 280233, "end": 289083}, {"filename": "/compiled/reanim/Marigold.reanim.compiled", "start": 289083, "end": 293244}, {"filename": "/compiled/reanim/Melonpult.reanim.compiled", "start": 293244, "end": 301087}, {"filename": "/compiled/reanim/PeaShooter.reanim.compiled", "start": 301087, "end": 310992}, {"filename": "/compiled/reanim/PeaShooterSingle.reanim.compiled", "start": 310992, "end": 317475}, {"filename": "/compiled/reanim/Plantern.reanim.compiled", "start": 317475, "end": 321069}, {"filename": "/compiled/reanim/PoolCleaner.reanim.compiled", "start": 321069, "end": 325309}, {"filename": "/compiled/reanim/Portal_Circle.reanim.compiled", "start": 325309, "end": 326458}, {"filename": "/compiled/reanim/Portal_Square.reanim.compiled", "start": 326458, "end": 327789}, {"filename": "/compiled/reanim/Pot.reanim.compiled", "start": 327789, "end": 329282}, {"filename": "/compiled/reanim/PotatoMine.reanim.compiled", "start": 329282, "end": 332529}, {"filename": "/compiled/reanim/Puff.reanim.compiled", "start": 332529, "end": 332842}, {"filename": "/compiled/reanim/Puffshroom.reanim.compiled", "start": 332842, "end": 334844}, {"filename": "/compiled/reanim/Pumpkin.reanim.compiled", "start": 334844, "end": 335360}, {"filename": "/compiled/reanim/Rain_circle.reanim.compiled", "start": 335360, "end": 335997}, {"filename": "/compiled/reanim/Rain_splash.reanim.compiled", "start": 335997, "end": 336231}, {"filename": "/compiled/reanim/Rake.reanim.compiled", "start": 336231, "end": 336594}, {"filename": "/compiled/reanim/RoofCleaner.reanim.compiled", "start": 336594, "end": 337473}, {"filename": "/compiled/reanim/ScaredyShroom.reanim.compiled", "start": 337473, "end": 344767}, {"filename": "/compiled/reanim/SeaShroom.reanim.compiled", "start": 344767, "end": 348894}, {"filename": "/compiled/reanim/SelectorScreen.reanim.compiled", "start": 348894, "end": 372495}, {"filename": "/compiled/reanim/SlotMachine.reanim.compiled", "start": 372495, "end": 372963}, {"filename": "/compiled/reanim/SnowPea.reanim.compiled", "start": 372963, "end": 380807}, {"filename": "/compiled/reanim/SodRoll.reanim.compiled", "start": 380807, "end": 382322}, {"filename": "/compiled/reanim/SpikeRock.reanim.compiled", "start": 382322, "end": 386854}, {"filename": "/compiled/reanim/SplitPea.reanim.compiled", "start": 386854, "end": 393787}, {"filename": "/compiled/reanim/Squash.reanim.compiled", "start": 393787, "end": 396776}, {"filename": "/compiled/reanim/Starfruit.reanim.compiled", "start": 396776, "end": 399317}, {"filename": "/compiled/reanim/StartReadySetPlant.reanim.compiled", "start": 399317, "end": 399707}, {"filename": "/compiled/reanim/Stinky.reanim.compiled", "start": 399707, "end": 403142}, {"filename": "/compiled/reanim/Sun.reanim.compiled", "start": 403142, "end": 403809}, {"filename": "/compiled/reanim/SunFlower.reanim.compiled", "start": 403809, "end": 412542}, {"filename": "/compiled/reanim/SunShroom.reanim.compiled", "start": 412542, "end": 414449}, {"filename": "/compiled/reanim/Tallnut.reanim.compiled", "start": 414449, "end": 414981}, {"filename": "/compiled/reanim/Tanglekelp.reanim.compiled", "start": 414981, "end": 418899}, {"filename": "/compiled/reanim/TextFadeOn.reanim.compiled", "start": 418899, "end": 419378}, {"filename": "/compiled/reanim/ThreePeater.reanim.compiled", "start": 419378, "end": 430837}, {"filename": "/compiled/reanim/Torchwood.reanim.compiled", "start": 430837, "end": 432420}, {"filename": "/compiled/reanim/TreeFood.reanim.compiled", "start": 432420, "end": 432953}, {"filename": "/compiled/reanim/TreeOfWisdom.reanim.compiled", "start": 432953, "end": 452975}, {"filename": "/compiled/reanim/TreeOfWisdomClouds.reanim.compiled", "start": 452975, "end": 461548}, {"filename": "/compiled/reanim/TwinSunFlower.reanim.compiled", "start": 461548, "end": 466937}, {"filename": "/compiled/reanim/Umbrellaleaf.reanim.compiled", "start": 466937, "end": 470135}, {"filename": "/compiled/reanim/Wallnut.reanim.compiled", "start": 470135, "end": 471125}, {"filename": "/compiled/reanim/WinterMelon.reanim.compiled", "start": 471125, "end": 479371}, {"filename": "/compiled/reanim/Z.reanim.compiled", "start": 479371, "end": 479827}, {"filename": "/compiled/reanim/ZenGarden_bugspray.reanim.compiled", "start": 479827, "end": 480520}, {"filename": "/compiled/reanim/ZenGarden_fertilizer.reanim.compiled", "start": 480520, "end": 481047}, {"filename": "/compiled/reanim/ZenGarden_phonograph.reanim.compiled", "start": 481047, "end": 482110}, {"filename": "/compiled/reanim/ZenGarden_sprout.reanim.compiled", "start": 482110, "end": 485533}, {"filename": "/compiled/reanim/ZenGarden_wateringcan.reanim.compiled", "start": 485533, "end": 486499}, {"filename": "/compiled/reanim/Zombie.reanim.compiled", "start": 486499, "end": 583111}, {"filename": "/compiled/reanim/Zombie_Boss_driver.reanim.compiled", "start": 583111, "end": 600700}, {"filename": "/compiled/reanim/Zombie_Credits_Conehead.reanim.compiled", "start": 600700, "end": 605907}, {"filename": "/compiled/reanim/Zombie_Credits_Screendoor.reanim.compiled", "start": 605907, "end": 610753}, {"filename": "/compiled/reanim/Zombie_FlagPole.reanim.compiled", "start": 610753, "end": 611165}, {"filename": "/compiled/reanim/Zombie_backup.reanim.compiled", "start": 611165, "end": 624275}, {"filename": "/compiled/reanim/Zombie_balloon.reanim.compiled", "start": 624275, "end": 652740}, {"filename": "/compiled/reanim/Zombie_bobsled.reanim.compiled", "start": 652740, "end": 683195}, {"filename": "/compiled/reanim/Zombie_boss.reanim.compiled", "start": 683195, "end": 801762}, {"filename": "/compiled/reanim/Zombie_boss_fireball.reanim.compiled", "start": 801762, "end": 804820}, {"filename": "/compiled/reanim/Zombie_boss_iceball.reanim.compiled", "start": 804820, "end": 810649}, {"filename": "/compiled/reanim/Zombie_bungi.reanim.compiled", "start": 810649, "end": 820790}, {"filename": "/compiled/reanim/Zombie_catapult.reanim.compiled", "start": 820790, "end": 837279}, {"filename": "/compiled/reanim/Zombie_charred.reanim.compiled", "start": 837279, "end": 839154}, {"filename": "/compiled/reanim/Zombie_charred_catapult.reanim.compiled", "start": 839154, "end": 840718}, {"filename": "/compiled/reanim/Zombie_charred_digger.reanim.compiled", "start": 840718, "end": 842524}, {"filename": "/compiled/reanim/Zombie_charred_gargantuar.reanim.compiled", "start": 842524, "end": 844095}, {"filename": "/compiled/reanim/Zombie_charred_imp.reanim.compiled", "start": 844095, "end": 845392}, {"filename": "/compiled/reanim/Zombie_charred_zamboni.reanim.compiled", "start": 845392, "end": 847116}, {"filename": "/compiled/reanim/Zombie_credits_dance.reanim.compiled", "start": 847116, "end": 933505}, {"filename": "/compiled/reanim/Zombie_digger.reanim.compiled", "start": 933505, "end": 963875}, {"filename": "/compiled/reanim/Zombie_disco.reanim.compiled", "start": 963875, "end": 989383}, {"filename": "/compiled/reanim/Zombie_dolphinrider.reanim.compiled", "start": 989383, "end": 1034123}, {"filename": "/compiled/reanim/Zombie_football.reanim.compiled", "start": 1034123, "end": 1052543}, {"filename": "/compiled/reanim/Zombie_gargantuar.reanim.compiled", "start": 1052543, "end": 1110234}, {"filename": "/compiled/reanim/Zombie_hand.reanim.compiled", "start": 1110234, "end": 1116195}, {"filename": "/compiled/reanim/Zombie_imp.reanim.compiled", "start": 1116195, "end": 1133281}, {"filename": "/compiled/reanim/Zombie_jackbox.reanim.compiled", "start": 1133281, "end": 1148538}, {"filename": "/compiled/reanim/Zombie_ladder.reanim.compiled", "start": 1148538, "end": 1182843}, {"filename": "/compiled/reanim/Zombie_paper.reanim.compiled", "start": 1182843, "end": 1213438}, {"filename": "/compiled/reanim/Zombie_pogo.reanim.compiled", "start": 1213438, "end": 1242542}, {"filename": "/compiled/reanim/Zombie_polevaulter.reanim.compiled", "start": 1242542, "end": 1281796}, {"filename": "/compiled/reanim/Zombie_snorkle.reanim.compiled", "start": 1281796, "end": 1316984}, {"filename": "/compiled/reanim/Zombie_surprise.reanim.compiled", "start": 1316984, "end": 1317234}, {"filename": "/compiled/reanim/Zombie_yeti.reanim.compiled", "start": 1317234, "end": 1332766}, {"filename": "/compiled/reanim/Zombie_zamboni.reanim.compiled", "start": 1332766, "end": 1344218}, {"filename": "/compiled/reanim/ZombiesWon.reanim.compiled", "start": 1344218, "end": 1344721}, {"filename": "/compiled/reanim/fire.reanim.compiled", "start": 1344721, "end": 1345111}, {"filename": "/compiled/reanim/splash.reanim.compiled", "start": 1345111, "end": 1346744}, {"filename": "/compiled/reanim/zombatar_zombie_head.reanim.compiled", "start": 1346744, "end": 1351305}, {"filename": "/data/1/BrianneTod12.txt", "start": 1351305, "end": 1359549}, {"filename": "/data/1/BrianneTod16.txt", "start": 1359549, "end": 1367793}, {"filename": "/data/1/BrianneTod32.txt", "start": 1367793, "end": 1376037}, {"filename": "/data/1/_BrianneTod12.png", "start": 1376037, "end": 1394651}, {"filename": "/data/1/_BrianneTod16.png", "start": 1394651, "end": 1419819}, {"filename": "/data/1/_BrianneTod32.png", "start": 1419819, "end": 1478729}, {"filename": "/data/BrianneTod12.txt", "start": 1478729, "end": 1485821}, {"filename": "/data/BrianneTod16.txt", "start": 1485821, "end": 1492913}, {"filename": "/data/BrianneTod32.txt", "start": 1492913, "end": 1500506}, {"filename": "/data/BrianneTod32Black.txt", "start": 1500506, "end": 1507599}, {"filename": "/data/ContinuumBold14.txt", "start": 1507599, "end": 1511833}, {"filename": "/data/ContinuumBold14outback.txt", "start": 1511833, "end": 1516074}, {"filename": "/data/DwarvenTodcraft12.png", "start": 1516074, "end": 1535408}, {"filename": "/data/DwarvenTodcraft12.txt", "start": 1535408, "end": 1542952}, {"filename": "/data/DwarvenTodcraft15.png", "start": 1542952, "end": 1558854}, {"filename": "/data/DwarvenTodcraft15.txt", "start": 1558854, "end": 1566418}, {"filename": "/data/DwarvenTodcraft18.png", "start": 1566418, "end": 1600719}, {"filename": "/data/DwarvenTodcraft18.txt", "start": 1600719, "end": 1608304}, {"filename": "/data/DwarvenTodcraft18BrightGreenInset.png", "start": 1608304, "end": 1660407}, {"filename": "/data/DwarvenTodcraft18BrightGreenInset.txt", "start": 1660407, "end": 1668008}, {"filename": "/data/DwarvenTodcraft18GreenInset.png", "start": 1668008, "end": 1719300}, {"filename": "/data/DwarvenTodcraft18GreenInset.txt", "start": 1719300, "end": 1726895}, {"filename": "/data/DwarvenTodcraft18Yellow.png", "start": 1726895, "end": 1740156}, {"filename": "/data/DwarvenTodcraft18Yellow.txt", "start": 1740156, "end": 1747747}, {"filename": "/data/DwarvenTodcraft24.png", "start": 1747747, "end": 1773193}, {"filename": "/data/DwarvenTodcraft24.txt", "start": 1773193, "end": 1780788}, {"filename": "/data/DwarvenTodcraft36BrightGreenInset.png", "start": 1780788, "end": 1916012}, {"filename": "/data/DwarvenTodcraft36BrightGreenInset.txt", "start": 1916012, "end": 1923634}, {"filename": "/data/DwarvenTodcraft36GreenInset.png", "start": 1923634, "end": 2054695}, {"filename": "/data/DwarvenTodcraft36GreenInset.txt", "start": 2054695, "end": 2062311}, {"filename": "/data/HouseofTerror16.txt", "start": 2062311, "end": 2069874}, {"filename": "/data/HouseofTerror16Outline.png", "start": 2069874, "end": 2078048}, {"filename": "/data/HouseofTerror20.txt", "start": 2078048, "end": 2085607}, {"filename": "/data/HouseofTerror20Outline.png", "start": 2085607, "end": 2098266}, {"filename": "/data/HouseofTerror28.png", "start": 2098266, "end": 2124202}, {"filename": "/data/HouseofTerror28.txt", "start": 2124202, "end": 2131298}, {"filename": "/data/Pico129.txt", "start": 2131298, "end": 2138383}, {"filename": "/data/Pix118Bold.txt", "start": 2138383, "end": 2145470}, {"filename": "/data/_BrianneTod12.png", "start": 2145470, "end": 2153252}, {"filename": "/data/_BrianneTod16.png", "start": 2153252, "end": 2164342}, {"filename": "/data/_BrianneTod32.png", "start": 2164342, "end": 2194133}, {"filename": "/data/_BrianneTod32Outline.png", "start": 2194133, "end": 2220304}, {"filename": "/data/_ContinuumBold14.gif", "start": 2220304, "end": 2226189}, {"filename": "/data/_ContinuumBold14outback.gif", "start": 2226189, "end": 2232118}, {"filename": "/data/_HouseofTerror16.png", "start": 2232118, "end": 2238954}, {"filename": "/data/_HouseofTerror20.png", "start": 2238954, "end": 2248083}, {"filename": "/data/_Pico129.png", "start": 2248083, "end": 2249092}, {"filename": "/data/_Pix118Bold.gif", "start": 2249092, "end": 2250014}, {"filename": "/images/APPROACHING.png", "start": 2250014, "end": 2265870}, {"filename": "/images/Achievements_pedestal.png", "start": 2265870, "end": 2297612}, {"filename": "/images/Achievements_pedestal_press.png", "start": 2297612, "end": 2329548}, {"filename": "/images/Almanac.png", "start": 2329548, "end": 2337738}, {"filename": "/images/Almanac_CloseButton.png", "start": 2337738, "end": 2339860}, {"filename": "/images/Almanac_CloseButtonHighlight.png", "start": 2339860, "end": 2341994}, {"filename": "/images/Almanac_GroundDay.jpg", "start": 2341994, "end": 2351821}, {"filename": "/images/Almanac_GroundIce.jpg", "start": 2351821, "end": 2362418}, {"filename": "/images/Almanac_GroundNight.jpg", "start": 2362418, "end": 2367753}, {"filename": "/images/Almanac_GroundNightPool.jpg", "start": 2367753, "end": 2374179}, {"filename": "/images/Almanac_GroundPool.jpg", "start": 2374179, "end": 2384000}, {"filename": "/images/Almanac_GroundRoof.jpg", "start": 2384000, "end": 2391124}, {"filename": "/images/Almanac_Imitater.png", "start": 2391124, "end": 2391998}, {"filename": "/images/Almanac_IndexBack.jpg", "start": 2391998, "end": 2437869}, {"filename": "/images/Almanac_IndexButton.png", "start": 2437869, "end": 2440117}, {"filename": "/images/Almanac_IndexButtonHighlight.png", "start": 2440117, "end": 2442304}, {"filename": "/images/Almanac_PlantBack.jpg", "start": 2442304, "end": 2514004}, {"filename": "/images/Almanac_PlantCard.png", "start": 2514004, "end": 2543891}, {"filename": "/images/Almanac_ZombieBack.jpg", "start": 2543891, "end": 2584381}, {"filename": "/images/Almanac_ZombieBlank.png", "start": 2584381, "end": 2584543}, {"filename": "/images/Almanac_ZombieCard.png", "start": 2584543, "end": 2635592}, {"filename": "/images/Almanac_ZombieWindow.png", "start": 2635592, "end": 2638116}, {"filename": "/images/Almanac_ZombieWindow2.png", "start": 2638116, "end": 2643005}, {"filename": "/images/AwardScreen_Back.jpg", "start": 2643005, "end": 2802597}, {"filename": "/images/AwardScreen_Back_new.jpg", "start": 2802597, "end": 2844659}, {"filename": "/images/Background_Greenhouse.jpg", "start": 2844659, "end": 3004515}, {"filename": "/images/Background_MushroomGarden.jpg", "start": 3004515, "end": 3126744}, {"filename": "/images/Background_greenhouse_overlay.jpg", "start": 3126744, "end": 3127687}, {"filename": "/images/Beghouled_Twist_overlay.png", "start": 3127687, "end": 3143779}, {"filename": "/images/BungeeCord.png", "start": 3143779, "end": 3144960}, {"filename": "/images/BungeeTarget.png", "start": 3144960, "end": 3153869}, {"filename": "/images/CarKeys.png", "start": 3153869, "end": 3160124}, {"filename": "/images/Challenge_Background.jpg", "start": 3160124, "end": 3303253}, {"filename": "/images/Challenge_Background_new.jpg", "start": 3303253, "end": 3337672}, {"filename": "/images/Challenge_Blank.png", "start": 3337672, "end": 3338966}, {"filename": "/images/Challenge_Thumbnails.jpg", "start": 3338966, "end": 3375755}, {"filename": "/images/Challenge_Window.png", "start": 3375755, "end": 3380794}, {"filename": "/images/Challenge_Window_Highlight.png", "start": 3380794, "end": 3386130}, {"filename": "/images/CobCannon_popcorn.png", "start": 3386130, "end": 3391084}, {"filename": "/images/CobCannon_target.png", "start": 3391084, "end": 3398104}, {"filename": "/images/CobCannon_target_shadow.png", "start": 3398104, "end": 3401972}, {"filename": "/images/ConveyorBelt.png", "start": 3401972, "end": 3404800}, {"filename": "/images/ConveyorBelt_backdrop.png", "start": 3404800, "end": 3410701}, {"filename": "/images/Credits_BigBrain.jpg", "start": 3410701, "end": 3429372}, {"filename": "/images/Credits_BigBrain_.png", "start": 3429372, "end": 3434468}, {"filename": "/images/Credits_PlayButton.png", "start": 3434468, "end": 3441859}, {"filename": "/images/Credits_ZombieNote.png", "start": 3441859, "end": 3462624}, {"filename": "/images/Credits_ZombieNoteBlack.png", "start": 3462624, "end": 3462740}, {"filename": "/images/Doom.png", "start": 3462740, "end": 3473758}, {"filename": "/images/ExplosionPowie.png", "start": 3473758, "end": 3476050}, {"filename": "/images/ExplosionSpudow.png", "start": 3476050, "end": 3481406}, {"filename": "/images/Fertilizer.png", "start": 3481406, "end": 3490035}, {"filename": "/images/FinalWave.png", "start": 3490035, "end": 3500758}, {"filename": "/images/FlagMeter.png", "start": 3500758, "end": 3502020}, {"filename": "/images/FlagMeterLevelProgress.png", "start": 3502020, "end": 3502413}, {"filename": "/images/FlagMeterParts.png", "start": 3502413, "end": 3504828}, {"filename": "/images/ImitaterSeed.png", "start": 3504828, "end": 3508978}, {"filename": "/images/ImitaterSeedDisabled.png", "start": 3508978, "end": 3511761}, {"filename": "/images/LoadBar_dirt.png", "start": 3511761, "end": 3536377}, {"filename": "/images/LoadBar_grass.png", "start": 3536377, "end": 3550641}, {"filename": "/images/Melonpult_particles.png", "start": 3550641, "end": 3563392}, {"filename": "/images/MiniGame_trophy.png", "start": 3563392, "end": 3567285}, {"filename": "/images/Night_grave_graphic.png", "start": 3567285, "end": 3579550}, {"filename": "/images/Phonograph.png", "start": 3579550, "end": 3585600}, {"filename": "/images/PopCap_Logo.jpg", "start": 3585600, "end": 3608169}, {"filename": "/images/Present.png", "start": 3608169, "end": 3616923}, {"filename": "/images/PresentOpen.png", "start": 3616923, "end": 3631106}, {"filename": "/images/ProjectileCactus.png", "start": 3631106, "end": 3632091}, {"filename": "/images/ProjectilePea.png", "start": 3632091, "end": 3633462}, {"filename": "/images/ProjectileSnowPea.png", "start": 3633462, "end": 3635241}, {"filename": "/images/Projectile_star.png", "start": 3635241, "end": 3637049}, {"filename": "/images/PvZ_Logo.jpg", "start": 3637049, "end": 3664209}, {"filename": "/images/PvZ_Logo_.png", "start": 3664209, "end": 3677128}, {"filename": "/images/RockSmall.png", "start": 3677128, "end": 3680950}, {"filename": "/images/Scary_Pot.png", "start": 3680950, "end": 3755699}, {"filename": "/images/SeedBank.png", "start": 3755699, "end": 3768309}, {"filename": "/images/SeedChooser_Background.png", "start": 3768309, "end": 3783219}, {"filename": "/images/SeedChooser_Button.png", "start": 3783219, "end": 3784729}, {"filename": "/images/SeedChooser_Button2.png", "start": 3784729, "end": 3787478}, {"filename": "/images/SeedChooser_Button2_Glow.png", "start": 3787478, "end": 3789253}, {"filename": "/images/SeedChooser_Button_Disabled.png", "start": 3789253, "end": 3790612}, {"filename": "/images/SeedChooser_Button_Glow.png", "start": 3790612, "end": 3793835}, {"filename": "/images/SeedChooser_ImitaterAddOn.png", "start": 3793835, "end": 3795605}, {"filename": "/images/SeedPacketSilhouette.png", "start": 3795605, "end": 3795830}, {"filename": "/images/SeedPacket_Larger.png", "start": 3795830, "end": 3812506}, {"filename": "/images/SelectorScreen_Almanac.png", "start": 3812506, "end": 3825223}, {"filename": "/images/SelectorScreen_AlmanacHighlight.png", "start": 3825223, "end": 3838416}, {"filename": "/images/SelectorScreen_Help1.png", "start": 3838416, "end": 3840522}, {"filename": "/images/SelectorScreen_Help2.png", "start": 3840522, "end": 3842543}, {"filename": "/images/SelectorScreen_LevelNumbers.png", "start": 3842543, "end": 3843189}, {"filename": "/images/SelectorScreen_Options1.png", "start": 3843189, "end": 3847644}, {"filename": "/images/SelectorScreen_Options2.png", "start": 3847644, "end": 3851894}, {"filename": "/images/SelectorScreen_Quit1.png", "start": 3851894, "end": 3854242}, {"filename": "/images/SelectorScreen_Quit2.png", "start": 3854242, "end": 3856472}, {"filename": "/images/SelectorScreen_Store.png", "start": 3856472, "end": 3867406}, {"filename": "/images/SelectorScreen_StoreHighlight.png", "start": 3867406, "end": 3878783}, {"filename": "/images/SelectorScreen_WoodSign3.png", "start": 3878783, "end": 3916847}, {"filename": "/images/SelectorScreen_WoodSign3_press.png", "start": 3916847, "end": 3954510}, {"filename": "/images/SelectorScreen_ZenGarden.png", "start": 3954510, "end": 3981845}, {"filename": "/images/SelectorScreen_ZenGardenHighlight.png", "start": 3981845, "end": 4009699}, {"filename": "/images/Shovel.png", "start": 4009699, "end": 4013900}, {"filename": "/images/ShovelBank.png", "start": 4013900, "end": 4018489}, {"filename": "/images/Shovel_hi_res.png", "start": 4018489, "end": 4031451}, {"filename": "/images/SlotMachine_Overlay.png", "start": 4031451, "end": 4057132}, {"filename": "/images/Store_AquariumGardenIcon.png", "start": 4057132, "end": 4063945}, {"filename": "/images/Store_Background.jpg", "start": 4063945, "end": 4212964}, {"filename": "/images/Store_BackgroundNight.jpg", "start": 4212964, "end": 4246145}, {"filename": "/images/Store_Car.jpg", "start": 4246145, "end": 4280880}, {"filename": "/images/Store_Car.png", "start": 4280880, "end": 4747796}, {"filename": "/images/Store_CarClosed.jpg", "start": 4747796, "end": 4772656}, {"filename": "/images/Store_CarClosed_.png", "start": 4772656, "end": 4787469}, {"filename": "/images/Store_CarClosed_night.png", "start": 4787469, "end": 4806864}, {"filename": "/images/Store_Car_.png", "start": 4806864, "end": 4824011}, {"filename": "/images/Store_Car_night.png", "start": 4824011, "end": 4831669}, {"filename": "/images/Store_ComingSoonLabel.png", "start": 4831669, "end": 4835507}, {"filename": "/images/Store_ExtraSlotLabel.png", "start": 4835507, "end": 4839364}, {"filename": "/images/Store_FirstAidWallnutIcon.png", "start": 4839364, "end": 4846127}, {"filename": "/images/Store_HatchbackOpen.png", "start": 4846127, "end": 4872517}, {"filename": "/images/Store_MainMenuButton.png", "start": 4872517, "end": 4877609}, {"filename": "/images/Store_MainMenuButtonDown.png", "start": 4877609, "end": 4882623}, {"filename": "/images/Store_MainMenuButtonHighlight.png", "start": 4882623, "end": 4887609}, {"filename": "/images/Store_MushroomGardenIcon.png", "start": 4887609, "end": 4896400}, {"filename": "/images/Store_NextButton.png", "start": 4896400, "end": 4911564}, {"filename": "/images/Store_NextButtonDisabled.png", "start": 4911564, "end": 4924910}, {"filename": "/images/Store_NextButtonHighlight.png", "start": 4924910, "end": 4938507}, {"filename": "/images/Store_PacketUpgrade.png", "start": 4938507, "end": 4946168}, {"filename": "/images/Store_PrevButton.png", "start": 4946168, "end": 4956864}, {"filename": "/images/Store_PrevButtonDisabled.png", "start": 4956864, "end": 4965171}, {"filename": "/images/Store_PrevButtonHighlight.png", "start": 4965171, "end": 4975606}, {"filename": "/images/Store_PriceTag.png", "start": 4975606, "end": 4976453}, {"filename": "/images/Store_PvZIcon.png", "start": 4976453, "end": 4990276}, {"filename": "/images/Store_Sign.png", "start": 4990276, "end": 5067055}, {"filename": "/images/Store_SoldOutLabel.png", "start": 5067055, "end": 5071192}, {"filename": "/images/Store_SpeechBubble.png", "start": 5071192, "end": 5072717}, {"filename": "/images/Store_SpeechBubble2.png", "start": 5072717, "end": 5074243}, {"filename": "/images/Store_TreeOfWisdomIcon.png", "start": 5074243, "end": 5080663}, {"filename": "/images/SunBank.png", "start": 5080663, "end": 5090510}, {"filename": "/images/Sunflower_trophy.png", "start": 5090510, "end": 5197847}, {"filename": "/images/Survival_Thumbnails.jpg", "start": 5197847, "end": 5220099}, {"filename": "/images/Taco.png", "start": 5220099, "end": 5228179}, {"filename": "/images/Tombstone_mounds.png", "start": 5228179, "end": 5300631}, {"filename": "/images/Tombstones.jpg", "start": 5300631, "end": 5325628}, {"filename": "/images/Tombstones_.png", "start": 5325628, "end": 5342954}, {"filename": "/images/TreeFood.png", "start": 5342954, "end": 5354240}, {"filename": "/images/Unlock_Highlight.png", "start": 5354240, "end": 5366091}, {"filename": "/images/Unlock_Normal.png", "start": 5366091, "end": 5377404}, {"filename": "/images/Unlock_Press.png", "start": 5377404, "end": 5385279}, {"filename": "/images/Wallnut_bowlingstripe.png", "start": 5385279, "end": 5410655}, {"filename": "/images/WateringCan.png", "start": 5410655, "end": 5418205}, {"filename": "/images/WateringCanGold.png", "start": 5418205, "end": 5425770}, {"filename": "/images/WinterMelon_particles.png", "start": 5425770, "end": 5438665}, {"filename": "/images/Zen_GardenGlove.png", "start": 5438665, "end": 5444960}, {"filename": "/images/Zen_GoldToolReticle.png", "start": 5444960, "end": 5473740}, {"filename": "/images/Zen_GoldToolReticle_.png", "start": 5473740, "end": 5482224}, {"filename": "/images/Zen_MoneySign.png", "start": 5482224, "end": 5487521}, {"filename": "/images/Zen_NextGarden.png", "start": 5487521, "end": 5491485}, {"filename": "/images/Zen_WheelBarrow.png", "start": 5491485, "end": 5499192}, {"filename": "/images/ZombieFinalNoteBlack.png", "start": 5499192, "end": 5499308}, {"filename": "/images/ZombieNote.jpg", "start": 5499308, "end": 5510067}, {"filename": "/images/ZombieNote1.png", "start": 5510067, "end": 5525368}, {"filename": "/images/ZombieNote2.png", "start": 5525368, "end": 5544098}, {"filename": "/images/ZombieNote3.png", "start": 5544098, "end": 5567363}, {"filename": "/images/ZombieNote4.png", "start": 5567363, "end": 5589719}, {"filename": "/images/ZombieNoteBlack1.png", "start": 5589719, "end": 5589835}, {"filename": "/images/ZombieNoteBlack2.png", "start": 5589835, "end": 5589952}, {"filename": "/images/ZombieNoteBlack3.png", "start": 5589952, "end": 5590072}, {"filename": "/images/ZombieNoteBlack4.png", "start": 5590072, "end": 5590192}, {"filename": "/images/ZombieNoteHelp.png", "start": 5590192, "end": 5610582}, {"filename": "/images/ZombieNoteHelpBlack.png", "start": 5610582, "end": 5610698}, {"filename": "/images/ZombieNoteSmall.png", "start": 5610698, "end": 5615725}, {"filename": "/images/ZombieNote_.png", "start": 5615725, "end": 5625179}, {"filename": "/images/Zombie_bobsled1.png", "start": 5625179, "end": 5655775}, {"filename": "/images/Zombie_bobsled2.png", "start": 5655775, "end": 5690497}, {"filename": "/images/Zombie_bobsled3.png", "start": 5690497, "end": 5725664}, {"filename": "/images/Zombie_bobsled4.png", "start": 5725664, "end": 5769945}, {"filename": "/images/Zombie_bobsled_inside.png", "start": 5769945, "end": 5776130}, {"filename": "/images/Zombie_digger_dirt.png", "start": 5776130, "end": 5777164}, {"filename": "/images/Zombiefinalnote.png", "start": 5777164, "end": 5793182}, {"filename": "/images/_UNUSED/zombatar_zombie_blank_old.png", "start": 5793182, "end": 5807641}, {"filename": "/images/_UNUSED/zombatar_zombie_blank_skin.png", "start": 5807641, "end": 5813003}, {"filename": "/images/acheesements_back_highlight.png", "start": 5813003, "end": 5821906}, {"filename": "/images/acheesements_bejeweled.png", "start": 5821906, "end": 5926181}, {"filename": "/images/acheesements_bookworm.png", "start": 5926181, "end": 5984746}, {"filename": "/images/acheesements_china.png", "start": 5984746, "end": 6192004}, {"filename": "/images/acheesements_chuzzle.png", "start": 6192004, "end": 6273334}, {"filename": "/images/acheesements_hole_tile.png", "start": 6273334, "end": 6479616}, {"filename": "/images/acheesements_icons.png", "start": 6479616, "end": 6670440}, {"filename": "/images/acheesements_more_button.png", "start": 6670440, "end": 6673871}, {"filename": "/images/acheesements_more_button_highlight.png", "start": 6673871, "end": 6677720}, {"filename": "/images/acheesements_more_rock.png", "start": 6677720, "end": 6690535}, {"filename": "/images/acheesements_peggle.png", "start": 6690535, "end": 6783672}, {"filename": "/images/acheesements_pipe.png", "start": 6783672, "end": 6899394}, {"filename": "/images/acheesements_top_button.png", "start": 6899394, "end": 6902072}, {"filename": "/images/acheesements_top_button_highlight.png", "start": 6902072, "end": 6905033}, {"filename": "/images/acheesements_zuma.png", "start": 6905033, "end": 7054197}, {"filename": "/images/ad/game_pass.jpg", "start": 7054197, "end": 7118666}, {"filename": "/images/ad/loading.png", "start": 7118666, "end": 7121814}, {"filename": "/images/aquarium1.jpg", "start": 7121814, "end": 7251941}, {"filename": "/images/background1.jpg", "start": 7251941, "end": 7423848}, {"filename": "/images/background1_gameover_interior_overlay.png", "start": 7423848, "end": 7439252}, {"filename": "/images/background1_gameover_mask.png", "start": 7439252, "end": 7462061}, {"filename": "/images/background1unsodded.jpg", "start": 7462061, "end": 7576353}, {"filename": "/images/background2.jpg", "start": 7576353, "end": 7690031}, {"filename": "/images/background2_gameover_interior_overlay.png", "start": 7690031, "end": 7730301}, {"filename": "/images/background2_gameover_mask.png", "start": 7730301, "end": 7750092}, {"filename": "/images/background3.jpg", "start": 7750092, "end": 7957872}, {"filename": "/images/background3_gameover_interior_overlay.png", "start": 7957872, "end": 7969825}, {"filename": "/images/background3_gameover_mask.png", "start": 7969825, "end": 7979654}, {"filename": "/images/background4.jpg", "start": 7979654, "end": 8178917}, {"filename": "/images/background4_gameover_interior_overlay.png", "start": 8178917, "end": 8190823}, {"filename": "/images/background4_gameover_mask.png", "start": 8190823, "end": 8230307}, {"filename": "/images/background5.jpg", "start": 8230307, "end": 8399843}, {"filename": "/images/background5_gameover_mask.png", "start": 8399843, "end": 8434276}, {"filename": "/images/background6_gameover_mask.png", "start": 8434276, "end": 8464857}, {"filename": "/images/background6boss.jpg", "start": 8464857, "end": 8653213}, {"filename": "/images/blank_.gif", "start": 8653213, "end": 8653310}, {"filename": "/images/brain.png", "start": 8653310, "end": 8655414}, {"filename": "/images/bug_spray.png", "start": 8655414, "end": 8660318}, {"filename": "/images/button_down_left.png", "start": 8660318, "end": 8662184}, {"filename": "/images/button_down_middle.png", "start": 8662184, "end": 8663511}, {"filename": "/images/button_down_right.png", "start": 8663511, "end": 8665229}, {"filename": "/images/button_left.png", "start": 8665229, "end": 8667125}, {"filename": "/images/button_middle.png", "start": 8667125, "end": 8668467}, {"filename": "/images/button_right.png", "start": 8668467, "end": 8670177}, {"filename": "/images/chocolate.png", "start": 8670177, "end": 8676870}, {"filename": "/images/coinbank.png", "start": 8676870, "end": 8680269}, {"filename": "/images/crater.png", "start": 8680269, "end": 8700523}, {"filename": "/images/crater_fading.png", "start": 8700523, "end": 8718792}, {"filename": "/images/crater_roof_center.png", "start": 8718792, "end": 8732233}, {"filename": "/images/crater_roof_left.png", "start": 8732233, "end": 8751555}, {"filename": "/images/crater_water_day.png", "start": 8751555, "end": 8761613}, {"filename": "/images/crater_water_night.png", "start": 8761613, "end": 8770890}, {"filename": "/images/dialog_bigbottomleft.png", "start": 8770890, "end": 8777233}, {"filename": "/images/dialog_bigbottommiddle.png", "start": 8777233, "end": 8780440}, {"filename": "/images/dialog_bigbottomright.png", "start": 8780440, "end": 8787806}, {"filename": "/images/dialog_bottomleft.png", "start": 8787806, "end": 8793849}, {"filename": "/images/dialog_bottommiddle.png", "start": 8793849, "end": 8796976}, {"filename": "/images/dialog_bottomright.png", "start": 8796976, "end": 8803356}, {"filename": "/images/dialog_centerleft.png", "start": 8803356, "end": 8805315}, {"filename": "/images/dialog_centermiddle.png", "start": 8805315, "end": 8805682}, {"filename": "/images/dialog_centerright.png", "start": 8805682, "end": 8807830}, {"filename": "/images/dialog_header.png", "start": 8807830, "end": 8820051}, {"filename": "/images/dialog_topleft.png", "start": 8820051, "end": 8825755}, {"filename": "/images/dialog_topmiddle.png", "start": 8825755, "end": 8828515}, {"filename": "/images/dialog_topright.png", "start": 8828515, "end": 8834899}, {"filename": "/images/dirtbig.png", "start": 8834899, "end": 8849137}, {"filename": "/images/dirtsmall.png", "start": 8849137, "end": 8857088}, {"filename": "/images/editbox.gif", "start": 8857088, "end": 8857413}, {"filename": "/images/editbox_.gif", "start": 8857413, "end": 8857794}, {"filename": "/images/endless_day.jpg", "start": 8857794, "end": 8869194}, {"filename": "/images/endless_fog.jpg", "start": 8869194, "end": 8878614}, {"filename": "/images/endless_night.jpg", "start": 8878614, "end": 8889418}, {"filename": "/images/endless_roof.jpg", "start": 8889418, "end": 8900772}, {"filename": "/images/fog.jpg", "start": 8900772, "end": 8932018}, {"filename": "/images/fog_.jpg", "start": 8932018, "end": 8972086}, {"filename": "/images/fog_software.png", "start": 8972086, "end": 9005562}, {"filename": "/images/ice.png", "start": 9005562, "end": 9013647}, {"filename": "/images/ice_cap.png", "start": 9013647, "end": 9015968}, {"filename": "/images/ice_sparkles.png", "start": 9015968, "end": 9017243}, {"filename": "/images/icesparkle.png", "start": 9017243, "end": 9017390}, {"filename": "/images/icetrap.png", "start": 9017390, "end": 9021628}, {"filename": "/images/icetrap2.png", "start": 9021628, "end": 9023008}, {"filename": "/images/icetrap_particles.png", "start": 9023008, "end": 9024914}, {"filename": "/images/icon_poolcleaner.png", "start": 9024914, "end": 9029951}, {"filename": "/images/icon_rake.png", "start": 9029951, "end": 9032868}, {"filename": "/images/icon_roofcleaner.png", "start": 9032868, "end": 9038041}, {"filename": "/images/lock.png", "start": 9038041, "end": 9044733}, {"filename": "/images/lock_open.png", "start": 9044733, "end": 9051647}, {"filename": "/images/moneybag.png", "start": 9051647, "end": 9063082}, {"filename": "/images/moneybag_hi_res.png", "start": 9063082, "end": 9099509}, {"filename": "/images/name.png", "start": 9099509, "end": 9153425}, {"filename": "/images/options_backtogamebutton0.png", "start": 9153425, "end": 9186786}, {"filename": "/images/options_backtogamebutton2.png", "start": 9186786, "end": 9219225}, {"filename": "/images/options_checkbox0.png", "start": 9219225, "end": 9221730}, {"filename": "/images/options_checkbox1.png", "start": 9221730, "end": 9224692}, {"filename": "/images/options_menuback.jpg", "start": 9224692, "end": 9240385}, {"filename": "/images/options_menuback_.png", "start": 9240385, "end": 9251404}, {"filename": "/images/options_sliderknob2.png", "start": 9251404, "end": 9252913}, {"filename": "/images/options_sliderslot.png", "start": 9252913, "end": 9254369}, {"filename": "/images/packet_plants.png", "start": 9254369, "end": 9288254}, {"filename": "/images/pea_shadows.png", "start": 9288254, "end": 9288530}, {"filename": "/images/plantshadow.png", "start": 9288530, "end": 9289449}, {"filename": "/images/plantshadow2.png", "start": 9289449, "end": 9290159}, {"filename": "/images/plantspeechbubble.png", "start": 9290159, "end": 9291329}, {"filename": "/images/pool.jpg", "start": 9291329, "end": 9335856}, {"filename": "/images/pool_base.jpg", "start": 9335856, "end": 9372069}, {"filename": "/images/pool_base_.png", "start": 9372069, "end": 9375546}, {"filename": "/images/pool_base_night.jpg", "start": 9375546, "end": 9406776}, {"filename": "/images/pool_caustic_effect.jpg", "start": 9406776, "end": 9418016}, {"filename": "/images/pool_night.jpg", "start": 9418016, "end": 9454980}, {"filename": "/images/pool_shading.jpg", "start": 9454980, "end": 9456718}, {"filename": "/images/pool_shading_.jpg", "start": 9456718, "end": 9465088}, {"filename": "/images/pool_shading_night.jpg", "start": 9465088, "end": 9466828}, {"filename": "/images/quickplay_back_button.jpg", "start": 9466828, "end": 9477897}, {"filename": "/images/quickplay_back_button.png", "start": 9477897, "end": 9481019}, {"filename": "/images/quickplay_back_button_highlight.jpg", "start": 9481019, "end": 9492088}, {"filename": "/images/quickplay_back_button_highlight.png", "start": 9492088, "end": 9495189}, {"filename": "/images/quickplay_minigames_button.jpg", "start": 9495189, "end": 9506258}, {"filename": "/images/quickplay_minigames_button.png", "start": 9506258, "end": 9537757}, {"filename": "/images/quickplay_minigames_button_highlight.jpg", "start": 9537757, "end": 9548826}, {"filename": "/images/quickplay_minigames_button_highlight.png", "start": 9548826, "end": 9581716}, {"filename": "/images/quickplay_minigames_cloud.jpg", "start": 9581716, "end": 9592785}, {"filename": "/images/quickplay_minigames_cloud.png", "start": 9592785, "end": 9624473}, {"filename": "/images/quickplay_puzzles_button.jpg", "start": 9624473, "end": 9635542}, {"filename": "/images/quickplay_puzzles_button.png", "start": 9635542, "end": 9656267}, {"filename": "/images/quickplay_puzzles_button_highlight.jpg", "start": 9656267, "end": 9667336}, {"filename": "/images/quickplay_puzzles_button_highlight.png", "start": 9667336, "end": 9689211}, {"filename": "/images/quickplay_puzzles_cloud.jpg", "start": 9689211, "end": 9700280}, {"filename": "/images/quickplay_puzzles_cloud.png", "start": 9700280, "end": 9728183}, {"filename": "/images/quickplay_survival_button.jpg", "start": 9728183, "end": 9739252}, {"filename": "/images/quickplay_survival_button.png", "start": 9739252, "end": 9770533}, {"filename": "/images/quickplay_survival_button_highlight.jpg", "start": 9770533, "end": 9781602}, {"filename": "/images/quickplay_survival_button_highlight.png", "start": 9781602, "end": 9814076}, {"filename": "/images/quickplay_survival_cloud.jpg", "start": 9814076, "end": 9825145}, {"filename": "/images/quickplay_survival_cloud.png", "start": 9825145, "end": 9861423}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_bottom-l.png", "start": 9861423, "end": 9863216}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_bottom-r.png", "start": 9863216, "end": 9864844}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_bottom.png", "start": 9864844, "end": 9869984}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_left.png", "start": 9869984, "end": 9874942}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_right.png", "start": 9874942, "end": 9879473}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_top-l.png", "start": 9879473, "end": 9880775}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_top-r.png", "start": 9880775, "end": 9882574}, {"filename": "/images/reloaded/9-slice/zombatar_widget_inner_bg_RL_top.png", "start": 9882574, "end": 9886758}, {"filename": "/images/reloaded/acheese/more-top_bg.png", "start": 9886758, "end": 9899573}, {"filename": "/images/reloaded/acheese/more.png", "start": 9899573, "end": 9903004}, {"filename": "/images/reloaded/acheese/more_hl.png", "start": 9903004, "end": 9906853}, {"filename": "/images/reloaded/acheese/top.png", "start": 9906853, "end": 9909531}, {"filename": "/images/reloaded/acheese/top_hl.png", "start": 9909531, "end": 9912492}, {"filename": "/images/reloaded/main_menu_mockup_v2.jpg", "start": 9912492, "end": 10416490}, {"filename": "/images/reloaded/mainmenu/Achievements_pedestal.png", "start": 10416490, "end": 10448232}, {"filename": "/images/reloaded/mainmenu/Achievements_pedestal_press.png", "start": 10448232, "end": 10480168}, {"filename": "/images/reloaded/mainmenu/SelectorScreen_WoodSign2.png", "start": 10480168, "end": 10504003}, {"filename": "/images/reloaded/mainmenu/SelectorScreen_WoodSign2_press.png", "start": 10504003, "end": 10527160}, {"filename": "/images/reloaded/mainmenu/SelectorScreen_WoodSign3.png", "start": 10527160, "end": 10560737}, {"filename": "/images/reloaded/mainmenu/SelectorScreen_WoodSign3_press.png", "start": 10560737, "end": 10594361}, {"filename": "/images/reloaded/quickplay/BACK-hl.png", "start": 10594361, "end": 10597462}, {"filename": "/images/reloaded/quickplay/BACK.png", "start": 10597462, "end": 10600584}, {"filename": "/images/reloaded/quickplay/mini-games_cloud.png", "start": 10600584, "end": 10632272}, {"filename": "/images/reloaded/quickplay/mini-games_cloud_btn.png", "start": 10632272, "end": 10663771}, {"filename": "/images/reloaded/quickplay/mini-games_cloud_btn_hl.png", "start": 10663771, "end": 10696661}, {"filename": "/images/reloaded/quickplay/puzzles_cloud.png", "start": 10696661, "end": 10724564}, {"filename": "/images/reloaded/quickplay/puzzles_cloud_btn.png", "start": 10724564, "end": 10745289}, {"filename": "/images/reloaded/quickplay/puzzles_cloud_btn_hl.png", "start": 10745289, "end": 10767164}, {"filename": "/images/reloaded/quickplay/quickplay_menu.png", "start": 10767164, "end": 11225756}, {"filename": "/images/reloaded/quickplay/quickplay_menu_bg.png", "start": 11225756, "end": 11657917}, {"filename": "/images/reloaded/quickplay/quickplay_menu_hl.png", "start": 11657917, "end": 12123837}, {"filename": "/images/reloaded/quickplay/src/selector_moregames_background.png", "start": 12123837, "end": 12901274}, {"filename": "/images/reloaded/quickplay/survival_cloud.png", "start": 12901274, "end": 12937552}, {"filename": "/images/reloaded/quickplay/survival_cloud_btn.png", "start": 12937552, "end": 12968833}, {"filename": "/images/reloaded/quickplay/survival_cloud_btn_hl.png", "start": 12968833, "end": 13001307}, {"filename": "/images/reloaded/zombatar/zombatar_view_button.png", "start": 13001307, "end": 13003732}, {"filename": "/images/reloaded/zombatar/zombatar_view_button_highlight.png", "start": 13003732, "end": 13006118}, {"filename": "/images/reloaded/zombatar_RL_reference.png", "start": 13006118, "end": 13061145}, {"filename": "/images/reloaded/zombatar_bg.jpg", "start": 13061145, "end": 13380602}, {"filename": "/images/reloaded/zombatar_colors_bg_RL.png", "start": 13380602, "end": 13391727}, {"filename": "/images/reloaded/zombatar_layout.jpg", "start": 13391727, "end": 13464500}, {"filename": "/images/reloaded/zombatar_layout_800x600.jpg", "start": 13464500, "end": 13919490}, {"filename": "/images/reloaded/zombatar_widget_inner_bg_RL.png", "start": 13919490, "end": 13945836}, {"filename": "/images/seeds.png", "start": 13945836, "end": 13989821}, {"filename": "/images/selector_morewaystoplay_background.png", "start": 13989821, "end": 14421982}, {"filename": "/images/selectorscreen_achievements_bg.png", "start": 14421982, "end": 14652119}, {"filename": "/images/sod1row.jpg", "start": 14652119, "end": 14679154}, {"filename": "/images/sod1row_.png", "start": 14679154, "end": 14685881}, {"filename": "/images/sod3row.jpg", "start": 14685881, "end": 14749924}, {"filename": "/images/sod3row_.png", "start": 14749924, "end": 14758534}, {"filename": "/images/spotlight.png", "start": 14758534, "end": 14760005}, {"filename": "/images/spotlight2.png", "start": 14760005, "end": 14760706}, {"filename": "/images/titlescreen.jpg", "start": 14760706, "end": 14887965}, {"filename": "/images/titlescreen_new.jpg", "start": 14887965, "end": 15015224}, {"filename": "/images/trophy.png", "start": 15015224, "end": 15023758}, {"filename": "/images/trophy_hi_res.png", "start": 15023758, "end": 15050170}, {"filename": "/images/waterdrop.png", "start": 15050170, "end": 15051271}, {"filename": "/images/waterparticle.png", "start": 15051271, "end": 15052054}, {"filename": "/images/wavecenter.gif", "start": 15052054, "end": 15056420}, {"filename": "/images/waveside.gif", "start": 15056420, "end": 15060925}, {"filename": "/images/whitewater.png", "start": 15060925, "end": 15063769}, {"filename": "/images/whitewater_shadow.png", "start": 15063769, "end": 15066622}, {"filename": "/images/win.png", "start": 15066622, "end": 15073360}, {"filename": "/images/zen_need_icons.png", "start": 15073360, "end": 15078346}, {"filename": "/images/zenshopbutton.png", "start": 15078346, "end": 15086240}, {"filename": "/images/zenshopbutton_highlight.png", "start": 15086240, "end": 15094132}, {"filename": "/images/zombatar_accept_button.png", "start": 15094132, "end": 15096175}, {"filename": "/images/zombatar_accept_button_highlight.png", "start": 15096175, "end": 15098154}, {"filename": "/images/zombatar_accessory_.png", "start": 15098154, "end": 15100441}, {"filename": "/images/zombatar_accessory_1.png", "start": 15100441, "end": 15102759}, {"filename": "/images/zombatar_accessory_10.png", "start": 15102759, "end": 15104034}, {"filename": "/images/zombatar_accessory_11.png", "start": 15104034, "end": 15105083}, {"filename": "/images/zombatar_accessory_12.png", "start": 15105083, "end": 15105609}, {"filename": "/images/zombatar_accessory_13.png", "start": 15105609, "end": 15105814}, {"filename": "/images/zombatar_accessory_14.png", "start": 15105814, "end": 15106091}, {"filename": "/images/zombatar_accessory_15.png", "start": 15106091, "end": 15107281}, {"filename": "/images/zombatar_accessory_16.png", "start": 15107281, "end": 15110603}, {"filename": "/images/zombatar_accessory_2.png", "start": 15110603, "end": 15112188}, {"filename": "/images/zombatar_accessory_3.png", "start": 15112188, "end": 15114471}, {"filename": "/images/zombatar_accessory_4.png", "start": 15114471, "end": 15115291}, {"filename": "/images/zombatar_accessory_5.png", "start": 15115291, "end": 15116082}, {"filename": "/images/zombatar_accessory_6.png", "start": 15116082, "end": 15117098}, {"filename": "/images/zombatar_accessory_7.png", "start": 15117098, "end": 15121719}, {"filename": "/images/zombatar_accessory_8.png", "start": 15121719, "end": 15124387}, {"filename": "/images/zombatar_accessory_9.png", "start": 15124387, "end": 15124699}, {"filename": "/images/zombatar_accessory_bg.png", "start": 15124699, "end": 15130021}, {"filename": "/images/zombatar_accessory_bg_highlight.png", "start": 15130021, "end": 15137554}, {"filename": "/images/zombatar_accessory_bg_none.png", "start": 15137554, "end": 15143635}, {"filename": "/images/zombatar_accessory_button.png", "start": 15143635, "end": 15152578}, {"filename": "/images/zombatar_accessory_button_highlight.png", "start": 15152578, "end": 15163834}, {"filename": "/images/zombatar_accessory_button_over.png", "start": 15163834, "end": 15172961}, {"filename": "/images/zombatar_back_button.png", "start": 15172961, "end": 15174509}, {"filename": "/images/zombatar_back_button_highlight.png", "start": 15174509, "end": 15176200}, {"filename": "/images/zombatar_backdrops_button.png", "start": 15176200, "end": 15185219}, {"filename": "/images/zombatar_backdrops_button_highlight.png", "start": 15185219, "end": 15196232}, {"filename": "/images/zombatar_backdrops_button_over.png", "start": 15196232, "end": 15205396}, {"filename": "/images/zombatar_background_blank.png", "start": 15205396, "end": 15231792}, {"filename": "/images/zombatar_background_crazydave.png", "start": 15231792, "end": 15277526}, {"filename": "/images/zombatar_background_menu.png", "start": 15277526, "end": 15342114}, {"filename": "/images/zombatar_background_menu_dos.png", "start": 15342114, "end": 15409980}, {"filename": "/images/zombatar_background_roof.png", "start": 15409980, "end": 15478408}, {"filename": "/images/zombatar_begin_button.png", "start": 15478408, "end": 15480279}, {"filename": "/images/zombatar_begin_button_highlight.png", "start": 15480279, "end": 15482176}, {"filename": "/images/zombatar_clothes_1.png", "start": 15482176, "end": 15487127}, {"filename": "/images/zombatar_clothes_10.png", "start": 15487127, "end": 15488823}, {"filename": "/images/zombatar_clothes_11.png", "start": 15488823, "end": 15494483}, {"filename": "/images/zombatar_clothes_12.png", "start": 15494483, "end": 15498269}, {"filename": "/images/zombatar_clothes_2.png", "start": 15498269, "end": 15511221}, {"filename": "/images/zombatar_clothes_3.png", "start": 15511221, "end": 15515639}, {"filename": "/images/zombatar_clothes_4.png", "start": 15515639, "end": 15520079}, {"filename": "/images/zombatar_clothes_5.png", "start": 15520079, "end": 15522525}, {"filename": "/images/zombatar_clothes_6.png", "start": 15522525, "end": 15524471}, {"filename": "/images/zombatar_clothes_7.png", "start": 15524471, "end": 15530682}, {"filename": "/images/zombatar_clothes_8.png", "start": 15530682, "end": 15536309}, {"filename": "/images/zombatar_clothes_9.png", "start": 15536309, "end": 15541634}, {"filename": "/images/zombatar_clothes_button.png", "start": 15541634, "end": 15549781}, {"filename": "/images/zombatar_clothes_button_highlight.png", "start": 15549781, "end": 15559563}, {"filename": "/images/zombatar_clothes_button_over.png", "start": 15559563, "end": 15567943}, {"filename": "/images/zombatar_colorpicker.png", "start": 15567943, "end": 15571362}, {"filename": "/images/zombatar_colorpicker_highlight.png", "start": 15571362, "end": 15574825}, {"filename": "/images/zombatar_colorpicker_none.png", "start": 15574825, "end": 15578402}, {"filename": "/images/zombatar_colors_bg.png", "start": 15578402, "end": 15589527}, {"filename": "/images/zombatar_colors_bg_small.png", "start": 15589527, "end": 15599597}, {"filename": "/images/zombatar_display_window.png", "start": 15599597, "end": 15655153}, {"filename": "/images/zombatar_eyewear_1.png", "start": 15655153, "end": 15658356}, {"filename": "/images/zombatar_eyewear_10.png", "start": 15658356, "end": 15661758}, {"filename": "/images/zombatar_eyewear_10_mask.png", "start": 15661758, "end": 15664092}, {"filename": "/images/zombatar_eyewear_11.png", "start": 15664092, "end": 15666084}, {"filename": "/images/zombatar_eyewear_11_mask.png", "start": 15666084, "end": 15672395}, {"filename": "/images/zombatar_eyewear_12.png", "start": 15672395, "end": 15673921}, {"filename": "/images/zombatar_eyewear_12_mask.png", "start": 15673921, "end": 15674394}, {"filename": "/images/zombatar_eyewear_13.png", "start": 15674394, "end": 15676420}, {"filename": "/images/zombatar_eyewear_14.png", "start": 15676420, "end": 15677974}, {"filename": "/images/zombatar_eyewear_15.png", "start": 15677974, "end": 15679903}, {"filename": "/images/zombatar_eyewear_16.png", "start": 15679903, "end": 15682783}, {"filename": "/images/zombatar_eyewear_1_mask.png", "start": 15682783, "end": 15688585}, {"filename": "/images/zombatar_eyewear_2.png", "start": 15688585, "end": 15689888}, {"filename": "/images/zombatar_eyewear_2_mask.png", "start": 15689888, "end": 15693817}, {"filename": "/images/zombatar_eyewear_3.png", "start": 15693817, "end": 15696253}, {"filename": "/images/zombatar_eyewear_3_mask.png", "start": 15696253, "end": 15700435}, {"filename": "/images/zombatar_eyewear_4.png", "start": 15700435, "end": 15703759}, {"filename": "/images/zombatar_eyewear_4_mask.png", "start": 15703759, "end": 15709368}, {"filename": "/images/zombatar_eyewear_5.png", "start": 15709368, "end": 15711650}, {"filename": "/images/zombatar_eyewear_5_mask.png", "start": 15711650, "end": 15713643}, {"filename": "/images/zombatar_eyewear_6.png", "start": 15713643, "end": 15716717}, {"filename": "/images/zombatar_eyewear_6_mask.png", "start": 15716717, "end": 15721784}, {"filename": "/images/zombatar_eyewear_7.png", "start": 15721784, "end": 15723135}, {"filename": "/images/zombatar_eyewear_7_mask.png", "start": 15723135, "end": 15724064}, {"filename": "/images/zombatar_eyewear_8.png", "start": 15724064, "end": 15727854}, {"filename": "/images/zombatar_eyewear_8_mask.png", "start": 15727854, "end": 15730674}, {"filename": "/images/zombatar_eyewear_9.png", "start": 15730674, "end": 15732368}, {"filename": "/images/zombatar_eyewear_9_mask.png", "start": 15732368, "end": 15732705}, {"filename": "/images/zombatar_eyewear_button.png", "start": 15732705, "end": 15741278}, {"filename": "/images/zombatar_eyewear_button_highlight.png", "start": 15741278, "end": 15751598}, {"filename": "/images/zombatar_eyewear_button_over.png", "start": 15751598, "end": 15760427}, {"filename": "/images/zombatar_facialhair_1.png", "start": 15760427, "end": 15764121}, {"filename": "/images/zombatar_facialhair_10.png", "start": 15764121, "end": 15767847}, {"filename": "/images/zombatar_facialhair_10_mask.png", "start": 15767847, "end": 15769399}, {"filename": "/images/zombatar_facialhair_11.png", "start": 15769399, "end": 15774212}, {"filename": "/images/zombatar_facialhair_11_mask.png", "start": 15774212, "end": 15777882}, {"filename": "/images/zombatar_facialhair_12.png", "start": 15777882, "end": 15781846}, {"filename": "/images/zombatar_facialhair_12_mask.png", "start": 15781846, "end": 15784396}, {"filename": "/images/zombatar_facialhair_13.png", "start": 15784396, "end": 15786877}, {"filename": "/images/zombatar_facialhair_14.png", "start": 15786877, "end": 15791738}, {"filename": "/images/zombatar_facialhair_14_mask.png", "start": 15791738, "end": 15796475}, {"filename": "/images/zombatar_facialhair_15.png", "start": 15796475, "end": 15799804}, {"filename": "/images/zombatar_facialhair_15_mask.png", "start": 15799804, "end": 15800706}, {"filename": "/images/zombatar_facialhair_16.png", "start": 15800706, "end": 15804035}, {"filename": "/images/zombatar_facialhair_16_mask.png", "start": 15804035, "end": 15804941}, {"filename": "/images/zombatar_facialhair_17.png", "start": 15804941, "end": 15806234}, {"filename": "/images/zombatar_facialhair_18.png", "start": 15806234, "end": 15810002}, {"filename": "/images/zombatar_facialhair_18_mask.png", "start": 15810002, "end": 15811676}, {"filename": "/images/zombatar_facialhair_19.png", "start": 15811676, "end": 15813460}, {"filename": "/images/zombatar_facialhair_1_mask.png", "start": 15813460, "end": 15815132}, {"filename": "/images/zombatar_facialhair_2.png", "start": 15815132, "end": 15816653}, {"filename": "/images/zombatar_facialhair_20.png", "start": 15816653, "end": 15817659}, {"filename": "/images/zombatar_facialhair_21.png", "start": 15817659, "end": 15820965}, {"filename": "/images/zombatar_facialhair_21_mask.png", "start": 15820965, "end": 15822068}, {"filename": "/images/zombatar_facialhair_22.png", "start": 15822068, "end": 15826879}, {"filename": "/images/zombatar_facialhair_22_mask.png", "start": 15826879, "end": 15831041}, {"filename": "/images/zombatar_facialhair_23.png", "start": 15831041, "end": 15834507}, {"filename": "/images/zombatar_facialhair_23_mask.png", "start": 15834507, "end": 15835830}, {"filename": "/images/zombatar_facialhair_24.png", "start": 15835830, "end": 15841104}, {"filename": "/images/zombatar_facialhair_24_mask.png", "start": 15841104, "end": 15848305}, {"filename": "/images/zombatar_facialhair_3.png", "start": 15848305, "end": 15849006}, {"filename": "/images/zombatar_facialhair_4.png", "start": 15849006, "end": 15852572}, {"filename": "/images/zombatar_facialhair_4_mask.png", "start": 15852572, "end": 15854226}, {"filename": "/images/zombatar_facialhair_5.png", "start": 15854226, "end": 15854645}, {"filename": "/images/zombatar_facialhair_6.png", "start": 15854645, "end": 15855215}, {"filename": "/images/zombatar_facialhair_7.png", "start": 15855215, "end": 15855939}, {"filename": "/images/zombatar_facialhair_8.png", "start": 15855939, "end": 15859711}, {"filename": "/images/zombatar_facialhair_8_mask.png", "start": 15859711, "end": 15862094}, {"filename": "/images/zombatar_facialhair_9.png", "start": 15862094, "end": 15866265}, {"filename": "/images/zombatar_facialhair_9_mask.png", "start": 15866265, "end": 15868875}, {"filename": "/images/zombatar_fhair_button.png", "start": 15868875, "end": 15877453}, {"filename": "/images/zombatar_fhair_button_highlight.png", "start": 15877453, "end": 15887860}, {"filename": "/images/zombatar_fhair_button_over.png", "start": 15887860, "end": 15896612}, {"filename": "/images/zombatar_finished_button.png", "start": 15896612, "end": 15898892}, {"filename": "/images/zombatar_finished_button_highlight.png", "start": 15898892, "end": 15901218}, {"filename": "/images/zombatar_hair_1.png", "start": 15901218, "end": 15906395}, {"filename": "/images/zombatar_hair_10.png", "start": 15906395, "end": 15912091}, {"filename": "/images/zombatar_hair_11.png", "start": 15912091, "end": 15917073}, {"filename": "/images/zombatar_hair_11_mask.png", "start": 15917073, "end": 15923107}, {"filename": "/images/zombatar_hair_12.png", "start": 15923107, "end": 15928114}, {"filename": "/images/zombatar_hair_12_mask.png", "start": 15928114, "end": 15935722}, {"filename": "/images/zombatar_hair_13.png", "start": 15935722, "end": 15941682}, {"filename": "/images/zombatar_hair_13_mask.png", "start": 15941682, "end": 15949964}, {"filename": "/images/zombatar_hair_14.png", "start": 15949964, "end": 15956537}, {"filename": "/images/zombatar_hair_14_mask.png", "start": 15956537, "end": 15965973}, {"filename": "/images/zombatar_hair_15.png", "start": 15965973, "end": 15968871}, {"filename": "/images/zombatar_hair_15_mask.png", "start": 15968871, "end": 15977549}, {"filename": "/images/zombatar_hair_16.png", "start": 15977549, "end": 15983500}, {"filename": "/images/zombatar_hair_1_mask.png", "start": 15983500, "end": 15987218}, {"filename": "/images/zombatar_hair_2.png", "start": 15987218, "end": 15992973}, {"filename": "/images/zombatar_hair_2_mask.png", "start": 15992973, "end": 15998026}, {"filename": "/images/zombatar_hair_3.png", "start": 15998026, "end": 15999148}, {"filename": "/images/zombatar_hair_4.png", "start": 15999148, "end": 16012649}, {"filename": "/images/zombatar_hair_5.png", "start": 16012649, "end": 16017891}, {"filename": "/images/zombatar_hair_6.png", "start": 16017891, "end": 16022046}, {"filename": "/images/zombatar_hair_7.png", "start": 16022046, "end": 16024249}, {"filename": "/images/zombatar_hair_8.png", "start": 16024249, "end": 16031213}, {"filename": "/images/zombatar_hair_9.png", "start": 16031213, "end": 16033721}, {"filename": "/images/zombatar_hair_button.png", "start": 16033721, "end": 16040460}, {"filename": "/images/zombatar_hair_button_highlight.png", "start": 16040460, "end": 16048662}, {"filename": "/images/zombatar_hair_button_over.png", "start": 16048662, "end": 16055962}, {"filename": "/images/zombatar_hats_1.png", "start": 16055962, "end": 16060282}, {"filename": "/images/zombatar_hats_10.png", "start": 16060282, "end": 16063476}, {"filename": "/images/zombatar_hats_11.png", "start": 16063476, "end": 16069418}, {"filename": "/images/zombatar_hats_11_mask.png", "start": 16069418, "end": 16071526}, {"filename": "/images/zombatar_hats_12.png", "start": 16071526, "end": 16075995}, {"filename": "/images/zombatar_hats_13.png", "start": 16075995, "end": 16083845}, {"filename": "/images/zombatar_hats_14.png", "start": 16083845, "end": 16090922}, {"filename": "/images/zombatar_hats_1_mask.png", "start": 16090922, "end": 16093802}, {"filename": "/images/zombatar_hats_2.png", "start": 16093802, "end": 16097163}, {"filename": "/images/zombatar_hats_3.png", "start": 16097163, "end": 16099506}, {"filename": "/images/zombatar_hats_3_mask.png", "start": 16099506, "end": 16101252}, {"filename": "/images/zombatar_hats_4.png", "start": 16101252, "end": 16103513}, {"filename": "/images/zombatar_hats_5.png", "start": 16103513, "end": 16106460}, {"filename": "/images/zombatar_hats_6.png", "start": 16106460, "end": 16111769}, {"filename": "/images/zombatar_hats_6_mask.png", "start": 16111769, "end": 16115586}, {"filename": "/images/zombatar_hats_7.png", "start": 16115586, "end": 16117030}, {"filename": "/images/zombatar_hats_7_mask.png", "start": 16117030, "end": 16118139}, {"filename": "/images/zombatar_hats_8.png", "start": 16118139, "end": 16122536}, {"filename": "/images/zombatar_hats_8_mask.png", "start": 16122536, "end": 16125097}, {"filename": "/images/zombatar_hats_9.png", "start": 16125097, "end": 16127960}, {"filename": "/images/zombatar_hats_9_mask.png", "start": 16127960, "end": 16130704}, {"filename": "/images/zombatar_hats_button.png", "start": 16130704, "end": 16137825}, {"filename": "/images/zombatar_hats_button_highlight.png", "start": 16137825, "end": 16145879}, {"filename": "/images/zombatar_hats_button_over.png", "start": 16145879, "end": 16153380}, {"filename": "/images/zombatar_logo.png", "start": 16153380, "end": 16215698}, {"filename": "/images/zombatar_main_bg.png", "start": 16215698, "end": 16691854}, {"filename": "/images/zombatar_mainmenuback_highlight.png", "start": 16691854, "end": 16716037}, {"filename": "/images/zombatar_navy_rect.png", "start": 16716037, "end": 16724707}, {"filename": "/images/zombatar_newzombie_button.png", "start": 16724707, "end": 16729984}, {"filename": "/images/zombatar_newzombie_button_highlight.png", "start": 16729984, "end": 16735450}, {"filename": "/images/zombatar_next_button.png", "start": 16735450, "end": 16739753}, {"filename": "/images/zombatar_next_button_disabled.png", "start": 16739753, "end": 16742957}, {"filename": "/images/zombatar_next_button_highlight.png", "start": 16742957, "end": 16747167}, {"filename": "/images/zombatar_prev_button.png", "start": 16747167, "end": 16751462}, {"filename": "/images/zombatar_prev_button_disabled.png", "start": 16751462, "end": 16754666}, {"filename": "/images/zombatar_prev_button_highlight.png", "start": 16754666, "end": 16758893}, {"filename": "/images/zombatar_skin_button.png", "start": 16758893, "end": 16765964}, {"filename": "/images/zombatar_skin_button_highlight.png", "start": 16765964, "end": 16774107}, {"filename": "/images/zombatar_stone_tablet.png", "start": 16774107, "end": 16777948}, {"filename": "/images/zombatar_tidbits_1.png", "start": 16777948, "end": 16782543}, {"filename": "/images/zombatar_tidbits_10.png", "start": 16782543, "end": 16784972}, {"filename": "/images/zombatar_tidbits_11.png", "start": 16784972, "end": 16786599}, {"filename": "/images/zombatar_tidbits_12.png", "start": 16786599, "end": 16787519}, {"filename": "/images/zombatar_tidbits_13.png", "start": 16787519, "end": 16788705}, {"filename": "/images/zombatar_tidbits_14.png", "start": 16788705, "end": 16788852}, {"filename": "/images/zombatar_tidbits_2.png", "start": 16788852, "end": 16789939}, {"filename": "/images/zombatar_tidbits_3.png", "start": 16789939, "end": 16790652}, {"filename": "/images/zombatar_tidbits_4.png", "start": 16790652, "end": 16791283}, {"filename": "/images/zombatar_tidbits_5.png", "start": 16791283, "end": 16791981}, {"filename": "/images/zombatar_tidbits_6.png", "start": 16791981, "end": 16792438}, {"filename": "/images/zombatar_tidbits_7.png", "start": 16792438, "end": 16793138}, {"filename": "/images/zombatar_tidbits_8.png", "start": 16793138, "end": 16793605}, {"filename": "/images/zombatar_tidbits_9.png", "start": 16793605, "end": 16795692}, {"filename": "/images/zombatar_tidbits_button.png", "start": 16795692, "end": 16803533}, {"filename": "/images/zombatar_tidbits_button_highlight.png", "start": 16803533, "end": 16813083}, {"filename": "/images/zombatar_tidbits_button_over.png", "start": 16813083, "end": 16821253}, {"filename": "/images/zombatar_tos_arrow.png", "start": 16821253, "end": 16823125}, {"filename": "/images/zombatar_tos_slider.png", "start": 16823125, "end": 16827498}, {"filename": "/images/zombatar_tos_slider_thumb.png", "start": 16827498, "end": 16831810}, {"filename": "/images/zombatar_triptych.png", "start": 16831810, "end": 16857904}, {"filename": "/images/zombatar_view_button.png", "start": 16857904, "end": 16860329}, {"filename": "/images/zombatar_view_button_highlight.png", "start": 16860329, "end": 16862715}, {"filename": "/images/zombatar_widget_bg.png", "start": 16862715, "end": 16951328}, {"filename": "/images/zombatar_widget_inner_bg.png", "start": 16951328, "end": 16977674}, {"filename": "/images/zombatar_zombie_blank.png", "start": 16977674, "end": 16988339}, {"filename": "/images/zombatar_zombie_blank_skin.png", "start": 16988339, "end": 16996538}, {"filename": "/particles/ArtChallengePlant.xml", "start": 16996538, "end": 16997255}, {"filename": "/particles/Award.xml", "start": 16997255, "end": 17003271}, {"filename": "/particles/AwardGlow.png", "start": 17003271, "end": 17004929}, {"filename": "/particles/AwardPickupArrow.xml", "start": 17004929, "end": 17005776}, {"filename": "/particles/AwardPickupGlow.png", "start": 17005776, "end": 17010203}, {"filename": "/particles/AwardRays.png", "start": 17010203, "end": 17019899}, {"filename": "/particles/AwardRays1.png", "start": 17019899, "end": 17029550}, {"filename": "/particles/AwardRays2.png", "start": 17029550, "end": 17036078}, {"filename": "/particles/AwardRays_star.png", "start": 17036078, "end": 17040315}, {"filename": "/particles/BlastMark.png", "start": 17040315, "end": 17080987}, {"filename": "/particles/BlastMark.xml", "start": 17080987, "end": 17081157}, {"filename": "/particles/BossExplosion.xml", "start": 17081157, "end": 17083134}, {"filename": "/particles/BossExplosion1.png", "start": 17083134, "end": 17091502}, {"filename": "/particles/BossExplosion2.png", "start": 17091502, "end": 17105591}, {"filename": "/particles/BossExplosion3.png", "start": 17105591, "end": 17115021}, {"filename": "/particles/BossIceBallTrail.xml", "start": 17115021, "end": 17115899}, {"filename": "/particles/ButterSplat.xml", "start": 17115899, "end": 17116565}, {"filename": "/particles/CabbageSplat.xml", "start": 17116565, "end": 17117744}, {"filename": "/particles/CatapultExplosion.xml", "start": 17117744, "end": 17121573}, {"filename": "/particles/CircleEvenSpacing.xml", "start": 17121573, "end": 17122193}, {"filename": "/particles/CoinPickupArrow.xml", "start": 17122193, "end": 17122690}, {"filename": "/particles/Credits_RaysWipe.xml", "start": 17122690, "end": 17127905}, {"filename": "/particles/Credits_Strobe.xml", "start": 17127905, "end": 17128323}, {"filename": "/particles/Credits_ZombieHeadWipe.xml", "start": 17128323, "end": 17129551}, {"filename": "/particles/Credits_fog.xml", "start": 17129551, "end": 17130227}, {"filename": "/particles/Daisy.png", "start": 17130227, "end": 17133862}, {"filename": "/particles/Daisy.xml", "start": 17133862, "end": 17134422}, {"filename": "/particles/DancerRise.xml", "start": 17134422, "end": 17136069}, {"filename": "/particles/Diamond_Shine.png", "start": 17136069, "end": 17139680}, {"filename": "/particles/DiggerRise.xml", "start": 17139680, "end": 17140527}, {"filename": "/particles/DiggerTunnel.xml", "start": 17140527, "end": 17142186}, {"filename": "/particles/Doom.png", "start": 17142186, "end": 17145296}, {"filename": "/particles/Doom.xml", "start": 17145296, "end": 17153057}, {"filename": "/particles/DoomShroom_Explosion_Base.png", "start": 17153057, "end": 17202516}, {"filename": "/particles/DoomShroom_Explosion_Stem.png", "start": 17202516, "end": 17234191}, {"filename": "/particles/DoomShroom_Explosion_Top.png", "start": 17234191, "end": 17259125}, {"filename": "/particles/DownArrow.png", "start": 17259125, "end": 17259585}, {"filename": "/particles/Dust_Foot.xml", "start": 17259585, "end": 17260301}, {"filename": "/particles/Dust_Squash.xml", "start": 17260301, "end": 17261532}, {"filename": "/particles/Dust_puffs.png", "start": 17261532, "end": 17263148}, {"filename": "/particles/ExplosionCloud.png", "start": 17263148, "end": 17265946}, {"filename": "/particles/ExplosionPowie.png", "start": 17265946, "end": 17269399}, {"filename": "/particles/ExplosionSpudow.png", "start": 17269399, "end": 17274177}, {"filename": "/particles/FireBallDeath.xml", "start": 17274177, "end": 17274912}, {"filename": "/particles/Fireball_Trail.xml", "start": 17274912, "end": 17275921}, {"filename": "/particles/FumeCloud.xml", "start": 17275921, "end": 17276573}, {"filename": "/particles/GloomCloud.xml", "start": 17276573, "end": 17281951}, {"filename": "/particles/Glow_particle2.png", "start": 17281951, "end": 17282131}, {"filename": "/particles/GraveBuster.xml", "start": 17282131, "end": 17283040}, {"filename": "/particles/GraveBusterDie.xml", "start": 17283040, "end": 17283865}, {"filename": "/particles/GraveStoneRise.xml", "start": 17283865, "end": 17284765}, {"filename": "/particles/IceBallDeath.xml", "start": 17284765, "end": 17285434}, {"filename": "/particles/IceSparkle.xml", "start": 17285434, "end": 17285829}, {"filename": "/particles/IceTrail.png", "start": 17285829, "end": 17287013}, {"filename": "/particles/IceTrail.trail", "start": 17287013, "end": 17287224}, {"filename": "/particles/IceTrap.xml", "start": 17287224, "end": 17288376}, {"filename": "/particles/IceTrapRelease.xml", "start": 17288376, "end": 17288960}, {"filename": "/particles/IceTrapZombie.xml", "start": 17288960, "end": 17289525}, {"filename": "/particles/Iceball_Trail.xml", "start": 17289525, "end": 17289864}, {"filename": "/particles/ImitaterClouds.png", "start": 17289864, "end": 17325510}, {"filename": "/particles/ImitaterMorph.xml", "start": 17325510, "end": 17326672}, {"filename": "/particles/ImitaterPuffs.png", "start": 17326672, "end": 17346874}, {"filename": "/particles/JackExplode.xml", "start": 17346874, "end": 17349216}, {"filename": "/particles/KernelSplat.xml", "start": 17349216, "end": 17350399}, {"filename": "/particles/LanternShine.png", "start": 17350399, "end": 17380371}, {"filename": "/particles/LanternShine.xml", "start": 17380371, "end": 17381343}, {"filename": "/particles/MindControl.png", "start": 17381343, "end": 17382019}, {"filename": "/particles/MindControl.xml", "start": 17382019, "end": 17382576}, {"filename": "/particles/MowerCloud.xml", "start": 17382576, "end": 17384150}, {"filename": "/particles/MoweredZombieArm.xml", "start": 17384150, "end": 17384896}, {"filename": "/particles/MoweredZombieHead.xml", "start": 17384896, "end": 17385549}, {"filename": "/particles/PeaSplat.xml", "start": 17385549, "end": 17386730}, {"filename": "/particles/Pea_particles.png", "start": 17386730, "end": 17387418}, {"filename": "/particles/PerfTest.xml", "start": 17387418, "end": 17390548}, {"filename": "/particles/Pinata.png", "start": 17390548, "end": 17395945}, {"filename": "/particles/Pinata.xml", "start": 17395945, "end": 17396769}, {"filename": "/particles/Planting.xml", "start": 17396769, "end": 17397498}, {"filename": "/particles/PlantingPool.xml", "start": 17397498, "end": 17398235}, {"filename": "/particles/PoolSparkly.png", "start": 17398235, "end": 17399055}, {"filename": "/particles/PoolSparkly.xml", "start": 17399055, "end": 17400005}, {"filename": "/particles/PoolSplash.xml", "start": 17400005, "end": 17400628}, {"filename": "/particles/PopcornSplash.xml", "start": 17400628, "end": 17401325}, {"filename": "/particles/PortalCircle.xml", "start": 17401325, "end": 17401965}, {"filename": "/particles/PortalSquare.xml", "start": 17401965, "end": 17402558}, {"filename": "/particles/PotatoMine.xml", "start": 17402558, "end": 17405270}, {"filename": "/particles/PotatoMineFlash.png", "start": 17405270, "end": 17406055}, {"filename": "/particles/PotatoMineRise.xml", "start": 17406055, "end": 17406957}, {"filename": "/particles/PotatoMine_particles.png", "start": 17406957, "end": 17411099}, {"filename": "/particles/PottedPlantGlow.xml", "start": 17411099, "end": 17412167}, {"filename": "/particles/PottedWaterPlantGlow.xml", "start": 17412167, "end": 17413245}, {"filename": "/particles/PottedZenGlow.xml", "start": 17413245, "end": 17413938}, {"filename": "/particles/Pow.png", "start": 17413938, "end": 17427862}, {"filename": "/particles/Pow.xml", "start": 17427862, "end": 17428229}, {"filename": "/particles/Powie.xml", "start": 17428229, "end": 17429927}, {"filename": "/particles/PresentPickup.xml", "start": 17429927, "end": 17432424}, {"filename": "/particles/PuffShroomMuzzle.xml", "start": 17432424, "end": 17433185}, {"filename": "/particles/PuffShroomTrail.xml", "start": 17433185, "end": 17434038}, {"filename": "/particles/PuffShroom_puff1.png", "start": 17434038, "end": 17435270}, {"filename": "/particles/PuffShroom_puff2.png", "start": 17435270, "end": 17436344}, {"filename": "/particles/PuffSplat.xml", "start": 17436344, "end": 17437021}, {"filename": "/particles/Rain.png", "start": 17437021, "end": 17438777}, {"filename": "/particles/ScreenFlash.xml", "start": 17438777, "end": 17439238}, {"filename": "/particles/SeedPacket.xml", "start": 17439238, "end": 17440087}, {"filename": "/particles/SeedPacketFlash.png", "start": 17440087, "end": 17441301}, {"filename": "/particles/SeedPacketFlash.xml", "start": 17441301, "end": 17441566}, {"filename": "/particles/SeedPacketGlow.png", "start": 17441566, "end": 17453149}, {"filename": "/particles/SeedPacketPick.xml", "start": 17453149, "end": 17453747}, {"filename": "/particles/SeedPacketPickup.xml", "start": 17453747, "end": 17455024}, {"filename": "/particles/SimpleParticle.xml", "start": 17455024, "end": 17455271}, {"filename": "/particles/SnowFlakes.png", "start": 17455271, "end": 17456901}, {"filename": "/particles/SnowPeaPuff.xml", "start": 17456901, "end": 17458311}, {"filename": "/particles/SnowPeaSplat.xml", "start": 17458311, "end": 17459471}, {"filename": "/particles/SnowPeaTrail.xml", "start": 17459471, "end": 17460349}, {"filename": "/particles/SnowPea_particles.png", "start": 17460349, "end": 17460886}, {"filename": "/particles/SnowPea_puff.png", "start": 17460886, "end": 17470701}, {"filename": "/particles/SnowPea_splats.png", "start": 17470701, "end": 17473164}, {"filename": "/particles/SodRoll.xml", "start": 17473164, "end": 17474106}, {"filename": "/particles/Sproing.png", "start": 17474106, "end": 17485109}, {"filename": "/particles/Star40.png", "start": 17485109, "end": 17486057}, {"filename": "/particles/StarSplat.xml", "start": 17486057, "end": 17487242}, {"filename": "/particles/Star_particles.png", "start": 17487242, "end": 17487927}, {"filename": "/particles/Star_splats.png", "start": 17487927, "end": 17492015}, {"filename": "/particles/Starburst.xml", "start": 17492015, "end": 17494515}, {"filename": "/particles/TallNutBlock.xml", "start": 17494515, "end": 17495273}, {"filename": "/particles/TrophySparkle.xml", "start": 17495273, "end": 17496203}, {"filename": "/particles/UmbrellaReflect.xml", "start": 17496203, "end": 17496696}, {"filename": "/particles/UpsellArrow.xml", "start": 17496696, "end": 17497291}, {"filename": "/particles/VaseShatter.xml", "start": 17497291, "end": 17498139}, {"filename": "/particles/VaseShatterLeaf.xml", "start": 17498139, "end": 17498987}, {"filename": "/particles/VaseShatterZombie.xml", "start": 17498987, "end": 17499835}, {"filename": "/particles/WallnutEatLarge.xml", "start": 17499835, "end": 17500630}, {"filename": "/particles/WallnutEatSmall.xml", "start": 17500630, "end": 17501383}, {"filename": "/particles/WallnutParticlesLarge.png", "start": 17501383, "end": 17503805}, {"filename": "/particles/WallnutParticlesSmall.png", "start": 17503805, "end": 17504304}, {"filename": "/particles/WhackAZombieRise.xml", "start": 17504304, "end": 17505896}, {"filename": "/particles/WhiteEllipse.png", "start": 17505896, "end": 17506224}, {"filename": "/particles/WhitePixel.png", "start": 17506224, "end": 17506314}, {"filename": "/particles/WinterMelonImpact.xml", "start": 17506314, "end": 17507075}, {"filename": "/particles/ZamboniExplosion.xml", "start": 17507075, "end": 17510896}, {"filename": "/particles/ZamboniExplosion2.xml", "start": 17510896, "end": 17514969}, {"filename": "/particles/ZamboniSmoke.png", "start": 17514969, "end": 17517254}, {"filename": "/particles/ZamboniSmoke.xml", "start": 17517254, "end": 17518180}, {"filename": "/particles/ZamboniTire.xml", "start": 17518180, "end": 17519512}, {"filename": "/particles/ZombieArm.png", "start": 17519512, "end": 17522382}, {"filename": "/particles/ZombieArm.xml", "start": 17522382, "end": 17522980}, {"filename": "/particles/ZombieBackupDancerHead.png", "start": 17522980, "end": 17532512}, {"filename": "/particles/ZombieBackupDancerHead_disco.png", "start": 17532512, "end": 17538082}, {"filename": "/particles/ZombieBalloonHead.png", "start": 17538082, "end": 17544232}, {"filename": "/particles/ZombieBalloonHead.xml", "start": 17544232, "end": 17546306}, {"filename": "/particles/ZombieBobsledHead.png", "start": 17546306, "end": 17552654}, {"filename": "/particles/ZombieDancerHead.png", "start": 17552654, "end": 17560104}, {"filename": "/particles/ZombieDancerHead_disco.png", "start": 17560104, "end": 17573859}, {"filename": "/particles/ZombieDiggerArm.png", "start": 17573859, "end": 17577600}, {"filename": "/particles/ZombieDiggerHead.png", "start": 17577600, "end": 17584512}, {"filename": "/particles/ZombieDolphinRiderHead.png", "start": 17584512, "end": 17590229}, {"filename": "/particles/ZombieDoor.xml", "start": 17590229, "end": 17590851}, {"filename": "/particles/ZombieFlag.xml", "start": 17590851, "end": 17591605}, {"filename": "/particles/ZombieFootballHead.png", "start": 17591605, "end": 17597347}, {"filename": "/particles/ZombieFutureGlasses.png", "start": 17597347, "end": 17614672}, {"filename": "/particles/ZombieFutureGlasses.xml", "start": 17614672, "end": 17615392}, {"filename": "/particles/ZombieHead.png", "start": 17615392, "end": 17621900}, {"filename": "/particles/ZombieHead.xml", "start": 17621900, "end": 17622561}, {"filename": "/particles/ZombieHeadLight.xml", "start": 17622561, "end": 17623220}, {"filename": "/particles/ZombieHeadPool.xml", "start": 17623220, "end": 17623753}, {"filename": "/particles/ZombieHelmet.xml", "start": 17623753, "end": 17624376}, {"filename": "/particles/ZombieImpHead.png", "start": 17624376, "end": 17628391}, {"filename": "/particles/ZombieJackboxArm.png", "start": 17628391, "end": 17632299}, {"filename": "/particles/ZombieLadder.xml", "start": 17632299, "end": 17632961}, {"filename": "/particles/ZombieLadderHead.png", "start": 17632961, "end": 17639666}, {"filename": "/particles/ZombieMustache.xml", "start": 17639666, "end": 17640352}, {"filename": "/particles/ZombieNewspaper.xml", "start": 17640352, "end": 17640917}, {"filename": "/particles/ZombieNewspaperHead.xml", "start": 17640917, "end": 17642269}, {"filename": "/particles/ZombiePail.xml", "start": 17642269, "end": 17642883}, {"filename": "/particles/ZombiePogo.png", "start": 17642883, "end": 17651213}, {"filename": "/particles/ZombiePogo.xml", "start": 17651213, "end": 17651897}, {"filename": "/particles/ZombiePogoHead.png", "start": 17651897, "end": 17659729}, {"filename": "/particles/ZombiePogoHead.xml", "start": 17659729, "end": 17661085}, {"filename": "/particles/ZombiePoleVaulterHead.png", "start": 17661085, "end": 17668498}, {"filename": "/particles/ZombieRise.xml", "start": 17668498, "end": 17670760}, {"filename": "/particles/ZombieTrafficCone.xml", "start": 17670760, "end": 17671372}, {"filename": "/particles/ZombieYetiHead.png", "start": 17671372, "end": 17687734}, {"filename": "/particles/Zombie_boss_fireball.xml", "start": 17687734, "end": 17689262}, {"filename": "/particles/Zombie_boss_fireball_additiveparticle.png", "start": 17689262, "end": 17689450}, {"filename": "/particles/Zombie_boss_fireball_groundparticles.png", "start": 17689450, "end": 17692836}, {"filename": "/particles/Zombie_boss_fireball_particles.png", "start": 17692836, "end": 17709995}, {"filename": "/particles/Zombie_boss_iceball_groundparticles.png", "start": 17709995, "end": 17715803}, {"filename": "/particles/Zombie_boss_iceball_particles.png", "start": 17715803, "end": 17721323}, {"filename": "/particles/Zombie_seaweed.png", "start": 17721323, "end": 17732042}, {"filename": "/particles/Zombie_seaweed.xml", "start": 17732042, "end": 17732506}, {"filename": "/particles/Zomboss_particles.png", "start": 17732506, "end": 17753349}, {"filename": "/particles/glow_particle1.png", "start": 17753349, "end": 17753493}, {"filename": "/particles/melonimpact.xml", "start": 17753493, "end": 17754228}, {"filename": "/particles/pea_splats.png", "start": 17754228, "end": 17758218}, {"filename": "/particles/vase_chunks.png", "start": 17758218, "end": 17786575}, {"filename": "/properties/Gameid001WD.xml", "start": 17786575, "end": 17788850}, {"filename": "/properties/LawnStrings.txt", "start": 17788850, "end": 17883883}, {"filename": "/properties/Layout.xml", "start": 17883883, "end": 17884788}, {"filename": "/properties/ZombatarTOS.txt", "start": 17884788, "end": 17891298}, {"filename": "/properties/default.xml", "start": 17891298, "end": 17897433}, {"filename": "/properties/partner.xml", "start": 17897433, "end": 17897826}, {"filename": "/properties/partner.xml.sig", "start": 17897826, "end": 17897850}, {"filename": "/properties/partner_logo.jpg", "start": 17897850, "end": 17903349}, {"filename": "/properties/resources.xml", "start": 17903349, "end": 17962858}, {"filename": "/reanim/APPROACHING.png", "start": 17962858, "end": 17978714}, {"filename": "/reanim/Blover.reanim", "start": 17978714, "end": 18005956}, {"filename": "/reanim/Blover_blink.png", "start": 18005956, "end": 18006676}, {"filename": "/reanim/Blover_dirt_back.png", "start": 18006676, "end": 18006977}, {"filename": "/reanim/Blover_dirt_front.png", "start": 18006977, "end": 18007302}, {"filename": "/reanim/Blover_head.png", "start": 18007302, "end": 18010237}, {"filename": "/reanim/Blover_head2.png", "start": 18010237, "end": 18013191}, {"filename": "/reanim/Blover_petal.png", "start": 18013191, "end": 18014981}, {"filename": "/reanim/Blover_stem1.png", "start": 18014981, "end": 18015964}, {"filename": "/reanim/Blover_stem2.png", "start": 18015964, "end": 18016580}, {"filename": "/reanim/Cabbagepult.reanim", "start": 18016580, "end": 18093226}, {"filename": "/reanim/Cabbagepult_basket.png", "start": 18093226, "end": 18097996}, {"filename": "/reanim/Cabbagepult_basket_overlay.png", "start": 18097996, "end": 18101738}, {"filename": "/reanim/Cabbagepult_basketvine1.png", "start": 18101738, "end": 18102748}, {"filename": "/reanim/Cabbagepult_basketvine2.png", "start": 18102748, "end": 18103783}, {"filename": "/reanim/Cabbagepult_basketvine3.png", "start": 18103783, "end": 18104470}, {"filename": "/reanim/Cabbagepult_basketvine4.png", "start": 18104470, "end": 18104897}, {"filename": "/reanim/Cabbagepult_blink1.png", "start": 18104897, "end": 18105578}, {"filename": "/reanim/Cabbagepult_blink2.png", "start": 18105578, "end": 18106191}, {"filename": "/reanim/Cabbagepult_cabbage.png", "start": 18106191, "end": 18108249}, {"filename": "/reanim/Cabbagepult_eyebrow.png", "start": 18108249, "end": 18108669}, {"filename": "/reanim/Cabbagepult_eyebrow1.png", "start": 18108669, "end": 18109239}, {"filename": "/reanim/Cabbagepult_eyebrow2.png", "start": 18109239, "end": 18109766}, {"filename": "/reanim/Cabbagepult_head.png", "start": 18109766, "end": 18114649}, {"filename": "/reanim/Cabbagepult_leaf.png", "start": 18114649, "end": 18115634}, {"filename": "/reanim/Cabbagepult_stalk1.png", "start": 18115634, "end": 18116250}, {"filename": "/reanim/Cabbagepult_stalk2.png", "start": 18116250, "end": 18116847}, {"filename": "/reanim/Cabbagepult_stalk3.png", "start": 18116847, "end": 18117461}, {"filename": "/reanim/Cabbagepult_stalk4.png", "start": 18117461, "end": 18118016}, {"filename": "/reanim/Cabbagepult_stalk5.png", "start": 18118016, "end": 18119183}, {"filename": "/reanim/Cactus.reanim", "start": 18119183, "end": 18190422}, {"filename": "/reanim/Cactus_arm1_1.png", "start": 18190422, "end": 18193509}, {"filename": "/reanim/Cactus_arm1_2.png", "start": 18193509, "end": 18194773}, {"filename": "/reanim/Cactus_arm2_1.png", "start": 18194773, "end": 18196721}, {"filename": "/reanim/Cactus_arm2_2.png", "start": 18196721, "end": 18197957}, {"filename": "/reanim/Cactus_blink1.png", "start": 18197957, "end": 18198971}, {"filename": "/reanim/Cactus_blink2.png", "start": 18198971, "end": 18199928}, {"filename": "/reanim/Cactus_body1.png", "start": 18199928, "end": 18206320}, {"filename": "/reanim/Cactus_body2.png", "start": 18206320, "end": 18208928}, {"filename": "/reanim/Cactus_body3.png", "start": 18208928, "end": 18213190}, {"filename": "/reanim/Cactus_body_overlay.png", "start": 18213190, "end": 18214690}, {"filename": "/reanim/Cactus_body_overlay2.png", "start": 18214690, "end": 18216016}, {"filename": "/reanim/Cactus_flower.png", "start": 18216016, "end": 18219218}, {"filename": "/reanim/Cactus_flower_top.png", "start": 18219218, "end": 18219459}, {"filename": "/reanim/Cactus_lips.png", "start": 18219459, "end": 18220606}, {"filename": "/reanim/Cactus_mouth.png", "start": 18220606, "end": 18220854}, {"filename": "/reanim/Caltrop.reanim", "start": 18220854, "end": 18232533}, {"filename": "/reanim/Caltrop_blink1.png", "start": 18232533, "end": 18233826}, {"filename": "/reanim/Caltrop_blink2.png", "start": 18233826, "end": 18235066}, {"filename": "/reanim/Caltrop_body.png", "start": 18235066, "end": 18241613}, {"filename": "/reanim/Caltrop_body2.png", "start": 18241613, "end": 18247946}, {"filename": "/reanim/Caltrop_horn1.png", "start": 18247946, "end": 18249162}, {"filename": "/reanim/Caltrop_horn2.png", "start": 18249162, "end": 18250348}, {"filename": "/reanim/Caltrop_horn3.png", "start": 18250348, "end": 18251353}, {"filename": "/reanim/Caltrop_horn4.png", "start": 18251353, "end": 18252575}, {"filename": "/reanim/Cattail.reanim", "start": 18252575, "end": 18278689}, {"filename": "/reanim/Cattail_blink1.png", "start": 18278689, "end": 18280918}, {"filename": "/reanim/Cattail_blink2.png", "start": 18280918, "end": 18283111}, {"filename": "/reanim/Cattail_eyebrow1.png", "start": 18283111, "end": 18283885}, {"filename": "/reanim/Cattail_eyebrow2.png", "start": 18283885, "end": 18284285}, {"filename": "/reanim/Cattail_hat.png", "start": 18284285, "end": 18293103}, {"filename": "/reanim/Cattail_head.png", "start": 18293103, "end": 18299096}, {"filename": "/reanim/Cattail_paw1.png", "start": 18299096, "end": 18301157}, {"filename": "/reanim/Cattail_paw2.png", "start": 18301157, "end": 18303093}, {"filename": "/reanim/Cattail_paw3.png", "start": 18303093, "end": 18304577}, {"filename": "/reanim/Cattail_spike.png", "start": 18304577, "end": 18305428}, {"filename": "/reanim/Cattail_tail.png", "start": 18305428, "end": 18307730}, {"filename": "/reanim/Cattail_tail2.png", "start": 18307730, "end": 18310136}, {"filename": "/reanim/Cattail_tail2_overlay.png", "start": 18310136, "end": 18311728}, {"filename": "/reanim/CherryBomb.reanim", "start": 18311728, "end": 18341982}, {"filename": "/reanim/CherryBomb_leaf1.png", "start": 18341982, "end": 18343024}, {"filename": "/reanim/CherryBomb_leaf1tip.png", "start": 18343024, "end": 18343565}, {"filename": "/reanim/CherryBomb_leaf2.png", "start": 18343565, "end": 18344372}, {"filename": "/reanim/CherryBomb_leaf2tip.png", "start": 18344372, "end": 18344617}, {"filename": "/reanim/CherryBomb_leaf3.png", "start": 18344617, "end": 18345526}, {"filename": "/reanim/CherryBomb_left1.png", "start": 18345526, "end": 18348750}, {"filename": "/reanim/CherryBomb_left3.png", "start": 18348750, "end": 18352936}, {"filename": "/reanim/CherryBomb_lefteye11.png", "start": 18352936, "end": 18353597}, {"filename": "/reanim/CherryBomb_lefteye12.png", "start": 18353597, "end": 18354322}, {"filename": "/reanim/CherryBomb_lefteye13.png", "start": 18354322, "end": 18355242}, {"filename": "/reanim/CherryBomb_lefteye14.png", "start": 18355242, "end": 18356345}, {"filename": "/reanim/CherryBomb_lefteye15.png", "start": 18356345, "end": 18357588}, {"filename": "/reanim/CherryBomb_lefteye21.png", "start": 18357588, "end": 18358746}, {"filename": "/reanim/CherryBomb_lefteye22.png", "start": 18358746, "end": 18359763}, {"filename": "/reanim/CherryBomb_lefteye23.png", "start": 18359763, "end": 18361015}, {"filename": "/reanim/CherryBomb_lefteye24.png", "start": 18361015, "end": 18362219}, {"filename": "/reanim/CherryBomb_lefteye25.png", "start": 18362219, "end": 18363541}, {"filename": "/reanim/CherryBomb_leftmouth1.png", "start": 18363541, "end": 18364686}, {"filename": "/reanim/CherryBomb_leftmouth2.png", "start": 18364686, "end": 18365992}, {"filename": "/reanim/CherryBomb_leftmouth3.png", "start": 18365992, "end": 18366954}, {"filename": "/reanim/CherryBomb_leftmouth4.png", "start": 18366954, "end": 18367969}, {"filename": "/reanim/CherryBomb_leftmouth5.png", "start": 18367969, "end": 18369108}, {"filename": "/reanim/CherryBomb_leftstem.png", "start": 18369108, "end": 18370232}, {"filename": "/reanim/CherryBomb_right1.png", "start": 18370232, "end": 18372914}, {"filename": "/reanim/CherryBomb_right3.png", "start": 18372914, "end": 18377061}, {"filename": "/reanim/CherryBomb_righteye11.png", "start": 18377061, "end": 18377686}, {"filename": "/reanim/CherryBomb_righteye12.png", "start": 18377686, "end": 18378188}, {"filename": "/reanim/CherryBomb_righteye13.png", "start": 18378188, "end": 18378789}, {"filename": "/reanim/CherryBomb_righteye14.png", "start": 18378789, "end": 18379533}, {"filename": "/reanim/CherryBomb_righteye15.png", "start": 18379533, "end": 18380455}, {"filename": "/reanim/CherryBomb_righteye21.png", "start": 18380455, "end": 18381257}, {"filename": "/reanim/CherryBomb_righteye22.png", "start": 18381257, "end": 18382139}, {"filename": "/reanim/CherryBomb_righteye23.png", "start": 18382139, "end": 18383143}, {"filename": "/reanim/CherryBomb_righteye24.png", "start": 18383143, "end": 18384450}, {"filename": "/reanim/CherryBomb_righteye25.png", "start": 18384450, "end": 18385528}, {"filename": "/reanim/CherryBomb_rightmouth1.png", "start": 18385528, "end": 18385956}, {"filename": "/reanim/CherryBomb_rightmouth2.png", "start": 18385956, "end": 18386575}, {"filename": "/reanim/CherryBomb_rightmouth3.png", "start": 18386575, "end": 18387436}, {"filename": "/reanim/CherryBomb_rightmouth4.png", "start": 18387436, "end": 18388503}, {"filename": "/reanim/CherryBomb_rightmouth5.png", "start": 18388503, "end": 18389701}, {"filename": "/reanim/CherryBomb_rightstem.png", "start": 18389701, "end": 18391981}, {"filename": "/reanim/Chomper.reanim", "start": 18391981, "end": 18551751}, {"filename": "/reanim/Chomper_Headleaf1.png", "start": 18551751, "end": 18552776}, {"filename": "/reanim/Chomper_Headleaf2.png", "start": 18552776, "end": 18553821}, {"filename": "/reanim/Chomper_Headleaf3.png", "start": 18553821, "end": 18554514}, {"filename": "/reanim/Chomper_Headleaf4.png", "start": 18554514, "end": 18555262}, {"filename": "/reanim/Chomper_bottomlip.png", "start": 18555262, "end": 18562950}, {"filename": "/reanim/Chomper_groundleaf1.png", "start": 18562950, "end": 18565289}, {"filename": "/reanim/Chomper_groundleaf1tip.png", "start": 18565289, "end": 18566602}, {"filename": "/reanim/Chomper_groundleaf2.png", "start": 18566602, "end": 18568718}, {"filename": "/reanim/Chomper_groundleaf2tip.png", "start": 18568718, "end": 18569467}, {"filename": "/reanim/Chomper_groundleaf3.png", "start": 18569467, "end": 18571186}, {"filename": "/reanim/Chomper_groundleaf4.png", "start": 18571186, "end": 18572870}, {"filename": "/reanim/Chomper_insidemouth.png", "start": 18572870, "end": 18577253}, {"filename": "/reanim/Chomper_spike.png", "start": 18577253, "end": 18578089}, {"filename": "/reanim/Chomper_stem1.png", "start": 18578089, "end": 18578692}, {"filename": "/reanim/Chomper_stem2.png", "start": 18578692, "end": 18580461}, {"filename": "/reanim/Chomper_stem3.png", "start": 18580461, "end": 18580893}, {"filename": "/reanim/Chomper_stomach.png", "start": 18580893, "end": 18583742}, {"filename": "/reanim/Chomper_tongue.png", "start": 18583742, "end": 18584952}, {"filename": "/reanim/Chomper_topjaw.png", "start": 18584952, "end": 18591188}, {"filename": "/reanim/Chomper_underjaw.png", "start": 18591188, "end": 18602169}, {"filename": "/reanim/CobCannon.reanim", "start": 18602169, "end": 18656949}, {"filename": "/reanim/CobCannon_blink1.png", "start": 18656949, "end": 18658583}, {"filename": "/reanim/CobCannon_blink2.png", "start": 18658583, "end": 18660162}, {"filename": "/reanim/CobCannon_cob.png", "start": 18660162, "end": 18681156}, {"filename": "/reanim/CobCannon_exhaust.png", "start": 18681156, "end": 18683437}, {"filename": "/reanim/CobCannon_fuse.png", "start": 18683437, "end": 18685090}, {"filename": "/reanim/CobCannon_husk1.png", "start": 18685090, "end": 18700386}, {"filename": "/reanim/CobCannon_husk2.png", "start": 18700386, "end": 18710668}, {"filename": "/reanim/CobCannon_husk3.2.png", "start": 18710668, "end": 18719438}, {"filename": "/reanim/CobCannon_husk3.png", "start": 18719438, "end": 18724690}, {"filename": "/reanim/CobCannon_husk4.2.png", "start": 18724690, "end": 18731554}, {"filename": "/reanim/CobCannon_husk4.png", "start": 18731554, "end": 18736127}, {"filename": "/reanim/CobCannon_log.png", "start": 18736127, "end": 18744043}, {"filename": "/reanim/CobCannon_wheel.png", "start": 18744043, "end": 18752013}, {"filename": "/reanim/Coffeebean.reanim", "start": 18752013, "end": 18755146}, {"filename": "/reanim/Coffeebean_eyelid.png", "start": 18755146, "end": 18756034}, {"filename": "/reanim/Coffeebean_eyelid2.png", "start": 18756034, "end": 18756917}, {"filename": "/reanim/Coffeebean_eyelid3.png", "start": 18756917, "end": 18757775}, {"filename": "/reanim/Coffeebean_head1.png", "start": 18757775, "end": 18764640}, {"filename": "/reanim/Coffeebean_head10.png", "start": 18764640, "end": 18768205}, {"filename": "/reanim/Coffeebean_head11.png", "start": 18768205, "end": 18770814}, {"filename": "/reanim/Coffeebean_head12.png", "start": 18770814, "end": 18772484}, {"filename": "/reanim/Coffeebean_head2.png", "start": 18772484, "end": 18778555}, {"filename": "/reanim/Coffeebean_head3.png", "start": 18778555, "end": 18783858}, {"filename": "/reanim/Coffeebean_head4.png", "start": 18783858, "end": 18785186}, {"filename": "/reanim/Coffeebean_head5.png", "start": 18785186, "end": 18787670}, {"filename": "/reanim/Coffeebean_head6.png", "start": 18787670, "end": 18790878}, {"filename": "/reanim/Coffeebean_head7.png", "start": 18790878, "end": 18795217}, {"filename": "/reanim/Coffeebean_head8.png", "start": 18795217, "end": 18800637}, {"filename": "/reanim/Coffeebean_head9.png", "start": 18800637, "end": 18804768}, {"filename": "/reanim/Coffeebean_leaf.png", "start": 18804768, "end": 18806634}, {"filename": "/reanim/CoinGlow.png", "start": 18806634, "end": 18809754}, {"filename": "/reanim/Coin_gold.reanim", "start": 18809754, "end": 18813223}, {"filename": "/reanim/Coin_silver.reanim", "start": 18813223, "end": 18816465}, {"filename": "/reanim/Cornpult.reanim", "start": 18816465, "end": 18913887}, {"filename": "/reanim/Cornpult_blink1.png", "start": 18913887, "end": 18914613}, {"filename": "/reanim/Cornpult_blink2.png", "start": 18914613, "end": 18915368}, {"filename": "/reanim/Cornpult_body.png", "start": 18915368, "end": 18921937}, {"filename": "/reanim/Cornpult_butter.png", "start": 18921937, "end": 18925802}, {"filename": "/reanim/Cornpult_butter_splat.png", "start": 18925802, "end": 18930288}, {"filename": "/reanim/Cornpult_eyebrow.png", "start": 18930288, "end": 18930733}, {"filename": "/reanim/Cornpult_husk1.png", "start": 18930733, "end": 18932282}, {"filename": "/reanim/Cornpult_husk2.png", "start": 18932282, "end": 18933492}, {"filename": "/reanim/Cornpult_husk3.png", "start": 18933492, "end": 18934563}, {"filename": "/reanim/Cornpult_husk4.png", "start": 18934563, "end": 18935616}, {"filename": "/reanim/Cornpult_husk5.png", "start": 18935616, "end": 18936522}, {"filename": "/reanim/Cornpult_husk6.png", "start": 18936522, "end": 18937070}, {"filename": "/reanim/Cornpult_husktip1.png", "start": 18937070, "end": 18937727}, {"filename": "/reanim/Cornpult_husktip2.png", "start": 18937727, "end": 18938223}, {"filename": "/reanim/Cornpult_husktip3.png", "start": 18938223, "end": 18938679}, {"filename": "/reanim/Cornpult_kernal.png", "start": 18938679, "end": 18939867}, {"filename": "/reanim/Cornpult_stalk1.png", "start": 18939867, "end": 18940401}, {"filename": "/reanim/Cornpult_stalk2.png", "start": 18940401, "end": 18941030}, {"filename": "/reanim/Cornpult_stalk3.png", "start": 18941030, "end": 18941575}, {"filename": "/reanim/Cornpult_stalk4.png", "start": 18941575, "end": 18942045}, {"filename": "/reanim/CrazyDave.reanim", "start": 18942045, "end": 19353386}, {"filename": "/reanim/CrazyDave_Zombie_arm1.png", "start": 19353386, "end": 19387272}, {"filename": "/reanim/CrazyDave_beard.png", "start": 19387272, "end": 19413214}, {"filename": "/reanim/CrazyDave_blink1.png", "start": 19413214, "end": 19415892}, {"filename": "/reanim/CrazyDave_blink2.png", "start": 19415892, "end": 19418267}, {"filename": "/reanim/CrazyDave_body1.jpg", "start": 19418267, "end": 19432243}, {"filename": "/reanim/CrazyDave_body1_.png", "start": 19432243, "end": 19442627}, {"filename": "/reanim/CrazyDave_body2.png", "start": 19442627, "end": 19529947}, {"filename": "/reanim/CrazyDave_eye.png", "start": 19529947, "end": 19532660}, {"filename": "/reanim/CrazyDave_eyebrow.png", "start": 19532660, "end": 19533861}, {"filename": "/reanim/CrazyDave_foot1.png", "start": 19533861, "end": 19559413}, {"filename": "/reanim/CrazyDave_foot2.png", "start": 19559413, "end": 19577462}, {"filename": "/reanim/CrazyDave_handinghand.png", "start": 19577462, "end": 19592074}, {"filename": "/reanim/CrazyDave_handinghand2.png", "start": 19592074, "end": 19595268}, {"filename": "/reanim/CrazyDave_handinghand3.png", "start": 19595268, "end": 19598291}, {"filename": "/reanim/CrazyDave_head.png", "start": 19598291, "end": 19644588}, {"filename": "/reanim/CrazyDave_innerarm.png", "start": 19644588, "end": 19654374}, {"filename": "/reanim/CrazyDave_innerfinger1.png", "start": 19654374, "end": 19657240}, {"filename": "/reanim/CrazyDave_innerfinger2.png", "start": 19657240, "end": 19660421}, {"filename": "/reanim/CrazyDave_innerfinger3.png", "start": 19660421, "end": 19663562}, {"filename": "/reanim/CrazyDave_innerfinger4.png", "start": 19663562, "end": 19666341}, {"filename": "/reanim/CrazyDave_innerhand.png", "start": 19666341, "end": 19675474}, {"filename": "/reanim/CrazyDave_innerpants.png", "start": 19675474, "end": 19681828}, {"filename": "/reanim/CrazyDave_mouth1.png", "start": 19681828, "end": 19686004}, {"filename": "/reanim/CrazyDave_mouth2.png", "start": 19686004, "end": 19687256}, {"filename": "/reanim/CrazyDave_mouth3.png", "start": 19687256, "end": 19688891}, {"filename": "/reanim/CrazyDave_mouth4.png", "start": 19688891, "end": 19690340}, {"filename": "/reanim/CrazyDave_mouth5.png", "start": 19690340, "end": 19692144}, {"filename": "/reanim/CrazyDave_mouth6.png", "start": 19692144, "end": 19692645}, {"filename": "/reanim/CrazyDave_outerarm.png", "start": 19692645, "end": 19708628}, {"filename": "/reanim/CrazyDave_outerfinger1.png", "start": 19708628, "end": 19711787}, {"filename": "/reanim/CrazyDave_outerfinger2.png", "start": 19711787, "end": 19714545}, {"filename": "/reanim/CrazyDave_outerfinger3.png", "start": 19714545, "end": 19717275}, {"filename": "/reanim/CrazyDave_outerfinger4.png", "start": 19717275, "end": 19719754}, {"filename": "/reanim/CrazyDave_outerhand.png", "start": 19719754, "end": 19727428}, {"filename": "/reanim/CrazyDave_pot.png", "start": 19727428, "end": 19746154}, {"filename": "/reanim/CrazyDave_pot_inside.png", "start": 19746154, "end": 19750626}, {"filename": "/reanim/CrazyDave_zombie_arm2.png", "start": 19750626, "end": 19785742}, {"filename": "/reanim/CrazyDave_zombie_body.png", "start": 19785742, "end": 19800455}, {"filename": "/reanim/CrazyDave_zombie_foot1.png", "start": 19800455, "end": 19815258}, {"filename": "/reanim/CrazyDave_zombie_foot2.png", "start": 19815258, "end": 19829188}, {"filename": "/reanim/CrazyDave_zombie_grabhand.png", "start": 19829188, "end": 19838193}, {"filename": "/reanim/CrazyDave_zombie_hand1.png", "start": 19838193, "end": 19853206}, {"filename": "/reanim/CrazyDave_zombie_hand2.png", "start": 19853206, "end": 19868219}, {"filename": "/reanim/CrazyDave_zombie_head1.png", "start": 19868219, "end": 19903122}, {"filename": "/reanim/CrazyDave_zombie_head2.png", "start": 19903122, "end": 19909526}, {"filename": "/reanim/CrazyDave_zombie_lowerleg1.png", "start": 19909526, "end": 19918546}, {"filename": "/reanim/CrazyDave_zombie_lowerleg2.png", "start": 19918546, "end": 19934058}, {"filename": "/reanim/CrazyDave_zombie_rope.png", "start": 19934058, "end": 19935154}, {"filename": "/reanim/CrazyDave_zombie_upperleg1.png", "start": 19935154, "end": 19941360}, {"filename": "/reanim/CrazyDave_zombie_upperleg2.png", "start": 19941360, "end": 19951215}, {"filename": "/reanim/Credits_AnyHour.reanim", "start": 19951215, "end": 19990436}, {"filename": "/reanim/Credits_BigBrain.reanim", "start": 19990436, "end": 19991247}, {"filename": "/reanim/Credits_Bossdance.reanim", "start": 19991247, "end": 20010566}, {"filename": "/reanim/Credits_CircleFade.png", "start": 20010566, "end": 20014675}, {"filename": "/reanim/Credits_CrazyDave.reanim", "start": 20014675, "end": 20049653}, {"filename": "/reanim/Credits_CrazyDave_rope.png", "start": 20049653, "end": 20050786}, {"filename": "/reanim/Credits_DiscoLights.png", "start": 20050786, "end": 20054310}, {"filename": "/reanim/Credits_DiscoLights.reanim", "start": 20054310, "end": 20056442}, {"filename": "/reanim/Credits_Flower_petal1.png", "start": 20056442, "end": 20060666}, {"filename": "/reanim/Credits_Flower_petal2.png", "start": 20060666, "end": 20067836}, {"filename": "/reanim/Credits_Flower_petal3.png", "start": 20067836, "end": 20073948}, {"filename": "/reanim/Credits_Flower_petal4.png", "start": 20073948, "end": 20081680}, {"filename": "/reanim/Credits_Flower_petal5.png", "start": 20081680, "end": 20087690}, {"filename": "/reanim/Credits_Flower_petal6.png", "start": 20087690, "end": 20095521}, {"filename": "/reanim/Credits_Flower_petal7.png", "start": 20095521, "end": 20100597}, {"filename": "/reanim/Credits_Flower_petal8.png", "start": 20100597, "end": 20105222}, {"filename": "/reanim/Credits_Flower_petals.reanim", "start": 20105222, "end": 20107506}, {"filename": "/reanim/Credits_Football.reanim", "start": 20107506, "end": 20114755}, {"filename": "/reanim/Credits_Infantry.reanim", "start": 20114755, "end": 20118451}, {"filename": "/reanim/Credits_Jackbox.reanim", "start": 20118451, "end": 20120920}, {"filename": "/reanim/Credits_MTV.png", "start": 20120920, "end": 20138655}, {"filename": "/reanim/Credits_Main.reanim", "start": 20138655, "end": 20229290}, {"filename": "/reanim/Credits_Main2.reanim", "start": 20229290, "end": 20328840}, {"filename": "/reanim/Credits_Main3.reanim", "start": 20328840, "end": 20578649}, {"filename": "/reanim/Credits_SolarPower.reanim", "start": 20578649, "end": 20595750}, {"filename": "/reanim/Credits_Throat.reanim", "start": 20595750, "end": 20608510}, {"filename": "/reanim/Credits_Tombstones.reanim", "start": 20608510, "end": 20609955}, {"filename": "/reanim/Credits_WeAreTheUndead.reanim", "start": 20609955, "end": 20630543}, {"filename": "/reanim/Credits_WhiteLine.png", "start": 20630543, "end": 20631654}, {"filename": "/reanim/Credits_ZombieArmy1.reanim", "start": 20631654, "end": 20639117}, {"filename": "/reanim/Credits_ZombieArmy2.reanim", "start": 20639117, "end": 20644323}, {"filename": "/reanim/Credits_box.png", "start": 20644323, "end": 20644472}, {"filename": "/reanim/Credits_fogmachine.png", "start": 20644472, "end": 20649328}, {"filename": "/reanim/Credits_jaw.png", "start": 20649328, "end": 20662791}, {"filename": "/reanim/Credits_light_blue.png", "start": 20662791, "end": 20665439}, {"filename": "/reanim/Credits_light_red.png", "start": 20665439, "end": 20671440}, {"filename": "/reanim/Credits_light_yellow.png", "start": 20671440, "end": 20676046}, {"filename": "/reanim/Credits_lights.png", "start": 20676046, "end": 20691096}, {"filename": "/reanim/Credits_mic.png", "start": 20691096, "end": 20695191}, {"filename": "/reanim/Credits_nozombies.jpg", "start": 20695191, "end": 20709033}, {"filename": "/reanim/Credits_plate.png", "start": 20709033, "end": 20722253}, {"filename": "/reanim/Credits_plateshadow.png", "start": 20722253, "end": 20722898}, {"filename": "/reanim/Credits_sadheart.png", "start": 20722898, "end": 20734809}, {"filename": "/reanim/Credits_sadheart_happy.png", "start": 20734809, "end": 20735573}, {"filename": "/reanim/Credits_speaker.png", "start": 20735573, "end": 20742785}, {"filename": "/reanim/Credits_speaker_overlay.png", "start": 20742785, "end": 20748618}, {"filename": "/reanim/Credits_stage.png", "start": 20748618, "end": 20776055}, {"filename": "/reanim/Credits_stage.reanim", "start": 20776055, "end": 20784069}, {"filename": "/reanim/Credits_throat.jpg", "start": 20784069, "end": 20800150}, {"filename": "/reanim/Credits_wearetheundead.jpg", "start": 20800150, "end": 20822227}, {"filename": "/reanim/Credits_wearetheundead_.png", "start": 20822227, "end": 20829114}, {"filename": "/reanim/Diamond.png", "start": 20829114, "end": 20834235}, {"filename": "/reanim/Diamond.reanim", "start": 20834235, "end": 20838024}, {"filename": "/reanim/Diamond_shine1.png", "start": 20838024, "end": 20839982}, {"filename": "/reanim/Diamond_shine2.png", "start": 20839982, "end": 20842746}, {"filename": "/reanim/Diamond_shine3.png", "start": 20842746, "end": 20845618}, {"filename": "/reanim/Diamond_shine4.png", "start": 20845618, "end": 20848418}, {"filename": "/reanim/Diamond_shine5.png", "start": 20848418, "end": 20850387}, {"filename": "/reanim/Digger_rising_dirt.png", "start": 20850387, "end": 20851672}, {"filename": "/reanim/Digger_rising_dirt.reanim", "start": 20851672, "end": 20852334}, {"filename": "/reanim/Digger_rising_dirt2.png", "start": 20852334, "end": 20854535}, {"filename": "/reanim/Digger_rising_dirt3.png", "start": 20854535, "end": 20857923}, {"filename": "/reanim/Digger_rising_dirt4.png", "start": 20857923, "end": 20861925}, {"filename": "/reanim/Digger_rising_dirt5.png", "start": 20861925, "end": 20866982}, {"filename": "/reanim/Digger_rising_dirt6.png", "start": 20866982, "end": 20872680}, {"filename": "/reanim/Digger_rising_dirt7.png", "start": 20872680, "end": 20879081}, {"filename": "/reanim/Digger_rising_dirt8.png", "start": 20879081, "end": 20886346}, {"filename": "/reanim/DoomShroom.reanim", "start": 20886346, "end": 20899574}, {"filename": "/reanim/DoomShroom_body.png", "start": 20899574, "end": 20903398}, {"filename": "/reanim/DoomShroom_head1.png", "start": 20903398, "end": 20909544}, {"filename": "/reanim/DoomShroom_head2.png", "start": 20909544, "end": 20917650}, {"filename": "/reanim/DoomShroom_head3.png", "start": 20917650, "end": 20928875}, {"filename": "/reanim/DoomShroom_sleepinghead.png", "start": 20928875, "end": 20934767}, {"filename": "/reanim/FinalWave.png", "start": 20934767, "end": 20939397}, {"filename": "/reanim/FinalWave.reanim", "start": 20939397, "end": 20940273}, {"filename": "/reanim/FirePea.png", "start": 20940273, "end": 20942422}, {"filename": "/reanim/FirePea.reanim", "start": 20942422, "end": 20948431}, {"filename": "/reanim/FirePea_flame1.png", "start": 20948431, "end": 20950835}, {"filename": "/reanim/FirePea_flame2.png", "start": 20950835, "end": 20952891}, {"filename": "/reanim/FirePea_flame3.png", "start": 20952891, "end": 20954988}, {"filename": "/reanim/FirePea_spark.png", "start": 20954988, "end": 20955816}, {"filename": "/reanim/FlashReanimExport.jsfl", "start": 20955816, "end": 20971034}, {"filename": "/reanim/FumeShroom.reanim", "start": 20971034, "end": 20990873}, {"filename": "/reanim/FumeShroom_blink1.png", "start": 20990873, "end": 20991952}, {"filename": "/reanim/FumeShroom_blink2.png", "start": 20991952, "end": 20993246}, {"filename": "/reanim/FumeShroom_body.png", "start": 20993246, "end": 20998520}, {"filename": "/reanim/FumeShroom_head.png", "start": 20998520, "end": 21007947}, {"filename": "/reanim/FumeShroom_spout.png", "start": 21007947, "end": 21008762}, {"filename": "/reanim/FumeShroom_tip.png", "start": 21008762, "end": 21010076}, {"filename": "/reanim/Garlic.reanim", "start": 21010076, "end": 21015942}, {"filename": "/reanim/Garlic_blink1.png", "start": 21015942, "end": 21017056}, {"filename": "/reanim/Garlic_blink2.png", "start": 21017056, "end": 21018112}, {"filename": "/reanim/Garlic_body1.png", "start": 21018112, "end": 21025305}, {"filename": "/reanim/Garlic_body2.png", "start": 21025305, "end": 21032308}, {"filename": "/reanim/Garlic_body3.png", "start": 21032308, "end": 21038800}, {"filename": "/reanim/Garlic_stem1.png", "start": 21038800, "end": 21039276}, {"filename": "/reanim/Garlic_stem2.png", "start": 21039276, "end": 21039668}, {"filename": "/reanim/Garlic_stem3.png", "start": 21039668, "end": 21040210}, {"filename": "/reanim/Garlic_stink1.png", "start": 21040210, "end": 21041742}, {"filename": "/reanim/Garlic_stink2.png", "start": 21041742, "end": 21043005}, {"filename": "/reanim/Garlic_stink3.png", "start": 21043005, "end": 21043882}, {"filename": "/reanim/Garlic_stink4.png", "start": 21043882, "end": 21044377}, {"filename": "/reanim/GatlingPea.reanim", "start": 21044377, "end": 21105755}, {"filename": "/reanim/GatlingPea_barrel.png", "start": 21105755, "end": 21107342}, {"filename": "/reanim/GatlingPea_blink1.png", "start": 21107342, "end": 21109055}, {"filename": "/reanim/GatlingPea_blink2.png", "start": 21109055, "end": 21110680}, {"filename": "/reanim/GatlingPea_head.png", "start": 21110680, "end": 21117660}, {"filename": "/reanim/GatlingPea_helmet.png", "start": 21117660, "end": 21127204}, {"filename": "/reanim/GatlingPea_mouth.png", "start": 21127204, "end": 21132313}, {"filename": "/reanim/GatlingPea_mouth_overlay.png", "start": 21132313, "end": 21136266}, {"filename": "/reanim/GloomShroom.reanim", "start": 21136266, "end": 21198626}, {"filename": "/reanim/GloomShroom_base.png", "start": 21198626, "end": 21202227}, {"filename": "/reanim/GloomShroom_blink1.png", "start": 21202227, "end": 21205617}, {"filename": "/reanim/GloomShroom_blink2.png", "start": 21205617, "end": 21208911}, {"filename": "/reanim/GloomShroom_face1.png", "start": 21208911, "end": 21215896}, {"filename": "/reanim/GloomShroom_face2.png", "start": 21215896, "end": 21222907}, {"filename": "/reanim/GloomShroom_head.png", "start": 21222907, "end": 21231529}, {"filename": "/reanim/GloomShroom_shooter1.png", "start": 21231529, "end": 21233197}, {"filename": "/reanim/GloomShroom_shooter2.png", "start": 21233197, "end": 21234857}, {"filename": "/reanim/GloomShroom_shooter3.png", "start": 21234857, "end": 21235947}, {"filename": "/reanim/GloomShroom_shooter4.png", "start": 21235947, "end": 21237574}, {"filename": "/reanim/GloomShroom_shooter5.png", "start": 21237574, "end": 21239064}, {"filename": "/reanim/GloomShroom_stem1.png", "start": 21239064, "end": 21239843}, {"filename": "/reanim/GloomShroom_stem2.png", "start": 21239843, "end": 21241380}, {"filename": "/reanim/GloomShroom_stem3.png", "start": 21241380, "end": 21242568}, {"filename": "/reanim/GoldMagnet.reanim", "start": 21242568, "end": 21293379}, {"filename": "/reanim/GoldMagnet_bigspark1.png", "start": 21293379, "end": 21295258}, {"filename": "/reanim/GoldMagnet_bigspark2.png", "start": 21295258, "end": 21297300}, {"filename": "/reanim/GoldMagnet_bigspark3.png", "start": 21297300, "end": 21299034}, {"filename": "/reanim/GoldMagnet_blink1.png", "start": 21299034, "end": 21301954}, {"filename": "/reanim/GoldMagnet_blink2.png", "start": 21301954, "end": 21304799}, {"filename": "/reanim/GoldMagnet_eyebrow.png", "start": 21304799, "end": 21305219}, {"filename": "/reanim/GoldMagnet_head1.png", "start": 21305219, "end": 21321504}, {"filename": "/reanim/GoldMagnet_head2.png", "start": 21321504, "end": 21335474}, {"filename": "/reanim/GoldMagnet_head3.png", "start": 21335474, "end": 21346001}, {"filename": "/reanim/GoldMagnet_leaf1.png", "start": 21346001, "end": 21347793}, {"filename": "/reanim/GoldMagnet_leaf2.png", "start": 21347793, "end": 21349639}, {"filename": "/reanim/GoldMagnet_leaf3.png", "start": 21349639, "end": 21351866}, {"filename": "/reanim/GoldMagnet_leaf4.png", "start": 21351866, "end": 21353001}, {"filename": "/reanim/GoldMagnet_leaf5.png", "start": 21353001, "end": 21354139}, {"filename": "/reanim/GoldMagnet_smallspark1.png", "start": 21354139, "end": 21355634}, {"filename": "/reanim/GoldMagnet_smallspark2.png", "start": 21355634, "end": 21356935}, {"filename": "/reanim/GoldMagnet_smallspark3.png", "start": 21356935, "end": 21358350}, {"filename": "/reanim/GoldMagnet_stem.png", "start": 21358350, "end": 21359807}, {"filename": "/reanim/Gravebuster.reanim", "start": 21359807, "end": 21389535}, {"filename": "/reanim/Gravebuster_eyebrows.png", "start": 21389535, "end": 21391004}, {"filename": "/reanim/Gravebuster_facevine.png", "start": 21391004, "end": 21391654}, {"filename": "/reanim/Gravebuster_head.png", "start": 21391654, "end": 21396327}, {"filename": "/reanim/Gravebuster_leaf1.png", "start": 21396327, "end": 21397008}, {"filename": "/reanim/Gravebuster_leaf2.png", "start": 21397008, "end": 21397480}, {"filename": "/reanim/Gravebuster_tooth1.png", "start": 21397480, "end": 21398706}, {"filename": "/reanim/Gravebuster_tooth2.png", "start": 21398706, "end": 21399728}, {"filename": "/reanim/Gravebuster_tooth3.png", "start": 21399728, "end": 21400612}, {"filename": "/reanim/Gravebuster_tooth4.png", "start": 21400612, "end": 21401657}, {"filename": "/reanim/Gravebuster_tooth5.png", "start": 21401657, "end": 21402751}, {"filename": "/reanim/Gravebuster_tooth6.png", "start": 21402751, "end": 21403854}, {"filename": "/reanim/Gravebuster_vines.png", "start": 21403854, "end": 21407441}, {"filename": "/reanim/Ground.png", "start": 21407441, "end": 21407658}, {"filename": "/reanim/Hammer.reanim", "start": 21407658, "end": 21412164}, {"filename": "/reanim/Hammer_2.png", "start": 21412164, "end": 21414321}, {"filename": "/reanim/Hammer_3.png", "start": 21414321, "end": 21414747}, {"filename": "/reanim/HypnoShroom.reanim", "start": 21414747, "end": 21426787}, {"filename": "/reanim/HypnoShroom_body.png", "start": 21426787, "end": 21430304}, {"filename": "/reanim/HypnoShroom_eye1.png", "start": 21430304, "end": 21431178}, {"filename": "/reanim/HypnoShroom_eye2.png", "start": 21431178, "end": 21431830}, {"filename": "/reanim/HypnoShroom_head.png", "start": 21431830, "end": 21439335}, {"filename": "/reanim/HypnoShroom_sleepeye.png", "start": 21439335, "end": 21439655}, {"filename": "/reanim/IceShroom.reanim", "start": 21439655, "end": 21445515}, {"filename": "/reanim/IceShroom_base.png", "start": 21445515, "end": 21448353}, {"filename": "/reanim/IceShroom_blink1.png", "start": 21448353, "end": 21449048}, {"filename": "/reanim/IceShroom_blink2.png", "start": 21449048, "end": 21449756}, {"filename": "/reanim/IceShroom_body.png", "start": 21449756, "end": 21454727}, {"filename": "/reanim/IceShroom_head.png", "start": 21454727, "end": 21465548}, {"filename": "/reanim/Imitater.reanim", "start": 21465548, "end": 21497732}, {"filename": "/reanim/Imitater_blink1.png", "start": 21497732, "end": 21499875}, {"filename": "/reanim/Imitater_blink2.png", "start": 21499875, "end": 21501877}, {"filename": "/reanim/Imitater_body.png", "start": 21501877, "end": 21508457}, {"filename": "/reanim/Imitater_eyebrow.png", "start": 21508457, "end": 21508820}, {"filename": "/reanim/Imitater_hat.png", "start": 21508820, "end": 21510799}, {"filename": "/reanim/Imitater_root1.png", "start": 21510799, "end": 21511298}, {"filename": "/reanim/Imitater_root2.png", "start": 21511298, "end": 21511608}, {"filename": "/reanim/Imitater_root3.png", "start": 21511608, "end": 21511995}, {"filename": "/reanim/Imitater_root4.png", "start": 21511995, "end": 21512382}, {"filename": "/reanim/Imitater_spin1.png", "start": 21512382, "end": 21519811}, {"filename": "/reanim/Imitater_spin2.png", "start": 21519811, "end": 21528784}, {"filename": "/reanim/Imitater_spin3.png", "start": 21528784, "end": 21536293}, {"filename": "/reanim/Imitater_spin4.png", "start": 21536293, "end": 21543935}, {"filename": "/reanim/Imitater_spin5.png", "start": 21543935, "end": 21551262}, {"filename": "/reanim/Imitater_spin6.png", "start": 21551262, "end": 21559353}, {"filename": "/reanim/Jalapeno.reanim", "start": 21559353, "end": 21571858}, {"filename": "/reanim/Jalapeno_body.png", "start": 21571858, "end": 21577445}, {"filename": "/reanim/Jalapeno_body2.png", "start": 21577445, "end": 21588762}, {"filename": "/reanim/Jalapeno_cheek.png", "start": 21588762, "end": 21589495}, {"filename": "/reanim/Jalapeno_eye1.png", "start": 21589495, "end": 21591089}, {"filename": "/reanim/Jalapeno_eye2.png", "start": 21591089, "end": 21591673}, {"filename": "/reanim/Jalapeno_eyebrow1.png", "start": 21591673, "end": 21592750}, {"filename": "/reanim/Jalapeno_eyebrow2.png", "start": 21592750, "end": 21593352}, {"filename": "/reanim/Jalapeno_mouth.png", "start": 21593352, "end": 21594817}, {"filename": "/reanim/Jalapeno_stem.png", "start": 21594817, "end": 21595956}, {"filename": "/reanim/LawnMower.reanim", "start": 21595956, "end": 21620687}, {"filename": "/reanim/LawnMower_body.png", "start": 21620687, "end": 21631685}, {"filename": "/reanim/LawnMower_body_tricked.png", "start": 21631685, "end": 21641826}, {"filename": "/reanim/LawnMower_dice_tricked.png", "start": 21641826, "end": 21643384}, {"filename": "/reanim/LawnMower_engine.png", "start": 21643384, "end": 21646163}, {"filename": "/reanim/LawnMower_engine_tricked.png", "start": 21646163, "end": 21653696}, {"filename": "/reanim/LawnMower_exhaust.png", "start": 21653696, "end": 21654266}, {"filename": "/reanim/LawnMower_exhaust_tricked.png", "start": 21654266, "end": 21655771}, {"filename": "/reanim/LawnMower_pull.png", "start": 21655771, "end": 21656790}, {"filename": "/reanim/LawnMower_wheel1.png", "start": 21656790, "end": 21658266}, {"filename": "/reanim/LawnMower_wheel2.png", "start": 21658266, "end": 21659668}, {"filename": "/reanim/LawnMower_wheelpiece.png", "start": 21659668, "end": 21661041}, {"filename": "/reanim/LawnMower_wheelshine.png", "start": 21661041, "end": 21661392}, {"filename": "/reanim/LawnMoweredZombie.reanim", "start": 21661392, "end": 21661943}, {"filename": "/reanim/LilyPad.reanim", "start": 21661943, "end": 21662376}, {"filename": "/reanim/LilyPad_blink1.png", "start": 21662376, "end": 21663797}, {"filename": "/reanim/LilyPad_blink2.png", "start": 21663797, "end": 21665148}, {"filename": "/reanim/LilyPad_body.png", "start": 21665148, "end": 21675183}, {"filename": "/reanim/LoadBar_Zombiehead.reanim", "start": 21675183, "end": 21686010}, {"filename": "/reanim/LoadBar_sprout.reanim", "start": 21686010, "end": 21691870}, {"filename": "/reanim/Magnetshroom.reanim", "start": 21691870, "end": 21774103}, {"filename": "/reanim/Magnetshroom_dot.png", "start": 21774103, "end": 21774864}, {"filename": "/reanim/Magnetshroom_eye1.png", "start": 21774864, "end": 21775439}, {"filename": "/reanim/Magnetshroom_eye2.png", "start": 21775439, "end": 21775744}, {"filename": "/reanim/Magnetshroom_eye3.png", "start": 21775744, "end": 21776049}, {"filename": "/reanim/Magnetshroom_eyeblink1.png", "start": 21776049, "end": 21776523}, {"filename": "/reanim/Magnetshroom_eyeblink2.png", "start": 21776523, "end": 21776950}, {"filename": "/reanim/Magnetshroom_eyeblink3.png", "start": 21776950, "end": 21777732}, {"filename": "/reanim/Magnetshroom_eyeblink4.png", "start": 21777732, "end": 21778482}, {"filename": "/reanim/Magnetshroom_eyebrow.png", "start": 21778482, "end": 21778916}, {"filename": "/reanim/Magnetshroom_head1.png", "start": 21778916, "end": 21788734}, {"filename": "/reanim/Magnetshroom_head2.png", "start": 21788734, "end": 21796662}, {"filename": "/reanim/Magnetshroom_head3.png", "start": 21796662, "end": 21807840}, {"filename": "/reanim/Magnetshroom_head4.png", "start": 21807840, "end": 21820626}, {"filename": "/reanim/Magnetshroom_idle_electric1.png", "start": 21820626, "end": 21821781}, {"filename": "/reanim/Magnetshroom_idle_electric2.png", "start": 21821781, "end": 21823058}, {"filename": "/reanim/Magnetshroom_idle_electric3.png", "start": 21823058, "end": 21824238}, {"filename": "/reanim/Magnetshroom_shock1.png", "start": 21824238, "end": 21825152}, {"filename": "/reanim/Magnetshroom_shock2.png", "start": 21825152, "end": 21826058}, {"filename": "/reanim/Magnetshroom_shock3.png", "start": 21826058, "end": 21827094}, {"filename": "/reanim/Magnetshroom_spark.png", "start": 21827094, "end": 21827286}, {"filename": "/reanim/Magnetshroom_stem.png", "start": 21827286, "end": 21828338}, {"filename": "/reanim/Magnetshroom_stemcap.png", "start": 21828338, "end": 21831542}, {"filename": "/reanim/Magnetshroom_stemcap_overlay.png", "start": 21831542, "end": 21834389}, {"filename": "/reanim/Marigold.reanim", "start": 21834389, "end": 21858472}, {"filename": "/reanim/Marigold_blink1.png", "start": 21858472, "end": 21859749}, {"filename": "/reanim/Marigold_blink2.png", "start": 21859749, "end": 21860956}, {"filename": "/reanim/Marigold_eyebrow1.png", "start": 21860956, "end": 21861375}, {"filename": "/reanim/Marigold_eyebrow2.png", "start": 21861375, "end": 21861728}, {"filename": "/reanim/Marigold_head.png", "start": 21861728, "end": 21865365}, {"filename": "/reanim/Marigold_mouth.png", "start": 21865365, "end": 21866305}, {"filename": "/reanim/Marigold_petals.png", "start": 21866305, "end": 21869335}, {"filename": "/reanim/Melonpult.reanim", "start": 21869335, "end": 21926732}, {"filename": "/reanim/Melonpult_blink1.png", "start": 21926732, "end": 21928162}, {"filename": "/reanim/Melonpult_blink2.png", "start": 21928162, "end": 21929521}, {"filename": "/reanim/Melonpult_body.png", "start": 21929521, "end": 21935001}, {"filename": "/reanim/Melonpult_eyebrow.png", "start": 21935001, "end": 21935359}, {"filename": "/reanim/Melonpult_melon.png", "start": 21935359, "end": 21940742}, {"filename": "/reanim/Melonpult_stalk.png", "start": 21940742, "end": 21943047}, {"filename": "/reanim/PeaShooter.reanim", "start": 21943047, "end": 22031174}, {"filename": "/reanim/PeaShooterSingle.reanim", "start": 22031174, "end": 22087076}, {"filename": "/reanim/PeaShooter_Head.png", "start": 22087076, "end": 22093829}, {"filename": "/reanim/PeaShooter_Lips.png", "start": 22093829, "end": 22096787}, {"filename": "/reanim/PeaShooter_backleaf.png", "start": 22096787, "end": 22098576}, {"filename": "/reanim/PeaShooter_backleaf_lefttip.png", "start": 22098576, "end": 22099304}, {"filename": "/reanim/PeaShooter_backleaf_righttip.png", "start": 22099304, "end": 22099823}, {"filename": "/reanim/PeaShooter_blink1.png", "start": 22099823, "end": 22101378}, {"filename": "/reanim/PeaShooter_blink2.png", "start": 22101378, "end": 22102838}, {"filename": "/reanim/PeaShooter_eyebrow.png", "start": 22102838, "end": 22103480}, {"filename": "/reanim/PeaShooter_frontleaf.png", "start": 22103480, "end": 22106795}, {"filename": "/reanim/PeaShooter_frontleaf_lefttip.png", "start": 22106795, "end": 22108127}, {"filename": "/reanim/PeaShooter_frontleaf_righttip.png", "start": 22108127, "end": 22109212}, {"filename": "/reanim/PeaShooter_headleaf_2rdfarthest.png", "start": 22109212, "end": 22110243}, {"filename": "/reanim/PeaShooter_headleaf_3rdfarthest.png", "start": 22110243, "end": 22111186}, {"filename": "/reanim/PeaShooter_headleaf_farthest.png", "start": 22111186, "end": 22111990}, {"filename": "/reanim/PeaShooter_headleaf_nearest.png", "start": 22111990, "end": 22113164}, {"filename": "/reanim/PeaShooter_headleaf_tip_bottom.png", "start": 22113164, "end": 22114010}, {"filename": "/reanim/PeaShooter_headleaf_tip_top.png", "start": 22114010, "end": 22114679}, {"filename": "/reanim/PeaShooter_mouth.png", "start": 22114679, "end": 22118003}, {"filename": "/reanim/PeaShooter_sprout.png", "start": 22118003, "end": 22118784}, {"filename": "/reanim/PeaShooter_stalk_bottom.png", "start": 22118784, "end": 22119963}, {"filename": "/reanim/PeaShooter_stalk_top.png", "start": 22119963, "end": 22120784}, {"filename": "/reanim/Plantern.reanim", "start": 22120784, "end": 22138924}, {"filename": "/reanim/Plantern_body.png", "start": 22138924, "end": 22148849}, {"filename": "/reanim/Plantern_eyes.png", "start": 22148849, "end": 22149798}, {"filename": "/reanim/Plantern_eyes2.png", "start": 22149798, "end": 22151077}, {"filename": "/reanim/Plantern_leaf1.png", "start": 22151077, "end": 22151703}, {"filename": "/reanim/Plantern_leaf2.png", "start": 22151703, "end": 22152921}, {"filename": "/reanim/Plantern_leaf3.png", "start": 22152921, "end": 22153678}, {"filename": "/reanim/Plantern_leaf4.png", "start": 22153678, "end": 22154358}, {"filename": "/reanim/Plantern_leaf5.png", "start": 22154358, "end": 22155398}, {"filename": "/reanim/Plantern_stem.png", "start": 22155398, "end": 22157658}, {"filename": "/reanim/PoolCleaner.reanim", "start": 22157658, "end": 22190562}, {"filename": "/reanim/PoolCleaner_2.png", "start": 22190562, "end": 22196071}, {"filename": "/reanim/PoolCleaner_body1.png", "start": 22196071, "end": 22201390}, {"filename": "/reanim/PoolCleaner_body2.png", "start": 22201390, "end": 22203221}, {"filename": "/reanim/PoolCleaner_bubble.png", "start": 22203221, "end": 22204243}, {"filename": "/reanim/PoolCleaner_funnel.png", "start": 22204243, "end": 22207264}, {"filename": "/reanim/PoolCleaner_funnel_overlay.png", "start": 22207264, "end": 22209793}, {"filename": "/reanim/PoolCleaner_tube.png", "start": 22209793, "end": 22211200}, {"filename": "/reanim/PoolCleaner_tubeend.png", "start": 22211200, "end": 22212441}, {"filename": "/reanim/PoolCleaner_wheel.png", "start": 22212441, "end": 22214894}, {"filename": "/reanim/PoolCleaner_whitewater1.png", "start": 22214894, "end": 22215855}, {"filename": "/reanim/PoolCleaner_whitewater2.png", "start": 22215855, "end": 22217028}, {"filename": "/reanim/PoolCleaner_whitewater3.png", "start": 22217028, "end": 22218154}, {"filename": "/reanim/Portal_Circle.reanim", "start": 22218154, "end": 22225186}, {"filename": "/reanim/Portal_Circle_center.png", "start": 22225186, "end": 22228592}, {"filename": "/reanim/Portal_Circle_glow.png", "start": 22228592, "end": 22233899}, {"filename": "/reanim/Portal_Circle_outer.png", "start": 22233899, "end": 22243762}, {"filename": "/reanim/Portal_Square.reanim", "start": 22243762, "end": 22251415}, {"filename": "/reanim/Portal_Square_center.png", "start": 22251415, "end": 22255155}, {"filename": "/reanim/Portal_Square_glow.png", "start": 22255155, "end": 22256939}, {"filename": "/reanim/Pot.reanim", "start": 22256939, "end": 22266383}, {"filename": "/reanim/Pot_bottom.png", "start": 22266383, "end": 22268357}, {"filename": "/reanim/Pot_bottom2.png", "start": 22268357, "end": 22269874}, {"filename": "/reanim/Pot_glow.png", "start": 22269874, "end": 22274483}, {"filename": "/reanim/Pot_leaf1.png", "start": 22274483, "end": 22275013}, {"filename": "/reanim/Pot_leaf2.png", "start": 22275013, "end": 22275443}, {"filename": "/reanim/Pot_shadow.png", "start": 22275443, "end": 22276907}, {"filename": "/reanim/Pot_stem.png", "start": 22276907, "end": 22277280}, {"filename": "/reanim/Pot_top.png", "start": 22277280, "end": 22289785}, {"filename": "/reanim/Pot_top_dark.png", "start": 22289785, "end": 22298947}, {"filename": "/reanim/Pot_water_base.png", "start": 22298947, "end": 22301994}, {"filename": "/reanim/Pot_water_top.png", "start": 22301994, "end": 22317755}, {"filename": "/reanim/Pot_water_top_glow.png", "start": 22317755, "end": 22322527}, {"filename": "/reanim/PotatoMine.reanim", "start": 22322527, "end": 22341999}, {"filename": "/reanim/PotatoMine_blink1.png", "start": 22341999, "end": 22343630}, {"filename": "/reanim/PotatoMine_blink2.png", "start": 22343630, "end": 22345066}, {"filename": "/reanim/PotatoMine_body.png", "start": 22345066, "end": 22355356}, {"filename": "/reanim/PotatoMine_eyes.png", "start": 22355356, "end": 22357164}, {"filename": "/reanim/PotatoMine_light1.png", "start": 22357164, "end": 22358837}, {"filename": "/reanim/PotatoMine_light2.png", "start": 22358837, "end": 22361602}, {"filename": "/reanim/PotatoMine_mashed.png", "start": 22361602, "end": 22379390}, {"filename": "/reanim/PotatoMine_rock1.png", "start": 22379390, "end": 22379882}, {"filename": "/reanim/PotatoMine_rock2.png", "start": 22379882, "end": 22381272}, {"filename": "/reanim/PotatoMine_rock3.png", "start": 22381272, "end": 22382110}, {"filename": "/reanim/PotatoMine_rock4.png", "start": 22382110, "end": 22383569}, {"filename": "/reanim/PotatoMine_rock5.png", "start": 22383569, "end": 22384564}, {"filename": "/reanim/PotatoMine_rock6.png", "start": 22384564, "end": 22385470}, {"filename": "/reanim/PotatoMine_stem.png", "start": 22385470, "end": 22387186}, {"filename": "/reanim/Puff.reanim", "start": 22387186, "end": 22388090}, {"filename": "/reanim/PuffShroom.reanim", "start": 22388090, "end": 22400164}, {"filename": "/reanim/PuffShroom_blink1.png", "start": 22400164, "end": 22400928}, {"filename": "/reanim/PuffShroom_blink2.png", "start": 22400928, "end": 22401561}, {"filename": "/reanim/PuffShroom_body.png", "start": 22401561, "end": 22404153}, {"filename": "/reanim/PuffShroom_head.png", "start": 22404153, "end": 22410680}, {"filename": "/reanim/PuffShroom_stem.png", "start": 22410680, "end": 22410942}, {"filename": "/reanim/PuffShroom_tip.png", "start": 22410942, "end": 22412013}, {"filename": "/reanim/Pumpkin.reanim", "start": 22412013, "end": 22414890}, {"filename": "/reanim/Pumpkin_back.png", "start": 22414890, "end": 22420626}, {"filename": "/reanim/Pumpkin_damage2.png", "start": 22420626, "end": 22435681}, {"filename": "/reanim/Pumpkin_damage3.png", "start": 22435681, "end": 22451217}, {"filename": "/reanim/Pumpkin_front.png", "start": 22451217, "end": 22465609}, {"filename": "/reanim/Rain_circle.png", "start": 22465609, "end": 22466656}, {"filename": "/reanim/Rain_circle.reanim", "start": 22466656, "end": 22469412}, {"filename": "/reanim/Rain_splash.reanim", "start": 22469412, "end": 22469963}, {"filename": "/reanim/Rain_splash1.png", "start": 22469963, "end": 22470184}, {"filename": "/reanim/Rain_splash2.png", "start": 22470184, "end": 22470720}, {"filename": "/reanim/Rain_splash3.png", "start": 22470720, "end": 22471388}, {"filename": "/reanim/Rain_splash4.png", "start": 22471388, "end": 22471863}, {"filename": "/reanim/Rake.reanim", "start": 22471863, "end": 22473095}, {"filename": "/reanim/RoofCleaner.reanim", "start": 22473095, "end": 22477836}, {"filename": "/reanim/RoofCleaner_body1.png", "start": 22477836, "end": 22485190}, {"filename": "/reanim/RoofCleaner_body2.png", "start": 22485190, "end": 22490324}, {"filename": "/reanim/RoofCleaner_body3.png", "start": 22490324, "end": 22491522}, {"filename": "/reanim/RoofCleaner_body4.png", "start": 22491522, "end": 22492629}, {"filename": "/reanim/RoofCleaner_brush1.png", "start": 22492629, "end": 22493873}, {"filename": "/reanim/RoofCleaner_brush2.png", "start": 22493873, "end": 22495114}, {"filename": "/reanim/RoofCleaner_brush3.png", "start": 22495114, "end": 22496704}, {"filename": "/reanim/RoofCleaner_brush4.png", "start": 22496704, "end": 22498138}, {"filename": "/reanim/RoofCleaner_brush5.png", "start": 22498138, "end": 22499574}, {"filename": "/reanim/RoofCleaner_hubcap.png", "start": 22499574, "end": 22500282}, {"filename": "/reanim/RoofCleaner_wheel.png", "start": 22500282, "end": 22501015}, {"filename": "/reanim/ScaredyShroom.reanim", "start": 22501015, "end": 22549142}, {"filename": "/reanim/ScaredyShroom_eye1.png", "start": 22549142, "end": 22549472}, {"filename": "/reanim/ScaredyShroom_eye2.png", "start": 22549472, "end": 22549789}, {"filename": "/reanim/ScaredyShroom_eye_big.png", "start": 22549789, "end": 22550187}, {"filename": "/reanim/ScaredyShroom_eyebrow1.png", "start": 22550187, "end": 22550607}, {"filename": "/reanim/ScaredyShroom_eyebrow2.png", "start": 22550607, "end": 22550959}, {"filename": "/reanim/ScaredyShroom_head.png", "start": 22550959, "end": 22556053}, {"filename": "/reanim/ScaredyShroom_head2.png", "start": 22556053, "end": 22560952}, {"filename": "/reanim/ScaredyShroom_head_inner.png", "start": 22560952, "end": 22562098}, {"filename": "/reanim/ScaredyShroom_lips.png", "start": 22562098, "end": 22563106}, {"filename": "/reanim/ScaredyShroom_mouth.png", "start": 22563106, "end": 22563416}, {"filename": "/reanim/ScaredyShroom_stem.png", "start": 22563416, "end": 22565072}, {"filename": "/reanim/ScaredyShroom_sweat.png", "start": 22565072, "end": 22565280}, {"filename": "/reanim/SeaShroom.reanim", "start": 22565280, "end": 22602076}, {"filename": "/reanim/SeaShroom_blink1.png", "start": 22602076, "end": 22603104}, {"filename": "/reanim/SeaShroom_blink2.png", "start": 22603104, "end": 22604136}, {"filename": "/reanim/SeaShroom_body.png", "start": 22604136, "end": 22606661}, {"filename": "/reanim/SeaShroom_eyes.png", "start": 22606661, "end": 22607786}, {"filename": "/reanim/SeaShroom_foam.png", "start": 22607786, "end": 22608332}, {"filename": "/reanim/SeaShroom_head.png", "start": 22608332, "end": 22611992}, {"filename": "/reanim/SeaShroom_lips.png", "start": 22611992, "end": 22612544}, {"filename": "/reanim/SeaShroom_mouth.png", "start": 22612544, "end": 22612886}, {"filename": "/reanim/SeaShroom_tentacles.png", "start": 22612886, "end": 22614125}, {"filename": "/reanim/SeaShroom_tentacles_zengarden.png", "start": 22614125, "end": 22616771}, {"filename": "/reanim/SelectorScreen.reanim", "start": 22616771, "end": 22979208}, {"filename": "/reanim/SelectorScreen_Adventure_button.png", "start": 22979208, "end": 23018530}, {"filename": "/reanim/SelectorScreen_Adventure_highlight.png", "start": 23018530, "end": 23058691}, {"filename": "/reanim/SelectorScreen_BG.jpg", "start": 23058691, "end": 23059932}, {"filename": "/reanim/SelectorScreen_BG_Center.jpg", "start": 23059932, "end": 23086833}, {"filename": "/reanim/SelectorScreen_BG_Center_.png", "start": 23086833, "end": 23102854}, {"filename": "/reanim/SelectorScreen_BG_Left.jpg", "start": 23102854, "end": 23124603}, {"filename": "/reanim/SelectorScreen_BG_Left_.png", "start": 23124603, "end": 23136650}, {"filename": "/reanim/SelectorScreen_BG_Right.jpg", "start": 23136650, "end": 23164177}, {"filename": "/reanim/SelectorScreen_BG_Right_.png", "start": 23164177, "end": 23174115}, {"filename": "/reanim/SelectorScreen_Challenges_button.png", "start": 23174115, "end": 23201778}, {"filename": "/reanim/SelectorScreen_Challenges_highlight.png", "start": 23201778, "end": 23229751}, {"filename": "/reanim/SelectorScreen_Cloud1.png", "start": 23229751, "end": 23246801}, {"filename": "/reanim/SelectorScreen_Cloud2.png", "start": 23246801, "end": 23258708}, {"filename": "/reanim/SelectorScreen_Cloud4.png", "start": 23258708, "end": 23268395}, {"filename": "/reanim/SelectorScreen_Cloud5.png", "start": 23268395, "end": 23288380}, {"filename": "/reanim/SelectorScreen_Cloud6.png", "start": 23288380, "end": 23290901}, {"filename": "/reanim/SelectorScreen_Cloud7.png", "start": 23290901, "end": 23297695}, {"filename": "/reanim/SelectorScreen_Flower1.png", "start": 23297695, "end": 23301538}, {"filename": "/reanim/SelectorScreen_Flower2.png", "start": 23301538, "end": 23305517}, {"filename": "/reanim/SelectorScreen_Flower3.png", "start": 23305517, "end": 23310296}, {"filename": "/reanim/SelectorScreen_Leaf1.png", "start": 23310296, "end": 23314052}, {"filename": "/reanim/SelectorScreen_Leaf2.png", "start": 23314052, "end": 23316216}, {"filename": "/reanim/SelectorScreen_Leaf3.png", "start": 23316216, "end": 23321907}, {"filename": "/reanim/SelectorScreen_Leaf4.png", "start": 23321907, "end": 23324813}, {"filename": "/reanim/SelectorScreen_Leaf5.png", "start": 23324813, "end": 23326940}, {"filename": "/reanim/SelectorScreen_Leaves.png", "start": 23326940, "end": 23349789}, {"filename": "/reanim/SelectorScreen_Shadow_Adventure.png", "start": 23349789, "end": 23353991}, {"filename": "/reanim/SelectorScreen_Shadow_Challenge.png", "start": 23353991, "end": 23357573}, {"filename": "/reanim/SelectorScreen_Shadow_StartAdventure.png", "start": 23357573, "end": 23361775}, {"filename": "/reanim/SelectorScreen_Shadow_Survival.png", "start": 23361775, "end": 23365607}, {"filename": "/reanim/SelectorScreen_Shadow_ZenGarden.png", "start": 23365607, "end": 23368996}, {"filename": "/reanim/SelectorScreen_StartAdventure_Button1.png", "start": 23368996, "end": 23404436}, {"filename": "/reanim/SelectorScreen_StartAdventure_Highlight.png", "start": 23404436, "end": 23440442}, {"filename": "/reanim/SelectorScreen_Survival_button.png", "start": 23440442, "end": 23477715}, {"filename": "/reanim/SelectorScreen_Survival_highlight.png", "start": 23477715, "end": 23516618}, {"filename": "/reanim/SelectorScreen_Vasebreaker_button.png", "start": 23516618, "end": 23546802}, {"filename": "/reanim/SelectorScreen_WoodSign1.png", "start": 23546802, "end": 23580113}, {"filename": "/reanim/SelectorScreen_WoodSign2.png", "start": 23580113, "end": 23603948}, {"filename": "/reanim/SelectorScreen_WoodSign2_press.png", "start": 23603948, "end": 23627105}, {"filename": "/reanim/SelectorScreen_WoodSign3.png", "start": 23627105, "end": 23660682}, {"filename": "/reanim/SelectorScreen_WoodSign3_press.png", "start": 23660682, "end": 23694306}, {"filename": "/reanim/SelectorScreen_almanac_key_shadow.png", "start": 23694306, "end": 23696764}, {"filename": "/reanim/SelectorScreen_almanac_shadow.png", "start": 23696764, "end": 23698003}, {"filename": "/reanim/SelectorScreen_key_shadow.png", "start": 23698003, "end": 23699653}, {"filename": "/reanim/SelectorScreen_vasebreaker_highlight.png", "start": 23699653, "end": 23731499}, {"filename": "/reanim/SlotMachine.reanim", "start": 23731499, "end": 23733447}, {"filename": "/reanim/SlotMachine_ball.png", "start": 23733447, "end": 23736873}, {"filename": "/reanim/SlotMachine_base.png", "start": 23736873, "end": 23737773}, {"filename": "/reanim/SlotMachine_shaft.png", "start": 23737773, "end": 23741052}, {"filename": "/reanim/SnowPea.reanim", "start": 23741052, "end": 23808542}, {"filename": "/reanim/SnowPea_blink1.png", "start": 23808542, "end": 23810141}, {"filename": "/reanim/SnowPea_blink2.png", "start": 23810141, "end": 23811630}, {"filename": "/reanim/SnowPea_crystals1.png", "start": 23811630, "end": 23814826}, {"filename": "/reanim/SnowPea_crystals2.png", "start": 23814826, "end": 23817139}, {"filename": "/reanim/SnowPea_crystals3.png", "start": 23817139, "end": 23820161}, {"filename": "/reanim/SnowPea_head.png", "start": 23820161, "end": 23825730}, {"filename": "/reanim/SnowPea_mouth.png", "start": 23825730, "end": 23828630}, {"filename": "/reanim/SodRoll.png", "start": 23828630, "end": 23840403}, {"filename": "/reanim/SodRoll.reanim", "start": 23840403, "end": 23847075}, {"filename": "/reanim/SodRollCap.png", "start": 23847075, "end": 23855347}, {"filename": "/reanim/SpikeRock.reanim", "start": 23855347, "end": 23880251}, {"filename": "/reanim/SpikeRock_body.png", "start": 23880251, "end": 23887377}, {"filename": "/reanim/SpikeRock_eyebrow.png", "start": 23887377, "end": 23888476}, {"filename": "/reanim/SpikeRock_mouth.png", "start": 23888476, "end": 23890138}, {"filename": "/reanim/SpikeRock_spike.png", "start": 23890138, "end": 23891224}, {"filename": "/reanim/Spikerock_bigspike1.png", "start": 23891224, "end": 23892495}, {"filename": "/reanim/Spikerock_bigspike2.png", "start": 23892495, "end": 23894200}, {"filename": "/reanim/Spikerock_bigspike3.png", "start": 23894200, "end": 23895780}, {"filename": "/reanim/SplitPea.reanim", "start": 23895780, "end": 23947337}, {"filename": "/reanim/Splitpea_head.png", "start": 23947337, "end": 23952594}, {"filename": "/reanim/Squash.reanim", "start": 23952594, "end": 23969763}, {"filename": "/reanim/Squash_body.png", "start": 23969763, "end": 23983071}, {"filename": "/reanim/Squash_eyebrows.png", "start": 23983071, "end": 23985118}, {"filename": "/reanim/Squash_eyes.png", "start": 23985118, "end": 23985245}, {"filename": "/reanim/Squash_stem.png", "start": 23985245, "end": 23986392}, {"filename": "/reanim/Starfruit.reanim", "start": 23986392, "end": 23998673}, {"filename": "/reanim/Starfruit_body.png", "start": 23998673, "end": 24008355}, {"filename": "/reanim/Starfruit_eyebrow.png", "start": 24008355, "end": 24008705}, {"filename": "/reanim/Starfruit_eyes1.png", "start": 24008705, "end": 24010518}, {"filename": "/reanim/Starfruit_eyes2.png", "start": 24010518, "end": 24012225}, {"filename": "/reanim/Starfruit_leaf.png", "start": 24012225, "end": 24012674}, {"filename": "/reanim/Starfruit_mouth.png", "start": 24012674, "end": 24013377}, {"filename": "/reanim/Starfruit_smile.png", "start": 24013377, "end": 24014360}, {"filename": "/reanim/Starfruit_stem.png", "start": 24014360, "end": 24015317}, {"filename": "/reanim/StartPlant.png", "start": 24015317, "end": 24019556}, {"filename": "/reanim/StartReady.png", "start": 24019556, "end": 24023091}, {"filename": "/reanim/StartReadySetPlant.reanim", "start": 24023091, "end": 24024588}, {"filename": "/reanim/StartSet.png", "start": 24024588, "end": 24026841}, {"filename": "/reanim/Stinky.reanim", "start": 24026841, "end": 24046173}, {"filename": "/reanim/Stinky_antenna.png", "start": 24046173, "end": 24047088}, {"filename": "/reanim/Stinky_body.png", "start": 24047088, "end": 24050502}, {"filename": "/reanim/Stinky_shell.png", "start": 24050502, "end": 24055897}, {"filename": "/reanim/Stinky_tail.png", "start": 24055897, "end": 24057142}, {"filename": "/reanim/Stinky_turn1.png", "start": 24057142, "end": 24065413}, {"filename": "/reanim/Stinky_turn2.png", "start": 24065413, "end": 24073059}, {"filename": "/reanim/Stinky_turn3.png", "start": 24073059, "end": 24079208}, {"filename": "/reanim/Stinky_turn4.png", "start": 24079208, "end": 24083746}, {"filename": "/reanim/Stinky_turn5.png", "start": 24083746, "end": 24087874}, {"filename": "/reanim/Stinky_turn6.png", "start": 24087874, "end": 24093738}, {"filename": "/reanim/Stinky_turn7.png", "start": 24093738, "end": 24101148}, {"filename": "/reanim/Stinky_turn8.png", "start": 24101148, "end": 24108756}, {"filename": "/reanim/Store_ComingSoonLabel.png", "start": 24108756, "end": 24112775}, {"filename": "/reanim/Store_ExtraSlotLabel.png", "start": 24112775, "end": 24117022}, {"filename": "/reanim/Store_SoldOutLabel.png", "start": 24117022, "end": 24120942}, {"filename": "/reanim/Sun.reanim", "start": 24120942, "end": 24123720}, {"filename": "/reanim/Sun1.png", "start": 24123720, "end": 24125741}, {"filename": "/reanim/Sun2.png", "start": 24125741, "end": 24129220}, {"filename": "/reanim/Sun3.png", "start": 24129220, "end": 24137075}, {"filename": "/reanim/SunFlower.reanim", "start": 24137075, "end": 24185130}, {"filename": "/reanim/SunFlower_blink1.png", "start": 24185130, "end": 24186002}, {"filename": "/reanim/SunFlower_blink2.png", "start": 24186002, "end": 24186903}, {"filename": "/reanim/SunFlower_bottompetals.png", "start": 24186903, "end": 24187913}, {"filename": "/reanim/SunFlower_double_petals.png", "start": 24187913, "end": 24194717}, {"filename": "/reanim/SunFlower_head.png", "start": 24194717, "end": 24198944}, {"filename": "/reanim/SunFlower_head_sing1.png", "start": 24198944, "end": 24203053}, {"filename": "/reanim/SunFlower_head_sing2.png", "start": 24203053, "end": 24207439}, {"filename": "/reanim/SunFlower_head_sing3.png", "start": 24207439, "end": 24211712}, {"filename": "/reanim/SunFlower_head_sing4.png", "start": 24211712, "end": 24215979}, {"filename": "/reanim/SunFlower_head_sing5.png", "start": 24215979, "end": 24220065}, {"filename": "/reanim/SunFlower_head_wink.png", "start": 24220065, "end": 24224539}, {"filename": "/reanim/SunFlower_leftpetal1.png", "start": 24224539, "end": 24225104}, {"filename": "/reanim/SunFlower_leftpetal2.png", "start": 24225104, "end": 24225667}, {"filename": "/reanim/SunFlower_leftpetal3.png", "start": 24225667, "end": 24226503}, {"filename": "/reanim/SunFlower_leftpetal4.png", "start": 24226503, "end": 24227356}, {"filename": "/reanim/SunFlower_leftpetal5.png", "start": 24227356, "end": 24228091}, {"filename": "/reanim/SunFlower_leftpetal6.png", "start": 24228091, "end": 24228897}, {"filename": "/reanim/SunFlower_leftpetal7.png", "start": 24228897, "end": 24229576}, {"filename": "/reanim/SunFlower_leftpetal8.png", "start": 24229576, "end": 24230313}, {"filename": "/reanim/SunFlower_rightpetal1.png", "start": 24230313, "end": 24230839}, {"filename": "/reanim/SunFlower_rightpetal2.png", "start": 24230839, "end": 24231393}, {"filename": "/reanim/SunFlower_rightpetal3.png", "start": 24231393, "end": 24231827}, {"filename": "/reanim/SunFlower_rightpetal4.png", "start": 24231827, "end": 24232388}, {"filename": "/reanim/SunFlower_rightpetal5.png", "start": 24232388, "end": 24232897}, {"filename": "/reanim/SunFlower_rightpetal6.png", "start": 24232897, "end": 24233405}, {"filename": "/reanim/SunFlower_rightpetal7.png", "start": 24233405, "end": 24234025}, {"filename": "/reanim/SunFlower_rightpetal8.png", "start": 24234025, "end": 24234562}, {"filename": "/reanim/SunFlower_rightpetal9.png", "start": 24234562, "end": 24235119}, {"filename": "/reanim/SunFlower_toppetals.png", "start": 24235119, "end": 24235758}, {"filename": "/reanim/SunShroom.reanim", "start": 24235758, "end": 24248135}, {"filename": "/reanim/SunShroom_blink1.png", "start": 24248135, "end": 24249391}, {"filename": "/reanim/SunShroom_blink2.png", "start": 24249391, "end": 24250570}, {"filename": "/reanim/SunShroom_body.png", "start": 24250570, "end": 24254886}, {"filename": "/reanim/SunShroom_head.png", "start": 24254886, "end": 24262894}, {"filename": "/reanim/SunShroom_sleep.png", "start": 24262894, "end": 24264049}, {"filename": "/reanim/Tallnut.reanim", "start": 24264049, "end": 24267224}, {"filename": "/reanim/Tallnut_blink1.png", "start": 24267224, "end": 24270698}, {"filename": "/reanim/Tallnut_blink2.png", "start": 24270698, "end": 24273931}, {"filename": "/reanim/Tallnut_body.png", "start": 24273931, "end": 24292225}, {"filename": "/reanim/Tallnut_cracked1.png", "start": 24292225, "end": 24310980}, {"filename": "/reanim/Tallnut_cracked2.png", "start": 24310980, "end": 24330465}, {"filename": "/reanim/Tanglekelp.reanim", "start": 24330465, "end": 24362740}, {"filename": "/reanim/Tanglekelp_arm 8.png", "start": 24362740, "end": 24363492}, {"filename": "/reanim/Tanglekelp_arm1.png", "start": 24363492, "end": 24364942}, {"filename": "/reanim/Tanglekelp_arm2.png", "start": 24364942, "end": 24365538}, {"filename": "/reanim/Tanglekelp_arm3.png", "start": 24365538, "end": 24366306}, {"filename": "/reanim/Tanglekelp_arm4.png", "start": 24366306, "end": 24367239}, {"filename": "/reanim/Tanglekelp_arm5.png", "start": 24367239, "end": 24368209}, {"filename": "/reanim/Tanglekelp_arm6.png", "start": 24368209, "end": 24369036}, {"filename": "/reanim/Tanglekelp_arm7.png", "start": 24369036, "end": 24369893}, {"filename": "/reanim/Tanglekelp_blink1.png", "start": 24369893, "end": 24372785}, {"filename": "/reanim/Tanglekelp_blink2.png", "start": 24372785, "end": 24375616}, {"filename": "/reanim/Tanglekelp_body.png", "start": 24375616, "end": 24389838}, {"filename": "/reanim/Tanglekelp_body_zengarden.png", "start": 24389838, "end": 24403502}, {"filename": "/reanim/Tanglekelp_grab_back1.png", "start": 24403502, "end": 24405271}, {"filename": "/reanim/Tanglekelp_grab_back2.png", "start": 24405271, "end": 24407496}, {"filename": "/reanim/Tanglekelp_grab_back3.png", "start": 24407496, "end": 24411849}, {"filename": "/reanim/Tanglekelp_grab_back4.png", "start": 24411849, "end": 24416892}, {"filename": "/reanim/Tanglekelp_grab_front1.png", "start": 24416892, "end": 24417730}, {"filename": "/reanim/Tanglekelp_grab_front2.png", "start": 24417730, "end": 24419400}, {"filename": "/reanim/Tanglekelp_grab_front3.png", "start": 24419400, "end": 24423296}, {"filename": "/reanim/Tanglekelp_grab_front4.png", "start": 24423296, "end": 24429768}, {"filename": "/reanim/Tanglekelp_grab_front5.png", "start": 24429768, "end": 24435265}, {"filename": "/reanim/Tanglekelp_whitewater.png", "start": 24435265, "end": 24436548}, {"filename": "/reanim/Tanglekelp_whitewater1.png", "start": 24436548, "end": 24438012}, {"filename": "/reanim/Tanglekelp_whitewater2.png", "start": 24438012, "end": 24439621}, {"filename": "/reanim/Tanglekelp_whitewater3.png", "start": 24439621, "end": 24441443}, {"filename": "/reanim/TextFadeOn.reanim", "start": 24441443, "end": 24443546}, {"filename": "/reanim/ThreePeater.reanim", "start": 24443546, "end": 24539329}, {"filename": "/reanim/ThreePeater_blink1.png", "start": 24539329, "end": 24539817}, {"filename": "/reanim/ThreePeater_blink2.png", "start": 24539817, "end": 24540302}, {"filename": "/reanim/ThreePeater_head.png", "start": 24540302, "end": 24542146}, {"filename": "/reanim/ThreePeater_headleaf1.png", "start": 24542146, "end": 24542568}, {"filename": "/reanim/ThreePeater_headleaf2.png", "start": 24542568, "end": 24542992}, {"filename": "/reanim/ThreePeater_headleaf3.png", "start": 24542992, "end": 24543313}, {"filename": "/reanim/ThreePeater_mouth.png", "start": 24543313, "end": 24544969}, {"filename": "/reanim/ThreePeater_stem1.png", "start": 24544969, "end": 24546687}, {"filename": "/reanim/ThreePeater_stem2.png", "start": 24546687, "end": 24548256}, {"filename": "/reanim/ThreePeater_stem3.png", "start": 24548256, "end": 24549903}, {"filename": "/reanim/Torchwood.reanim", "start": 24549903, "end": 24557948}, {"filename": "/reanim/Torchwood_body.png", "start": 24557948, "end": 24568527}, {"filename": "/reanim/Torchwood_eyes1.png", "start": 24568527, "end": 24570105}, {"filename": "/reanim/Torchwood_eyes2.png", "start": 24570105, "end": 24571596}, {"filename": "/reanim/Torchwood_fire1a.png", "start": 24571596, "end": 24575311}, {"filename": "/reanim/Torchwood_fire1b.png", "start": 24575311, "end": 24580629}, {"filename": "/reanim/Torchwood_fire1c.png", "start": 24580629, "end": 24584731}, {"filename": "/reanim/Torchwood_mouth.png", "start": 24584731, "end": 24586969}, {"filename": "/reanim/Torchwood_spark.png", "start": 24586969, "end": 24587186}, {"filename": "/reanim/TreeFood.png", "start": 24587186, "end": 24595603}, {"filename": "/reanim/TreeFood.reanim", "start": 24595603, "end": 24598120}, {"filename": "/reanim/TreeFood2.png", "start": 24598120, "end": 24606374}, {"filename": "/reanim/TreeFood3.png", "start": 24606374, "end": 24614570}, {"filename": "/reanim/TreeFood4.png", "start": 24614570, "end": 24623196}, {"filename": "/reanim/TreeOfWisdomClouds.reanim", "start": 24623196, "end": 24693725}, {"filename": "/reanim/TwinSunflower.reanim", "start": 24693725, "end": 24723180}, {"filename": "/reanim/TwinSunflower_leaf.png", "start": 24723180, "end": 24724538}, {"filename": "/reanim/TwinSunflower_stem1.png", "start": 24724538, "end": 24726018}, {"filename": "/reanim/TwinSunflower_stem2.png", "start": 24726018, "end": 24727596}, {"filename": "/reanim/Umbrellaleaf.reanim", "start": 24727596, "end": 24745102}, {"filename": "/reanim/Umbrellaleaf_blink1.png", "start": 24745102, "end": 24745970}, {"filename": "/reanim/Umbrellaleaf_blink2.png", "start": 24745970, "end": 24746822}, {"filename": "/reanim/Umbrellaleaf_body.png", "start": 24746822, "end": 24750265}, {"filename": "/reanim/Umbrellaleaf_leaf1.png", "start": 24750265, "end": 24756482}, {"filename": "/reanim/Umbrellaleaf_leaf2.png", "start": 24756482, "end": 24761653}, {"filename": "/reanim/Umbrellaleaf_leaf3.png", "start": 24761653, "end": 24766899}, {"filename": "/reanim/Umbrellaleaf_leaf4.png", "start": 24766899, "end": 24770339}, {"filename": "/reanim/Umbrellaleaf_leaf5.png", "start": 24770339, "end": 24774310}, {"filename": "/reanim/Umbrellaleaf_leaf6.png", "start": 24774310, "end": 24778768}, {"filename": "/reanim/Umbrellaleaf_leaf7.png", "start": 24778768, "end": 24783504}, {"filename": "/reanim/Wallnut.reanim", "start": 24783504, "end": 24789756}, {"filename": "/reanim/Wallnut_blink1.png", "start": 24789756, "end": 24793391}, {"filename": "/reanim/Wallnut_blink2.png", "start": 24793391, "end": 24796663}, {"filename": "/reanim/Wallnut_body.png", "start": 24796663, "end": 24810255}, {"filename": "/reanim/Wallnut_cracked1.png", "start": 24810255, "end": 24824202}, {"filename": "/reanim/Wallnut_cracked2.png", "start": 24824202, "end": 24838129}, {"filename": "/reanim/Wallnut_twitch.png", "start": 24838129, "end": 24839027}, {"filename": "/reanim/WinterMelon.reanim", "start": 24839027, "end": 24896590}, {"filename": "/reanim/WinterMelon_basket.png", "start": 24896590, "end": 24904401}, {"filename": "/reanim/WinterMelon_basket_overlay.png", "start": 24904401, "end": 24910700}, {"filename": "/reanim/WinterMelon_blink1.png", "start": 24910700, "end": 24911988}, {"filename": "/reanim/WinterMelon_blink2.png", "start": 24911988, "end": 24913320}, {"filename": "/reanim/WinterMelon_eyebrow.png", "start": 24913320, "end": 24913672}, {"filename": "/reanim/WinterMelon_melon.png", "start": 24913672, "end": 24919423}, {"filename": "/reanim/WinterMelon_projectile.png", "start": 24919423, "end": 24924302}, {"filename": "/reanim/WinterMelon_stalk.png", "start": 24924302, "end": 24926604}, {"filename": "/reanim/Z.png", "start": 24926604, "end": 24927689}, {"filename": "/reanim/Z.reanim", "start": 24927689, "end": 24931178}, {"filename": "/reanim/ZenGarden-wateringcan4.png", "start": 24931178, "end": 24938505}, {"filename": "/reanim/ZenGarden_bugspray.reanim", "start": 24938505, "end": 24942835}, {"filename": "/reanim/ZenGarden_bugspray_bottle.png", "start": 24942835, "end": 24947862}, {"filename": "/reanim/ZenGarden_bugspray_spray1.png", "start": 24947862, "end": 24948314}, {"filename": "/reanim/ZenGarden_bugspray_spray2.png", "start": 24948314, "end": 24949545}, {"filename": "/reanim/ZenGarden_bugspray_spray3.png", "start": 24949545, "end": 24951679}, {"filename": "/reanim/ZenGarden_bugspray_spray4.png", "start": 24951679, "end": 24955104}, {"filename": "/reanim/ZenGarden_bugspray_trigger.png", "start": 24955104, "end": 24956269}, {"filename": "/reanim/ZenGarden_fertilize_bag1.png", "start": 24956269, "end": 24964860}, {"filename": "/reanim/ZenGarden_fertilizer.reanim", "start": 24964860, "end": 24967359}, {"filename": "/reanim/ZenGarden_fertilizer_bag2.png", "start": 24967359, "end": 24976139}, {"filename": "/reanim/ZenGarden_fertilizer_bag3.png", "start": 24976139, "end": 24985031}, {"filename": "/reanim/ZenGarden_fertilizer_bag4.png", "start": 24985031, "end": 24994417}, {"filename": "/reanim/ZenGarden_fertilizer_seed1.png", "start": 24994417, "end": 24994828}, {"filename": "/reanim/ZenGarden_fertilizer_seed2.png", "start": 24994828, "end": 24995556}, {"filename": "/reanim/ZenGarden_fertilizer_seed3.png", "start": 24995556, "end": 24996756}, {"filename": "/reanim/ZenGarden_fertilizer_seed4.png", "start": 24996756, "end": 24997759}, {"filename": "/reanim/ZenGarden_fertilizer_seed5.png", "start": 24997759, "end": 24998534}, {"filename": "/reanim/ZenGarden_fertilizer_seed6.png", "start": 24998534, "end": 24998974}, {"filename": "/reanim/ZenGarden_fetilizer_seed2.png", "start": 24998974, "end": 24999702}, {"filename": "/reanim/ZenGarden_phonograph.reanim", "start": 24999702, "end": 25011553}, {"filename": "/reanim/ZenGarden_phonograph_base.png", "start": 25011553, "end": 25013954}, {"filename": "/reanim/ZenGarden_phonograph_needle.png", "start": 25013954, "end": 25014773}, {"filename": "/reanim/ZenGarden_phonograph_record.png", "start": 25014773, "end": 25015953}, {"filename": "/reanim/ZenGarden_phonograph_shaft1.png", "start": 25015953, "end": 25017088}, {"filename": "/reanim/ZenGarden_phonograph_shaft2.png", "start": 25017088, "end": 25020423}, {"filename": "/reanim/ZenGarden_sprout.reanim", "start": 25020423, "end": 25042058}, {"filename": "/reanim/ZenGarden_wateringcan.reanim", "start": 25042058, "end": 25047362}, {"filename": "/reanim/ZenGarden_wateringcan1.png", "start": 25047362, "end": 25054838}, {"filename": "/reanim/ZenGarden_wateringcan1_gold.png", "start": 25054838, "end": 25062382}, {"filename": "/reanim/ZenGarden_wateringcan2.png", "start": 25062382, "end": 25069837}, {"filename": "/reanim/ZenGarden_wateringcan2_gold.png", "start": 25069837, "end": 25077283}, {"filename": "/reanim/ZenGarden_wateringcan3.png", "start": 25077283, "end": 25084660}, {"filename": "/reanim/ZenGarden_wateringcan3_gold.png", "start": 25084660, "end": 25092064}, {"filename": "/reanim/ZenGarden_wateringcan4_gold.png", "start": 25092064, "end": 25099386}, {"filename": "/reanim/ZenGarden_wateringcan_water1.png", "start": 25099386, "end": 25099723}, {"filename": "/reanim/ZenGarden_wateringcan_water2.png", "start": 25099723, "end": 25100448}, {"filename": "/reanim/ZenGarden_wateringcan_water3.png", "start": 25100448, "end": 25101760}, {"filename": "/reanim/ZenGarden_wateringcan_water4.png", "start": 25101760, "end": 25103114}, {"filename": "/reanim/ZenGarden_wateringcan_water5.png", "start": 25103114, "end": 25104654}, {"filename": "/reanim/ZenGarden_wateringcan_water6.png", "start": 25104654, "end": 25106194}, {"filename": "/reanim/ZenGarden_wateringcan_water7.png", "start": 25106194, "end": 25107401}, {"filename": "/reanim/ZenGarden_wateringcan_water8.png", "start": 25107401, "end": 25108169}, {"filename": "/reanim/Zombie.reanim", "start": 25108169, "end": 25813283}, {"filename": "/reanim/ZombieDancerHead_disco.png", "start": 25813283, "end": 25827038}, {"filename": "/reanim/Zombie_Boss_driver.reanim", "start": 25827038, "end": 25950317}, {"filename": "/reanim/Zombie_Jackson.reanim", "start": 25950317, "end": 26134429}, {"filename": "/reanim/Zombie_Jackson_body1.png", "start": 26134429, "end": 26140120}, {"filename": "/reanim/Zombie_Jackson_body2.png", "start": 26140120, "end": 26141218}, {"filename": "/reanim/Zombie_Jackson_colar.png", "start": 26141218, "end": 26143791}, {"filename": "/reanim/Zombie_Jackson_hair.png", "start": 26143791, "end": 26147492}, {"filename": "/reanim/Zombie_Jackson_innerarm_hand.png", "start": 26147492, "end": 26148792}, {"filename": "/reanim/Zombie_Jackson_innerarm_hand2.png", "start": 26148792, "end": 26150363}, {"filename": "/reanim/Zombie_Jackson_innerarm_lower.png", "start": 26150363, "end": 26151463}, {"filename": "/reanim/Zombie_Jackson_innerarm_upper.png", "start": 26151463, "end": 26152609}, {"filename": "/reanim/Zombie_Jackson_innerleg_foot.png", "start": 26152609, "end": 26153930}, {"filename": "/reanim/Zombie_Jackson_innerleg_lower.png", "start": 26153930, "end": 26155389}, {"filename": "/reanim/Zombie_Jackson_innerleg_toe.png", "start": 26155389, "end": 26156111}, {"filename": "/reanim/Zombie_Jackson_innerleg_upper.png", "start": 26156111, "end": 26157656}, {"filename": "/reanim/Zombie_Jackson_outerarm_hand.png", "start": 26157656, "end": 26159096}, {"filename": "/reanim/Zombie_Jackson_outerarm_lower.png", "start": 26159096, "end": 26160110}, {"filename": "/reanim/Zombie_Jackson_outerarm_upper.png", "start": 26160110, "end": 26161533}, {"filename": "/reanim/Zombie_Jackson_outerarm_upper2.png", "start": 26161533, "end": 26162959}, {"filename": "/reanim/Zombie_Jackson_outerleg_foot.png", "start": 26162959, "end": 26164132}, {"filename": "/reanim/Zombie_Jackson_outerleg_lower.png", "start": 26164132, "end": 26165847}, {"filename": "/reanim/Zombie_Jackson_outerleg_toe.png", "start": 26165847, "end": 26166604}, {"filename": "/reanim/Zombie_Jackson_outerleg_upper.png", "start": 26166604, "end": 26167896}, {"filename": "/reanim/Zombie_backup.reanim", "start": 26167896, "end": 26265354}, {"filename": "/reanim/Zombie_backup_chops.png", "start": 26265354, "end": 26268645}, {"filename": "/reanim/Zombie_backup_collar_overlay.png", "start": 26268645, "end": 26272115}, {"filename": "/reanim/Zombie_backup_innerarm_lower.png", "start": 26272115, "end": 26275689}, {"filename": "/reanim/Zombie_backup_innerarm_upper.png", "start": 26275689, "end": 26280037}, {"filename": "/reanim/Zombie_backup_innerfoot.png", "start": 26280037, "end": 26286186}, {"filename": "/reanim/Zombie_backup_innerhand.png", "start": 26286186, "end": 26290684}, {"filename": "/reanim/Zombie_backup_innerhand_point.png", "start": 26290684, "end": 26295195}, {"filename": "/reanim/Zombie_backup_innerleg_lower.png", "start": 26295195, "end": 26299758}, {"filename": "/reanim/Zombie_backup_innerleg_upper.png", "start": 26299758, "end": 26303064}, {"filename": "/reanim/Zombie_backup_lowerbody.png", "start": 26303064, "end": 26308507}, {"filename": "/reanim/Zombie_backup_outerarm_lower.png", "start": 26308507, "end": 26312548}, {"filename": "/reanim/Zombie_backup_outerarm_upper.png", "start": 26312548, "end": 26317403}, {"filename": "/reanim/Zombie_backup_outerarm_upper_bone.png", "start": 26317403, "end": 26322636}, {"filename": "/reanim/Zombie_backup_outerfoot_lower.png", "start": 26322636, "end": 26327602}, {"filename": "/reanim/Zombie_backup_outerfoot_lower_overlay.png", "start": 26327602, "end": 26332568}, {"filename": "/reanim/Zombie_backup_outerfoot_upper.png", "start": 26332568, "end": 26338048}, {"filename": "/reanim/Zombie_backup_outerhand.png", "start": 26338048, "end": 26342931}, {"filename": "/reanim/Zombie_backup_outerleg_lower.png", "start": 26342931, "end": 26347754}, {"filename": "/reanim/Zombie_backup_outerleg_upper.png", "start": 26347754, "end": 26351409}, {"filename": "/reanim/Zombie_backup_stash.png", "start": 26351409, "end": 26354968}, {"filename": "/reanim/Zombie_backup_upperbody.png", "start": 26354968, "end": 26365131}, {"filename": "/reanim/Zombie_balloon.reanim", "start": 26365131, "end": 26557393}, {"filename": "/reanim/Zombie_balloon_body1.png", "start": 26557393, "end": 26561959}, {"filename": "/reanim/Zombie_balloon_body2.png", "start": 26561959, "end": 26564031}, {"filename": "/reanim/Zombie_balloon_bottom.png", "start": 26564031, "end": 26564480}, {"filename": "/reanim/Zombie_balloon_hat.png", "start": 26564480, "end": 26565838}, {"filename": "/reanim/Zombie_balloon_head.png", "start": 26565838, "end": 26571435}, {"filename": "/reanim/Zombie_balloon_innerarm_lower.png", "start": 26571435, "end": 26572506}, {"filename": "/reanim/Zombie_balloon_innerarm_upper.png", "start": 26572506, "end": 26573641}, {"filename": "/reanim/Zombie_balloon_innerleg_foot.png", "start": 26573641, "end": 26575147}, {"filename": "/reanim/Zombie_balloon_innerleg_lower.png", "start": 26575147, "end": 26576560}, {"filename": "/reanim/Zombie_balloon_innerleg_upper.png", "start": 26576560, "end": 26577711}, {"filename": "/reanim/Zombie_balloon_jaw.png", "start": 26577711, "end": 26578943}, {"filename": "/reanim/Zombie_balloon_outerarm_lower.png", "start": 26578943, "end": 26580231}, {"filename": "/reanim/Zombie_balloon_outerarm_upper.png", "start": 26580231, "end": 26581702}, {"filename": "/reanim/Zombie_balloon_outerarm_upper2.png", "start": 26581702, "end": 26583482}, {"filename": "/reanim/Zombie_balloon_outerleg_FOOT.png", "start": 26583482, "end": 26585531}, {"filename": "/reanim/Zombie_balloon_outerleg_lower.png", "start": 26585531, "end": 26586859}, {"filename": "/reanim/Zombie_balloon_outerleg_upper.png", "start": 26586859, "end": 26588194}, {"filename": "/reanim/Zombie_balloon_pop1.png", "start": 26588194, "end": 26594637}, {"filename": "/reanim/Zombie_balloon_pop2.png", "start": 26594637, "end": 26597542}, {"filename": "/reanim/Zombie_balloon_propeller.png", "start": 26597542, "end": 26598887}, {"filename": "/reanim/Zombie_balloon_propeller2.png", "start": 26598887, "end": 26599969}, {"filename": "/reanim/Zombie_balloon_string.png", "start": 26599969, "end": 26600377}, {"filename": "/reanim/Zombie_balloon_top.png", "start": 26600377, "end": 26607597}, {"filename": "/reanim/Zombie_bobsled.reanim", "start": 26607597, "end": 26815148}, {"filename": "/reanim/Zombie_bobsled_body1.png", "start": 26815148, "end": 26818723}, {"filename": "/reanim/Zombie_bobsled_body2.png", "start": 26818723, "end": 26820184}, {"filename": "/reanim/Zombie_bobsled_innerarm_hand.png", "start": 26820184, "end": 26821446}, {"filename": "/reanim/Zombie_bobsled_innerarm_hand2.png", "start": 26821446, "end": 26822436}, {"filename": "/reanim/Zombie_bobsled_innerarm_lower.png", "start": 26822436, "end": 26823203}, {"filename": "/reanim/Zombie_bobsled_innerarm_upper.png", "start": 26823203, "end": 26824061}, {"filename": "/reanim/Zombie_bobsled_innerleg_foot.png", "start": 26824061, "end": 26825685}, {"filename": "/reanim/Zombie_bobsled_innerleg_lower.png", "start": 26825685, "end": 26827058}, {"filename": "/reanim/Zombie_bobsled_innerleg_upper.png", "start": 26827058, "end": 26828202}, {"filename": "/reanim/Zombie_bobsled_newhead.png", "start": 26828202, "end": 26833986}, {"filename": "/reanim/Zombie_bobsled_outerarm_hand.png", "start": 26833986, "end": 26835490}, {"filename": "/reanim/Zombie_bobsled_outerarm_hand2.png", "start": 26835490, "end": 26837023}, {"filename": "/reanim/Zombie_bobsled_outerarm_lower.png", "start": 26837023, "end": 26838284}, {"filename": "/reanim/Zombie_bobsled_outerarm_upper.png", "start": 26838284, "end": 26839576}, {"filename": "/reanim/Zombie_bobsled_outerarm_upper2.png", "start": 26839576, "end": 26841007}, {"filename": "/reanim/Zombie_bobsled_outerleg_foot1.png", "start": 26841007, "end": 26842122}, {"filename": "/reanim/Zombie_bobsled_outerleg_foot2.png", "start": 26842122, "end": 26843356}, {"filename": "/reanim/Zombie_bobsled_outerleg_lower.png", "start": 26843356, "end": 26844716}, {"filename": "/reanim/Zombie_bobsled_outerleg_upper.png", "start": 26844716, "end": 26845965}, {"filename": "/reanim/Zombie_body.png", "start": 26845965, "end": 26850850}, {"filename": "/reanim/Zombie_boss.reanim", "start": 26850850, "end": 27988376}, {"filename": "/reanim/Zombie_boss_RVwheel.png", "start": 27988376, "end": 27992143}, {"filename": "/reanim/Zombie_boss_antenna.png", "start": 27992143, "end": 27994468}, {"filename": "/reanim/Zombie_boss_antenna_lit.png", "start": 27994468, "end": 27997182}, {"filename": "/reanim/Zombie_boss_arm_upper2.png", "start": 27997182, "end": 28026413}, {"filename": "/reanim/Zombie_boss_eyeglow.png", "start": 28026413, "end": 28029580}, {"filename": "/reanim/Zombie_boss_eyeglow_black.png", "start": 28029580, "end": 28030850}, {"filename": "/reanim/Zombie_boss_eyeglow_blue.png", "start": 28030850, "end": 28033991}, {"filename": "/reanim/Zombie_boss_eyeglow_red.png", "start": 28033991, "end": 28037150}, {"filename": "/reanim/Zombie_boss_fireball.png", "start": 28037150, "end": 28070931}, {"filename": "/reanim/Zombie_boss_fireball.reanim", "start": 28070931, "end": 28093731}, {"filename": "/reanim/Zombie_boss_fireball_additive.png", "start": 28093731, "end": 28101591}, {"filename": "/reanim/Zombie_boss_fireball_black.png", "start": 28101591, "end": 28104778}, {"filename": "/reanim/Zombie_boss_fireball_chunks.png", "start": 28104778, "end": 28110372}, {"filename": "/reanim/Zombie_boss_fireball_multiply.png", "start": 28110372, "end": 28125322}, {"filename": "/reanim/Zombie_boss_fireball_shadow.png", "start": 28125322, "end": 28143882}, {"filename": "/reanim/Zombie_boss_fireball_superglow.png", "start": 28143882, "end": 28159694}, {"filename": "/reanim/Zombie_boss_fireball_superhilight.png", "start": 28159694, "end": 28163483}, {"filename": "/reanim/Zombie_boss_flag.png", "start": 28163483, "end": 28168838}, {"filename": "/reanim/Zombie_boss_flagpole.png", "start": 28168838, "end": 28171781}, {"filename": "/reanim/Zombie_boss_foot.png", "start": 28171781, "end": 28247943}, {"filename": "/reanim/Zombie_boss_foot_damage1.png", "start": 28247943, "end": 28326328}, {"filename": "/reanim/Zombie_boss_foot_damage2.png", "start": 28326328, "end": 28406510}, {"filename": "/reanim/Zombie_boss_head.png", "start": 28406510, "end": 28472253}, {"filename": "/reanim/Zombie_boss_head2.png", "start": 28472253, "end": 28489765}, {"filename": "/reanim/Zombie_boss_head_damage1.png", "start": 28489765, "end": 28556592}, {"filename": "/reanim/Zombie_boss_head_damage2.png", "start": 28556592, "end": 28627283}, {"filename": "/reanim/Zombie_boss_iceball.png", "start": 28627283, "end": 28646677}, {"filename": "/reanim/Zombie_boss_iceball.reanim", "start": 28646677, "end": 28687625}, {"filename": "/reanim/Zombie_boss_iceball_crystal1.png", "start": 28687625, "end": 28688978}, {"filename": "/reanim/Zombie_boss_iceball_crystal2.png", "start": 28688978, "end": 28693378}, {"filename": "/reanim/Zombie_boss_iceball_crystal3.png", "start": 28693378, "end": 28696327}, {"filename": "/reanim/Zombie_boss_iceball_grow.png", "start": 28696327, "end": 28697492}, {"filename": "/reanim/Zombie_boss_iceball_highlight.png", "start": 28697492, "end": 28709619}, {"filename": "/reanim/Zombie_boss_iceball_multiply.png", "start": 28709619, "end": 28727909}, {"filename": "/reanim/Zombie_boss_iceball_overlay.png", "start": 28727909, "end": 28766510}, {"filename": "/reanim/Zombie_boss_icefire_shadow.png", "start": 28766510, "end": 28770695}, {"filename": "/reanim/Zombie_boss_innerarm_finger.png", "start": 28770695, "end": 28781064}, {"filename": "/reanim/Zombie_boss_innerarm_fingerrope.png", "start": 28781064, "end": 28792385}, {"filename": "/reanim/Zombie_boss_innerarm_hand.png", "start": 28792385, "end": 28813600}, {"filename": "/reanim/Zombie_boss_innerarm_lower.png", "start": 28813600, "end": 28864518}, {"filename": "/reanim/Zombie_boss_innerarm_thumb1.png", "start": 28864518, "end": 28870687}, {"filename": "/reanim/Zombie_boss_innerarm_thumb2.png", "start": 28870687, "end": 28879035}, {"filename": "/reanim/Zombie_boss_innerarm_upper.png", "start": 28879035, "end": 28932320}, {"filename": "/reanim/Zombie_boss_innerjaw.png", "start": 28932320, "end": 28932785}, {"filename": "/reanim/Zombie_boss_innerleg_upper.png", "start": 28932785, "end": 28966806}, {"filename": "/reanim/Zombie_boss_jaw.png", "start": 28966806, "end": 29003065}, {"filename": "/reanim/Zombie_boss_jaw_damage1.png", "start": 29003065, "end": 29039697}, {"filename": "/reanim/Zombie_boss_jaw_damage2.png", "start": 29039697, "end": 29077026}, {"filename": "/reanim/Zombie_boss_leg_lower.png", "start": 29077026, "end": 29147490}, {"filename": "/reanim/Zombie_boss_legbits.png", "start": 29147490, "end": 29165412}, {"filename": "/reanim/Zombie_boss_lowerbody.png", "start": 29165412, "end": 29218210}, {"filename": "/reanim/Zombie_boss_mouthglow.png", "start": 29218210, "end": 29231088}, {"filename": "/reanim/Zombie_boss_mouthglow_blue.png", "start": 29231088, "end": 29243963}, {"filename": "/reanim/Zombie_boss_mouthglow_red.png", "start": 29243963, "end": 29256841}, {"filename": "/reanim/Zombie_boss_neck.jpg", "start": 29256841, "end": 29274230}, {"filename": "/reanim/Zombie_boss_neck_.png", "start": 29274230, "end": 29280509}, {"filename": "/reanim/Zombie_boss_outerarm_finger1.png", "start": 29280509, "end": 29287789}, {"filename": "/reanim/Zombie_boss_outerarm_finger2.png", "start": 29287789, "end": 29304094}, {"filename": "/reanim/Zombie_boss_outerarm_hand.png", "start": 29304094, "end": 29348299}, {"filename": "/reanim/Zombie_boss_outerarm_hand_damage1.png", "start": 29348299, "end": 29393919}, {"filename": "/reanim/Zombie_boss_outerarm_hand_damage2.png", "start": 29393919, "end": 29441459}, {"filename": "/reanim/Zombie_boss_outerarm_lower.png", "start": 29441459, "end": 29482987}, {"filename": "/reanim/Zombie_boss_outerarm_thumb1.png", "start": 29482987, "end": 29489015}, {"filename": "/reanim/Zombie_boss_outerarm_thumb2.png", "start": 29489015, "end": 29502880}, {"filename": "/reanim/Zombie_boss_outerarm_thumb_damage1.png", "start": 29502880, "end": 29516538}, {"filename": "/reanim/Zombie_boss_outerarm_thumb_damage2.png", "start": 29516538, "end": 29528614}, {"filename": "/reanim/Zombie_boss_outerarm_upper.png", "start": 29528614, "end": 29615235}, {"filename": "/reanim/Zombie_boss_outerleg_upper.png", "start": 29615235, "end": 29670369}, {"filename": "/reanim/Zombie_boss_rv.png", "start": 29670369, "end": 29737909}, {"filename": "/reanim/Zombie_boss_rv2.png", "start": 29737909, "end": 29812840}, {"filename": "/reanim/Zombie_boss_upperbody.jpg", "start": 29812840, "end": 29844184}, {"filename": "/reanim/Zombie_boss_upperbody_.png", "start": 29844184, "end": 29854044}, {"filename": "/reanim/Zombie_bossdriver_body.png", "start": 29854044, "end": 29858969}, {"filename": "/reanim/Zombie_bossdriver_brain.png", "start": 29858969, "end": 29865060}, {"filename": "/reanim/Zombie_bossdriver_face.png", "start": 29865060, "end": 29870065}, {"filename": "/reanim/Zombie_bossdriver_face2.png", "start": 29870065, "end": 29875045}, {"filename": "/reanim/Zombie_bossdriver_innerhand.png", "start": 29875045, "end": 29877601}, {"filename": "/reanim/Zombie_bossdriver_jaw.png", "start": 29877601, "end": 29880126}, {"filename": "/reanim/Zombie_bossdriver_jaw2.png", "start": 29880126, "end": 29882660}, {"filename": "/reanim/Zombie_bossdriver_lowerarm.png", "start": 29882660, "end": 29885745}, {"filename": "/reanim/Zombie_bossdriver_lowerarm2.png", "start": 29885745, "end": 29887119}, {"filename": "/reanim/Zombie_bossdriver_outerhand.png", "start": 29887119, "end": 29889322}, {"filename": "/reanim/Zombie_bossdriver_upperarm.png", "start": 29889322, "end": 29891539}, {"filename": "/reanim/Zombie_bucket1.png", "start": 29891539, "end": 29897633}, {"filename": "/reanim/Zombie_bucket2.png", "start": 29897633, "end": 29903778}, {"filename": "/reanim/Zombie_bucket3.png", "start": 29903778, "end": 29909463}, {"filename": "/reanim/Zombie_bungi.reanim", "start": 29909463, "end": 29975251}, {"filename": "/reanim/Zombie_bungi_body.png", "start": 29975251, "end": 29983743}, {"filename": "/reanim/Zombie_bungi_body2.png", "start": 29983743, "end": 29991412}, {"filename": "/reanim/Zombie_bungi_foot.png", "start": 29991412, "end": 29994454}, {"filename": "/reanim/Zombie_bungi_hair.png", "start": 29994454, "end": 29997798}, {"filename": "/reanim/Zombie_bungi_hand.png", "start": 29997798, "end": 30000524}, {"filename": "/reanim/Zombie_bungi_hand2.png", "start": 30000524, "end": 30003880}, {"filename": "/reanim/Zombie_bungi_head.png", "start": 30003880, "end": 30010277}, {"filename": "/reanim/Zombie_bungi_head_scared.png", "start": 30010277, "end": 30016901}, {"filename": "/reanim/Zombie_bungi_jaw.png", "start": 30016901, "end": 30018762}, {"filename": "/reanim/Zombie_bungi_left_tatter.png", "start": 30018762, "end": 30019445}, {"filename": "/reanim/Zombie_bungi_leftarm_lower.png", "start": 30019445, "end": 30021928}, {"filename": "/reanim/Zombie_bungi_leftarm_lower2.png", "start": 30021928, "end": 30025699}, {"filename": "/reanim/Zombie_bungi_leftarm_upper.png", "start": 30025699, "end": 30027624}, {"filename": "/reanim/Zombie_bungi_leftarm_upper2.png", "start": 30027624, "end": 30029842}, {"filename": "/reanim/Zombie_bungi_leftleg_lower.png", "start": 30029842, "end": 30032580}, {"filename": "/reanim/Zombie_bungi_leftleg_tatter.png", "start": 30032580, "end": 30033302}, {"filename": "/reanim/Zombie_bungi_leftleg_upper.png", "start": 30033302, "end": 30034914}, {"filename": "/reanim/Zombie_bungi_leftshirt.png", "start": 30034914, "end": 30036583}, {"filename": "/reanim/Zombie_bungi_rightarm_cuff.png", "start": 30036583, "end": 30037838}, {"filename": "/reanim/Zombie_bungi_rightarm_lower.png", "start": 30037838, "end": 30039008}, {"filename": "/reanim/Zombie_bungi_rightarm_lower2.png", "start": 30039008, "end": 30041996}, {"filename": "/reanim/Zombie_bungi_rightarm_upper.png", "start": 30041996, "end": 30045031}, {"filename": "/reanim/Zombie_bungi_rightarm_upper2.png", "start": 30045031, "end": 30048347}, {"filename": "/reanim/Zombie_bungi_rightleg_lower.png", "start": 30048347, "end": 30050324}, {"filename": "/reanim/Zombie_bungi_rightleg_upper.png", "start": 30050324, "end": 30051338}, {"filename": "/reanim/Zombie_bungi_rightshirt.png", "start": 30051338, "end": 30052871}, {"filename": "/reanim/Zombie_bungi_tongue.png", "start": 30052871, "end": 30053912}, {"filename": "/reanim/Zombie_catapult.reanim", "start": 30053912, "end": 30177500}, {"filename": "/reanim/Zombie_catapult_basket.png", "start": 30177500, "end": 30182163}, {"filename": "/reanim/Zombie_catapult_basket_overlay.png", "start": 30182163, "end": 30187077}, {"filename": "/reanim/Zombie_catapult_basketball.png", "start": 30187077, "end": 30189009}, {"filename": "/reanim/Zombie_catapult_body.png", "start": 30189009, "end": 30206746}, {"filename": "/reanim/Zombie_catapult_body_overlay1.png", "start": 30206746, "end": 30209813}, {"filename": "/reanim/Zombie_catapult_body_overlay2.png", "start": 30209813, "end": 30212803}, {"filename": "/reanim/Zombie_catapult_crank.png", "start": 30212803, "end": 30213678}, {"filename": "/reanim/Zombie_catapult_crankarm.png", "start": 30213678, "end": 30213943}, {"filename": "/reanim/Zombie_catapult_driver_body.png", "start": 30213943, "end": 30222785}, {"filename": "/reanim/Zombie_catapult_driver_hankie.png", "start": 30222785, "end": 30223892}, {"filename": "/reanim/Zombie_catapult_driver_head.png", "start": 30223892, "end": 30230846}, {"filename": "/reanim/Zombie_catapult_driver_innerarm_hand.png", "start": 30230846, "end": 30232529}, {"filename": "/reanim/Zombie_catapult_driver_innerarm_lower.png", "start": 30232529, "end": 30234451}, {"filename": "/reanim/Zombie_catapult_driver_innerarm_upper.png", "start": 30234451, "end": 30235609}, {"filename": "/reanim/Zombie_catapult_driver_innerleg_foot.png", "start": 30235609, "end": 30238332}, {"filename": "/reanim/Zombie_catapult_driver_innerleg_lower.png", "start": 30238332, "end": 30240158}, {"filename": "/reanim/Zombie_catapult_driver_innerleg_upper.png", "start": 30240158, "end": 30242602}, {"filename": "/reanim/Zombie_catapult_driver_mouth.png", "start": 30242602, "end": 30243759}, {"filename": "/reanim/Zombie_catapult_driver_outerarm_hand.png", "start": 30243759, "end": 30245598}, {"filename": "/reanim/Zombie_catapult_driver_outerarm_lower.png", "start": 30245598, "end": 30248562}, {"filename": "/reanim/Zombie_catapult_driver_outerarm_upper.png", "start": 30248562, "end": 30252532}, {"filename": "/reanim/Zombie_catapult_driver_outerleg_foot.png", "start": 30252532, "end": 30255851}, {"filename": "/reanim/Zombie_catapult_driver_outerleg_lower.png", "start": 30255851, "end": 30258144}, {"filename": "/reanim/Zombie_catapult_driver_outerleg_upper.png", "start": 30258144, "end": 30260797}, {"filename": "/reanim/Zombie_catapult_engine.png", "start": 30260797, "end": 30264369}, {"filename": "/reanim/Zombie_catapult_manhole.png", "start": 30264369, "end": 30270768}, {"filename": "/reanim/Zombie_catapult_manhole_overlay.png", "start": 30270768, "end": 30277003}, {"filename": "/reanim/Zombie_catapult_pole.png", "start": 30277003, "end": 30299454}, {"filename": "/reanim/Zombie_catapult_pole_damage.png", "start": 30299454, "end": 30318314}, {"filename": "/reanim/Zombie_catapult_pole_damage_withball.png", "start": 30318314, "end": 30337749}, {"filename": "/reanim/Zombie_catapult_pole_withball.png", "start": 30337749, "end": 30360837}, {"filename": "/reanim/Zombie_catapult_siding.png", "start": 30360837, "end": 30363970}, {"filename": "/reanim/Zombie_catapult_siding_damage.png", "start": 30363970, "end": 30367545}, {"filename": "/reanim/Zombie_catapult_spring.png", "start": 30367545, "end": 30368842}, {"filename": "/reanim/Zombie_catapult_tape.png", "start": 30368842, "end": 30369941}, {"filename": "/reanim/Zombie_charred.reanim", "start": 30369941, "end": 30379779}, {"filename": "/reanim/Zombie_charred1.png", "start": 30379779, "end": 30381985}, {"filename": "/reanim/Zombie_charred10.png", "start": 30381985, "end": 30383640}, {"filename": "/reanim/Zombie_charred2.png", "start": 30383640, "end": 30386296}, {"filename": "/reanim/Zombie_charred3.png", "start": 30386296, "end": 30388904}, {"filename": "/reanim/Zombie_charred4.png", "start": 30388904, "end": 30391752}, {"filename": "/reanim/Zombie_charred5.png", "start": 30391752, "end": 30394508}, {"filename": "/reanim/Zombie_charred6.png", "start": 30394508, "end": 30396905}, {"filename": "/reanim/Zombie_charred7.png", "start": 30396905, "end": 30399012}, {"filename": "/reanim/Zombie_charred8.png", "start": 30399012, "end": 30400722}, {"filename": "/reanim/Zombie_charred9.png", "start": 30400722, "end": 30402533}, {"filename": "/reanim/Zombie_charred_catapult.reanim", "start": 30402533, "end": 30410364}, {"filename": "/reanim/Zombie_charred_catapult1.png", "start": 30410364, "end": 30414062}, {"filename": "/reanim/Zombie_charred_catapult2.png", "start": 30414062, "end": 30420470}, {"filename": "/reanim/Zombie_charred_catapult3.png", "start": 30420470, "end": 30428259}, {"filename": "/reanim/Zombie_charred_catapult4.png", "start": 30428259, "end": 30435960}, {"filename": "/reanim/Zombie_charred_catapult5.png", "start": 30435960, "end": 30443094}, {"filename": "/reanim/Zombie_charred_catapult6.png", "start": 30443094, "end": 30448825}, {"filename": "/reanim/Zombie_charred_catapult7.png", "start": 30448825, "end": 30454235}, {"filename": "/reanim/Zombie_charred_catapult8.png", "start": 30454235, "end": 30459152}, {"filename": "/reanim/Zombie_charred_catapult9.png", "start": 30459152, "end": 30462186}, {"filename": "/reanim/Zombie_charred_catapult_blink1.png", "start": 30462186, "end": 30462799}, {"filename": "/reanim/Zombie_charred_catapult_blink2.png", "start": 30462799, "end": 30463105}, {"filename": "/reanim/Zombie_charred_catapult_head.png", "start": 30463105, "end": 30464747}, {"filename": "/reanim/Zombie_charred_digger.reanim", "start": 30464747, "end": 30479848}, {"filename": "/reanim/Zombie_charred_diggeraxe.png", "start": 30479848, "end": 30480776}, {"filename": "/reanim/Zombie_charred_diggerblink1.png", "start": 30480776, "end": 30481340}, {"filename": "/reanim/Zombie_charred_diggerblink2.png", "start": 30481340, "end": 30481540}, {"filename": "/reanim/Zombie_charred_diggerbody1.png", "start": 30481540, "end": 30483391}, {"filename": "/reanim/Zombie_charred_diggerbody1_noaxe.png", "start": 30483391, "end": 30485213}, {"filename": "/reanim/Zombie_charred_diggerbody2.png", "start": 30485213, "end": 30487418}, {"filename": "/reanim/Zombie_charred_diggerbody2_noaxe.png", "start": 30487418, "end": 30489603}, {"filename": "/reanim/Zombie_charred_diggerbody3.png", "start": 30489603, "end": 30492184}, {"filename": "/reanim/Zombie_charred_diggerbody3_noaxe.png", "start": 30492184, "end": 30494753}, {"filename": "/reanim/Zombie_charred_diggerbody4.png", "start": 30494753, "end": 30497651}, {"filename": "/reanim/Zombie_charred_diggerbody4_noaxe.png", "start": 30497651, "end": 30500524}, {"filename": "/reanim/Zombie_charred_diggerbody5.png", "start": 30500524, "end": 30503757}, {"filename": "/reanim/Zombie_charred_diggerbody6.png", "start": 30503757, "end": 30506998}, {"filename": "/reanim/Zombie_charred_diggerbody7.png", "start": 30506998, "end": 30509725}, {"filename": "/reanim/Zombie_charred_diggerbody8.png", "start": 30509725, "end": 30512101}, {"filename": "/reanim/Zombie_charred_diggerbody9.png", "start": 30512101, "end": 30514113}, {"filename": "/reanim/Zombie_charred_diggerhead.png", "start": 30514113, "end": 30515849}, {"filename": "/reanim/Zombie_charred_eyes1.png", "start": 30515849, "end": 30517005}, {"filename": "/reanim/Zombie_charred_eyes2.png", "start": 30517005, "end": 30517565}, {"filename": "/reanim/Zombie_charred_gargantuar.reanim", "start": 30517565, "end": 30525682}, {"filename": "/reanim/Zombie_charred_gargantuar1.png", "start": 30525682, "end": 30528506}, {"filename": "/reanim/Zombie_charred_gargantuar10.png", "start": 30528506, "end": 30530974}, {"filename": "/reanim/Zombie_charred_gargantuar11.png", "start": 30530974, "end": 30532768}, {"filename": "/reanim/Zombie_charred_gargantuar2.png", "start": 30532768, "end": 30536114}, {"filename": "/reanim/Zombie_charred_gargantuar3.png", "start": 30536114, "end": 30539756}, {"filename": "/reanim/Zombie_charred_gargantuar4.png", "start": 30539756, "end": 30543493}, {"filename": "/reanim/Zombie_charred_gargantuar5.png", "start": 30543493, "end": 30547230}, {"filename": "/reanim/Zombie_charred_gargantuar6.png", "start": 30547230, "end": 30551082}, {"filename": "/reanim/Zombie_charred_gargantuar7.png", "start": 30551082, "end": 30554586}, {"filename": "/reanim/Zombie_charred_gargantuar8.png", "start": 30554586, "end": 30558368}, {"filename": "/reanim/Zombie_charred_gargantuar9.png", "start": 30558368, "end": 30562012}, {"filename": "/reanim/Zombie_charred_gargantuar_arm.png", "start": 30562012, "end": 30563930}, {"filename": "/reanim/Zombie_charred_gargantuar_blink1.png", "start": 30563930, "end": 30565107}, {"filename": "/reanim/Zombie_charred_gargantuar_blink2.png", "start": 30565107, "end": 30565636}, {"filename": "/reanim/Zombie_charred_gargantuar_head.png", "start": 30565636, "end": 30567233}, {"filename": "/reanim/Zombie_charred_gargantuar_impblink1.png", "start": 30567233, "end": 30567976}, {"filename": "/reanim/Zombie_charred_gargantuar_impblink2.png", "start": 30567976, "end": 30568319}, {"filename": "/reanim/Zombie_charred_gargantuar_imphead.png", "start": 30568319, "end": 30569574}, {"filename": "/reanim/Zombie_charred_head.png", "start": 30569574, "end": 30570827}, {"filename": "/reanim/Zombie_charred_imp.reanim", "start": 30570827, "end": 30577528}, {"filename": "/reanim/Zombie_charred_impblink1.png", "start": 30577528, "end": 30578105}, {"filename": "/reanim/Zombie_charred_impblink2.png", "start": 30578105, "end": 30578356}, {"filename": "/reanim/Zombie_charred_impbody1.png", "start": 30578356, "end": 30579909}, {"filename": "/reanim/Zombie_charred_impbody2.png", "start": 30579909, "end": 30581656}, {"filename": "/reanim/Zombie_charred_impbody3.png", "start": 30581656, "end": 30583473}, {"filename": "/reanim/Zombie_charred_impbody4.png", "start": 30583473, "end": 30584601}, {"filename": "/reanim/Zombie_charred_impbody5.png", "start": 30584601, "end": 30586132}, {"filename": "/reanim/Zombie_charred_impbody6.png", "start": 30586132, "end": 30587495}, {"filename": "/reanim/Zombie_charred_imphead.png", "start": 30587495, "end": 30588666}, {"filename": "/reanim/Zombie_charred_pile1.png", "start": 30588666, "end": 30590569}, {"filename": "/reanim/Zombie_charred_pile2.png", "start": 30590569, "end": 30592400}, {"filename": "/reanim/Zombie_charred_tail.png", "start": 30592400, "end": 30593685}, {"filename": "/reanim/Zombie_charred_zamboni.reanim", "start": 30593685, "end": 30604338}, {"filename": "/reanim/Zombie_charred_zamboni1.png", "start": 30604338, "end": 30606335}, {"filename": "/reanim/Zombie_charred_zamboni10.png", "start": 30606335, "end": 30610327}, {"filename": "/reanim/Zombie_charred_zamboni11.png", "start": 30610327, "end": 30613392}, {"filename": "/reanim/Zombie_charred_zamboni12.png", "start": 30613392, "end": 30616545}, {"filename": "/reanim/Zombie_charred_zamboni13.png", "start": 30616545, "end": 30619172}, {"filename": "/reanim/Zombie_charred_zamboni14.png", "start": 30619172, "end": 30621137}, {"filename": "/reanim/Zombie_charred_zamboni2.png", "start": 30621137, "end": 30624147}, {"filename": "/reanim/Zombie_charred_zamboni3.png", "start": 30624147, "end": 30629067}, {"filename": "/reanim/Zombie_charred_zamboni4.png", "start": 30629067, "end": 30634441}, {"filename": "/reanim/Zombie_charred_zamboni5.png", "start": 30634441, "end": 30641171}, {"filename": "/reanim/Zombie_charred_zamboni6 .png", "start": 30641171, "end": 30648350}, {"filename": "/reanim/Zombie_charred_zamboni6.png", "start": 30648350, "end": 30655529}, {"filename": "/reanim/Zombie_charred_zamboni7.png", "start": 30655529, "end": 30661308}, {"filename": "/reanim/Zombie_charred_zamboni8.png", "start": 30661308, "end": 30666763}, {"filename": "/reanim/Zombie_charred_zamboni9.png", "start": 30666763, "end": 30671518}, {"filename": "/reanim/Zombie_charred_zamboniblink1.png", "start": 30671518, "end": 30672147}, {"filename": "/reanim/Zombie_charred_zamboniblink2.png", "start": 30672147, "end": 30672410}, {"filename": "/reanim/Zombie_charred_zambonihead.png", "start": 30672410, "end": 30674274}, {"filename": "/reanim/Zombie_charred_zambonitail.png", "start": 30674274, "end": 30676778}, {"filename": "/reanim/Zombie_cone1.png", "start": 30676778, "end": 30680587}, {"filename": "/reanim/Zombie_cone2.png", "start": 30680587, "end": 30685196}, {"filename": "/reanim/Zombie_cone3.png", "start": 30685196, "end": 30690224}, {"filename": "/reanim/Zombie_cord.png", "start": 30690224, "end": 30690567}, {"filename": "/reanim/Zombie_credits_conehead.reanim", "start": 30690567, "end": 30722640}, {"filename": "/reanim/Zombie_credits_dance.reanim", "start": 30722640, "end": 31513594}, {"filename": "/reanim/Zombie_credits_screendoor.reanim", "start": 31513594, "end": 31542755}, {"filename": "/reanim/Zombie_dancer.reanim", "start": 31542755, "end": 31670411}, {"filename": "/reanim/Zombie_dancer__head.png", "start": 31670411, "end": 31675261}, {"filename": "/reanim/Zombie_dancer_belt.png", "start": 31675261, "end": 31676627}, {"filename": "/reanim/Zombie_dancer_body1.png", "start": 31676627, "end": 31684056}, {"filename": "/reanim/Zombie_dancer_body2.png", "start": 31684056, "end": 31685348}, {"filename": "/reanim/Zombie_dancer_colar.png", "start": 31685348, "end": 31686631}, {"filename": "/reanim/Zombie_dancer_earing.png", "start": 31686631, "end": 31687225}, {"filename": "/reanim/Zombie_dancer_hair.png", "start": 31687225, "end": 31692451}, {"filename": "/reanim/Zombie_dancer_innerarm_hand.png", "start": 31692451, "end": 31693840}, {"filename": "/reanim/Zombie_dancer_innerarm_lower.png", "start": 31693840, "end": 31694814}, {"filename": "/reanim/Zombie_dancer_innerarm_upper.png", "start": 31694814, "end": 31695712}, {"filename": "/reanim/Zombie_dancer_innerleg_foot.png", "start": 31695712, "end": 31697440}, {"filename": "/reanim/Zombie_dancer_innerleg_lower.png", "start": 31697440, "end": 31699003}, {"filename": "/reanim/Zombie_dancer_innerleg_upper.png", "start": 31699003, "end": 31700164}, {"filename": "/reanim/Zombie_dancer_outerarm_hand.png", "start": 31700164, "end": 31702284}, {"filename": "/reanim/Zombie_dancer_outerarm_lower.png", "start": 31702284, "end": 31703472}, {"filename": "/reanim/Zombie_dancer_outerarm_upper.png", "start": 31703472, "end": 31704578}, {"filename": "/reanim/Zombie_dancer_outerleg_foot.png", "start": 31704578, "end": 31705955}, {"filename": "/reanim/Zombie_dancer_outerleg_lower.png", "start": 31705955, "end": 31707484}, {"filename": "/reanim/Zombie_dancer_outerleg_toe.png", "start": 31707484, "end": 31708716}, {"filename": "/reanim/Zombie_dancer_outerleg_upper.png", "start": 31708716, "end": 31709802}, {"filename": "/reanim/Zombie_digger.reanim", "start": 31709802, "end": 31926197}, {"filename": "/reanim/Zombie_digger_body.png", "start": 31926197, "end": 31937848}, {"filename": "/reanim/Zombie_digger_dig0.png", "start": 31937848, "end": 31940734}, {"filename": "/reanim/Zombie_digger_dig1.png", "start": 31940734, "end": 31944417}, {"filename": "/reanim/Zombie_digger_dig2.png", "start": 31944417, "end": 31948307}, {"filename": "/reanim/Zombie_digger_dig3.png", "start": 31948307, "end": 31951951}, {"filename": "/reanim/Zombie_digger_dig4.png", "start": 31951951, "end": 31955358}, {"filename": "/reanim/Zombie_digger_dig5.png", "start": 31955358, "end": 31958231}, {"filename": "/reanim/Zombie_digger_dirt.png", "start": 31958231, "end": 31959265}, {"filename": "/reanim/Zombie_digger_hardhat.png", "start": 31959265, "end": 31964576}, {"filename": "/reanim/Zombie_digger_hardhat2.png", "start": 31964576, "end": 31970075}, {"filename": "/reanim/Zombie_digger_hardhat3.png", "start": 31970075, "end": 31974673}, {"filename": "/reanim/Zombie_digger_head.png", "start": 31974673, "end": 31981409}, {"filename": "/reanim/Zombie_digger_head2.png", "start": 31981409, "end": 31988115}, {"filename": "/reanim/Zombie_digger_head_eye.png", "start": 31988115, "end": 31988249}, {"filename": "/reanim/Zombie_digger_innerarm_hand.png", "start": 31988249, "end": 31989675}, {"filename": "/reanim/Zombie_digger_innerarm_lower.png", "start": 31989675, "end": 31991500}, {"filename": "/reanim/Zombie_digger_innerarm_upper.png", "start": 31991500, "end": 31993336}, {"filename": "/reanim/Zombie_digger_innerleg_foot.png", "start": 31993336, "end": 31995557}, {"filename": "/reanim/Zombie_digger_innerleg_lower.png", "start": 31995557, "end": 31997356}, {"filename": "/reanim/Zombie_digger_innerleg_upper.png", "start": 31997356, "end": 31998839}, {"filename": "/reanim/Zombie_digger_jaw.png", "start": 31998839, "end": 31999908}, {"filename": "/reanim/Zombie_digger_outerarm_hand.png", "start": 31999908, "end": 32001189}, {"filename": "/reanim/Zombie_digger_outerarm_lower.png", "start": 32001189, "end": 32004107}, {"filename": "/reanim/Zombie_digger_outerarm_upper.png", "start": 32004107, "end": 32008266}, {"filename": "/reanim/Zombie_digger_outerarm_upper2.png", "start": 32008266, "end": 32012724}, {"filename": "/reanim/Zombie_digger_outerleg_fool.png", "start": 32012724, "end": 32014566}, {"filename": "/reanim/Zombie_digger_outerleg_lower.png", "start": 32014566, "end": 32016136}, {"filename": "/reanim/Zombie_digger_outerleg_upper.png", "start": 32016136, "end": 32017991}, {"filename": "/reanim/Zombie_digger_pickaxe.png", "start": 32017991, "end": 32021884}, {"filename": "/reanim/Zombie_digger_rise2.png", "start": 32021884, "end": 32053831}, {"filename": "/reanim/Zombie_digger_rise3.png", "start": 32053831, "end": 32081129}, {"filename": "/reanim/Zombie_digger_rise4.png", "start": 32081129, "end": 32109266}, {"filename": "/reanim/Zombie_digger_rise5.png", "start": 32109266, "end": 32137158}, {"filename": "/reanim/Zombie_digger_rise6.png", "start": 32137158, "end": 32164258}, {"filename": "/reanim/Zombie_digger_rise_ground.png", "start": 32164258, "end": 32170080}, {"filename": "/reanim/Zombie_disco.reanim", "start": 32170080, "end": 32350800}, {"filename": "/reanim/Zombie_disco_chops.png", "start": 32350800, "end": 32354544}, {"filename": "/reanim/Zombie_disco_collar_overlay.png", "start": 32354544, "end": 32358426}, {"filename": "/reanim/Zombie_disco_fish.png", "start": 32358426, "end": 32361741}, {"filename": "/reanim/Zombie_disco_glasses.png", "start": 32361741, "end": 32368152}, {"filename": "/reanim/Zombie_disco_hair.png", "start": 32368152, "end": 32379439}, {"filename": "/reanim/Zombie_disco_innerarm_lower.png", "start": 32379439, "end": 32383651}, {"filename": "/reanim/Zombie_disco_innerarm_lowercuff.png", "start": 32383651, "end": 32386808}, {"filename": "/reanim/Zombie_disco_innerarm_upper.png", "start": 32386808, "end": 32390635}, {"filename": "/reanim/Zombie_disco_innerfoot.png", "start": 32390635, "end": 32397786}, {"filename": "/reanim/Zombie_disco_innerhand.png", "start": 32397786, "end": 32402257}, {"filename": "/reanim/Zombie_disco_innerhand_point.png", "start": 32402257, "end": 32406768}, {"filename": "/reanim/Zombie_disco_innerleg_lower.png", "start": 32406768, "end": 32411644}, {"filename": "/reanim/Zombie_disco_innerleg_upper.png", "start": 32411644, "end": 32415655}, {"filename": "/reanim/Zombie_disco_lowerbody.png", "start": 32415655, "end": 32421010}, {"filename": "/reanim/Zombie_disco_medalion.png", "start": 32421010, "end": 32424748}, {"filename": "/reanim/Zombie_disco_outerarm_lower.png", "start": 32424748, "end": 32429305}, {"filename": "/reanim/Zombie_disco_outerarm_upper.png", "start": 32429305, "end": 32433155}, {"filename": "/reanim/Zombie_disco_outerarm_upper_bone.png", "start": 32433155, "end": 32437447}, {"filename": "/reanim/Zombie_disco_outerfoot_lower.png", "start": 32437447, "end": 32442427}, {"filename": "/reanim/Zombie_disco_outerfoot_lower_overlay.png", "start": 32442427, "end": 32448415}, {"filename": "/reanim/Zombie_disco_outerfoot_upper.png", "start": 32448415, "end": 32454095}, {"filename": "/reanim/Zombie_disco_outerhand.png", "start": 32454095, "end": 32458894}, {"filename": "/reanim/Zombie_disco_outerhand_point.png", "start": 32458894, "end": 32463239}, {"filename": "/reanim/Zombie_disco_outerleg_lower.png", "start": 32463239, "end": 32468556}, {"filename": "/reanim/Zombie_disco_outerleg_upper.png", "start": 32468556, "end": 32472425}, {"filename": "/reanim/Zombie_disco_upperbody.png", "start": 32472425, "end": 32482519}, {"filename": "/reanim/Zombie_dolphinrider.reanim", "start": 32482519, "end": 32863328}, {"filename": "/reanim/Zombie_dolphinrider_body1.png", "start": 32863328, "end": 32867462}, {"filename": "/reanim/Zombie_dolphinrider_body2.png", "start": 32867462, "end": 32868877}, {"filename": "/reanim/Zombie_dolphinrider_dolphinbody1.png", "start": 32868877, "end": 32877288}, {"filename": "/reanim/Zombie_dolphinrider_dolphinbody2.png", "start": 32877288, "end": 32879757}, {"filename": "/reanim/Zombie_dolphinrider_dolphinfin1.png", "start": 32879757, "end": 32881081}, {"filename": "/reanim/Zombie_dolphinrider_dolphinfin2.png", "start": 32881081, "end": 32881849}, {"filename": "/reanim/Zombie_dolphinrider_dolphininwater.png", "start": 32881849, "end": 32894576}, {"filename": "/reanim/Zombie_dolphinrider_dolphinjaw.png", "start": 32894576, "end": 32895832}, {"filename": "/reanim/Zombie_dolphinrider_head.png", "start": 32895832, "end": 32900933}, {"filename": "/reanim/Zombie_dolphinrider_innerarm_hand.png", "start": 32900933, "end": 32902239}, {"filename": "/reanim/Zombie_dolphinrider_innerarm_lower.png", "start": 32902239, "end": 32903103}, {"filename": "/reanim/Zombie_dolphinrider_innerarm_upper.png", "start": 32903103, "end": 32903874}, {"filename": "/reanim/Zombie_dolphinrider_innerleg_foot.png", "start": 32903874, "end": 32905230}, {"filename": "/reanim/Zombie_dolphinrider_innerleg_lower.png", "start": 32905230, "end": 32906597}, {"filename": "/reanim/Zombie_dolphinrider_innerleg_upper.png", "start": 32906597, "end": 32907976}, {"filename": "/reanim/Zombie_dolphinrider_jaw.png", "start": 32907976, "end": 32909571}, {"filename": "/reanim/Zombie_dolphinrider_outerarm_hand.png", "start": 32909571, "end": 32911100}, {"filename": "/reanim/Zombie_dolphinrider_outerarm_lower.png", "start": 32911100, "end": 32912172}, {"filename": "/reanim/Zombie_dolphinrider_outerarm_upper.png", "start": 32912172, "end": 32913531}, {"filename": "/reanim/Zombie_dolphinrider_outerarm_upper2.png", "start": 32913531, "end": 32914802}, {"filename": "/reanim/Zombie_dolphinrider_outerleg_foot1.png", "start": 32914802, "end": 32915998}, {"filename": "/reanim/Zombie_dolphinrider_outerleg_foot2.png", "start": 32915998, "end": 32917005}, {"filename": "/reanim/Zombie_dolphinrider_outerleg_lower.png", "start": 32917005, "end": 32918122}, {"filename": "/reanim/Zombie_dolphinrider_outerleg_upper.png", "start": 32918122, "end": 32919465}, {"filename": "/reanim/Zombie_dolphinrider_watershadow.png", "start": 32919465, "end": 32920714}, {"filename": "/reanim/Zombie_dolphinrider_whitewater1.png", "start": 32920714, "end": 32922698}, {"filename": "/reanim/Zombie_dolphinrider_whitewater2.png", "start": 32922698, "end": 32924816}, {"filename": "/reanim/Zombie_dolphinrider_whitewater3.png", "start": 32924816, "end": 32926723}, {"filename": "/reanim/Zombie_duckytube.png", "start": 32926723, "end": 32935513}, {"filename": "/reanim/Zombie_duckytube_inwater.png", "start": 32935513, "end": 32944994}, {"filename": "/reanim/Zombie_duckytube_whole.png", "start": 32944994, "end": 32954949}, {"filename": "/reanim/Zombie_duckytubehead.png", "start": 32954949, "end": 32959114}, {"filename": "/reanim/Zombie_eye.png", "start": 32959114, "end": 32960359}, {"filename": "/reanim/Zombie_flag1.png", "start": 32960359, "end": 32967346}, {"filename": "/reanim/Zombie_flag3.png", "start": 32967346, "end": 32974855}, {"filename": "/reanim/Zombie_flaghand.png", "start": 32974855, "end": 32976263}, {"filename": "/reanim/Zombie_flagpole.png", "start": 32976263, "end": 32978630}, {"filename": "/reanim/Zombie_flagpole.reanim", "start": 32978630, "end": 32980199}, {"filename": "/reanim/Zombie_football.reanim", "start": 32980199, "end": 33113853}, {"filename": "/reanim/Zombie_football_head.png", "start": 33113853, "end": 33119002}, {"filename": "/reanim/Zombie_football_helmet.png", "start": 33119002, "end": 33127216}, {"filename": "/reanim/Zombie_football_helmet2.png", "start": 33127216, "end": 33135862}, {"filename": "/reanim/Zombie_football_helmet3.png", "start": 33135862, "end": 33144949}, {"filename": "/reanim/Zombie_football_leftarm_eatinghand.png", "start": 33144949, "end": 33146938}, {"filename": "/reanim/Zombie_football_leftarm_eatinglower.png", "start": 33146938, "end": 33148071}, {"filename": "/reanim/Zombie_football_leftarm_hand.png", "start": 33148071, "end": 33150217}, {"filename": "/reanim/Zombie_football_leftarm_lower.png", "start": 33150217, "end": 33151350}, {"filename": "/reanim/Zombie_football_leftleg_foot.png", "start": 33151350, "end": 33153129}, {"filename": "/reanim/Zombie_football_leftleg_lower.png", "start": 33153129, "end": 33154349}, {"filename": "/reanim/Zombie_football_leftleg_upper.png", "start": 33154349, "end": 33156464}, {"filename": "/reanim/Zombie_football_lowerbody.png", "start": 33156464, "end": 33158763}, {"filename": "/reanim/Zombie_football_outerarm_eatinghand.png", "start": 33158763, "end": 33160585}, {"filename": "/reanim/Zombie_football_rightleg_foot.png", "start": 33160585, "end": 33162725}, {"filename": "/reanim/Zombie_football_rightleg_lower.png", "start": 33162725, "end": 33163825}, {"filename": "/reanim/Zombie_football_rightleg_upper.png", "start": 33163825, "end": 33165480}, {"filename": "/reanim/Zombie_football_upperbody.png", "start": 33165480, "end": 33177649}, {"filename": "/reanim/Zombie_football_upperbody2.png", "start": 33177649, "end": 33183292}, {"filename": "/reanim/Zombie_football_upperbody3.png", "start": 33183292, "end": 33188708}, {"filename": "/reanim/Zombie_gargantuar.reanim", "start": 33188708, "end": 33576948}, {"filename": "/reanim/Zombie_gargantuar_body1.png", "start": 33576948, "end": 33596487}, {"filename": "/reanim/Zombie_gargantuar_body1_2.png", "start": 33596487, "end": 33616774}, {"filename": "/reanim/Zombie_gargantuar_body1_3.png", "start": 33616774, "end": 33637134}, {"filename": "/reanim/Zombie_gargantuar_body2.png", "start": 33637134, "end": 33639431}, {"filename": "/reanim/Zombie_gargantuar_duckxing.png", "start": 33639431, "end": 33652265}, {"filename": "/reanim/Zombie_gargantuar_foot.png", "start": 33652265, "end": 33655354}, {"filename": "/reanim/Zombie_gargantuar_foot2.png", "start": 33655354, "end": 33658711}, {"filename": "/reanim/Zombie_gargantuar_head.png", "start": 33658711, "end": 33666335}, {"filename": "/reanim/Zombie_gargantuar_head2.png", "start": 33666335, "end": 33674057}, {"filename": "/reanim/Zombie_gargantuar_head2_redeye.png", "start": 33674057, "end": 33681803}, {"filename": "/reanim/Zombie_gargantuar_head_redeye.png", "start": 33681803, "end": 33689427}, {"filename": "/reanim/Zombie_gargantuar_innerarm_hand.png", "start": 33689427, "end": 33692797}, {"filename": "/reanim/Zombie_gargantuar_innerarm_lower.png", "start": 33692797, "end": 33696552}, {"filename": "/reanim/Zombie_gargantuar_innerarm_thumb.png", "start": 33696552, "end": 33698006}, {"filename": "/reanim/Zombie_gargantuar_innerarm_upper.png", "start": 33698006, "end": 33702679}, {"filename": "/reanim/Zombie_gargantuar_innerleg_lower.png", "start": 33702679, "end": 33706033}, {"filename": "/reanim/Zombie_gargantuar_innerleg_upper.png", "start": 33706033, "end": 33708532}, {"filename": "/reanim/Zombie_gargantuar_jaw.png", "start": 33708532, "end": 33710594}, {"filename": "/reanim/Zombie_gargantuar_outerarm_hand.png", "start": 33710594, "end": 33714242}, {"filename": "/reanim/Zombie_gargantuar_outerarm_lower.png", "start": 33714242, "end": 33720012}, {"filename": "/reanim/Zombie_gargantuar_outerarm_lower2.png", "start": 33720012, "end": 33726402}, {"filename": "/reanim/Zombie_gargantuar_outerarm_upper.png", "start": 33726402, "end": 33731388}, {"filename": "/reanim/Zombie_gargantuar_outerleg_lower.png", "start": 33731388, "end": 33734614}, {"filename": "/reanim/Zombie_gargantuar_outerleg_upper.png", "start": 33734614, "end": 33736998}, {"filename": "/reanim/Zombie_gargantuar_rope.png", "start": 33736998, "end": 33745101}, {"filename": "/reanim/Zombie_gargantuar_telephonepole.png", "start": 33745101, "end": 33769368}, {"filename": "/reanim/Zombie_gargantuar_trashcan1.png", "start": 33769368, "end": 33773469}, {"filename": "/reanim/Zombie_gargantuar_trashcan2.png", "start": 33773469, "end": 33775137}, {"filename": "/reanim/Zombie_gargantuar_whiterope.png", "start": 33775137, "end": 33776114}, {"filename": "/reanim/Zombie_gargantuar_zombie.png", "start": 33776114, "end": 33790277}, {"filename": "/reanim/Zombie_glasses.png", "start": 33790277, "end": 33791444}, {"filename": "/reanim/Zombie_hair.png", "start": 33791444, "end": 33794739}, {"filename": "/reanim/Zombie_hand.reanim", "start": 33794739, "end": 33824453}, {"filename": "/reanim/Zombie_hand_arm.png", "start": 33824453, "end": 33834065}, {"filename": "/reanim/Zombie_hand_finger1_1.png", "start": 33834065, "end": 33840283}, {"filename": "/reanim/Zombie_hand_finger1_2.png", "start": 33840283, "end": 33845615}, {"filename": "/reanim/Zombie_hand_finger2_1.png", "start": 33845615, "end": 33854596}, {"filename": "/reanim/Zombie_hand_finger2_2.png", "start": 33854596, "end": 33859678}, {"filename": "/reanim/Zombie_hand_finger3_1.png", "start": 33859678, "end": 33865840}, {"filename": "/reanim/Zombie_hand_finger3_2.png", "start": 33865840, "end": 33870805}, {"filename": "/reanim/Zombie_hand_finger4_1.png", "start": 33870805, "end": 33874252}, {"filename": "/reanim/Zombie_hand_finger4_2.png", "start": 33874252, "end": 33879529}, {"filename": "/reanim/Zombie_hand_hand.png", "start": 33879529, "end": 33889992}, {"filename": "/reanim/Zombie_hand_overlay.png", "start": 33889992, "end": 33895560}, {"filename": "/reanim/Zombie_hand_rock 7.png", "start": 33895560, "end": 33898340}, {"filename": "/reanim/Zombie_hand_rock1.png", "start": 33898340, "end": 33903171}, {"filename": "/reanim/Zombie_hand_rock2.png", "start": 33903171, "end": 33906479}, {"filename": "/reanim/Zombie_hand_rock3.png", "start": 33906479, "end": 33910824}, {"filename": "/reanim/Zombie_hand_rock4.png", "start": 33910824, "end": 33915249}, {"filename": "/reanim/Zombie_hand_rock5.png", "start": 33915249, "end": 33919011}, {"filename": "/reanim/Zombie_hand_rock6.png", "start": 33919011, "end": 33921929}, {"filename": "/reanim/Zombie_head.png", "start": 33921929, "end": 33929802}, {"filename": "/reanim/Zombie_head2.png", "start": 33929802, "end": 33934564}, {"filename": "/reanim/Zombie_head_grossout.png", "start": 33934564, "end": 33941070}, {"filename": "/reanim/Zombie_head_sunglasses1.png", "start": 33941070, "end": 33947304}, {"filename": "/reanim/Zombie_head_sunglasses2.png", "start": 33947304, "end": 33953671}, {"filename": "/reanim/Zombie_head_sunglasses3.png", "start": 33953671, "end": 33960037}, {"filename": "/reanim/Zombie_head_sunglasses4.png", "start": 33960037, "end": 33966407}, {"filename": "/reanim/Zombie_imp.reanim", "start": 33966407, "end": 34077734}, {"filename": "/reanim/Zombie_imp_arm1.png", "start": 34077734, "end": 34078357}, {"filename": "/reanim/Zombie_imp_arm1_bone.png", "start": 34078357, "end": 34078981}, {"filename": "/reanim/Zombie_imp_arm2.png", "start": 34078981, "end": 34079831}, {"filename": "/reanim/Zombie_imp_body1.png", "start": 34079831, "end": 34082884}, {"filename": "/reanim/Zombie_imp_body2.png", "start": 34082884, "end": 34084081}, {"filename": "/reanim/Zombie_imp_body3.png", "start": 34084081, "end": 34085060}, {"filename": "/reanim/Zombie_imp_body4.png", "start": 34085060, "end": 34085788}, {"filename": "/reanim/Zombie_imp_head.png", "start": 34085788, "end": 34089271}, {"filename": "/reanim/Zombie_imp_innerleg_foot.png", "start": 34089271, "end": 34089685}, {"filename": "/reanim/Zombie_imp_innerleg_lower.png", "start": 34089685, "end": 34090090}, {"filename": "/reanim/Zombie_imp_innerleg_upper.png", "start": 34090090, "end": 34090678}, {"filename": "/reanim/Zombie_imp_jaw.png", "start": 34090678, "end": 34092121}, {"filename": "/reanim/Zombie_imp_outerleg_foot.png", "start": 34092121, "end": 34092733}, {"filename": "/reanim/Zombie_imp_outerleg_lower.png", "start": 34092733, "end": 34093282}, {"filename": "/reanim/Zombie_imp_outerleg_upper.png", "start": 34093282, "end": 34093856}, {"filename": "/reanim/Zombie_innerarm_hand.png", "start": 34093856, "end": 34095145}, {"filename": "/reanim/Zombie_innerarm_lower.png", "start": 34095145, "end": 34096496}, {"filename": "/reanim/Zombie_innerarm_screendoor.png", "start": 34096496, "end": 34098274}, {"filename": "/reanim/Zombie_innerarm_screendoor_hand.png", "start": 34098274, "end": 34099176}, {"filename": "/reanim/Zombie_innerarm_upper.png", "start": 34099176, "end": 34100279}, {"filename": "/reanim/Zombie_innerleg_foot.png", "start": 34100279, "end": 34101406}, {"filename": "/reanim/Zombie_innerleg_lower.png", "start": 34101406, "end": 34103430}, {"filename": "/reanim/Zombie_innerleg_upper.png", "start": 34103430, "end": 34104403}, {"filename": "/reanim/Zombie_jackbox.reanim", "start": 34104403, "end": 34207889}, {"filename": "/reanim/Zombie_jackbox_belt.png", "start": 34207889, "end": 34208986}, {"filename": "/reanim/Zombie_jackbox_body1.png", "start": 34208986, "end": 34219353}, {"filename": "/reanim/Zombie_jackbox_body2.png", "start": 34219353, "end": 34222667}, {"filename": "/reanim/Zombie_jackbox_box.png", "start": 34222667, "end": 34228887}, {"filename": "/reanim/Zombie_jackbox_box2.png", "start": 34228887, "end": 34230303}, {"filename": "/reanim/Zombie_jackbox_clownhead.png", "start": 34230303, "end": 34236470}, {"filename": "/reanim/Zombie_jackbox_clownneck.png", "start": 34236470, "end": 34237598}, {"filename": "/reanim/Zombie_jackbox_handle.png", "start": 34237598, "end": 34238357}, {"filename": "/reanim/Zombie_jackbox_head.png", "start": 34238357, "end": 34245089}, {"filename": "/reanim/Zombie_jackbox_head2.png", "start": 34245089, "end": 34251692}, {"filename": "/reanim/Zombie_jackbox_innerarm_lower.png", "start": 34251692, "end": 34255038}, {"filename": "/reanim/Zombie_jackbox_innerarm_upper.png", "start": 34255038, "end": 34257111}, {"filename": "/reanim/Zombie_jackbox_innerleg_foot.png", "start": 34257111, "end": 34259658}, {"filename": "/reanim/Zombie_jackbox_innerleg_lower.png", "start": 34259658, "end": 34262810}, {"filename": "/reanim/Zombie_jackbox_innerleg_upper.png", "start": 34262810, "end": 34264402}, {"filename": "/reanim/Zombie_jackbox_jaw.png", "start": 34264402, "end": 34265552}, {"filename": "/reanim/Zombie_jackbox_outerarm_lower.png", "start": 34265552, "end": 34270145}, {"filename": "/reanim/Zombie_jackbox_outerarm_lower2.png", "start": 34270145, "end": 34274130}, {"filename": "/reanim/Zombie_jackbox_outerarm_upper.png", "start": 34274130, "end": 34275483}, {"filename": "/reanim/Zombie_jackbox_outerleg_foot.png", "start": 34275483, "end": 34277914}, {"filename": "/reanim/Zombie_jackbox_outerleg_lower.png", "start": 34277914, "end": 34281274}, {"filename": "/reanim/Zombie_jackbox_outerleg_upper.png", "start": 34281274, "end": 34282890}, {"filename": "/reanim/Zombie_jackbox_twitch.png", "start": 34282890, "end": 34283733}, {"filename": "/reanim/Zombie_jackson_head.png", "start": 34283733, "end": 34288619}, {"filename": "/reanim/Zombie_jaw.png", "start": 34288619, "end": 34289941}, {"filename": "/reanim/Zombie_ladder.reanim", "start": 34289941, "end": 34558863}, {"filename": "/reanim/Zombie_ladder_1.png", "start": 34558863, "end": 34567070}, {"filename": "/reanim/Zombie_ladder_1_damage1.png", "start": 34567070, "end": 34575547}, {"filename": "/reanim/Zombie_ladder_1_damage2.png", "start": 34575547, "end": 34584265}, {"filename": "/reanim/Zombie_ladder_2.png", "start": 34584265, "end": 34594191}, {"filename": "/reanim/Zombie_ladder_3.png", "start": 34594191, "end": 34599084}, {"filename": "/reanim/Zombie_ladder_4.png", "start": 34599084, "end": 34608947}, {"filename": "/reanim/Zombie_ladder_5.png", "start": 34608947, "end": 34618355}, {"filename": "/reanim/Zombie_ladder_body.png", "start": 34618355, "end": 34623779}, {"filename": "/reanim/Zombie_ladder_body2.png", "start": 34623779, "end": 34625825}, {"filename": "/reanim/Zombie_ladder_hammer.png", "start": 34625825, "end": 34628580}, {"filename": "/reanim/Zombie_ladder_head.png", "start": 34628580, "end": 34634600}, {"filename": "/reanim/Zombie_ladder_innerarm_hand.png", "start": 34634600, "end": 34635502}, {"filename": "/reanim/Zombie_ladder_innerarm_lower.png", "start": 34635502, "end": 34636661}, {"filename": "/reanim/Zombie_ladder_innerarm_upper.png", "start": 34636661, "end": 34637957}, {"filename": "/reanim/Zombie_ladder_innerleg_foot.png", "start": 34637957, "end": 34639501}, {"filename": "/reanim/Zombie_ladder_innerleg_lower.png", "start": 34639501, "end": 34641362}, {"filename": "/reanim/Zombie_ladder_innerleg_upper.png", "start": 34641362, "end": 34642555}, {"filename": "/reanim/Zombie_ladder_jaw.png", "start": 34642555, "end": 34643596}, {"filename": "/reanim/Zombie_ladder_outerarm_hand2.png", "start": 34643596, "end": 34644957}, {"filename": "/reanim/Zombie_ladder_outerarm_lower.png", "start": 34644957, "end": 34646773}, {"filename": "/reanim/Zombie_ladder_outerarm_upper.png", "start": 34646773, "end": 34648386}, {"filename": "/reanim/Zombie_ladder_outerarm_upper2.png", "start": 34648386, "end": 34650202}, {"filename": "/reanim/Zombie_ladder_outerleg_lower.png", "start": 34650202, "end": 34651921}, {"filename": "/reanim/Zombie_ladder_outerleg_upper.png", "start": 34651921, "end": 34653310}, {"filename": "/reanim/Zombie_mustache1.png", "start": 34653310, "end": 34654577}, {"filename": "/reanim/Zombie_mustache2.png", "start": 34654577, "end": 34656149}, {"filename": "/reanim/Zombie_mustache3.png", "start": 34656149, "end": 34657317}, {"filename": "/reanim/Zombie_neck.png", "start": 34657317, "end": 34658198}, {"filename": "/reanim/Zombie_outerarm_hand.png", "start": 34658198, "end": 34659969}, {"filename": "/reanim/Zombie_outerarm_hand2.png", "start": 34659969, "end": 34661821}, {"filename": "/reanim/Zombie_outerarm_lower.png", "start": 34661821, "end": 34663123}, {"filename": "/reanim/Zombie_outerarm_screendoor.png", "start": 34663123, "end": 34667026}, {"filename": "/reanim/Zombie_outerarm_upper.png", "start": 34667026, "end": 34668081}, {"filename": "/reanim/Zombie_outerarm_upper2.png", "start": 34668081, "end": 34669320}, {"filename": "/reanim/Zombie_outerleg_foot.png", "start": 34669320, "end": 34671050}, {"filename": "/reanim/Zombie_outerleg_lower.png", "start": 34671050, "end": 34672691}, {"filename": "/reanim/Zombie_outerleg_upper.png", "start": 34672691, "end": 34674190}, {"filename": "/reanim/Zombie_paper.reanim", "start": 34674190, "end": 34957431}, {"filename": "/reanim/Zombie_paper_body.png", "start": 34957431, "end": 34962877}, {"filename": "/reanim/Zombie_paper_glasses.png", "start": 34962877, "end": 34964349}, {"filename": "/reanim/Zombie_paper_hairpiece.png", "start": 34964349, "end": 34965774}, {"filename": "/reanim/Zombie_paper_hands.png", "start": 34965774, "end": 34973706}, {"filename": "/reanim/Zombie_paper_hands2.png", "start": 34973706, "end": 34975085}, {"filename": "/reanim/Zombie_paper_hands3.png", "start": 34975085, "end": 34977143}, {"filename": "/reanim/Zombie_paper_head_look.png", "start": 34977143, "end": 34981973}, {"filename": "/reanim/Zombie_paper_leftarm_lower.png", "start": 34981973, "end": 34984920}, {"filename": "/reanim/Zombie_paper_leftarm_upper.png", "start": 34984920, "end": 34986620}, {"filename": "/reanim/Zombie_paper_leftarm_upper2.png", "start": 34986620, "end": 34988442}, {"filename": "/reanim/Zombie_paper_leftfoot.png", "start": 34988442, "end": 34990672}, {"filename": "/reanim/Zombie_paper_leftleg_lower.png", "start": 34990672, "end": 34992155}, {"filename": "/reanim/Zombie_paper_leftleg_upper.png", "start": 34992155, "end": 34992555}, {"filename": "/reanim/Zombie_paper_lowerbody1.png", "start": 34992555, "end": 34997212}, {"filename": "/reanim/Zombie_paper_lowerbody2.png", "start": 34997212, "end": 34998561}, {"filename": "/reanim/Zombie_paper_madhead.png", "start": 34998561, "end": 35003460}, {"filename": "/reanim/Zombie_paper_paper1.png", "start": 35003460, "end": 35013871}, {"filename": "/reanim/Zombie_paper_paper2.png", "start": 35013871, "end": 35024554}, {"filename": "/reanim/Zombie_paper_paper3.png", "start": 35024554, "end": 35035382}, {"filename": "/reanim/Zombie_paper_rightarm_lower.png", "start": 35035382, "end": 35037616}, {"filename": "/reanim/Zombie_paper_rightarm_upper.png", "start": 35037616, "end": 35039285}, {"filename": "/reanim/Zombie_paper_rightfoot.png", "start": 35039285, "end": 35041010}, {"filename": "/reanim/Zombie_paper_rightleg_lower.png", "start": 35041010, "end": 35042332}, {"filename": "/reanim/Zombie_paper_rightleg_upper.png", "start": 35042332, "end": 35043167}, {"filename": "/reanim/Zombie_pogo.reanim", "start": 35043167, "end": 35227928}, {"filename": "/reanim/Zombie_pogo_body.png", "start": 35227928, "end": 35232315}, {"filename": "/reanim/Zombie_pogo_hair.png", "start": 35232315, "end": 35234876}, {"filename": "/reanim/Zombie_pogo_head.png", "start": 35234876, "end": 35240805}, {"filename": "/reanim/Zombie_pogo_innerarm_lower.png", "start": 35240805, "end": 35242134}, {"filename": "/reanim/Zombie_pogo_innerarm_upper.png", "start": 35242134, "end": 35243222}, {"filename": "/reanim/Zombie_pogo_innerleg_foot.png", "start": 35243222, "end": 35244657}, {"filename": "/reanim/Zombie_pogo_innerleg_lower.png", "start": 35244657, "end": 35246964}, {"filename": "/reanim/Zombie_pogo_innerleg_upper.png", "start": 35246964, "end": 35248341}, {"filename": "/reanim/Zombie_pogo_jaw.png", "start": 35248341, "end": 35249809}, {"filename": "/reanim/Zombie_pogo_outerarm_lower.png", "start": 35249809, "end": 35251103}, {"filename": "/reanim/Zombie_pogo_outerarm_upper.png", "start": 35251103, "end": 35252375}, {"filename": "/reanim/Zombie_pogo_outerarm_upper2.png", "start": 35252375, "end": 35253654}, {"filename": "/reanim/Zombie_pogo_outerleg_foot.png", "start": 35253654, "end": 35255605}, {"filename": "/reanim/Zombie_pogo_outerleg_lower.png", "start": 35255605, "end": 35257461}, {"filename": "/reanim/Zombie_pogo_outerleg_upper.png", "start": 35257461, "end": 35259299}, {"filename": "/reanim/Zombie_pogo_stick.png", "start": 35259299, "end": 35260775}, {"filename": "/reanim/Zombie_pogo_stick2.png", "start": 35260775, "end": 35262793}, {"filename": "/reanim/Zombie_pogo_stick2damage1.png", "start": 35262793, "end": 35264959}, {"filename": "/reanim/Zombie_pogo_stick2damage2.png", "start": 35264959, "end": 35267371}, {"filename": "/reanim/Zombie_pogo_stick3.png", "start": 35267371, "end": 35268091}, {"filename": "/reanim/Zombie_pogo_stickdamage1.png", "start": 35268091, "end": 35269563}, {"filename": "/reanim/Zombie_pogo_stickdamage2.png", "start": 35269563, "end": 35271160}, {"filename": "/reanim/Zombie_pogo_stickhands.png", "start": 35271160, "end": 35273560}, {"filename": "/reanim/Zombie_pogo_stickhands2.png", "start": 35273560, "end": 35276233}, {"filename": "/reanim/Zombie_polevaulter.reanim", "start": 35276233, "end": 35544598}, {"filename": "/reanim/Zombie_polevaulter_body1.png", "start": 35544598, "end": 35550725}, {"filename": "/reanim/Zombie_polevaulter_body2.png", "start": 35550725, "end": 35553372}, {"filename": "/reanim/Zombie_polevaulter_hair.png", "start": 35553372, "end": 35557353}, {"filename": "/reanim/Zombie_polevaulter_innerarm_lower.png", "start": 35557353, "end": 35558479}, {"filename": "/reanim/Zombie_polevaulter_innerarm_upper.png", "start": 35558479, "end": 35559337}, {"filename": "/reanim/Zombie_polevaulter_innerhand.png", "start": 35559337, "end": 35560737}, {"filename": "/reanim/Zombie_polevaulter_innerleg_foot.png", "start": 35560737, "end": 35562151}, {"filename": "/reanim/Zombie_polevaulter_innerleg_lower.png", "start": 35562151, "end": 35563487}, {"filename": "/reanim/Zombie_polevaulter_innerleg_toe.png", "start": 35563487, "end": 35565071}, {"filename": "/reanim/Zombie_polevaulter_innerleg_upper.png", "start": 35565071, "end": 35565817}, {"filename": "/reanim/Zombie_polevaulter_outerarm_lower.png", "start": 35565817, "end": 35567976}, {"filename": "/reanim/Zombie_polevaulter_outerarm_upper.png", "start": 35567976, "end": 35569046}, {"filename": "/reanim/Zombie_polevaulter_outerarm_upper2.png", "start": 35569046, "end": 35570135}, {"filename": "/reanim/Zombie_polevaulter_outerleg_foot.png", "start": 35570135, "end": 35571931}, {"filename": "/reanim/Zombie_polevaulter_outerleg_lower.png", "start": 35571931, "end": 35573350}, {"filename": "/reanim/Zombie_polevaulter_outerleg_toe.png", "start": 35573350, "end": 35574941}, {"filename": "/reanim/Zombie_polevaulter_outerleg_upper.png", "start": 35574941, "end": 35575608}, {"filename": "/reanim/Zombie_polevaulter_pole.png", "start": 35575608, "end": 35577038}, {"filename": "/reanim/Zombie_polevaulter_pole2.png", "start": 35577038, "end": 35578092}, {"filename": "/reanim/Zombie_pupils.png", "start": 35578092, "end": 35578285}, {"filename": "/reanim/Zombie_questionmark.png", "start": 35578285, "end": 35578871}, {"filename": "/reanim/Zombie_screendoor1.png", "start": 35578871, "end": 35596122}, {"filename": "/reanim/Zombie_screendoor2.png", "start": 35596122, "end": 35613767}, {"filename": "/reanim/Zombie_screendoor3.png", "start": 35613767, "end": 35630532}, {"filename": "/reanim/Zombie_snorkle.reanim", "start": 35630532, "end": 35886355}, {"filename": "/reanim/Zombie_snorkle_body1.png", "start": 35886355, "end": 35891482}, {"filename": "/reanim/Zombie_snorkle_body2.png", "start": 35891482, "end": 35893419}, {"filename": "/reanim/Zombie_snorkle_head.png", "start": 35893419, "end": 35900592}, {"filename": "/reanim/Zombie_snorkle_head3.png", "start": 35900592, "end": 35906865}, {"filename": "/reanim/Zombie_snorkle_head4.png", "start": 35906865, "end": 35912846}, {"filename": "/reanim/Zombie_snorkle_head_jaw.png", "start": 35912846, "end": 35914328}, {"filename": "/reanim/Zombie_snorkle_headlips.png", "start": 35914328, "end": 35915508}, {"filename": "/reanim/Zombie_snorkle_headwater.png", "start": 35915508, "end": 35922687}, {"filename": "/reanim/Zombie_snorkle_innerarm_hand.png", "start": 35922687, "end": 35924033}, {"filename": "/reanim/Zombie_snorkle_innerarm_lower.png", "start": 35924033, "end": 35925127}, {"filename": "/reanim/Zombie_snorkle_innerarm_upper.png", "start": 35925127, "end": 35926817}, {"filename": "/reanim/Zombie_snorkle_innerleg_foot.png", "start": 35926817, "end": 35928187}, {"filename": "/reanim/Zombie_snorkle_innerleg_lower.png", "start": 35928187, "end": 35929393}, {"filename": "/reanim/Zombie_snorkle_innerleg_upper.png", "start": 35929393, "end": 35930768}, {"filename": "/reanim/Zombie_snorkle_outerarm_lower.png", "start": 35930768, "end": 35932238}, {"filename": "/reanim/Zombie_snorkle_outerarm_upper.png", "start": 35932238, "end": 35935122}, {"filename": "/reanim/Zombie_snorkle_outerarm_upper2.png", "start": 35935122, "end": 35938063}, {"filename": "/reanim/Zombie_snorkle_outerleg_foot.png", "start": 35938063, "end": 35941335}, {"filename": "/reanim/Zombie_snorkle_outerleg_lower.png", "start": 35941335, "end": 35943550}, {"filename": "/reanim/Zombie_snorkle_outerleg_upper.png", "start": 35943550, "end": 35944752}, {"filename": "/reanim/Zombie_snorkle_snorkle.png", "start": 35944752, "end": 35948431}, {"filename": "/reanim/Zombie_snorkle_whitewater1.png", "start": 35948431, "end": 35949500}, {"filename": "/reanim/Zombie_snorkle_whitewater2.png", "start": 35949500, "end": 35950960}, {"filename": "/reanim/Zombie_snorkle_whitewater3.png", "start": 35950960, "end": 35952411}, {"filename": "/reanim/Zombie_surprise.reanim", "start": 35952411, "end": 35953175}, {"filename": "/reanim/Zombie_target_body.png", "start": 35953175, "end": 35961407}, {"filename": "/reanim/Zombie_target_hat.png", "start": 35961407, "end": 35968793}, {"filename": "/reanim/Zombie_tie.png", "start": 35968793, "end": 35970120}, {"filename": "/reanim/Zombie_tongue.png", "start": 35970120, "end": 35970846}, {"filename": "/reanim/Zombie_toupe.png", "start": 35970846, "end": 35972404}, {"filename": "/reanim/Zombie_underbody.png", "start": 35972404, "end": 35972893}, {"filename": "/reanim/Zombie_whitewater1.png", "start": 35972893, "end": 35974422}, {"filename": "/reanim/Zombie_whitewater2.png", "start": 35974422, "end": 35975936}, {"filename": "/reanim/Zombie_whitewater3.png", "start": 35975936, "end": 35977446}, {"filename": "/reanim/Zombie_yeti.reanim", "start": 35977446, "end": 36078920}, {"filename": "/reanim/Zombie_yeti_body.png", "start": 36078920, "end": 36099675}, {"filename": "/reanim/Zombie_yeti_head.png", "start": 36099675, "end": 36114868}, {"filename": "/reanim/Zombie_yeti_innerarm_hand.png", "start": 36114868, "end": 36117114}, {"filename": "/reanim/Zombie_yeti_innerarm_lower.png", "start": 36117114, "end": 36121013}, {"filename": "/reanim/Zombie_yeti_innerarm_upper.png", "start": 36121013, "end": 36127129}, {"filename": "/reanim/Zombie_yeti_innerleg_foot.png", "start": 36127129, "end": 36129612}, {"filename": "/reanim/Zombie_yeti_innerleg_lower.png", "start": 36129612, "end": 36133765}, {"filename": "/reanim/Zombie_yeti_innerleg_upper.png", "start": 36133765, "end": 36136972}, {"filename": "/reanim/Zombie_yeti_jaw.png", "start": 36136972, "end": 36139511}, {"filename": "/reanim/Zombie_yeti_outerarm_hand.png", "start": 36139511, "end": 36142390}, {"filename": "/reanim/Zombie_yeti_outerarm_lower.png", "start": 36142390, "end": 36146525}, {"filename": "/reanim/Zombie_yeti_outerarm_upper.png", "start": 36146525, "end": 36152739}, {"filename": "/reanim/Zombie_yeti_outerarm_upper2.png", "start": 36152739, "end": 36159527}, {"filename": "/reanim/Zombie_yeti_outerleg_foot.png", "start": 36159527, "end": 36163189}, {"filename": "/reanim/Zombie_yeti_outerleg_lower.png", "start": 36163189, "end": 36169422}, {"filename": "/reanim/Zombie_yeti_outerleg_upper.png", "start": 36169422, "end": 36176319}, {"filename": "/reanim/Zombie_zamboni.reanim", "start": 36176319, "end": 36249968}, {"filename": "/reanim/Zombie_zamboni_1.png", "start": 36249968, "end": 36272726}, {"filename": "/reanim/Zombie_zamboni_1_damage1.png", "start": 36272726, "end": 36297250}, {"filename": "/reanim/Zombie_zamboni_1_damage2.png", "start": 36297250, "end": 36324872}, {"filename": "/reanim/Zombie_zamboni_2.png", "start": 36324872, "end": 36342057}, {"filename": "/reanim/Zombie_zamboni_2_damage1.png", "start": 36342057, "end": 36359571}, {"filename": "/reanim/Zombie_zamboni_2_damage2.png", "start": 36359571, "end": 36377205}, {"filename": "/reanim/Zombie_zamboni_3.png", "start": 36377205, "end": 36383632}, {"filename": "/reanim/Zombie_zamboni_4.png", "start": 36383632, "end": 36389352}, {"filename": "/reanim/Zombie_zamboni_brush.png", "start": 36389352, "end": 36391160}, {"filename": "/reanim/Zombie_zamboni_seat.png", "start": 36391160, "end": 36395899}, {"filename": "/reanim/Zombie_zamboni_wheel.png", "start": 36395899, "end": 36400819}, {"filename": "/reanim/Zombie_zamboni_wheel_flat.png", "start": 36400819, "end": 36406154}, {"filename": "/reanim/Zombie_zamboni_wires.png", "start": 36406154, "end": 36406841}, {"filename": "/reanim/Zombie_zambonidriver_beanie.png", "start": 36406841, "end": 36410314}, {"filename": "/reanim/Zombie_zambonidriver_body.png", "start": 36410314, "end": 36418235}, {"filename": "/reanim/Zombie_zambonidriver_innerarm.png", "start": 36418235, "end": 36419357}, {"filename": "/reanim/Zombie_zambonidriver_innerarm_hand.png", "start": 36419357, "end": 36421038}, {"filename": "/reanim/Zombie_zambonidriver_legs.png", "start": 36421038, "end": 36432162}, {"filename": "/reanim/Zombie_zambonidriver_lowerarm_outer.png", "start": 36432162, "end": 36433036}, {"filename": "/reanim/Zombie_zambonidriver_mullet1.png", "start": 36433036, "end": 36434401}, {"filename": "/reanim/Zombie_zambonidriver_mullet2.png", "start": 36434401, "end": 36437339}, {"filename": "/reanim/Zombie_zambonidriver_outerarm_hand.png", "start": 36437339, "end": 36439122}, {"filename": "/reanim/Zombie_zambonidriver_shoulder.png", "start": 36439122, "end": 36440511}, {"filename": "/reanim/Zombie_zambonidriver_upperarm.png", "start": 36440511, "end": 36441411}, {"filename": "/reanim/ZombiesWon.jpg", "start": 36441411, "end": 36485713}, {"filename": "/reanim/ZombiesWon.reanim", "start": 36485713, "end": 36487846}, {"filename": "/reanim/ZombiesWonScreen.png", "start": 36487846, "end": 36487951}, {"filename": "/reanim/ZombiesWon_.png", "start": 36487951, "end": 36521698}, {"filename": "/reanim/accessories_00.png", "start": 36521698, "end": 36522260}, {"filename": "/reanim/accessories_01.png", "start": 36522260, "end": 36522685}, {"filename": "/reanim/accessories_02.png", "start": 36522685, "end": 36523533}, {"filename": "/reanim/accessories_03.png", "start": 36523533, "end": 36523795}, {"filename": "/reanim/accessories_04.png", "start": 36523795, "end": 36524049}, {"filename": "/reanim/accessories_05.png", "start": 36524049, "end": 36524754}, {"filename": "/reanim/accessories_06.png", "start": 36524754, "end": 36524891}, {"filename": "/reanim/accessories_07.png", "start": 36524891, "end": 36525307}, {"filename": "/reanim/accessories_08.png", "start": 36525307, "end": 36526220}, {"filename": "/reanim/accessories_09.png", "start": 36526220, "end": 36526389}, {"filename": "/reanim/accessories_10.png", "start": 36526389, "end": 36526503}, {"filename": "/reanim/accessories_11.png", "start": 36526503, "end": 36526635}, {"filename": "/reanim/accessories_12.png", "start": 36526635, "end": 36527054}, {"filename": "/reanim/accessories_13.png", "start": 36527054, "end": 36527420}, {"filename": "/reanim/accessories_14.png", "start": 36527420, "end": 36528436}, {"filename": "/reanim/anim_sprout.png", "start": 36528436, "end": 36529217}, {"filename": "/reanim/coin_black.png", "start": 36529217, "end": 36531320}, {"filename": "/reanim/coin_black_gold.png", "start": 36531320, "end": 36533704}, {"filename": "/reanim/coin_gold2.png", "start": 36533704, "end": 36534075}, {"filename": "/reanim/coin_gold_dollar.png", "start": 36534075, "end": 36538321}, {"filename": "/reanim/coin_shading.png", "start": 36538321, "end": 36538725}, {"filename": "/reanim/coin_silver2.png", "start": 36538725, "end": 36538903}, {"filename": "/reanim/coin_silver_dollar.png", "start": 36538903, "end": 36541565}, {"filename": "/reanim/eyeWear_00.png", "start": 36541565, "end": 36542441}, {"filename": "/reanim/eyeWear_00_line.png", "start": 36542441, "end": 36543343}, {"filename": "/reanim/eyeWear_01.png", "start": 36543343, "end": 36543758}, {"filename": "/reanim/eyeWear_01_line.png", "start": 36543758, "end": 36544177}, {"filename": "/reanim/eyeWear_02.png", "start": 36544177, "end": 36544585}, {"filename": "/reanim/eyeWear_02_line.png", "start": 36544585, "end": 36545344}, {"filename": "/reanim/eyeWear_03.png", "start": 36545344, "end": 36546184}, {"filename": "/reanim/eyeWear_03_line.png", "start": 36546184, "end": 36547167}, {"filename": "/reanim/eyeWear_04.png", "start": 36547167, "end": 36547837}, {"filename": "/reanim/eyeWear_04_line.png", "start": 36547837, "end": 36548568}, {"filename": "/reanim/eyeWear_05.png", "start": 36548568, "end": 36549214}, {"filename": "/reanim/eyeWear_05_line.png", "start": 36549214, "end": 36550096}, {"filename": "/reanim/eyeWear_06.png", "start": 36550096, "end": 36550405}, {"filename": "/reanim/eyeWear_06_line.png", "start": 36550405, "end": 36550832}, {"filename": "/reanim/eyeWear_07.png", "start": 36550832, "end": 36551620}, {"filename": "/reanim/eyeWear_07_line.png", "start": 36551620, "end": 36552652}, {"filename": "/reanim/eyeWear_08.png", "start": 36552652, "end": 36552821}, {"filename": "/reanim/eyeWear_08_line.png", "start": 36552821, "end": 36553382}, {"filename": "/reanim/eyeWear_09.png", "start": 36553382, "end": 36554119}, {"filename": "/reanim/eyeWear_09_line.png", "start": 36554119, "end": 36555061}, {"filename": "/reanim/eyeWear_10.png", "start": 36555061, "end": 36556319}, {"filename": "/reanim/eyeWear_10_line.png", "start": 36556319, "end": 36556911}, {"filename": "/reanim/eyeWear_11.png", "start": 36556911, "end": 36557111}, {"filename": "/reanim/eyeWear_11_line.png", "start": 36557111, "end": 36557601}, {"filename": "/reanim/eyeWear_12.png", "start": 36557601, "end": 36558233}, {"filename": "/reanim/eyeWear_13.png", "start": 36558233, "end": 36558720}, {"filename": "/reanim/eyeWear_14.png", "start": 36558720, "end": 36559394}, {"filename": "/reanim/eyeWear_15.png", "start": 36559394, "end": 36560312}, {"filename": "/reanim/facialHair_00.png", "start": 36560312, "end": 36560848}, {"filename": "/reanim/facialHair_00_line.png", "start": 36560848, "end": 36561190}, {"filename": "/reanim/facialHair_01.png", "start": 36561190, "end": 36561561}, {"filename": "/reanim/facialHair_01_line.png", "start": 36561561, "end": 36561962}, {"filename": "/reanim/facialHair_02.png", "start": 36561962, "end": 36562228}, {"filename": "/reanim/facialHair_02_line.png", "start": 36562228, "end": 36562417}, {"filename": "/reanim/facialHair_03.png", "start": 36562417, "end": 36562936}, {"filename": "/reanim/facialHair_03_line.png", "start": 36562936, "end": 36563227}, {"filename": "/reanim/facialHair_04.png", "start": 36563227, "end": 36563364}, {"filename": "/reanim/facialHair_04_line.png", "start": 36563364, "end": 36563490}, {"filename": "/reanim/facialHair_05.png", "start": 36563490, "end": 36563681}, {"filename": "/reanim/facialHair_05_line.png", "start": 36563681, "end": 36563877}, {"filename": "/reanim/facialHair_06.png", "start": 36563877, "end": 36564077}, {"filename": "/reanim/facialHair_06_line.png", "start": 36564077, "end": 36564314}, {"filename": "/reanim/facialHair_07.png", "start": 36564314, "end": 36565053}, {"filename": "/reanim/facialHair_07_line.png", "start": 36565053, "end": 36565464}, {"filename": "/reanim/facialHair_08.png", "start": 36565464, "end": 36566263}, {"filename": "/reanim/facialHair_08_line.png", "start": 36566263, "end": 36566758}, {"filename": "/reanim/facialHair_09.png", "start": 36566758, "end": 36567286}, {"filename": "/reanim/facialHair_09_line.png", "start": 36567286, "end": 36567666}, {"filename": "/reanim/facialHair_10.png", "start": 36567666, "end": 36568865}, {"filename": "/reanim/facialHair_10_line.png", "start": 36568865, "end": 36569568}, {"filename": "/reanim/facialHair_11.png", "start": 36569568, "end": 36570400}, {"filename": "/reanim/facialHair_11_line.png", "start": 36570400, "end": 36570827}, {"filename": "/reanim/facialHair_12.png", "start": 36570827, "end": 36571345}, {"filename": "/reanim/facialHair_12_line.png", "start": 36571345, "end": 36571770}, {"filename": "/reanim/facialHair_13.png", "start": 36571770, "end": 36573226}, {"filename": "/reanim/facialHair_13_line.png", "start": 36573226, "end": 36573945}, {"filename": "/reanim/facialHair_14.png", "start": 36573945, "end": 36574327}, {"filename": "/reanim/facialHair_14_line.png", "start": 36574327, "end": 36574618}, {"filename": "/reanim/facialHair_15.png", "start": 36574618, "end": 36574963}, {"filename": "/reanim/facialHair_15_line.png", "start": 36574963, "end": 36575209}, {"filename": "/reanim/facialHair_16.png", "start": 36575209, "end": 36575545}, {"filename": "/reanim/facialHair_16_line.png", "start": 36575545, "end": 36575855}, {"filename": "/reanim/facialHair_17.png", "start": 36575855, "end": 36576461}, {"filename": "/reanim/facialHair_17_line.png", "start": 36576461, "end": 36576827}, {"filename": "/reanim/facialHair_18.png", "start": 36576827, "end": 36577358}, {"filename": "/reanim/facialHair_18_line.png", "start": 36577358, "end": 36577773}, {"filename": "/reanim/facialHair_19.png", "start": 36577773, "end": 36578046}, {"filename": "/reanim/facialHair_19_line.png", "start": 36578046, "end": 36578286}, {"filename": "/reanim/facialHair_20.png", "start": 36578286, "end": 36578638}, {"filename": "/reanim/facialHair_20_line.png", "start": 36578638, "end": 36578855}, {"filename": "/reanim/facialHair_21.png", "start": 36578855, "end": 36581595}, {"filename": "/reanim/facialHair_21_line.png", "start": 36581595, "end": 36582539}, {"filename": "/reanim/facialHair_22.png", "start": 36582539, "end": 36582923}, {"filename": "/reanim/facialHair_22_line.png", "start": 36582923, "end": 36583183}, {"filename": "/reanim/facialHair_23.png", "start": 36583183, "end": 36587344}, {"filename": "/reanim/facialHair_23_line.png", "start": 36587344, "end": 36588154}, {"filename": "/reanim/fire.reanim", "start": 36588154, "end": 36589302}, {"filename": "/reanim/fire1.png", "start": 36589302, "end": 36597878}, {"filename": "/reanim/fire1_1.png", "start": 36597878, "end": 36607973}, {"filename": "/reanim/fire1_2.png", "start": 36607973, "end": 36619293}, {"filename": "/reanim/fire1_3.png", "start": 36619293, "end": 36630513}, {"filename": "/reanim/fire2.png", "start": 36630513, "end": 36637972}, {"filename": "/reanim/fire3.png", "start": 36637972, "end": 36646474}, {"filename": "/reanim/fire4.png", "start": 36646474, "end": 36655638}, {"filename": "/reanim/fire4b.png", "start": 36655638, "end": 36663033}, {"filename": "/reanim/fire5.png", "start": 36663033, "end": 36669838}, {"filename": "/reanim/fire5b.png", "start": 36669838, "end": 36674988}, {"filename": "/reanim/fire6.png", "start": 36674988, "end": 36681389}, {"filename": "/reanim/fire6b.png", "start": 36681389, "end": 36685487}, {"filename": "/reanim/fire7.png", "start": 36685487, "end": 36688591}, {"filename": "/reanim/fire7b.png", "start": 36688591, "end": 36690429}, {"filename": "/reanim/fire8.png", "start": 36690429, "end": 36690968}, {"filename": "/reanim/fullscreen.png", "start": 36690968, "end": 36691060}, {"filename": "/reanim/hair_00.png", "start": 36691060, "end": 36692420}, {"filename": "/reanim/hair_00_line.png", "start": 36692420, "end": 36693154}, {"filename": "/reanim/hair_01.png", "start": 36693154, "end": 36694709}, {"filename": "/reanim/hair_01_line.png", "start": 36694709, "end": 36695657}, {"filename": "/reanim/hair_02_line.png", "start": 36695657, "end": 36696088}, {"filename": "/reanim/hair_03.png", "start": 36696088, "end": 36701336}, {"filename": "/reanim/hair_03_line.png", "start": 36701336, "end": 36705302}, {"filename": "/reanim/hair_04.png", "start": 36705302, "end": 36706050}, {"filename": "/reanim/hair_04_line.png", "start": 36706050, "end": 36706773}, {"filename": "/reanim/hair_05.png", "start": 36706773, "end": 36710434}, {"filename": "/reanim/hair_05_line.png", "start": 36710434, "end": 36713738}, {"filename": "/reanim/hair_06.png", "start": 36713738, "end": 36714256}, {"filename": "/reanim/hair_06_line.png", "start": 36714256, "end": 36714662}, {"filename": "/reanim/hair_07.png", "start": 36714662, "end": 36716050}, {"filename": "/reanim/hair_07_line.png", "start": 36716050, "end": 36716907}, {"filename": "/reanim/hair_08.png", "start": 36716907, "end": 36717408}, {"filename": "/reanim/hair_08_line.png", "start": 36717408, "end": 36717735}, {"filename": "/reanim/hair_09.png", "start": 36717735, "end": 36719161}, {"filename": "/reanim/hair_09_line.png", "start": 36719161, "end": 36719993}, {"filename": "/reanim/hair_10.png", "start": 36719993, "end": 36721116}, {"filename": "/reanim/hair_10_line.png", "start": 36721116, "end": 36721769}, {"filename": "/reanim/hair_11.png", "start": 36721769, "end": 36726964}, {"filename": "/reanim/hair_11_line.png", "start": 36726964, "end": 36728177}, {"filename": "/reanim/hair_12.png", "start": 36728177, "end": 36732883}, {"filename": "/reanim/hair_12_line.png", "start": 36732883, "end": 36736611}, {"filename": "/reanim/hair_13.png", "start": 36736611, "end": 36738736}, {"filename": "/reanim/hair_13_line.png", "start": 36738736, "end": 36739785}, {"filename": "/reanim/hair_14.png", "start": 36739785, "end": 36744712}, {"filename": "/reanim/hair_14_line.png", "start": 36744712, "end": 36748482}, {"filename": "/reanim/hair_15.png", "start": 36748482, "end": 36752794}, {"filename": "/reanim/hair_15_line.png", "start": 36752794, "end": 36756322}, {"filename": "/reanim/hammer_1.png", "start": 36756322, "end": 36761330}, {"filename": "/reanim/hats_00.png", "start": 36761330, "end": 36765079}, {"filename": "/reanim/hats_00_line.png", "start": 36765079, "end": 36765720}, {"filename": "/reanim/hats_01.png", "start": 36765720, "end": 36769398}, {"filename": "/reanim/hats_01_line.png", "start": 36769398, "end": 36769967}, {"filename": "/reanim/hats_02.png", "start": 36769967, "end": 36773370}, {"filename": "/reanim/hats_02_line.png", "start": 36773370, "end": 36774176}, {"filename": "/reanim/hats_03.png", "start": 36774176, "end": 36777524}, {"filename": "/reanim/hats_03_line.png", "start": 36777524, "end": 36777995}, {"filename": "/reanim/hats_04.png", "start": 36777995, "end": 36781475}, {"filename": "/reanim/hats_04_line.png", "start": 36781475, "end": 36781962}, {"filename": "/reanim/hats_05.png", "start": 36781962, "end": 36786141}, {"filename": "/reanim/hats_05_line.png", "start": 36786141, "end": 36787646}, {"filename": "/reanim/hats_06.png", "start": 36787646, "end": 36788157}, {"filename": "/reanim/hats_06_line.png", "start": 36788157, "end": 36788641}, {"filename": "/reanim/hats_07.png", "start": 36788641, "end": 36792711}, {"filename": "/reanim/hats_07_line.png", "start": 36792711, "end": 36794292}, {"filename": "/reanim/hats_08.png", "start": 36794292, "end": 36798540}, {"filename": "/reanim/hats_08_line.png", "start": 36798540, "end": 36800354}, {"filename": "/reanim/hats_09.png", "start": 36800354, "end": 36801150}, {"filename": "/reanim/hats_09_line.png", "start": 36801150, "end": 36801631}, {"filename": "/reanim/hats_10.png", "start": 36801631, "end": 36805119}, {"filename": "/reanim/hats_10_line.png", "start": 36805119, "end": 36806935}, {"filename": "/reanim/hats_11.png", "start": 36806935, "end": 36808029}, {"filename": "/reanim/hats_11_line.png", "start": 36808029, "end": 36808724}, {"filename": "/reanim/hats_12_line.png", "start": 36808724, "end": 36811044}, {"filename": "/reanim/hats_13.png", "start": 36811044, "end": 36815604}, {"filename": "/reanim/hats_13_line.png", "start": 36815604, "end": 36816613}, {"filename": "/reanim/leaf1.png", "start": 36816613, "end": 36818844}, {"filename": "/reanim/leaf2.png", "start": 36818844, "end": 36821526}, {"filename": "/reanim/leaf3.png", "start": 36821526, "end": 36824320}, {"filename": "/reanim/leaf4.png", "start": 36824320, "end": 36825023}, {"filename": "/reanim/leafbunch1.png", "start": 36825023, "end": 36852981}, {"filename": "/reanim/leafbunch2.png", "start": 36852981, "end": 36874735}, {"filename": "/reanim/leafbunch3.png", "start": 36874735, "end": 36895270}, {"filename": "/reanim/puff_1.png", "start": 36895270, "end": 36896475}, {"filename": "/reanim/puff_2.png", "start": 36896475, "end": 36897918}, {"filename": "/reanim/puff_3.png", "start": 36897918, "end": 36899867}, {"filename": "/reanim/puff_4.png", "start": 36899867, "end": 36902778}, {"filename": "/reanim/puff_5.png", "start": 36902778, "end": 36906708}, {"filename": "/reanim/puff_6.png", "start": 36906708, "end": 36910227}, {"filename": "/reanim/puff_7.png", "start": 36910227, "end": 36912493}, {"filename": "/reanim/pumpkin_damage1.png", "start": 36912493, "end": 36927467}, {"filename": "/reanim/rake1.png", "start": 36927467, "end": 36929004}, {"filename": "/reanim/rake2.png", "start": 36929004, "end": 36930393}, {"filename": "/reanim/rake_handle.png", "start": 36930393, "end": 36931044}, {"filename": "/reanim/splash.reanim", "start": 36931044, "end": 36936974}, {"filename": "/reanim/splash1.png", "start": 36936974, "end": 36946186}, {"filename": "/reanim/splash2.png", "start": 36946186, "end": 36960746}, {"filename": "/reanim/splash3.png", "start": 36960746, "end": 36994159}, {"filename": "/reanim/splash4.png", "start": 36994159, "end": 37007763}, {"filename": "/reanim/splash5.png", "start": 37007763, "end": 37009925}, {"filename": "/reanim/splash6.png", "start": 37009925, "end": 37011659}, {"filename": "/reanim/splash_1.png", "start": 37011659, "end": 37014551}, {"filename": "/reanim/splash_2.png", "start": 37014551, "end": 37016843}, {"filename": "/reanim/splash_3.png", "start": 37016843, "end": 37020571}, {"filename": "/reanim/splash_4.png", "start": 37020571, "end": 37022233}, {"filename": "/reanim/splash_particle.png", "start": 37022233, "end": 37022585}, {"filename": "/reanim/splash_ring.png", "start": 37022585, "end": 37024494}, {"filename": "/reanim/sprout_body.png", "start": 37024494, "end": 37025631}, {"filename": "/reanim/sprout_body1.png", "start": 37025631, "end": 37026551}, {"filename": "/reanim/sprout_body2.png", "start": 37026551, "end": 37027094}, {"filename": "/reanim/sprout_petal.png", "start": 37027094, "end": 37027910}, {"filename": "/reanim/tidBits_00.png", "start": 37027910, "end": 37028211}, {"filename": "/reanim/tidBits_00_line.png", "start": 37028211, "end": 37028782}, {"filename": "/reanim/tidBits_01.png", "start": 37028782, "end": 37028972}, {"filename": "/reanim/tidBits_01_line.png", "start": 37028972, "end": 37029304}, {"filename": "/reanim/tidBits_02.png", "start": 37029304, "end": 37029606}, {"filename": "/reanim/tidBits_03.png", "start": 37029606, "end": 37029870}, {"filename": "/reanim/tidBits_04.png", "start": 37029870, "end": 37030153}, {"filename": "/reanim/tidBits_05.png", "start": 37030153, "end": 37030373}, {"filename": "/reanim/tidBits_06.png", "start": 37030373, "end": 37030626}, {"filename": "/reanim/tidBits_07.png", "start": 37030626, "end": 37030851}, {"filename": "/reanim/tidBits_08.png", "start": 37030851, "end": 37031451}, {"filename": "/reanim/tidBits_09.png", "start": 37031451, "end": 37032206}, {"filename": "/reanim/tidBits_09_line.png", "start": 37032206, "end": 37032434}, {"filename": "/reanim/tidBits_10.png", "start": 37032434, "end": 37032944}, {"filename": "/reanim/tidBits_10_line.png", "start": 37032944, "end": 37033148}, {"filename": "/reanim/tidBits_11.png", "start": 37033148, "end": 37033482}, {"filename": "/reanim/tidBits_11_line.png", "start": 37033482, "end": 37033602}, {"filename": "/reanim/tidBits_12.png", "start": 37033602, "end": 37034028}, {"filename": "/reanim/tidBits_13.png", "start": 37034028, "end": 37034113}, {"filename": "/reanim/tree01.png", "start": 37034113, "end": 37036021}, {"filename": "/reanim/tree1.png", "start": 37036021, "end": 37039487}, {"filename": "/reanim/tree2.png", "start": 37039487, "end": 37047149}, {"filename": "/reanim/tree3.png", "start": 37047149, "end": 37067771}, {"filename": "/reanim/tree4.png", "start": 37067771, "end": 37097650}, {"filename": "/reanim/tree5.png", "start": 37097650, "end": 37151450}, {"filename": "/reanim/tree6.jpg", "start": 37151450, "end": 37183049}, {"filename": "/reanim/tree6_.png", "start": 37183049, "end": 37203742}, {"filename": "/reanim/tree7.jpg", "start": 37203742, "end": 37253431}, {"filename": "/reanim/tree7_.png", "start": 37253431, "end": 37283368}, {"filename": "/reanim/tree8.jpg", "start": 37283368, "end": 37338996}, {"filename": "/reanim/tree8_.png", "start": 37338996, "end": 37364061}, {"filename": "/reanim/tree9.jpg", "start": 37364061, "end": 37407083}, {"filename": "/reanim/tree9_.png", "start": 37407083, "end": 37424762}, {"filename": "/reanim/tree_bg.jpg", "start": 37424762, "end": 37434108}, {"filename": "/reanim/tree_grass.jpg", "start": 37434108, "end": 37446101}, {"filename": "/reanim/tree_grass_.png", "start": 37446101, "end": 37450954}, {"filename": "/reanim/tree_overlay4.png", "start": 37450954, "end": 37458014}, {"filename": "/reanim/tree_overlay5.png", "start": 37458014, "end": 37469825}, {"filename": "/reanim/tree_overlay6.png", "start": 37469825, "end": 37496190}, {"filename": "/reanim/tree_overlay7.png", "start": 37496190, "end": 37550823}, {"filename": "/reanim/tree_overlay8.jpg", "start": 37550823, "end": 37567530}, {"filename": "/reanim/tree_overlay8_.png", "start": 37567530, "end": 37576239}, {"filename": "/reanim/tree_overlay9.jpg", "start": 37576239, "end": 37595118}, {"filename": "/reanim/tree_overlay9_.png", "start": 37595118, "end": 37607813}, {"filename": "/reanim/treeofWisdom.reanim", "start": 37607813, "end": 37998599}, {"filename": "/reanim/zombatar_zombie_head.reanim", "start": 37998599, "end": 38018941}, {"filename": "/reanim/zombie_football_leftarm_upper.png", "start": 38018941, "end": 38019670}, {"filename": "/reanim/zombie_football_leftarm_upper2.png", "start": 38019670, "end": 38020583}, {"filename": "/reanim/zombie_football_rightarm_hand.png", "start": 38020583, "end": 38022646}, {"filename": "/reanim/zombie_football_rightarm_lower.png", "start": 38022646, "end": 38024190}, {"filename": "/reanim/zombie_football_rightarm_upper.png", "start": 38024190, "end": 38024932}, {"filename": "/reanim/zombie_target.png", "start": 38024932, "end": 38034621}, {"filename": "/savedata/userdata/game1_16.dat", "start": 38034621, "end": 38107045}, {"filename": "/savedata/userdata/log.txt", "start": 38107045, "end": 38112352}, {"filename": "/savedata/userdata/user1.dat", "start": 38112352, "end": 38113212}, {"filename": "/savedata/userdata/users.dat", "start": 38113212, "end": 38113231}, {"filename": "/sounds/RVthrow.ogg", "start": 38113231, "end": 38130708, "audio": 1}, {"filename": "/sounds/ZombiesOnYourLawn.ogg", "start": 38130708, "end": 39742833, "audio": 1}, {"filename": "/sounds/achievement.ogg", "start": 39742833, "end": 39758214, "audio": 1}, {"filename": "/sounds/awooga.ogg", "start": 39758214, "end": 39825387, "audio": 1}, {"filename": "/sounds/balloon_pop.ogg", "start": 39825387, "end": 39841653, "audio": 1}, {"filename": "/sounds/ballooninflate.ogg", "start": 39841653, "end": 39861694, "audio": 1}, {"filename": "/sounds/basketball.ogg", "start": 39861694, "end": 39873127, "audio": 1}, {"filename": "/sounds/bigchomp.ogg", "start": 39873127, "end": 39884807, "audio": 1}, {"filename": "/sounds/bleep.ogg", "start": 39884807, "end": 39890451, "audio": 1}, {"filename": "/sounds/blover.ogg", "start": 39890451, "end": 39935422, "audio": 1}, {"filename": "/sounds/boing.ogg", "start": 39935422, "end": 39954375, "audio": 1}, {"filename": "/sounds/bonk.ogg", "start": 39954375, "end": 39963920, "audio": 1}, {"filename": "/sounds/bossboulderattack.ogg", "start": 39963920, "end": 39990493, "audio": 1}, {"filename": "/sounds/bossexplosion.ogg", "start": 39990493, "end": 40042276, "audio": 1}, {"filename": "/sounds/bowling.ogg", "start": 40042276, "end": 40073428, "audio": 1}, {"filename": "/sounds/bowlingimpact.ogg", "start": 40073428, "end": 40118507, "audio": 1}, {"filename": "/sounds/bowlingimpact2.ogg", "start": 40118507, "end": 40155519, "audio": 1}, {"filename": "/sounds/bugspray.ogg", "start": 40155519, "end": 40169648, "audio": 1}, {"filename": "/sounds/bungee_scream.ogg", "start": 40169648, "end": 40201908, "audio": 1}, {"filename": "/sounds/bungee_scream2.ogg", "start": 40201908, "end": 40233665, "audio": 1}, {"filename": "/sounds/bungee_scream3.ogg", "start": 40233665, "end": 40261568, "audio": 1}, {"filename": "/sounds/butter.ogg", "start": 40261568, "end": 40278137, "audio": 1}, {"filename": "/sounds/buttonclick.ogg", "start": 40278137, "end": 40294497, "audio": 1}, {"filename": "/sounds/buzzer.ogg", "start": 40294497, "end": 40304829, "audio": 1}, {"filename": "/sounds/ceramic.ogg", "start": 40304829, "end": 40313950, "audio": 1}, {"filename": "/sounds/cherrybomb.ogg", "start": 40313950, "end": 40369058, "audio": 1}, {"filename": "/sounds/chime.ogg", "start": 40369058, "end": 40391871, "audio": 1}, {"filename": "/sounds/chomp.ogg", "start": 40391871, "end": 40421288, "audio": 1}, {"filename": "/sounds/chomp2.ogg", "start": 40421288, "end": 40454883, "audio": 1}, {"filename": "/sounds/chompsoft.ogg", "start": 40454883, "end": 40483979, "audio": 1}, {"filename": "/sounds/coblaunch.ogg", "start": 40483979, "end": 40510305, "audio": 1}, {"filename": "/sounds/coffee.ogg", "start": 40510305, "end": 40520637, "audio": 1}, {"filename": "/sounds/coin.ogg", "start": 40520637, "end": 40533276, "audio": 1}, {"filename": "/sounds/crazydavecrazy.ogg", "start": 40533276, "end": 40561598, "audio": 1}, {"filename": "/sounds/crazydaveextralong1.ogg", "start": 40561598, "end": 40601736, "audio": 1}, {"filename": "/sounds/crazydaveextralong2.ogg", "start": 40601736, "end": 40637383, "audio": 1}, {"filename": "/sounds/crazydaveextralong3.ogg", "start": 40637383, "end": 40664562, "audio": 1}, {"filename": "/sounds/crazydavelong1.ogg", "start": 40664562, "end": 40689135, "audio": 1}, {"filename": "/sounds/crazydavelong2.ogg", "start": 40689135, "end": 40714478, "audio": 1}, {"filename": "/sounds/crazydavelong3.ogg", "start": 40714478, "end": 40739082, "audio": 1}, {"filename": "/sounds/crazydavescream.ogg", "start": 40739082, "end": 40759218, "audio": 1}, {"filename": "/sounds/crazydavescream2.ogg", "start": 40759218, "end": 40782027, "audio": 1}, {"filename": "/sounds/crazydaveshort1.ogg", "start": 40782027, "end": 40796612, "audio": 1}, {"filename": "/sounds/crazydaveshort2.ogg", "start": 40796612, "end": 40809736, "audio": 1}, {"filename": "/sounds/crazydaveshort3.ogg", "start": 40809736, "end": 40825385, "audio": 1}, {"filename": "/sounds/dancer.ogg", "start": 40825385, "end": 40912045, "audio": 1}, {"filename": "/sounds/diamond.au", "start": 40912045, "end": 40916270}, {"filename": "/sounds/digger_zombie.ogg", "start": 40916270, "end": 40942763, "audio": 1}, {"filename": "/sounds/dirt_rise.ogg", "start": 40942763, "end": 40958579, "audio": 1}, {"filename": "/sounds/dolphin_appears.ogg", "start": 40958579, "end": 40981403, "audio": 1}, {"filename": "/sounds/dolphin_before_jumping.ogg", "start": 40981403, "end": 40994233, "audio": 1}, {"filename": "/sounds/doomshroom.ogg", "start": 40994233, "end": 41076845, "audio": 1}, {"filename": "/sounds/evillaugh.ogg", "start": 41076845, "end": 41092299, "audio": 1}, {"filename": "/sounds/explosion.ogg", "start": 41092299, "end": 41129227, "audio": 1}, {"filename": "/sounds/fertilizer.ogg", "start": 41129227, "end": 41144944, "audio": 1}, {"filename": "/sounds/finalfanfare.ogg", "start": 41144944, "end": 41210420, "audio": 1}, {"filename": "/sounds/finalwave.ogg", "start": 41210420, "end": 41269237, "audio": 1}, {"filename": "/sounds/firepea.ogg", "start": 41269237, "end": 41279060, "audio": 1}, {"filename": "/sounds/floop.ogg", "start": 41279060, "end": 41282447, "audio": 1}, {"filename": "/sounds/frozen.ogg", "start": 41282447, "end": 41357178, "audio": 1}, {"filename": "/sounds/fume.ogg", "start": 41357178, "end": 41386077, "audio": 1}, {"filename": "/sounds/gargantuar_thump.ogg", "start": 41386077, "end": 41412805, "audio": 1}, {"filename": "/sounds/gargantudeath.ogg", "start": 41412805, "end": 41444120, "audio": 1}, {"filename": "/sounds/grassstep.ogg", "start": 41444120, "end": 41451783, "audio": 1}, {"filename": "/sounds/gravebusterchomp.ogg", "start": 41451783, "end": 41511357, "audio": 1}, {"filename": "/sounds/gravebutton.ogg", "start": 41511357, "end": 41525895, "audio": 1}, {"filename": "/sounds/gravestone_rumble.ogg", "start": 41525895, "end": 41546616, "audio": 1}, {"filename": "/sounds/groan.ogg", "start": 41546616, "end": 41562736, "audio": 1}, {"filename": "/sounds/groan2.ogg", "start": 41562736, "end": 41577445, "audio": 1}, {"filename": "/sounds/groan3.ogg", "start": 41577445, "end": 41601075, "audio": 1}, {"filename": "/sounds/groan4.ogg", "start": 41601075, "end": 41620012, "audio": 1}, {"filename": "/sounds/groan5.ogg", "start": 41620012, "end": 41640695, "audio": 1}, {"filename": "/sounds/groan6.ogg", "start": 41640695, "end": 41657321, "audio": 1}, {"filename": "/sounds/gulp.ogg", "start": 41657321, "end": 41667632, "audio": 1}, {"filename": "/sounds/hatchback_close.ogg", "start": 41667632, "end": 41690107, "audio": 1}, {"filename": "/sounds/hatchback_open.ogg", "start": 41690107, "end": 41730278, "audio": 1}, {"filename": "/sounds/hugewave.ogg", "start": 41730278, "end": 41841785, "audio": 1}, {"filename": "/sounds/hydraulic.ogg", "start": 41841785, "end": 41863482, "audio": 1}, {"filename": "/sounds/hydraulic_short.ogg", "start": 41863482, "end": 41888085, "audio": 1}, {"filename": "/sounds/ignite.ogg", "start": 41888085, "end": 41902714, "audio": 1}, {"filename": "/sounds/ignite2.ogg", "start": 41902714, "end": 41914540, "audio": 1}, {"filename": "/sounds/imp.ogg", "start": 41914540, "end": 41936936, "audio": 1}, {"filename": "/sounds/imp2.ogg", "start": 41936936, "end": 41953863, "audio": 1}, {"filename": "/sounds/jack_surprise.ogg", "start": 41953863, "end": 41963991, "audio": 1}, {"filename": "/sounds/jack_surprise2.ogg", "start": 41963991, "end": 41976129, "audio": 1}, {"filename": "/sounds/jackinthebox.ogg", "start": 41976129, "end": 42044919, "audio": 1}, {"filename": "/sounds/jalapeno.ogg", "start": 42044919, "end": 42079433, "audio": 1}, {"filename": "/sounds/juicy.ogg", "start": 42079433, "end": 42094263, "audio": 1}, {"filename": "/sounds/kernelpult.ogg", "start": 42094263, "end": 42100310, "audio": 1}, {"filename": "/sounds/kernelpult2.ogg", "start": 42100310, "end": 42108605, "audio": 1}, {"filename": "/sounds/ladder_zombie.ogg", "start": 42108605, "end": 42118241, "audio": 1}, {"filename": "/sounds/lawnmower.ogg", "start": 42118241, "end": 42175166, "audio": 1}, {"filename": "/sounds/lightfill.ogg", "start": 42175166, "end": 42234297, "audio": 1}, {"filename": "/sounds/limbs_pop.ogg", "start": 42234297, "end": 42245259, "audio": 1}, {"filename": "/sounds/loadingbar_flower.ogg", "start": 42245259, "end": 42260057, "audio": 1}, {"filename": "/sounds/loadingbar_zombie.ogg", "start": 42260057, "end": 42274766, "audio": 1}, {"filename": "/sounds/losemusic.ogg", "start": 42274766, "end": 42369715, "audio": 1}, {"filename": "/sounds/lowgroan.ogg", "start": 42369715, "end": 42394696, "audio": 1}, {"filename": "/sounds/lowgroan2.ogg", "start": 42394696, "end": 42412779, "audio": 1}, {"filename": "/sounds/magnetshroom.ogg", "start": 42412779, "end": 42443905, "audio": 1}, {"filename": "/sounds/mainmusic.mo3", "start": 42443905, "end": 44677510}, {"filename": "/sounds/mainmusic_hihats.mo3", "start": 44677510, "end": 44724532}, {"filename": "/sounds/melonimpact.ogg", "start": 44724532, "end": 44735622, "audio": 1}, {"filename": "/sounds/melonimpact2.ogg", "start": 44735622, "end": 44748294, "audio": 1}, {"filename": "/sounds/mindcontrolled.ogg", "start": 44748294, "end": 44775752, "audio": 1}, {"filename": "/sounds/moneyfalls.ogg", "start": 44775752, "end": 44783595, "audio": 1}, {"filename": "/sounds/newspaper_rarrgh.ogg", "start": 44783595, "end": 44804289, "audio": 1}, {"filename": "/sounds/newspaper_rarrgh2.ogg", "start": 44804289, "end": 44822806, "audio": 1}, {"filename": "/sounds/newspaper_rip.ogg", "start": 44822806, "end": 44838468, "audio": 1}, {"filename": "/sounds/paper.ogg", "start": 44838468, "end": 44851428, "audio": 1}, {"filename": "/sounds/pause.ogg", "start": 44851428, "end": 44862607, "audio": 1}, {"filename": "/sounds/phonograph.ogg", "start": 44862607, "end": 44893073, "audio": 1}, {"filename": "/sounds/plant.ogg", "start": 44893073, "end": 44905748, "audio": 1}, {"filename": "/sounds/plant2.ogg", "start": 44905748, "end": 44925556, "audio": 1}, {"filename": "/sounds/plant_water.ogg", "start": 44925556, "end": 44950098, "audio": 1}, {"filename": "/sounds/plantern.ogg", "start": 44950098, "end": 44971306, "audio": 1}, {"filename": "/sounds/plantgrow.ogg", "start": 44971306, "end": 44989999, "audio": 1}, {"filename": "/sounds/plastichit.ogg", "start": 44989999, "end": 44997036, "audio": 1}, {"filename": "/sounds/plastichit2.ogg", "start": 44997036, "end": 45003719, "audio": 1}, {"filename": "/sounds/pogo_zombie.ogg", "start": 45003719, "end": 45014482, "audio": 1}, {"filename": "/sounds/points.ogg", "start": 45014482, "end": 45037780, "audio": 1}, {"filename": "/sounds/polevault.ogg", "start": 45037780, "end": 45070760, "audio": 1}, {"filename": "/sounds/pool_cleaner.ogg", "start": 45070760, "end": 45108004, "audio": 1}, {"filename": "/sounds/portal.ogg", "start": 45108004, "end": 45126372, "audio": 1}, {"filename": "/sounds/potato_mine.ogg", "start": 45126372, "end": 45161835, "audio": 1}, {"filename": "/sounds/prize.ogg", "start": 45161835, "end": 45181859, "audio": 1}, {"filename": "/sounds/puff.ogg", "start": 45181859, "end": 45189676, "audio": 1}, {"filename": "/sounds/rain.ogg", "start": 45189676, "end": 45223955, "audio": 1}, {"filename": "/sounds/readysetplant.ogg", "start": 45223955, "end": 45314661, "audio": 1}, {"filename": "/sounds/reverse_explosion.ogg", "start": 45314661, "end": 45329768, "audio": 1}, {"filename": "/sounds/roll_in.ogg", "start": 45329768, "end": 45356593, "audio": 1}, {"filename": "/sounds/scream.ogg", "start": 45356593, "end": 45390118, "audio": 1}, {"filename": "/sounds/seedlift.ogg", "start": 45390118, "end": 45403759, "audio": 1}, {"filename": "/sounds/shieldhit.ogg", "start": 45403759, "end": 45411858, "audio": 1}, {"filename": "/sounds/shieldhit2.ogg", "start": 45411858, "end": 45421579, "audio": 1}, {"filename": "/sounds/shoop.ogg", "start": 45421579, "end": 45433606, "audio": 1}, {"filename": "/sounds/shovel.ogg", "start": 45433606, "end": 45440642, "audio": 1}, {"filename": "/sounds/siren.ogg", "start": 45440642, "end": 45505646, "audio": 1}, {"filename": "/sounds/slotmachine.ogg", "start": 45505646, "end": 45523609, "audio": 1}, {"filename": "/sounds/slurp.ogg", "start": 45523609, "end": 45528958, "audio": 1}, {"filename": "/sounds/snow_pea_sparkles.ogg", "start": 45528958, "end": 45544691, "audio": 1}, {"filename": "/sounds/splat.ogg", "start": 45544691, "end": 45556832, "audio": 1}, {"filename": "/sounds/splat2.ogg", "start": 45556832, "end": 45567097, "audio": 1}, {"filename": "/sounds/splat3.ogg", "start": 45567097, "end": 45579132, "audio": 1}, {"filename": "/sounds/squash_hmm.ogg", "start": 45579132, "end": 45591902, "audio": 1}, {"filename": "/sounds/squash_hmm2.ogg", "start": 45591902, "end": 45604005, "audio": 1}, {"filename": "/sounds/sukhbir.ogg", "start": 45604005, "end": 45628498, "audio": 1}, {"filename": "/sounds/sukhbir2.ogg", "start": 45628498, "end": 45650616, "audio": 1}, {"filename": "/sounds/sukhbir3.ogg", "start": 45650616, "end": 45678679, "audio": 1}, {"filename": "/sounds/sukhbir4.ogg", "start": 45678679, "end": 45691295, "audio": 1}, {"filename": "/sounds/sukhbir5.ogg", "start": 45691295, "end": 45703304, "audio": 1}, {"filename": "/sounds/sukhbir6.ogg", "start": 45703304, "end": 45722917, "audio": 1}, {"filename": "/sounds/swing.ogg", "start": 45722917, "end": 45730046, "audio": 1}, {"filename": "/sounds/tap.ogg", "start": 45730046, "end": 45742995, "audio": 1}, {"filename": "/sounds/tap2.ogg", "start": 45742995, "end": 45755487, "audio": 1}, {"filename": "/sounds/tapglass.au", "start": 45755487, "end": 45758297}, {"filename": "/sounds/throw.ogg", "start": 45758297, "end": 45765278, "audio": 1}, {"filename": "/sounds/throw2.ogg", "start": 45765278, "end": 45774560, "audio": 1}, {"filename": "/sounds/thunder.ogg", "start": 45774560, "end": 45817961, "audio": 1}, {"filename": "/sounds/vase_breaking.ogg", "start": 45817961, "end": 45829737, "audio": 1}, {"filename": "/sounds/wakeup.ogg", "start": 45829737, "end": 45841093, "audio": 1}, {"filename": "/sounds/watering.ogg", "start": 45841093, "end": 45857033, "audio": 1}, {"filename": "/sounds/winmusic.ogg", "start": 45857033, "end": 45926436, "audio": 1}, {"filename": "/sounds/yuck.ogg", "start": 45926436, "end": 45938564, "audio": 1}, {"filename": "/sounds/yuck2.ogg", "start": 45938564, "end": 45949465, "audio": 1}, {"filename": "/sounds/zamboni.ogg", "start": 45949465, "end": 45986227, "audio": 1}, {"filename": "/sounds/zombaquarium_die.ogg", "start": 45986227, "end": 45994351, "audio": 1}, {"filename": "/sounds/zombie_entering_water.ogg", "start": 45994351, "end": 46024163, "audio": 1}, {"filename": "/sounds/zombie_falling_1.ogg", "start": 46024163, "end": 46039681, "audio": 1}, {"filename": "/sounds/zombie_falling_2.ogg", "start": 46039681, "end": 46058468, "audio": 1}, {"filename": "/sounds/zombiesplash.ogg", "start": 46058468, "end": 46105667, "audio": 1}, {"filename": "/static/.ninja_deps", "start": 46105667, "end": 46707435}, {"filename": "/static/.ninja_lock", "start": 46707435, "end": 46707435}, {"filename": "/static/.ninja_log", "start": 46707435, "end": 46772932}, {"filename": "/static/CMakeCache.txt", "start": 46772932, "end": 46812616}, {"filename": "/static/CMakeFiles/4.0.2/CMakeCCompiler.cmake", "start": 46812616, "end": 46815931}, {"filename": "/static/CMakeFiles/4.0.2/CMakeCXXCompiler.cmake", "start": 46815931, "end": 46822453}, {"filename": "/static/CMakeFiles/4.0.2/CMakeSystem.cmake", "start": 46822453, "end": 46822970}, {"filename": "/static/CMakeFiles/CMakeConfigureLog.yaml", "start": 46822970, "end": 47390669}, {"filename": "/static/CMakeFiles/Export/f084604df1a27ef5b4fef7c7544737d1/SDL2Targets-noconfig.cmake", "start": 47390669, "end": 47391981}, {"filename": "/static/CMakeFiles/Export/f084604df1a27ef5b4fef7c7544737d1/SDL2Targets.cmake", "start": 47391981, "end": 47396840}, {"filename": "/static/CMakeFiles/InstallScripts.json", "start": 47396840, "end": 47397286}, {"filename": "/static/CMakeFiles/TargetDirectories.txt", "start": 47397286, "end": 47400635}, {"filename": "/static/CMakeFiles/cmake.check_cache", "start": 47400635, "end": 47400721}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Board.cpp.o", "start": 47400721, "end": 47841187}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Challenge.cpp.o", "start": 47841187, "end": 48025330}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Coin.cpp.o", "start": 48025330, "end": 48078052}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/CursorObject.cpp.o", "start": 48078052, "end": 48089359}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/CutScene.cpp.o", "start": 48089359, "end": 48234565}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/GameObject.cpp.o", "start": 48234565, "end": 48235975}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/GridItem.cpp.o", "start": 48235975, "end": 48258769}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/LawnCommon.cpp.o", "start": 48258769, "end": 48278347}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/LawnMower.cpp.o", "start": 48278347, "end": 48291945}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/MessageWidget.cpp.o", "start": 48291945, "end": 48317602}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Plant.cpp.o", "start": 48317602, "end": 48479666}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Projectile.cpp.o", "start": 48479666, "end": 48518855}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/SeedPacket.cpp.o", "start": 48518855, "end": 48571390}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/DataSync.cpp.o", "start": 48571390, "end": 48678641}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/Music.cpp.o", "start": 48678641, "end": 48756901}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/PlayerInfo.cpp.o", "start": 48756901, "end": 48774873}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/PoolEffect.cpp.o", "start": 48774873, "end": 48787953}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/ProfileMgr.cpp.o", "start": 48787953, "end": 48888684}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/ReanimationLawn.cpp.o", "start": 48888684, "end": 48913575}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/System/SaveGame.cpp.o", "start": 48913575, "end": 48939394}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/ToolTipWidget.cpp.o", "start": 48939394, "end": 48993744}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/AchievementsScreen.cpp.o", "start": 48993744, "end": 49024118}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/AlmanacDialog.cpp.o", "start": 49024118, "end": 49112392}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/AwardScreen.cpp.o", "start": 49112392, "end": 49228106}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/ChallengeScreen.cpp.o", "start": 49228106, "end": 49319589}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/CheatDialog.cpp.o", "start": 49319589, "end": 49358895}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/ContinueDialog.cpp.o", "start": 49358895, "end": 49386754}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/CreditScreen.cpp.o", "start": 49386754, "end": 49495719}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/GameButton.cpp.o", "start": 49495719, "end": 49538414}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/GameSelector.cpp.o", "start": 49538414, "end": 49658711}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/ImitaterDialog.cpp.o", "start": 49658711, "end": 49676442}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/LawnDialog.cpp.o", "start": 49676442, "end": 49723808}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/NewOptionsDialog.cpp.o", "start": 49723808, "end": 49768397}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/NewUserDialog.cpp.o", "start": 49768397, "end": 49790535}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/SeedChooserScreen.cpp.o", "start": 49790535, "end": 49859773}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/StoreScreen.cpp.o", "start": 49859773, "end": 49964398}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/TitleScreen.cpp.o", "start": 49964398, "end": 50003204}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Widget/UserDialog.cpp.o", "start": 50003204, "end": 50041130}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/ZenGarden.cpp.o", "start": 50041130, "end": 50172070}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Lawn/Zombie.cpp.o", "start": 50172070, "end": 50462195}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/LawnApp.cpp.o", "start": 50462195, "end": 50662164}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Resources.cpp.o", "start": 50662164, "end": 51116977}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/Attachment.cpp.o", "start": 51116977, "end": 51150595}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/Definition.cpp.o", "start": 51150595, "end": 51287922}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/EffectSystem.cpp.o", "start": 51287922, "end": 53185994}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/FilterEffect.cpp.o", "start": 53185994, "end": 53246963}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/ReanimAtlas.cpp.o", "start": 53246963, "end": 53295676}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/Reanimator.cpp.o", "start": 53295676, "end": 53385905}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodCommon.cpp.o", "start": 53385905, "end": 53845334}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodDebug.cpp.o", "start": 53845334, "end": 53859707}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodFoley.cpp.o", "start": 53859707, "end": 53880596}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodList.cpp.o", "start": 53880596, "end": 53884545}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodParticle.cpp.o", "start": 53884545, "end": 53974562}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/TodStringFile.cpp.o", "start": 53974562, "end": 54040794}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/Sexy.TodLib/Trail.cpp.o", "start": 54040794, "end": 54067292}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/Common.cpp.o", "start": 54067292, "end": 54255336}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/SexyApp.cpp.o", "start": 54255336, "end": 54414589}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/SexyAppBase.cpp.o", "start": 54414589, "end": 55139094}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/glad/glad.c.o", "start": 55139094, "end": 55300507}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/Color.cpp.o", "start": 55300507, "end": 55304988}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/Font.cpp.o", "start": 55304988, "end": 55309723}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/GLImage.cpp.o", "start": 55309723, "end": 55327273}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/Graphics.cpp.o", "start": 55327273, "end": 55494821}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/Image.cpp.o", "start": 55494821, "end": 55544703}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/ImageFont.cpp.o", "start": 55544703, "end": 56433592}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/MemoryImage.cpp.o", "start": 56433592, "end": 56615905}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/NativeDisplay.cpp.o", "start": 56615905, "end": 56617281}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/Quantize.cpp.o", "start": 56617281, "end": 56619482}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/SWTri.cpp.o", "start": 56619482, "end": 58528075}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/graphics/SharedImage.cpp.o", "start": 58528075, "end": 58531103}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/ImageLib.cpp.o", "start": 58531103, "end": 58621589}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/cdjpeg.c.o", "start": 58621589, "end": 58622775}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jaricom.c.o", "start": 58622775, "end": 58623638}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcapimin.c.o", "start": 58623638, "end": 58629172}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcapistd.c.o", "start": 58629172, "end": 58632315}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcarith.c.o", "start": 58632315, "end": 58653110}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jccoefct.c.o", "start": 58653110, "end": 58661421}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jccolor.c.o", "start": 58661421, "end": 58672690}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcdctmgr.c.o", "start": 58672690, "end": 58683120}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jchuff.c.o", "start": 58683120, "end": 58715553}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcinit.c.o", "start": 58715553, "end": 58722833}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcmainct.c.o", "start": 58722833, "end": 58725339}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcmarker.c.o", "start": 58725339, "end": 58738181}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcmaster.c.o", "start": 58738181, "end": 58756313}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcomapi.c.o", "start": 58756313, "end": 58760651}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcparam.c.o", "start": 58760651, "end": 58774490}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcprepct.c.o", "start": 58774490, "end": 58781303}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jcsample.c.o", "start": 58781303, "end": 58793690}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jctrans.c.o", "start": 58793690, "end": 58802030}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdapimin.c.o", "start": 58802030, "end": 58809621}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdapistd.c.o", "start": 58809621, "end": 58815036}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdarith.c.o", "start": 58815036, "end": 58834462}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdatadst.c.o", "start": 58834462, "end": 58838181}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdatasrc.c.o", "start": 58838181, "end": 58841333}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdcoefct.c.o", "start": 58841333, "end": 58858278}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdcolor.c.o", "start": 58858278, "end": 58872910}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jddctmgr.c.o", "start": 58872910, "end": 58879190}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdhuff.c.o", "start": 58879190, "end": 58921761}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdinput.c.o", "start": 58921761, "end": 58936930}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdmainct.c.o", "start": 58936930, "end": 58945215}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdmarker.c.o", "start": 58945215, "end": 58999698}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdmaster.c.o", "start": 58999698, "end": 59010976}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdmerge.c.o", "start": 59010976, "end": 59020236}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdpostct.c.o", "start": 59020236, "end": 59024621}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdsample.c.o", "start": 59024621, "end": 59030509}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jdtrans.c.o", "start": 59030509, "end": 59032894}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jerror.c.o", "start": 59032894, "end": 59047142}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jfdctflt.c.o", "start": 59047142, "end": 59050854}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jfdctfst.c.o", "start": 59050854, "end": 59054486}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jfdctint.c.o", "start": 59054486, "end": 59165969}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jidctflt.c.o", "start": 59165969, "end": 59171322}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jidctfst.c.o", "start": 59171322, "end": 59177247}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jidctint.c.o", "start": 59177247, "end": 59312195}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jmemmgr.c.o", "start": 59312195, "end": 59330495}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jmemnobs.c.o", "start": 59330495, "end": 59331963}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jquant1.c.o", "start": 59331963, "end": 59346275}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jquant2.c.o", "start": 59346275, "end": 59370131}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/jutils.c.o", "start": 59370131, "end": 59372942}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdbmp.c.o", "start": 59372942, "end": 59383203}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdcolmap.c.o", "start": 59383203, "end": 59388496}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdgif.c.o", "start": 59388496, "end": 59401954}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdppm.c.o", "start": 59401954, "end": 59413067}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdrle.c.o", "start": 59413067, "end": 59413400}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdswitch.c.o", "start": 59413400, "end": 59423848}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/rdtarga.c.o", "start": 59423848, "end": 59433400}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/transupp.c.o", "start": 59433400, "end": 59504724}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/wrbmp.c.o", "start": 59504724, "end": 59514546}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/wrgif.c.o", "start": 59514546, "end": 59524540}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/wrppm.c.o", "start": 59524540, "end": 59528519}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/wrrle.c.o", "start": 59528519, "end": 59528852}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/jpeg/wrtarga.c.o", "start": 59528852, "end": 59533346}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/png.c.o", "start": 59533346, "end": 59608355}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngerror.c.o", "start": 59608355, "end": 59622409}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngget.c.o", "start": 59622409, "end": 59644658}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngmem.c.o", "start": 59644658, "end": 59649190}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngpread.c.o", "start": 59649190, "end": 59675756}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngread.c.o", "start": 59675756, "end": 59753563}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngrio.c.o", "start": 59753563, "end": 59755245}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngrtran.c.o", "start": 59755245, "end": 59874539}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngrutil.c.o", "start": 59874539, "end": 59955785}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngset.c.o", "start": 59955785, "end": 59990328}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngtrans.c.o", "start": 59990328, "end": 60002760}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngwio.c.o", "start": 60002760, "end": 60004911}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngwrite.c.o", "start": 60004911, "end": 60048610}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngwtran.c.o", "start": 60048610, "end": 60060322}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/png/pngwutil.c.o", "start": 60060322, "end": 60111620}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/adler32.c.o", "start": 60111620, "end": 60117558}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/compress.c.o", "start": 60117558, "end": 60119214}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/crc32.c.o", "start": 60119214, "end": 60139106}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/deflate.c.o", "start": 60139106, "end": 60197598}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/infback.c.o", "start": 60197598, "end": 60219723}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/inffast.c.o", "start": 60219723, "end": 60226953}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/inflate.c.o", "start": 60226953, "end": 60270161}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/inftrees.c.o", "start": 60270161, "end": 60276760}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/trees.c.o", "start": 60276760, "end": 60316451}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/uncompr.c.o", "start": 60316451, "end": 60318299}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/imagelib/zlib/zutil.c.o", "start": 60318299, "end": 60320089}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/Buffer.cpp.o", "start": 60320089, "end": 60418776}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/CritSect.cpp.o", "start": 60418776, "end": 60420106}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/Debug.cpp.o", "start": 60420106, "end": 60492417}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/DescParser.cpp.o", "start": 60492417, "end": 60655025}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/Flags.cpp.o", "start": 60655025, "end": 60655358}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/KeyCodes.cpp.o", "start": 60655358, "end": 60665386}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/MTRand.cpp.o", "start": 60665386, "end": 60677334}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/ModVal.cpp.o", "start": 60677334, "end": 60939725}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/PerfTimer.cpp.o", "start": 60939725, "end": 61013531}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/PropertiesParser.cpp.o", "start": 61013531, "end": 61208394}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/Ratio.cpp.o", "start": 61208394, "end": 61209380}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/RegEmu.cpp.o", "start": 61209380, "end": 61403191}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/ResourceManager.cpp.o", "start": 61403191, "end": 61837679}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/SexyMatrix.cpp.o", "start": 61837679, "end": 61845822}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/misc/XMLParser.cpp.o", "start": 61845822, "end": 62023767}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/paklib/PakInterface.cpp.o", "start": 62023767, "end": 62178296}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/platform/linux/Input.cpp.o", "start": 62178296, "end": 62181823}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/platform/linux/graphics/GLInterface.cpp.o", "start": 62181823, "end": 62400657}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/platform/linux/graphics/Window.cpp.o", "start": 62400657, "end": 62405883}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/sound/SDLMusicInterface.cpp.o", "start": 62405883, "end": 62479783}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/sound/SDLSoundInstance.cpp.o", "start": 62479783, "end": 62488462}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/sound/SDLSoundManager.cpp.o", "start": 62488462, "end": 62533580}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/ButtonWidget.cpp.o", "start": 62533580, "end": 62555198}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/Checkbox.cpp.o", "start": 62555198, "end": 62563903}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/Dialog.cpp.o", "start": 62563903, "end": 62598960}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/DialogButton.cpp.o", "start": 62598960, "end": 62612150}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/EditWidget.cpp.o", "start": 62612150, "end": 62695194}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/HyperlinkWidget.cpp.o", "start": 62695194, "end": 62703682}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/Insets.cpp.o", "start": 62703682, "end": 62704456}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/ListWidget.cpp.o", "start": 62704456, "end": 62886826}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/ScrollbarWidget.cpp.o", "start": 62886826, "end": 62906705}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/ScrollbuttonWidget.cpp.o", "start": 62906705, "end": 62916420}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/Slider.cpp.o", "start": 62916420, "end": 62928444}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/TextWidget.cpp.o", "start": 62928444, "end": 63076763}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/Widget.cpp.o", "start": 63076763, "end": 63141885}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/WidgetContainer.cpp.o", "start": 63141885, "end": 63198857}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/SexyAppFramework/widget/WidgetManager.cpp.o", "start": 63198857, "end": 63276590}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.dir/src/main.cpp.o", "start": 63276590, "end": 63282918}, {"filename": "/static/CMakeFiles/re-plants-vs-zombies.rsp", "start": 63282918, "end": 63298125}, {"filename": "/static/CMakeFiles/rules.ninja", "start": 63298125, "end": 63304944}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/Export/2dc727f3fe5f4dacfc15c5c57697918b/SDL2_mixer_ext-static-targets-noconfig.cmake", "start": 63304944, "end": 63305903}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/Export/2dc727f3fe5f4dacfc15c5c57697918b/SDL2_mixer_ext-static-targets.cmake", "start": 63305903, "end": 63311127}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/load_aiff.c.o", "start": 63311127, "end": 63317222}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/load_voc.c.o", "start": 63317222, "end": 63325903}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/mp3utils.c.o", "start": 63325903, "end": 63360655}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/music_drmp3.c.o", "start": 63360655, "end": 63474694}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/music_ogg_stb.c.o", "start": 63474694, "end": 63664732}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/codecs/music_wav.c.o", "start": 63664732, "end": 63711802}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/effect_position.c.o", "start": 63711802, "end": 63799045}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/effect_stereoreverse.c.o", "start": 63799045, "end": 63802639}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/effects_internal.c.o", "start": 63802639, "end": 63804562}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/mixer.c.o", "start": 63804562, "end": 63851925}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/mixer_x_deprecated.c.o", "start": 63851925, "end": 63853193}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/music.c.o", "start": 63853193, "end": 63941435}, {"filename": "/static/Libs/SDL-Mixer-X/CMakeFiles/SDL2_mixer_ext_Static.dir/src/utils.c.o", "start": 63941435, "end": 63945123}, {"filename": "/static/Libs/SDL-Mixer-X/SDL2_mixer_ext.pc", "start": 63945123, "end": 63945540}, {"filename": "/static/Libs/SDL-Mixer-X/SDL2_mixer_extConfig.cmake", "start": 63945540, "end": 63947006}, {"filename": "/static/Libs/SDL-Mixer-X/cmake_install.cmake", "start": 63947006, "end": 63951915}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL.c.o", "start": 63951915, "end": 63961961}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_assert.c.o", "start": 63961961, "end": 63970574}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_dataqueue.c.o", "start": 63970574, "end": 63980575}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_error.c.o", "start": 63980575, "end": 63983186}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_guid.c.o", "start": 63983186, "end": 63985330}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_hints.c.o", "start": 63985330, "end": 63992280}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_list.c.o", "start": 63992280, "end": 63993982}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_log.c.o", "start": 63993982, "end": 64003344}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/SDL_utils.c.o", "start": 64003344, "end": 64004143}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/atomic/SDL_atomic.c.o", "start": 64004143, "end": 64005687}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/atomic/SDL_spinlock.c.o", "start": 64005687, "end": 64006989}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_audio.c.o", "start": 64006989, "end": 64060032}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_audiocvt.c.o", "start": 64060032, "end": 64185557}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_audiodev.c.o", "start": 64185557, "end": 64185890}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_audiotypecvt.c.o", "start": 64185890, "end": 64195344}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_mixer.c.o", "start": 64195344, "end": 64203414}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/SDL_wave.c.o", "start": 64203414, "end": 64252938}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/disk/SDL_diskaudio.c.o", "start": 64252938, "end": 64257820}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/dummy/SDL_dummyaudio.c.o", "start": 64257820, "end": 64259084}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/audio/emscripten/SDL_emscriptenaudio.c.o", "start": 64259084, "end": 64273336}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/cpuinfo/SDL_cpuinfo.c.o", "start": 64273336, "end": 64285641}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/dynapi/SDL_dynapi.c.o", "start": 64285641, "end": 64285974}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_clipboardevents.c.o", "start": 64285974, "end": 64286679}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_displayevents.c.o", "start": 64286679, "end": 64287681}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_dropevents.c.o", "start": 64287681, "end": 64289731}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_events.c.o", "start": 64289731, "end": 64343869}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_gesture.c.o", "start": 64343869, "end": 64362678}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_keyboard.c.o", "start": 64362678, "end": 64401954}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_keysym_to_scancode.c.o", "start": 64401954, "end": 64402287}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_mouse.c.o", "start": 64402287, "end": 64436986}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_quit.c.o", "start": 64436986, "end": 64439702}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_scancode_tables.c.o", "start": 64439702, "end": 64440035}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_touch.c.o", "start": 64440035, "end": 64453431}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/SDL_windowevents.c.o", "start": 64453431, "end": 64458427}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/events/imKStoUCS.c.o", "start": 64458427, "end": 64458760}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/file/SDL_rwops.c.o", "start": 64458760, "end": 64471669}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/filesystem/emscripten/SDL_sysfilesystem.c.o", "start": 64471669, "end": 64474120}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/haptic/SDL_haptic.c.o", "start": 64474120, "end": 64490033}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/haptic/dummy/SDL_syshaptic.c.o", "start": 64490033, "end": 64492665}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/hidapi/SDL_hidapi.c.o", "start": 64492665, "end": 64501203}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/SDL_gamecontroller.c.o", "start": 64501203, "end": 64579566}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/SDL_joystick.c.o", "start": 64579566, "end": 64660049}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/SDL_steam_virtual_gamepad.c.o", "start": 64660049, "end": 64666247}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/controller_type.c.o", "start": 64666247, "end": 64680811}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/emscripten/SDL_sysjoystick.c.o", "start": 64680811, "end": 64691445}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/joystick/virtual/SDL_virtualjoystick.c.o", "start": 64691445, "end": 64711210}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_atan2.c.o", "start": 64711210, "end": 64713597}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_exp.c.o", "start": 64713597, "end": 64716425}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_fmod.c.o", "start": 64716425, "end": 64721000}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_log.c.o", "start": 64721000, "end": 64723968}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_log10.c.o", "start": 64723968, "end": 64725289}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_pow.c.o", "start": 64725289, "end": 64735358}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_rem_pio2.c.o", "start": 64735358, "end": 64740326}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/e_sqrt.c.o", "start": 64740326, "end": 64743747}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/k_cos.c.o", "start": 64743747, "end": 64745060}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/k_rem_pio2.c.o", "start": 64745060, "end": 64757370}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/k_sin.c.o", "start": 64757370, "end": 64758452}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/k_tan.c.o", "start": 64758452, "end": 64761330}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_atan.c.o", "start": 64761330, "end": 64764333}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_copysign.c.o", "start": 64764333, "end": 64764977}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_cos.c.o", "start": 64764977, "end": 64766095}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_fabs.c.o", "start": 64766095, "end": 64766666}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_floor.c.o", "start": 64766666, "end": 64768455}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_scalbn.c.o", "start": 64768455, "end": 64770229}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_sin.c.o", "start": 64770229, "end": 64771357}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/libm/s_tan.c.o", "start": 64771357, "end": 64772312}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/loadso/dummy/SDL_sysloadso.c.o", "start": 64772312, "end": 64773381}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/locale/SDL_locale.c.o", "start": 64773381, "end": 64775777}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/locale/emscripten/SDL_syslocale.c.o", "start": 64775777, "end": 64777239}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/misc/SDL_url.c.o", "start": 64777239, "end": 64778043}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/misc/emscripten/SDL_sysurl.c.o", "start": 64778043, "end": 64778846}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/power/SDL_power.c.o", "start": 64778846, "end": 64779939}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/power/emscripten/SDL_syspower.c.o", "start": 64779939, "end": 64781045}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/SDL_d3dmath.c.o", "start": 64781045, "end": 64781378}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/SDL_render.c.o", "start": 64781378, "end": 64934085}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/SDL_yuv_sw.c.o", "start": 64934085, "end": 64947813}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d/SDL_render_d3d.c.o", "start": 64947813, "end": 64948146}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d/SDL_shaders_d3d.c.o", "start": 64948146, "end": 64948479}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d11/SDL_render_d3d11.c.o", "start": 64948479, "end": 64948812}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d11/SDL_shaders_d3d11.c.o", "start": 64948812, "end": 64949145}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d12/SDL_render_d3d12.c.o", "start": 64949145, "end": 64949478}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/direct3d12/SDL_shaders_d3d12.c.o", "start": 64949478, "end": 64949811}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/opengl/SDL_render_gl.c.o", "start": 64949811, "end": 64950144}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/opengl/SDL_shaders_gl.c.o", "start": 64950144, "end": 64950477}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/opengles/SDL_render_gles.c.o", "start": 64950477, "end": 64950810}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/opengles2/SDL_render_gles2.c.o", "start": 64950810, "end": 65035187}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/opengles2/SDL_shaders_gles2.c.o", "start": 65035187, "end": 65050095}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/ps2/SDL_render_ps2.c.o", "start": 65050095, "end": 65050428}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/psp/SDL_render_psp.c.o", "start": 65050428, "end": 65050761}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_blendfillrect.c.o", "start": 65050761, "end": 65214969}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_blendline.c.o", "start": 65214969, "end": 65494083}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_blendpoint.c.o", "start": 65494083, "end": 65535360}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_drawline.c.o", "start": 65535360, "end": 65558688}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_drawpoint.c.o", "start": 65558688, "end": 65561631}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_render_sw.c.o", "start": 65561631, "end": 65590971}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_rotate.c.o", "start": 65590971, "end": 65608340}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/software/SDL_triangle.c.o", "start": 65608340, "end": 65667827}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/vitagxm/SDL_render_vita_gxm.c.o", "start": 65667827, "end": 65668160}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/vitagxm/SDL_render_vita_gxm_memory.c.o", "start": 65668160, "end": 65668493}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/render/vitagxm/SDL_render_vita_gxm_tools.c.o", "start": 65668493, "end": 65668826}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/sensor/SDL_sensor.c.o", "start": 65668826, "end": 65678740}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/sensor/dummy/SDL_dummysensor.c.o", "start": 65678740, "end": 65680133}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_crc16.c.o", "start": 65680133, "end": 65681227}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_crc32.c.o", "start": 65681227, "end": 65682173}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_getenv.c.o", "start": 65682173, "end": 65683198}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_iconv.c.o", "start": 65683198, "end": 65685804}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_malloc.c.o", "start": 65685804, "end": 65689829}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_mslibc.c.o", "start": 65689829, "end": 65690162}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_qsort.c.o", "start": 65690162, "end": 65690983}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_stdlib.c.o", "start": 65690983, "end": 65698215}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_string.c.o", "start": 65698215, "end": 65709720}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/stdlib/SDL_strtokr.c.o", "start": 65709720, "end": 65710289}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/SDL_thread.c.o", "start": 65710289, "end": 65720090}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/generic/SDL_syscond.c.o", "start": 65720090, "end": 65723757}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/generic/SDL_sysmutex.c.o", "start": 65723757, "end": 65724772}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/generic/SDL_syssem.c.o", "start": 65724772, "end": 65726055}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/generic/SDL_systhread.c.o", "start": 65726055, "end": 65727006}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/thread/generic/SDL_systls.c.o", "start": 65727006, "end": 65727783}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/timer/SDL_timer.c.o", "start": 65727783, "end": 65730092}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/timer/unix/SDL_systimer.c.o", "start": 65730092, "end": 65732748}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_RLEaccel.c.o", "start": 65732748, "end": 65819129}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit.c.o", "start": 65819129, "end": 65826728}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_0.c.o", "start": 65826728, "end": 65952068}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_1.c.o", "start": 65952068, "end": 66040922}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_A.c.o", "start": 66040922, "end": 66220679}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_N.c.o", "start": 66220679, "end": 66559312}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_auto.c.o", "start": 66559312, "end": 66798226}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_copy.c.o", "start": 66798226, "end": 66799702}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_blit_slow.c.o", "start": 66799702, "end": 66819055}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_bmp.c.o", "start": 66819055, "end": 66839288}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_clipboard.c.o", "start": 66839288, "end": 66843108}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_egl.c.o", "start": 66843108, "end": 66881560}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_fillrect.c.o", "start": 66881560, "end": 66888060}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_pixels.c.o", "start": 66888060, "end": 66923059}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_rect.c.o", "start": 66923059, "end": 66955233}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_shape.c.o", "start": 66955233, "end": 66965877}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_stretch.c.o", "start": 66965877, "end": 66978373}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_surface.c.o", "start": 66978373, "end": 67018059}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_video.c.o", "start": 67018059, "end": 67152388}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_vulkan_utils.c.o", "start": 67152388, "end": 67152721}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/SDL_yuv.c.o", "start": 67152721, "end": 67211740}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/dummy/SDL_nullevents.c.o", "start": 67211740, "end": 67212206}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/dummy/SDL_nullframebuffer.c.o", "start": 67212206, "end": 67214609}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/dummy/SDL_nullvideo.c.o", "start": 67214609, "end": 67216912}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/emscripten/SDL_emscriptenevents.c.o", "start": 67216912, "end": 67234915}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/emscripten/SDL_emscriptenframebuffer.c.o", "start": 67234915, "end": 67238708}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/emscripten/SDL_emscriptenmouse.c.o", "start": 67238708, "end": 67243765}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/emscripten/SDL_emscriptenopengles.c.o", "start": 67243765, "end": 67247113}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/emscripten/SDL_emscriptenvideo.c.o", "start": 67247113, "end": 67255781}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/offscreen/SDL_offscreenevents.c.o", "start": 67255781, "end": 67256251}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/offscreen/SDL_offscreenframebuffer.c.o", "start": 67256251, "end": 67258683}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/offscreen/SDL_offscreenopengles.c.o", "start": 67258683, "end": 67260321}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/offscreen/SDL_offscreenvideo.c.o", "start": 67260321, "end": 67263080}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/offscreen/SDL_offscreenwindow.c.o", "start": 67263080, "end": 67264815}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/yuv2rgb/yuv_rgb_lsx.c.o", "start": 67264815, "end": 67265148}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/yuv2rgb/yuv_rgb_sse.c.o", "start": 67265148, "end": 67265481}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2-static.dir/src/video/yuv2rgb/yuv_rgb_std.c.o", "start": 67265481, "end": 67371239}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_assert.c.o", "start": 67371239, "end": 67374585}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_common.c.o", "start": 67374585, "end": 67478349}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_compare.c.o", "start": 67478349, "end": 67483036}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_crc32.c.o", "start": 67483036, "end": 67485223}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_font.c.o", "start": 67485223, "end": 67498076}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_fuzzer.c.o", "start": 67498076, "end": 67507322}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_harness.c.o", "start": 67507322, "end": 67526226}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_imageBlit.c.o", "start": 67526226, "end": 67570825}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_imageBlitBlend.c.o", "start": 67570825, "end": 67644894}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_imageFace.c.o", "start": 67644894, "end": 67649765}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_imagePrimitives.c.o", "start": 67649765, "end": 67664968}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_imagePrimitivesBlend.c.o", "start": 67664968, "end": 67680186}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_log.c.o", "start": 67680186, "end": 67682031}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_md5.c.o", "start": 67682031, "end": 67700652}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_memory.c.o", "start": 67700652, "end": 67711954}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2_test.dir/src/test/SDL_test_random.c.o", "start": 67711954, "end": 67713594}, {"filename": "/static/Libs/SDL/CMakeFiles/SDL2main.dir/src/main/dummy/SDL_dummy_main.c.o", "start": 67713594, "end": 67713996}, {"filename": "/static/Libs/SDL/SDL2.spec", "start": 67713996, "end": 67717208}, {"filename": "/static/Libs/SDL/SDL_config.h.intermediate", "start": 67717208, "end": 67734202}, {"filename": "/static/Libs/SDL/cmake_install.cmake", "start": 67734202, "end": 67735884}, {"filename": "/static/Libs/SDL/cmake_uninstall.cmake", "start": 67735884, "end": 67736947}, {"filename": "/static/Libs/SDL/include-config-/SDL2/SDL_config.h", "start": 67736947, "end": 67753941}, {"filename": "/static/Libs/SDL/include/SDL2/SDL.h", "start": 67753941, "end": 67762052}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_assert.h", "start": 67762052, "end": 67774851}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_atomic.h", "start": 67774851, "end": 67789347}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_audio.h", "start": 67789347, "end": 67850408}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_bits.h", "start": 67850408, "end": 67853813}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_blendmode.h", "start": 67853813, "end": 67862861}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_clipboard.h", "start": 67862861, "end": 67867168}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_copying.h", "start": 67867168, "end": 67868107}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_cpuinfo.h", "start": 67868107, "end": 67885796}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_egl.h", "start": 67885796, "end": 67994643}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_endian.h", "start": 67994643, "end": 68005539}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_error.h", "start": 68005539, "end": 68010716}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_events.h", "start": 68010716, "end": 68058912}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_filesystem.h", "start": 68058912, "end": 68064438}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_gamecontroller.h", "start": 68064438, "end": 68105716}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_gesture.h", "start": 68105716, "end": 68109136}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_guid.h", "start": 68109136, "end": 68112501}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_haptic.h", "start": 68112501, "end": 68155089}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_hidapi.h", "start": 68155089, "end": 68171752}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_hints.h", "start": 68171752, "end": 68291775}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_joystick.h", "start": 68291775, "end": 68331315}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_keyboard.h", "start": 68331315, "end": 68342655}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_keycode.h", "start": 68342655, "end": 68358270}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_loadso.h", "start": 68358270, "end": 68362168}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_locale.h", "start": 68362168, "end": 68365976}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_log.h", "start": 68365976, "end": 68377751}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_main.h", "start": 68377751, "end": 68386745}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_messagebox.h", "start": 68386745, "end": 68393623}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_metal.h", "start": 68393623, "end": 68396990}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_misc.h", "start": 68396990, "end": 68399824}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_mouse.h", "start": 68399824, "end": 68416855}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_mutex.h", "start": 68416855, "end": 68433606}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_name.h", "start": 68433606, "end": 68434761}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengl.h", "start": 68434761, "end": 68515799}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengl_glext.h", "start": 68515799, "end": 69379869}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles.h", "start": 69379869, "end": 69381094}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles2.h", "start": 69381094, "end": 69382670}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles2_gl2.h", "start": 69382670, "end": 69425608}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles2_gl2ext.h", "start": 69425608, "end": 69666829}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles2_gl2platform.h", "start": 69666829, "end": 69667475}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_opengles2_khrplatform.h", "start": 69667475, "end": 69678606}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_pixels.h", "start": 69678606, "end": 69704858}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_platform.h", "start": 69704858, "end": 69711987}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_power.h", "start": 69711987, "end": 69715225}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_quit.h", "start": 69715225, "end": 69717207}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_rect.h", "start": 69717207, "end": 69730097}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_render.h", "start": 69730097, "end": 69804659}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_revision.h", "start": 69804659, "end": 69804871}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_rwops.h", "start": 69804871, "end": 69833090}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_scancode.h", "start": 69833090, "end": 69850000}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_sensor.h", "start": 69850000, "end": 69860733}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_shape.h", "start": 69860733, "end": 69866613}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_stdinc.h", "start": 69866613, "end": 69898172}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_surface.h", "start": 69898172, "end": 69935097}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_system.h", "start": 69935097, "end": 69956532}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_syswm.h", "start": 69956532, "end": 69968037}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test.h", "start": 69968037, "end": 69970036}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_assert.h", "start": 69970036, "end": 69973262}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_common.h", "start": 69973262, "end": 69980124}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_compare.h", "start": 69980124, "end": 69982285}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_crc32.h", "start": 69982285, "end": 69985665}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_font.h", "start": 69985665, "end": 69991086}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_fuzzer.h", "start": 69991086, "end": 70004262}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_harness.h", "start": 70004262, "end": 70008891}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_images.h", "start": 70008891, "end": 70011104}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_log.h", "start": 70011104, "end": 70013055}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_md5.h", "start": 70013055, "end": 70017681}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_memory.h", "start": 70017681, "end": 70019465}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_test_random.h", "start": 70019465, "end": 70022617}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_thread.h", "start": 70022617, "end": 70040027}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_timer.h", "start": 70040027, "end": 70047318}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_touch.h", "start": 70047318, "end": 70051824}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_types.h", "start": 70051824, "end": 70052806}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_version.h", "start": 70052806, "end": 70059644}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_video.h", "start": 70059644, "end": 70145297}, {"filename": "/static/Libs/SDL/include/SDL2/SDL_vulkan.h", "start": 70145297, "end": 70153846}, {"filename": "/static/Libs/SDL/include/SDL2/begin_code.h", "start": 70153846, "end": 70159510}, {"filename": "/static/Libs/SDL/include/SDL2/close_code.h", "start": 70159510, "end": 70160996}, {"filename": "/static/Libs/SDL/libSDL2.a", "start": 70160996, "end": 73622762}, {"filename": "/static/Libs/SDL/libSDL2_test.a", "start": 73622762, "end": 73968820}, {"filename": "/static/Libs/SDL/libSDL2main.a", "start": 73968820, "end": 73969460}, {"filename": "/static/Libs/SDL/sdl2-config", "start": 73969460, "end": 73971027}, {"filename": "/static/Libs/SDL/sdl2.pc", "start": 73971027, "end": 73971596}, {"filename": "/static/build.ninja", "start": 73971596, "end": 74640864}, {"filename": "/static/cmake_install.cmake", "start": 74640864, "end": 74646014}, {"filename": "/static/lib/libSDL2_mixer_ext.a", "start": 74646014, "end": 75289320}], "remote_package_size": 75289320});

  })();

// end include: C:\Users\Administrator\AppData\Local\Temp\tmpq2umepa2.js
// include: C:\Users\Administrator\AppData\Local\Temp\tmp4ip3vbot.js

    // All the pre-js content up to here must remain later on, we need to run
    // it.
    if ((typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER) || (typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD) || (typeof ENVIRONMENT_IS_AUDIO_WORKLET != 'undefined' && ENVIRONMENT_IS_AUDIO_WORKLET)) Module['preRun'] = [];
    var necessaryPreJSTasks = Module['preRun'].slice();
  // end include: C:\Users\Administrator\AppData\Local\Temp\tmp4ip3vbot.js
// include: C:\Users\Administrator\AppData\Local\Temp\tmp9s2bbgxe.js

    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach((task) => {
      if (Module['preRun'].indexOf(task) < 0) throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
  // end include: C:\Users\Administrator\AppData\Local\Temp\tmp9s2bbgxe.js


var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// In MODULARIZE mode _scriptName needs to be captured already at the very top of the page immediately when the page is parsed, so it is generated there
// before the page load. In non-MODULARIZE modes generate it here.
var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;

if (typeof __filename != 'undefined') { // Node
  _scriptName = __filename;
} else
if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {
  const isNode = typeof process == 'object' && process.versions?.node && process.type != 'renderer';
  if (!isNode) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  var nodeVersion = process.versions.node;
  var numericVersion = nodeVersion.split('.').slice(0, 3);
  numericVersion = (numericVersion[0] * 10000) + (numericVersion[1] * 100) + (numericVersion[2].split('-')[0] * 1);
  var minVersion = 160000;
  if (numericVersion < 160000) {
    throw new Error('This emscripten-generated code requires node v16.0.0 (detected v' + nodeVersion + ')');
  }

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename);
  assert(Buffer.isBuffer(ret));
  return ret;
};

readAsync = async (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
  assert(binary ? Buffer.isBuffer(ret) : typeof ret == 'string');
  return ret;
};
// end include: node_shell_read.js
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else
if (ENVIRONMENT_IS_SHELL) {

  const isNode = typeof process == 'object' && process.versions?.node && process.type != 'renderer';
  if (isNode || typeof window == 'object' || typeof WorkerGlobalScope != 'undefined') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href; // includes trailing slash
  } catch {
    // Must be a `blob:` or `data:` URL (e.g. `blob:http://site.com/etc/etc`), we cannot
    // infer anything from them.
  }

  if (!(typeof window == 'object' || typeof WorkerGlobalScope != 'undefined')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = async (url) => {
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use XHR on webview if URL is a file URL.
    if (isFileURI(url)) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            resolve(xhr.response);
            return;
          }
          reject(xhr.status);
        };
        xhr.onerror = reject;
        xhr.send(null);
      });
    }
    var response = await fetch(url, { credentials: 'same-origin' });
    if (response.ok) {
      return response.arrayBuffer();
    }
    throw new Error(response.status + ' : ' + response.url);
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = console.log.bind(console);
var err = console.error.bind(console);

var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

// perform assertions in shell.js after we set up out() and err(), as otherwise
// if an assertion fails it cannot print the message

assert(!ENVIRONMENT_IS_SHELL, 'shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.');

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;

if (typeof WebAssembly != 'object') {
  err('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/* BigInt64Array type is not correctly defined in closure
/** not-@type {!BigInt64Array} */
  HEAP64,
/* BigUint64Array type is not correctly defined in closure
/** not-t@type {!BigUint64Array} */
  HEAPU64,
/** @type {!Float64Array} */
  HEAPF64;

var runtimeInitialized = false;

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');

// include: runtime_shared.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
// include: runtime_debug.js
var runtimeDebug = true; // Switch to false at runtime to disable logging at the right times

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(...args) {
  if (!runtimeDebug && typeof runtimeDebug != 'undefined') return;
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn(...args);
}

// Endianness check
(() => {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

function consumedModuleProp(prop) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      set() {
        abort(`Attempt to set \`Module.${prop}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);

      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

/**
 * Intercept access to a global symbol.  This enables us to give informative
 * warnings/errors when folks attempt to use symbols they did not include in
 * their build, or no symbols that no longer exist.
 */
function hookGlobalSymbolAccess(sym, func) {
  if (typeof globalThis != 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        func();
        return undefined;
      }
    });
  }
}

function missingGlobal(sym, msg) {
  hookGlobalSymbolAccess(sym, () => {
    warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
  });
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  hookGlobalSymbolAccess(sym, () => {
    // Can't `abort()` here because it would break code that does runtime
    // checks.  e.g. `if (typeof SDL === 'undefined')`.
    var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
    // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
    // library.js, which means $name for a JS name with no prefix, or name
    // for a JS name like _name.
    var librarySymbol = sym;
    if (!librarySymbol.startsWith('_')) {
      librarySymbol = '$' + sym;
    }
    msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
    if (isExportedByForceFilesystem(sym)) {
      msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
    }
    warnOnce(msg);
  });

  // Any symbol that is not included from the JS library is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// end include: runtime_debug.js
// include: memoryprofiler.js
// end include: memoryprofiler.js


function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}

// end include: runtime_shared.js
assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  consumedModuleProp('preRun');
  // Begin ATPRERUNS hooks
  callRuntimeCallbacks(onPreRuns);
  // End ATPRERUNS hooks
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  // Begin ATINITS hooks
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
TTY.init();
  // End ATINITS hooks

  wasmExports['__wasm_call_ctors']();

  // Begin ATPOSTCTORS hooks
  FS.ignorePermissions = false;
  // End ATPOSTCTORS hooks
}

function preMain() {
  checkStackCookie();
  // No ATMAINS hooks
}

function postRun() {
  checkStackCookie();
   // PThreads reuse the runtime from the main thread.

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  consumedModuleProp('postRun');

  // Begin ATPOSTRUNS hooks
  callRuntimeCallbacks(onPostRuns);
  // End ATPOSTRUNS hooks
}

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};
var runDependencyWatcher = null;

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  Module['onAbort']?.(what);

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  if (what.indexOf('RuntimeError: unreachable') >= 0) {
    what += '. "unreachable" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)';
  }

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

function createExportWrapper(name, nargs) {
  return (...args) => {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
    assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
    return f(...args);
  };
}

var wasmBinaryFile;

function findWasmBinary() {
    return locateFile('re-plants-vs-zombies.wasm');
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {
      // Fall back to getBinarySync below;
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && typeof WebAssembly.instantiateStreaming == 'function'
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      && !isFileURI(binaryFile)
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      && !ENVIRONMENT_IS_NODE
     ) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err('falling back to ArrayBuffer instantiation');
      // fall back of instantiateArrayBuffer below
    };
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  // instrumenting imports is used in asyncify in two ways: to add assertions
  // that check for proper import use, and for ASYNCIFY=2 we use them to set up
  // the Promise API on the import side.
  Asyncify.instrumentWasmImports(wasmImports);
  // prepare imports
  return {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    wasmExports = Asyncify.instrumentWasmExports(wasmExports);

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, 'memory not found in wasm exports');
    updateMemoryViews();

    wasmTable = wasmExports['__indirect_function_table'];
    
    assert(wasmTable, 'table not found in wasm exports');

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    return receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      try {
        Module['instantiateWasm'](info, (mod, inst) => {
          resolve(receiveInstance(mod, inst));
        });
      } catch(e) {
        err(`Module.instantiateWasm callback failed with error: ${e}`);
        reject(e);
      }
    });
  }

  wasmBinaryFile ??= findWasmBinary();
    var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
    var exports = receiveInstantiationResult(result);
    return exports;
}

// end include: preamble.js

// Begin JS library code


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.push(cb);

  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.push(cb);


  var dynCallLegacy = (sig, ptr, args) => {
      sig = sig.replace(/p/g, 'i')
      assert(('dynCall_' + sig) in Module, `bad function pointer type - dynCall function not found for sig '${sig}'`);
      if (args?.length) {
        // j (64-bit integer) is fine, and is implemented as a BigInt. Without
        // legalization, the number of parameters should match (j is not expanded
        // into two i's).
        assert(args.length === sig.length - 1);
      } else {
        assert(sig.length == 1);
      }
      var f = Module['dynCall_' + sig];
      return f(ptr, ...args);
    };
  var dynCall = (sig, ptr, args = [], promising = false) => {
      assert(!promising, 'async dynCall is not supported in this mode')
      var rtn = dynCallLegacy(sig, ptr, args);
  
      function convert(rtn) {
        return rtn;
      }
  
      return convert(rtn);
    };

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP64[((ptr)>>3)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': HEAP64[((ptr)>>3)] = BigInt(value); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  var warnOnce = (text) => {
      warnOnce.shown ||= {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    };

  var _XOpenDisplay = (name) => 1;

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined/NaN means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      // When using conditional TextDecoder, skip it for short strings as the overhead of the native call is not worth it.
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var ___assert_fail = (condition, filename, line, func) =>
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);

  class ExceptionInfo {
      // excPtr - Thrown object pointer to wrap. Metadata pointer is calculated from it.
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }
  
      set_type(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      }
  
      get_type() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      }
  
      set_destructor(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      }
  
      get_destructor() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      }
  
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[(this.ptr)+(12)] = caught;
      }
  
      get_caught() {
        return HEAP8[(this.ptr)+(12)] != 0;
      }
  
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(this.ptr)+(13)] = rethrown;
      }
  
      get_rethrown() {
        return HEAP8[(this.ptr)+(13)] != 0;
      }
  
      // Initialize native structure fields. Should be called once after allocated.
      init(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
  
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      }
  
      get_adjusted_ptr() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      }
    }
  
  var exceptionLast = 0;
  
  var uncaughtExceptionCount = 0;
  var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      assert(false, 'Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.');
    };

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.slice(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.slice(0, -1);
        }
        return root + dir;
      },
  basename:(path) => path && path.match(/([^\/]+|\/)\/*$/)[1],
  join:(...paths) => PATH.normalize(paths.join('/')),
  join2:(l, r) => PATH.normalize(l + '/' + r),
  };
  
  var initRandomFill = () => {
      // This block is not needed on v19+ since crypto.getRandomValues is builtin
      if (ENVIRONMENT_IS_NODE) {
        var nodeCrypto = require('crypto');
        return (view) => nodeCrypto.randomFillSync(view);
      }
  
      return (view) => crypto.getRandomValues(view);
    };
  var randomFill = (view) => {
      // Lazily init on the first invocation.
      (randomFill = initRandomFill())(view);
    };
  
  
  
  var PATH_FS = {
  resolve:(...args) => {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? args[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },
  relative:(from, to) => {
        from = PATH_FS.resolve(from).slice(1);
        to = PATH_FS.resolve(to).slice(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
  };
  
  
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  var intArrayFromString = (stringy, dontAddNull, length) => {
      var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    };
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
  
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */
          var fd = process.stdin.fd;
  
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch(e) {
            // Cross-platform differences: on Windows, reading EOF throws an
            // exception, but on other OSes, reading EOF returns 0. Uniformize
            // behavior by treating the EOF exception to return 0.
            if (e.toString().includes('EOF')) bytesRead = 0;
            else throw e;
          }
  
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          }
        } else
        if (typeof window != 'undefined' &&
          typeof window.prompt == 'function') {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else
        {}
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  },
  };
  
  
  var mmapAlloc = (size) => {
      abort('internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported');
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16895, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table ||= {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        };
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.atime = node.mtime = node.ctime = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.atime = parent.mtime = parent.ctime = node.atime;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          for (const key of ["mode", "atime", "mtime", "ctime"]) {
            if (attr[key] != null) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          throw new FS.ErrnoError(44);
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {}
          if (new_node) {
            if (FS.isDir(old_node.mode)) {
              // if we're overwriting a directory at new_name, make sure it's empty.
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
            FS.hashRemoveNode(new_node);
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  readdir(node) {
          return ['.', '..', ...Object.keys(node.contents)];
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0o777 | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            if (contents) {
              // Try to avoid unnecessary slices.
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              HEAP8.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  var asyncLoad = async (url) => {
      var arrayBuffer = await readAsync(url);
      assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
      return new Uint8Array(arrayBuffer);
    };
  asyncLoad.isAsync = true;
  
  
  var FS_createDataFile = (...args) => FS.createDataFile(...args);
  
  var preloadPlugins = [];
  var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin['canHandle'](fullname)) {
          plugin['handle'](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      function processData(byteArray) {
        function finish(byteArray) {
          preFinish?.();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
          }
          onload?.();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          onerror?.();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url).then(processData, onerror);
      } else {
        processData(url);
      }
    };
  
  var FS_modeStringToFlags = (str) => {
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  
  
  
  var strError = (errno) => UTF8ToString(_strerror(errno));
  
  var ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  filesystems:null,
  syncFSRequests:0,
  readFiles:{
  },
  ErrnoError:class extends Error {
        name = 'ErrnoError';
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        constructor(errno) {
          super(runtimeInitialized ? strError(errno) : '');
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
        }
      },
  FSStream:class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return (this.flags & 1024);
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
  FSNode:class {
        node_ops = {};
        stream_ops = {};
        readMode = 292 | 73;
        writeMode = 146;
        mounted = null;
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;  // root node sets parent to itself
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.rdev = rdev;
          this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
  lookupPath(path, opts = {}) {
        if (!path) {
          throw new FS.ErrnoError(44);
        }
        opts.follow_mount ??= true
  
        if (!PATH.isAbs(path)) {
          path = FS.cwd() + '/' + path;
        }
  
        // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
        linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
          // split the absolute path
          var parts = path.split('/').filter((p) => !!p);
  
          // start at the root
          var current = FS.root;
          var current_path = '/';
  
          for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length-1);
            if (islast && opts.parent) {
              // stop resolving
              break;
            }
  
            if (parts[i] === '.') {
              continue;
            }
  
            if (parts[i] === '..') {
              current_path = PATH.dirname(current_path);
              if (FS.isRoot(current)) {
                path = current_path + '/' + parts.slice(i + 1).join('/');
                continue linkloop;
              } else {
                current = current.parent;
              }
              continue;
            }
  
            current_path = PATH.join2(current_path, parts[i]);
            try {
              current = FS.lookupNode(current, parts[i]);
            } catch (e) {
              // if noent_okay is true, suppress a ENOENT in the last component
              // and return an object with an undefined node. This is needed for
              // resolving symlinks in the path when creating a file.
              if ((e?.errno === 44) && islast && opts.noent_okay) {
                return { path: current_path };
              }
              throw e;
            }
  
            // jump to the mount's root node if this is a mountpoint
            if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
              current = current.mounted.root;
            }
  
            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (FS.isLink(current.mode) && (!islast || opts.follow)) {
              if (!current.node_ops.readlink) {
                throw new FS.ErrnoError(52);
              }
              var link = current.node_ops.readlink(current);
              if (!PATH.isAbs(link)) {
                link = PATH.dirname(current_path) + '/' + link;
              }
              path = link + '/' + parts.slice(i + 1).join('/');
              continue linkloop;
            }
          }
          return { path: current_path, node: current };
        }
        throw new FS.ErrnoError(32);
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        assert(typeof parent == 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' // opening for write
              || (flags & (512 | 64))) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
  checkOpExists(op, err) {
        if (!op) {
          throw new FS.ErrnoError(err);
        }
        return op;
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
        assert(fd >= -1);
  
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  dupStream(origStream, fd = -1) {
        var stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
  doSetAttr(stream, node, attr) {
        var setattr = stream?.stream_ops.setattr;
        var arg = setattr ? stream : node;
        setattr ??= node.node_ops.setattr;
        FS.checkOpExists(setattr, 63)
        setattr(arg, attr);
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          stream.stream_ops.open?.(stream);
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push(...m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
  mount(type, opts, mountpoint) {
        if (typeof type == 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name) {
          throw new FS.ErrnoError(28);
        }
        if (name === '.' || name === '..') {
          throw new FS.ErrnoError(20);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  statfs(path) {
        return FS.statfsNode(FS.lookupPath(path, {follow: true}).node);
      },
  statfsStream(stream) {
        // We keep a separate statfsStream function because noderawfs overrides
        // it. In noderawfs, stream.node is sometimes null. Instead, we need to
        // look at stream.path.
        return FS.statfsNode(stream.node);
      },
  statfsNode(node) {
        // NOTE: None of the defaults here are true. We're just returning safe and
        //       sane values. Currently nodefs and rawfs replace these defaults,
        //       other file systems leave them alone.
        var rtn = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: FS.nextInode,
          ffree: FS.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
  
        if (node.node_ops.statfs) {
          Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
        }
        return rtn;
      },
  create(path, mode = 0o666) {
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode = 0o777) {
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var dir of dirs) {
          if (!dir) continue;
          if (d || PATH.isAbs(path)) d += '/';
          d += dir;
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 0o666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existent directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          // update old node (we do this here to avoid each backend
          // needing to)
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
        return readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return link.node_ops.readlink(link);
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
        return getattr(node);
      },
  fstat(fd) {
        var stream = FS.getStreamChecked(fd);
        var node = stream.node;
        var getattr = stream.stream_ops.getattr;
        var arg = getattr ? stream : node;
        getattr ??= node.node_ops.getattr;
        FS.checkOpExists(getattr, 63)
        return getattr(arg);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  doChmod(stream, node, mode, dontFollow) {
        FS.doSetAttr(stream, node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          ctime: Date.now(),
          dontFollow
        });
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChmod(null, node, mode, dontFollow);
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.doChmod(stream, stream.node, mode, false);
      },
  doChown(stream, node, dontFollow) {
        FS.doSetAttr(stream, node, {
          timestamp: Date.now(),
          dontFollow
          // we ignore the uid / gid for now
        });
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChown(null, node, dontFollow);
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.doChown(stream, stream.node, false);
      },
  doTruncate(stream, node, len) {
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.doSetAttr(stream, node, {
          size: len,
          timestamp: Date.now()
        });
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doTruncate(null, node, len);
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if (len < 0 || (stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.doTruncate(stream, stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
        setattr(node, {
          atime: atime,
          mtime: mtime
        });
      },
  open(path, flags, mode = 0o666) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        var isDirPath;
        if (typeof path == 'object') {
          node = path;
        } else {
          isDirPath = path.endsWith("/");
          // noent_okay makes it so that if the final component of the path
          // doesn't exist, lookupPath returns `node: undefined`. `path` will be
          // updated to point to the target of all symlinks.
          var lookup = FS.lookupPath(path, {
            follow: !(flags & 131072),
            noent_okay: true
          });
          node = lookup.node;
          path = lookup.path;
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else if (isDirPath) {
            throw new FS.ErrnoError(31);
          } else {
            // node doesn't exist, try to create it
            // Ignore the permission bits here to ensure we can `open` this new
            // file below. We use chmod below the apply the permissions once the
            // file is open.
            node = FS.mknod(path, mode | 0o777, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (created) {
          FS.chmod(node, mode & 0o777);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        if (!length) {
          throw new FS.ErrnoError(28);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
          llseek: () => 0,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomFill(randomBuffer);
            randomLeft = randomBuffer.byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16895, 73);
            node.stream_ops = {
              llseek: MEMFS.stream_ops.llseek,
            };
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                  id: fd + 1,
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              },
              readdir() {
                return Array.from(FS.streams.entries())
                  .filter(([k, v]) => v)
                  .map(([k, v]) => k.toString());
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams(input, output, error) {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (input) {
          FS.createDevice('/dev', 'stdin', input);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (output) {
          FS.createDevice('/dev', 'stdout', null, output);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (error) {
          FS.createDevice('/dev', 'stderr', null, error);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
  staticInit() {
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        assert(!FS.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.initialized = true;
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        input ??= Module['stdin'];
        output ??= Module['stdout'];
        error ??= Module['stderr'];
  
        FS.createStandardStreams(input, output, error);
      },
  quit() {
        FS.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (var stream of FS.streams) {
          if (stream) {
            FS.close(stream);
          }
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        FS.createDevice.major ??= 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output?.buffer?.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else { // Command-line.
          try {
            obj.contents = readBinary(obj.url);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array).
        // Actual getting is abstracted away for eventual reuse.
        class LazyUint8Array {
          lengthKnown = false;
          chunks = []; // Loaded chunks. Index is the chunk number
          get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = (idx / this.chunkSize)|0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
            var chunkSize = 1024*1024; // Chunk size in bytes
  
            if (!hasByteServing) chunkSize = datalength;
  
            // Function to get a range from the remote URL.
            var doXHR = (from, to) => {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
  
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              if (xhr.response !== undefined) {
                return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
              }
              return intArrayFromString(xhr.responseText || '', true);
            };
            var lazyArray = this;
            lazyArray.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
              return lazyArray.chunks[chunkNum];
            });
  
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
  
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
  
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  absolutePath() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
  createFolder() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
  createLink() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
  joinPath() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
  mmapAlloc() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },
  standardizePath() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      },
  };
  
  var SYSCALLS = {
  DEFAULT_POLLMASK:5,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return dir + '/' + path;
      },
  writeStat(buf, stat) {
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAP32[(((buf)+(12))>>2)] = stat.uid;
        HEAP32[(((buf)+(16))>>2)] = stat.gid;
        HEAP32[(((buf)+(20))>>2)] = stat.rdev;
        HEAP64[(((buf)+(24))>>3)] = BigInt(stat.size);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        HEAP64[(((buf)+(40))>>3)] = BigInt(Math.floor(atime / 1000));
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(56))>>3)] = BigInt(Math.floor(mtime / 1000));
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(72))>>3)] = BigInt(Math.floor(ctime / 1000));
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(88))>>3)] = BigInt(stat.ino);
        return 0;
      },
  writeStatFs(buf, stats) {
        HEAP32[(((buf)+(4))>>2)] = stats.bsize;
        HEAP32[(((buf)+(40))>>2)] = stats.bsize;
        HEAP32[(((buf)+(8))>>2)] = stats.blocks;
        HEAP32[(((buf)+(12))>>2)] = stats.bfree;
        HEAP32[(((buf)+(16))>>2)] = stats.bavail;
        HEAP32[(((buf)+(20))>>2)] = stats.files;
        HEAP32[(((buf)+(24))>>2)] = stats.ffree;
        HEAP32[(((buf)+(28))>>2)] = stats.fsid;
        HEAP32[(((buf)+(44))>>2)] = stats.flags;  // ST_NOSUID
        HEAP32[(((buf)+(36))>>2)] = stats.namelen;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_chdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  /** @suppress {duplicate } */
  var syscallGetVarargI = () => {
      assert(SYSCALLS.varargs != undefined);
      // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
      var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
      SYSCALLS.varargs += 4;
      return ret;
    };
  var syscallGetVarargP = syscallGetVarargI;
  
  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = syscallGetVarargI();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.dupStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = syscallGetVarargI();
          stream.flags |= arg;
          return 0;
        }
        case 12: {
          var arg = syscallGetVarargP();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
          // Pretend that the locking is successful. These are process-level locks,
          // and Emscripten programs are a single process. If we supported linking a
          // filesystem between programs, we'd need to do more here.
          // See https://github.com/emscripten-core/emscripten/issues/23697
          return 0;
      }
      return -28;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstat64(fd, buf) {
  try {
  
      return SYSCALLS.writeStat(buf, FS.fstat(fd));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  function ___syscall_getcwd(buf, size) {
  try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = syscallGetVarargP();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(argp + i)+(17)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = syscallGetVarargP();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(argp + i)+(17)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = syscallGetVarargP();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = syscallGetVarargP();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = syscallGetVarargP();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.writeStat(buf, FS.lstat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_mkdirat(dirfd, path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      FS.mkdir(path, mode, 0);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~6400);
      assert(!flags, `unknown flags in __syscall_newfstatat: ${flags}`);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.writeStat(buf, nofollow ? FS.lstat(path) : FS.stat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? syscallGetVarargI() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.writeStat(buf, FS.stat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (!flags) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        return -28;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var __abort_js = () =>
      abort('native code called abort()');

  var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };

  var isLeapYear = (year) => year%4 === 0 && (year%100 !== 0 || year%400 === 0);
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    };
  
  var INT53_MAX = 9007199254740992;
  
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = (num) => (num < INT53_MIN || num > INT53_MAX) ? NaN : Number(num);
  function __localtime_js(time, tmPtr) {
    time = bigintToI53Checked(time);
  
  
      var date = new Date(time*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    ;
  }

  
  var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for
      // daylight savings.  This code uses the fact that getTimezoneOffset returns
      // a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it
      // compares whether the output of the given date the same (Standard) or less
      // (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      var extractZone = (timezoneOffset) => {
        // Why inverse sign?
        // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
        var sign = timezoneOffset >= 0 ? "-" : "+";
  
        var absOffset = Math.abs(timezoneOffset)
        var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        var minutes = String(absOffset % 60).padStart(2, "0");
  
        return `UTC${sign}${hours}${minutes}`;
      }
  
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      assert(winterName);
      assert(summerName);
      assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
      assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };

  var _emscripten_get_now = () => performance.now();
  
  var _emscripten_date_now = () => Date.now();
  
  var nowIsMonotonic = 1;
  
  var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
  
  function _clock_time_get(clk_id, ignored_precision, ptime) {
    ignored_precision = bigintToI53Checked(ignored_precision);
  
  
      if (!checkWasiClock(clk_id)) {
        return 28;
      }
      var now;
      // all wasi clocks but realtime are monotonic
      if (clk_id === 0) {
        now = _emscripten_date_now();
      } else if (nowIsMonotonic) {
        now = _emscripten_get_now();
      } else {
        return 52;
      }
      // "now" is in ms, and wasi times are in ns.
      var nsec = Math.round(now * 1000 * 1000);
      HEAP64[((ptime)>>3)] = BigInt(nsec);
      return 0;
    ;
  }

  var handleException = (e) => {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      checkStackCookie();
      if (e instanceof WebAssembly.RuntimeError) {
        if (_emscripten_stack_get_current() <= 0) {
          err('Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 65536)');
        }
      }
      quit_(1, e);
    };
  
  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module['onExit']?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
  
  
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  var exitJS = (status, implicit) => {
      EXITSTATUS = status;
  
      checkUnflushedContent();
  
      // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
      if (keepRuntimeAlive() && !implicit) {
        var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
        err(msg);
      }
  
      _proc_exit(status);
    };
  var _exit = exitJS;
  
  
  var maybeExit = () => {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    };
  var callUserCallback = (func) => {
      if (ABORT) {
        err('user callback triggered after runtime exited or application aborted.  Ignoring.');
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    };
  
  /** @param {number=} timeout */
  var safeSetTimeout = (func, timeout) => {
      
      return setTimeout(() => {
        
        callUserCallback(func);
      }, timeout);
    };
  
  
  
  var Browser = {
  useWebGL:false,
  isFullscreen:false,
  pointerLock:false,
  moduleContextCreatedCallbacks:[],
  workers:[],
  preloadedImages:{
  },
  preloadedAudios:{
  },
  getCanvas:() => Module['canvas'],
  init() {
        if (Browser.initted) return;
        Browser.initted = true;
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module['noImageDecoding'] && /\.(jpg|jpeg|png|bmp|webp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          if (b.size !== byteArray.length) { // Safari bug #118630
            // Safari's Blob can only take an ArrayBuffer
            b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
          }
          var url = URL.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = () => {
            assert(img.complete, `Image ${name} could not be decoded`);
            var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Browser.preloadedImages[name] = canvas;
            URL.revokeObjectURL(url);
            onload?.(byteArray);
          };
          img.onerror = (event) => {
            err(`Image ${url} could not be decoded`);
            onerror?.();
          };
          img.src = url;
        };
        preloadPlugins.push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module['noAudioDecoding'] && name.slice(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Browser.preloadedAudios[name] = audio;
            onload?.(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Browser.preloadedAudios[name] = new Audio(); // empty shim
            onerror?.();
          }
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          var url = URL.createObjectURL(b); // XXX we never revoke this!
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var audio = new Audio();
          audio.addEventListener('canplaythrough', () => finish(audio), false); // use addEventListener due to chromium bug 124926
          audio.onerror = function audio_onerror(event) {
            if (done) return;
            err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);
            function encode64(data) {
              var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
              var PAD = '=';
              var ret = '';
              var leftchar = 0;
              var leftbits = 0;
              for (var i = 0; i < data.length; i++) {
                leftchar = (leftchar << 8) | data[i];
                leftbits += 8;
                while (leftbits >= 6) {
                  var curr = (leftchar >> (leftbits-6)) & 0x3f;
                  leftbits -= 6;
                  ret += BASE[curr];
                }
              }
              if (leftbits == 2) {
                ret += BASE[(leftchar&3) << 4];
                ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar&0xf) << 2];
                ret += PAD;
              }
              return ret;
            }
            audio.src = 'data:audio/x-' + name.slice(-3) + ';base64,' + encode64(byteArray);
            finish(audio); // we don't wait for confirmation this worked - but it's worth trying
          };
          audio.src = url;
          // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
          safeSetTimeout(() => {
            finish(audio); // try to use it even though it is not necessarily ready to play
          }, 10000);
        };
        preloadPlugins.push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          var canvas = Browser.getCanvas();
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas ||
                                document['msPointerLockElement'] === canvas;
        }
        var canvas = Browser.getCanvas();
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      (() => {});
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   (() => {}); // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", (ev) => {
              if (!Browser.pointerLock && Browser.getCanvas().requestPointerLock) {
                Browser.getCanvas().requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },
  createContext(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module['ctx'] && canvas == Browser.getCanvas()) return Module['ctx']; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: (typeof WebGL2RenderingContext != 'undefined') ? 2 : 1,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL != 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx == 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
          Module['ctx'] = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Browser.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach((callback) => callback());
          Browser.init();
        }
        return ctx;
      },
  fullscreenHandlersInstalled:false,
  lockPointer:undefined,
  resizeCanvas:undefined,
  requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Browser.getCanvas();
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          Module['onFullScreen']?.(Browser.isFullscreen);
          Module['onFullscreen']?.(Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
  
        canvasContainer.requestFullscreen();
      },
  requestFullScreen() {
        abort('Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)');
      },
  exitFullscreen() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (() => {});
        CFS.apply(document, []);
        return true;
      },
  safeSetTimeout(func, timeout) {
        // Legacy function, this is used by the SDL2 port so we need to keep it
        // around at least until that is updated.
        // See https://github.com/libsdl-org/SDL/pull/6304
        return safeSetTimeout(func, timeout);
      },
  getMimetype(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.slice(name.lastIndexOf('.')+1)];
      },
  getUserMedia(func) {
        window.getUserMedia ||= navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        window.getUserMedia(func);
      },
  getMovementX(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },
  getMovementY(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },
  getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },
  mouseX:0,
  mouseY:0,
  mouseMovementX:0,
  mouseMovementY:0,
  touches:{
  },
  lastTouches:{
  },
  calculateMouseCoords(pageX, pageY) {
        // Calculate the movement based on the changes
        // in the coordinates.
        var canvas = Browser.getCanvas();
        var rect = canvas.getBoundingClientRect();
  
        // Neither .scrollX or .pageXOffset are defined in a spec, but
        // we prefer .scrollX because it is currently in a spec draft.
        // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
        var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
        var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
        // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
        // and we have no viable fallback.
        assert((typeof scrollX != 'undefined') && (typeof scrollY != 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
        var adjustedX = pageX - (scrollX + rect.left);
        var adjustedY = pageY - (scrollY + rect.top);
  
        // the canvas might be CSS-scaled compared to its backbuffer;
        // SDL-using content will want mouse coordinates in terms
        // of backbuffer units.
        adjustedX = adjustedX * (canvas.width / rect.width);
        adjustedY = adjustedY * (canvas.height / rect.height);
  
        return { x: adjustedX, y: adjustedY };
      },
  setMouseCoords(pageX, pageY) {
        const {x, y} = Browser.calculateMouseCoords(pageX, pageY);
        Browser.mouseMovementX = x - Browser.mouseX;
        Browser.mouseMovementY = y - Browser.mouseY;
        Browser.mouseX = x;
        Browser.mouseY = y;
      },
  calculateMouseEvent(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // add the mouse delta to the current absolute mouse position
          Browser.mouseX += Browser.mouseMovementX;
          Browser.mouseY += Browser.mouseMovementY;
        } else {
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              last ||= coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          Browser.setMouseCoords(event.pageX, event.pageY);
        }
      },
  resizeListeners:[],
  updateResizeListeners() {
        var canvas = Browser.getCanvas();
        Browser.resizeListeners.forEach((listener) => listener(canvas.width, canvas.height));
      },
  setCanvasSize(width, height, noUpdates) {
        var canvas = Browser.getCanvas();
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
  windowedWidth:0,
  windowedHeight:0,
  setFullscreenCanvasSize() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  setWindowedCanvasSize() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      },
  };
  
  var EGL = {
  errorCode:12288,
  defaultDisplayInitialized:false,
  currentContext:0,
  currentReadSurface:0,
  currentDrawSurface:0,
  contextAttributes:{
  alpha:false,
  depth:false,
  stencil:false,
  antialias:false,
  },
  stringCache:{
  },
  setErrorCode(code) {
        EGL.errorCode = code;
      },
  chooseConfig(display, attribList, config, config_size, numConfigs) {
        if (display != 62000) {
          EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
          return 0;
        }
  
        if (attribList) {
          // read attribList if it is non-null
          for (;;) {
            var param = HEAP32[((attribList)>>2)];
            if (param == 0x3021 /*EGL_ALPHA_SIZE*/) {
              var alphaSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.alpha = (alphaSize > 0);
            } else if (param == 0x3025 /*EGL_DEPTH_SIZE*/) {
              var depthSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.depth = (depthSize > 0);
            } else if (param == 0x3026 /*EGL_STENCIL_SIZE*/) {
              var stencilSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.stencil = (stencilSize > 0);
            } else if (param == 0x3031 /*EGL_SAMPLES*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples > 0);
            } else if (param == 0x3032 /*EGL_SAMPLE_BUFFERS*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples == 1);
            } else if (param == 0x3100 /*EGL_CONTEXT_PRIORITY_LEVEL_IMG*/) {
              var requestedPriority = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.lowLatency = (requestedPriority != 0x3103 /*EGL_CONTEXT_PRIORITY_LOW_IMG*/);
            } else if (param == 0x3038 /*EGL_NONE*/) {
                break;
            }
            attribList += 8;
          }
        }
  
        if ((!config || !config_size) && !numConfigs) {
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
        }
        if (numConfigs) {
          HEAP32[((numConfigs)>>2)] = 1; // Total number of supported configs: 1.
        }
        if (config && config_size > 0) {
          HEAPU32[((config)>>2)] = 62002;
        }
  
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      },
  };
  var _eglBindAPI = (api) => {
      if (api == 0x30A0 /* EGL_OPENGL_ES_API */) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }
      // if (api == 0x30A1 /* EGL_OPENVG_API */ || api == 0x30A2 /* EGL_OPENGL_API */) {
      EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
      return 0;
    };

  var _eglChooseConfig = (display, attrib_list, configs, config_size, numConfigs) =>
      EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);

  var GLctx;
  
  var webgl_enable_ANGLE_instanced_arrays = (ctx) => {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      // Because this extension is a core function in WebGL 2, assign the extension entry points in place of
      // where the core functions will reside in WebGL 2. This way the calling code can call these without
      // having to dynamically branch depending if running against WebGL 1 or WebGL 2.
      if (ext) {
        ctx['vertexAttribDivisor'] = (index, divisor) => ext['vertexAttribDivisorANGLE'](index, divisor);
        ctx['drawArraysInstanced'] = (mode, first, count, primcount) => ext['drawArraysInstancedANGLE'](mode, first, count, primcount);
        ctx['drawElementsInstanced'] = (mode, count, type, indices, primcount) => ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount);
        return 1;
      }
    };
  
  var webgl_enable_OES_vertex_array_object = (ctx) => {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = () => ext['createVertexArrayOES']();
        ctx['deleteVertexArray'] = (vao) => ext['deleteVertexArrayOES'](vao);
        ctx['bindVertexArray'] = (vao) => ext['bindVertexArrayOES'](vao);
        ctx['isVertexArray'] = (vao) => ext['isVertexArrayOES'](vao);
        return 1;
      }
    };
  
  var webgl_enable_WEBGL_draw_buffers = (ctx) => {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = (n, bufs) => ext['drawBuffersWEBGL'](n, bufs);
        return 1;
      }
    };
  
  var webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = (ctx) =>
      // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
      !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
  
  var webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = (ctx) => {
      // Closure is expected to be allowed to minify the '.mdibvbi' property, so not accessing it quoted.
      return !!(ctx.mdibvbi = ctx.getExtension('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
    };
  
  var webgl_enable_EXT_polygon_offset_clamp = (ctx) =>
      !!(ctx.extPolygonOffsetClamp = ctx.getExtension('EXT_polygon_offset_clamp'));
  
  var webgl_enable_EXT_clip_control = (ctx) =>
      !!(ctx.extClipControl = ctx.getExtension('EXT_clip_control'));
  
  var webgl_enable_WEBGL_polygon_mode = (ctx) =>
      !!(ctx.webglPolygonMode = ctx.getExtension('WEBGL_polygon_mode'));
  
  var webgl_enable_WEBGL_multi_draw = (ctx) =>
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
  
  var getEmscriptenSupportedExtensions = (ctx) => {
      // Restrict the list of advertised extensions to those that we actually
      // support.
      var supportedExtensions = [
        // WebGL 1 extensions
        'ANGLE_instanced_arrays',
        'EXT_blend_minmax',
        'EXT_disjoint_timer_query',
        'EXT_frag_depth',
        'EXT_shader_texture_lod',
        'EXT_sRGB',
        'OES_element_index_uint',
        'OES_fbo_render_mipmap',
        'OES_standard_derivatives',
        'OES_texture_float',
        'OES_texture_half_float',
        'OES_texture_half_float_linear',
        'OES_vertex_array_object',
        'WEBGL_color_buffer_float',
        'WEBGL_depth_texture',
        'WEBGL_draw_buffers',
        // WebGL 2 extensions
        'EXT_color_buffer_float',
        'EXT_conservative_depth',
        'EXT_disjoint_timer_query_webgl2',
        'EXT_texture_norm16',
        'NV_shader_noperspective_interpolation',
        'WEBGL_clip_cull_distance',
        // WebGL 1 and WebGL 2 extensions
        'EXT_clip_control',
        'EXT_color_buffer_half_float',
        'EXT_depth_clamp',
        'EXT_float_blend',
        'EXT_polygon_offset_clamp',
        'EXT_texture_compression_bptc',
        'EXT_texture_compression_rgtc',
        'EXT_texture_filter_anisotropic',
        'KHR_parallel_shader_compile',
        'OES_texture_float_linear',
        'WEBGL_blend_func_extended',
        'WEBGL_compressed_texture_astc',
        'WEBGL_compressed_texture_etc',
        'WEBGL_compressed_texture_etc1',
        'WEBGL_compressed_texture_s3tc',
        'WEBGL_compressed_texture_s3tc_srgb',
        'WEBGL_debug_renderer_info',
        'WEBGL_debug_shaders',
        'WEBGL_lose_context',
        'WEBGL_multi_draw',
        'WEBGL_polygon_mode'
      ];
      // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
      return (ctx.getSupportedExtensions() || []).filter(ext => supportedExtensions.includes(ext));
    };
  
  
  var GL = {
  counter:1,
  buffers:[],
  programs:[],
  framebuffers:[],
  renderbuffers:[],
  textures:[],
  shaders:[],
  vaos:[],
  contexts:[],
  offscreenCanvases:{
  },
  queries:[],
  samplers:[],
  transformFeedbacks:[],
  syncs:[],
  stringCache:{
  },
  stringiCache:{
  },
  unpackAlignment:4,
  unpackRowLength:0,
  recordError:(errorCode) => {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },
  getNewId:(table) => {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },
  genObject:(n, buffers, createFunction, objectTable
        ) => {
        for (var i = 0; i < n; i++) {
          var buffer = GLctx[createFunction]();
          var id = buffer && GL.getNewId(objectTable);
          if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer;
          } else {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          }
          HEAP32[(((buffers)+(i*4))>>2)] = id;
        }
      },
  getSource:(shader, count, string, length) => {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAPU32[(((length)+(i*4))>>2)] : undefined;
          source += UTF8ToString(HEAPU32[(((string)+(i*4))>>2)], len);
        }
        return source;
      },
  createContext:(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) => {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL
        // context on a canvas, calling .getContext() will always return that
        // context independent of which 'webgl' or 'webgl2'
        // context version was passed. See:
        //   https://bugs.webkit.org/show_bug.cgi?id=222758
        // and:
        //   https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari
        // version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
          function fixedGetContext(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
          canvas.getContext = fixedGetContext;
        }
  
        var ctx =
          (webGLContextAttributes.majorVersion > 1)
          ?
            canvas.getContext("webgl2", webGLContextAttributes)
          :
          canvas.getContext("webgl", webGLContextAttributes);
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },
  registerContext:(ctx, webGLContextAttributes) => {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context
        // given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        return handle;
      },
  makeContextCurrent:(contextHandle) => {
  
        // Active Emscripten GL layer context object.
        GL.currentContext = GL.contexts[contextHandle];
        // Active WebGL context object.
        Module['ctx'] = GLctx = GL.currentContext?.GLctx;
        return !(contextHandle && !GLctx);
      },
  getContext:(contextHandle) => {
        return GL.contexts[contextHandle];
      },
  deleteContext:(contextHandle) => {
        if (GL.currentContext === GL.contexts[contextHandle]) {
          GL.currentContext = null;
        }
        if (typeof JSEvents == 'object') {
          // Release all JS event handlers on the DOM element that the GL context is
          // associated with since the context is now deleted.
          JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        }
        // Make sure the canvas object no longer refers to the context object so
        // there are no GC surprises.
        if (GL.contexts[contextHandle]?.GLctx.canvas) {
          GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        }
        GL.contexts[contextHandle] = null;
      },
  initExtensions:(context) => {
        // If this function is called without a specific context object, init the
        // extensions of the currently active context.
        context ||= GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, ction GL interop
        // layer itself will need to know if they exist.
  
        // Extensions that are available in both WebGL 1 and WebGL 2
        webgl_enable_WEBGL_multi_draw(GLctx);
        webgl_enable_EXT_polygon_offset_clamp(GLctx);
        webgl_enable_EXT_clip_control(GLctx);
        webgl_enable_WEBGL_polygon_mode(GLctx);
        // Extensions that are only available in WebGL 1 (the calls will be no-ops
        // if called on a WebGL 2 context active)
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
        // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
        webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  
        // On WebGL 2, EXT_disjoint_timer_query is replaced with an alternative
        // that's based on core APIs, and exposes only the queryCounterEXT()
        // entrypoint.
        if (context.version >= 2) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
        }
  
        // However, Firefox exposes the WebGL 1 version on WebGL 2 as well and
        // thus we look for the WebGL 1 version again if the WebGL 2 version
        // isn't present. https://bugzilla.mozilla.org/show_bug.cgi?id=1328882
        if (context.version < 2 || !GLctx.disjointTimerQueryExt)
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        getEmscriptenSupportedExtensions(GLctx).forEach((ext) => {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders
          // are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      },
  };
  
  var _eglCreateContext = (display, config, hmm, contextAttribs) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
  
      // EGL 1.4 spec says default EGL_CONTEXT_CLIENT_VERSION is GLES1, but this is not supported by Emscripten.
      // So user must pass EGL_CONTEXT_CLIENT_VERSION == 2 to initialize EGL.
      var glesContextVersion = 1;
      for (;;) {
        var param = HEAP32[((contextAttribs)>>2)];
        if (param == 0x3098 /*EGL_CONTEXT_CLIENT_VERSION*/) {
          glesContextVersion = HEAP32[(((contextAttribs)+(4))>>2)];
        } else if (param == 0x3038 /*EGL_NONE*/) {
          break;
        } else {
          /* EGL1.4 specifies only EGL_CONTEXT_CLIENT_VERSION as supported attribute */
          EGL.setErrorCode(0x3004 /*EGL_BAD_ATTRIBUTE*/);
          return 0;
        }
        contextAttribs += 8;
      }
      if (glesContextVersion < 2 || glesContextVersion > 3) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0; /* EGL_NO_CONTEXT */
      }
  
      EGL.contextAttributes.majorVersion = glesContextVersion - 1; // WebGL 1 is GLES 2, WebGL2 is GLES3
      EGL.contextAttributes.minorVersion = 0;
  
      EGL.context = GL.createContext(Browser.getCanvas(), EGL.contextAttributes);
  
      if (EGL.context != 0) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
  
        // Run callbacks so that GL emulation works
        GL.makeContextCurrent(EGL.context);
        Browser.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach((callback) => callback());
  
        // Note: This function only creates a context, but it shall not make it active.
        GL.makeContextCurrent(null);
        return 62004;
      } else {
        EGL.setErrorCode(0x3009 /* EGL_BAD_MATCH */); // By the EGL 1.4 spec, an implementation that does not support GLES2 (WebGL in this case), this error code is set.
        return 0; /* EGL_NO_CONTEXT */
      }
    };

  var _eglCreateWindowSurface = (display, config, win, attrib_list) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      // TODO: Examine attrib_list! Parameters that can be present there are:
      // - EGL_RENDER_BUFFER (must be EGL_BACK_BUFFER)
      // - EGL_VG_COLORSPACE (can't be set)
      // - EGL_VG_ALPHA_FORMAT (can't be set)
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 62006; /* Magic ID for Emscripten 'default surface' */
    };

  
  var _eglDestroyContext = (display, context) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (context != 62004) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
  
      GL.deleteContext(EGL.context);
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.currentContext == context) {
        EGL.currentContext = 0;
      }
      return 1 /* EGL_TRUE */;
    };

  var _eglDestroySurface = (display, surface) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (surface != 62006 /* Magic ID for the only EGLSurface supported by Emscripten */) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 1;
      }
      if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0;
      }
      if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1; /* Magic ID for Emscripten 'default surface' */
    };

  var _eglGetConfigAttrib = (display, config, attribute, value) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      if (!value) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      switch (attribute) {
      case 0x3020: // EGL_BUFFER_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 32 : 24;
        return 1;
      case 0x3021: // EGL_ALPHA_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 8 : 0;
        return 1;
      case 0x3022: // EGL_BLUE_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3023: // EGL_GREEN_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3024: // EGL_RED_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3025: // EGL_DEPTH_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.depth ? 24 : 0;
        return 1;
      case 0x3026: // EGL_STENCIL_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.stencil ? 8 : 0;
        return 1;
      case 0x3027: // EGL_CONFIG_CAVEAT
        // We can return here one of EGL_NONE (0x3038), EGL_SLOW_CONFIG (0x3050) or EGL_NON_CONFORMANT_CONFIG (0x3051).
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3028: // EGL_CONFIG_ID
        HEAP32[((value)>>2)] = 62002;
        return 1;
      case 0x3029: // EGL_LEVEL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302A: // EGL_MAX_PBUFFER_HEIGHT
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302B: // EGL_MAX_PBUFFER_PIXELS
        HEAP32[((value)>>2)] = 16777216;
        return 1;
      case 0x302C: // EGL_MAX_PBUFFER_WIDTH
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302D: // EGL_NATIVE_RENDERABLE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302E: // EGL_NATIVE_VISUAL_ID
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302F: // EGL_NATIVE_VISUAL_TYPE
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3031: // EGL_SAMPLES
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 4 : 0;
        return 1;
      case 0x3032: // EGL_SAMPLE_BUFFERS
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 1 : 0;
        return 1;
      case 0x3033: // EGL_SURFACE_TYPE
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3034: // EGL_TRANSPARENT_TYPE
        // If this returns EGL_TRANSPARENT_RGB (0x3052), transparency is used through color-keying. No such thing applies to Emscripten canvas.
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3035: // EGL_TRANSPARENT_BLUE_VALUE
      case 0x3036: // EGL_TRANSPARENT_GREEN_VALUE
      case 0x3037: // EGL_TRANSPARENT_RED_VALUE
        // "If EGL_TRANSPARENT_TYPE is EGL_NONE, then the values for EGL_TRANSPARENT_RED_VALUE, EGL_TRANSPARENT_GREEN_VALUE, and EGL_TRANSPARENT_BLUE_VALUE are undefined."
        HEAP32[((value)>>2)] = -1;
        return 1;
      case 0x3039: // EGL_BIND_TO_TEXTURE_RGB
      case 0x303A: // EGL_BIND_TO_TEXTURE_RGBA
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303B: // EGL_MIN_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303C: // EGL_MAX_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 1;
        return 1;
      case 0x303D: // EGL_LUMINANCE_SIZE
      case 0x303E: // EGL_ALPHA_MASK_SIZE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303F: // EGL_COLOR_BUFFER_TYPE
        // EGL has two types of buffers: EGL_RGB_BUFFER and EGL_LUMINANCE_BUFFER.
        HEAP32[((value)>>2)] = 0x308E;
        return 1;
      case 0x3040: // EGL_RENDERABLE_TYPE
        // A bit combination of EGL_OPENGL_ES_BIT,EGL_OPENVG_BIT,EGL_OPENGL_ES2_BIT and EGL_OPENGL_BIT.
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3042: // EGL_CONFORMANT
        // "EGL_CONFORMANT is a mask indicating if a client API context created with respect to the corresponding EGLConfig will pass the required conformance tests for that API."
        HEAP32[((value)>>2)] = 0;
        return 1;
      default:
        EGL.setErrorCode(0x3004 /* EGL_BAD_ATTRIBUTE */);
        return 0;
      }
    };

  var _eglGetDisplay = (nativeDisplayType) => {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      // Emscripten EGL implementation "emulates" X11, and eglGetDisplay is
      // expected to accept/receive a pointer to an X11 Display object (or
      // EGL_DEFAULT_DISPLAY).
      if (nativeDisplayType != 0 /* EGL_DEFAULT_DISPLAY */ && nativeDisplayType != 1 /* see library_xlib.js */) {
        return 0; // EGL_NO_DISPLAY
      }
      return 62000;
    };

  var _eglGetError = () => EGL.errorCode;

  var _eglInitialize = (display, majorVersion, minorVersion) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (majorVersion) {
        HEAP32[((majorVersion)>>2)] = 1; // Advertise EGL Major version: '1'
      }
      if (minorVersion) {
        HEAP32[((minorVersion)>>2)] = 4; // Advertise EGL Minor version: '4'
      }
      EGL.defaultDisplayInitialized = true;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    };

  
  var _eglMakeCurrent = (display, draw, read, context) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0 /* EGL_FALSE */;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      if (context != 0 && context != 62004) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
      if ((read != 0 && read != 62006) || (draw != 0 && draw != 62006 /* Magic ID for Emscripten 'default surface' */)) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 0;
      }
  
      GL.makeContextCurrent(context ? EGL.context : null);
  
      EGL.currentContext = context;
      EGL.currentDrawSurface = draw;
      EGL.currentReadSurface = read;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1 /* EGL_TRUE */;
    };

  
  
  var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
  
  var _eglQueryString = (display, name) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.stringCache[name]) return EGL.stringCache[name];
      var ret;
      switch (name) {
        case 0x3053 /* EGL_VENDOR */: ret = stringToNewUTF8("Emscripten"); break;
        case 0x3054 /* EGL_VERSION */: ret = stringToNewUTF8("1.4 Emscripten EGL"); break;
        case 0x3055 /* EGL_EXTENSIONS */:  ret = stringToNewUTF8(""); break; // Currently not supporting any EGL extensions.
        case 0x308D /* EGL_CLIENT_APIS */: ret = stringToNewUTF8("OpenGL_ES"); break;
        default:
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
      }
      EGL.stringCache[name] = ret;
      return ret;
    };

  
  var _eglSwapBuffers = (dpy, surface) => {
  
      if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(0x3001 /* EGL_NOT_INITIALIZED */);
      } else if (!GLctx) {
        EGL.setErrorCode(0x3002 /* EGL_BAD_ACCESS */);
      } else if (GLctx.isContextLost()) {
        EGL.setErrorCode(0x300E /* EGL_CONTEXT_LOST */);
      } else {
        // According to documentation this does an implicit flush.
        // Due to discussion at https://github.com/emscripten-core/emscripten/pull/1871
        // the flush was removed since this _may_ result in slowing code down.
        //_glFlush();
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1 /* EGL_TRUE */;
      }
      return 0 /* EGL_FALSE */;
    };

  
  
  
  
    /**
     * @param {number=} arg
     * @param {boolean=} noSetTiming
     */
  var setMainLoop = (iterFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
      assert(!MainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
      MainLoop.func = iterFunc;
      MainLoop.arg = arg;
  
      var thisMainLoopId = MainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < MainLoop.currentlyRunningMainloop) {
          
          maybeExit();
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen a
      // later time).  This member signifies that the current runner has not
      // yet been started so that we can call runtimeKeepalivePush when it
      // gets it timing set for the first time.
      MainLoop.running = false;
      MainLoop.runner = function MainLoop_runner() {
        if (ABORT) return;
        if (MainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = MainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (MainLoop.remainingBlockers) {
            var remaining = MainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              MainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              MainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          MainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(MainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        MainLoop.currentFrameNumber = MainLoop.currentFrameNumber + 1 | 0;
        if (MainLoop.timingMode == 1 && MainLoop.timingValue > 1 && MainLoop.currentFrameNumber % MainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          MainLoop.scheduler();
          return;
        } else if (MainLoop.timingMode == 0) {
          MainLoop.tickStartTime = _emscripten_get_now();
        }
  
        if (MainLoop.method === 'timeout' && Module['ctx']) {
          warnOnce('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          MainLoop.method = ''; // just warn once per call to set main loop
        }
  
        MainLoop.runIter(iterFunc);
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        MainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps > 0) {
          _emscripten_set_main_loop_timing(0, 1000.0 / fps);
        } else {
          // Do rAF by rendering each frame (no decimating)
          _emscripten_set_main_loop_timing(1, 1);
        }
  
        MainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    };
  
  
  var MainLoop = {
  running:false,
  scheduler:null,
  method:"",
  currentlyRunningMainloop:0,
  func:null,
  arg:0,
  timingMode:0,
  timingValue:0,
  currentFrameNumber:0,
  queue:[],
  preMainLoop:[],
  postMainLoop:[],
  pause() {
        MainLoop.scheduler = null;
        // Incrementing this signals the previous main loop that it's now become old, and it must return.
        MainLoop.currentlyRunningMainloop++;
      },
  resume() {
        MainLoop.currentlyRunningMainloop++;
        var timingMode = MainLoop.timingMode;
        var timingValue = MainLoop.timingValue;
        var func = MainLoop.func;
        MainLoop.func = null;
        // do not set timing and call scheduler, we will do it on the next lines
        setMainLoop(func, 0, false, MainLoop.arg, true);
        _emscripten_set_main_loop_timing(timingMode, timingValue);
        MainLoop.scheduler();
      },
  updateStatus() {
        if (Module['setStatus']) {
          var message = Module['statusMessage'] || 'Please wait...';
          var remaining = MainLoop.remainingBlockers ?? 0;
          var expected = MainLoop.expectedBlockers ?? 0;
          if (remaining) {
            if (remaining < expected) {
              Module['setStatus'](`{message} ({expected - remaining}/{expected})`);
            } else {
              Module['setStatus'](message);
            }
          } else {
            Module['setStatus']('');
          }
        }
      },
  init() {
        Module['preMainLoop'] && MainLoop.preMainLoop.push(Module['preMainLoop']);
        Module['postMainLoop'] && MainLoop.postMainLoop.push(Module['postMainLoop']);
      },
  runIter(func) {
        if (ABORT) return;
        for (var pre of MainLoop.preMainLoop) {
          if (pre() === false) {
            return; // |return false| skips a frame
          }
        }
        callUserCallback(func);
        for (var post of MainLoop.postMainLoop) {
          post();
        }
        checkStackCookie();
      },
  nextRAF:0,
  fakeRequestAnimationFrame(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (MainLoop.nextRAF === 0) {
          MainLoop.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= MainLoop.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            MainLoop.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(MainLoop.nextRAF - now, 0);
        setTimeout(func, delay);
      },
  requestAnimationFrame(func) {
        if (typeof requestAnimationFrame == 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = MainLoop.fakeRequestAnimationFrame;
        RAF(func);
      },
  };
  var _emscripten_set_main_loop_timing = (mode, value) => {
      MainLoop.timingMode = mode;
      MainLoop.timingValue = value;
  
      if (!MainLoop.func) {
        err('emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.');
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (!MainLoop.running) {
        
        MainLoop.running = true;
      }
      if (mode == 0) {
        MainLoop.scheduler = function MainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, MainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(MainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        MainLoop.method = 'timeout';
      } else if (mode == 1) {
        MainLoop.scheduler = function MainLoop_scheduler_rAF() {
          MainLoop.requestAnimationFrame(MainLoop.runner);
        };
        MainLoop.method = 'rAF';
      } else if (mode == 2) {
        if (typeof MainLoop.setImmediate == 'undefined') {
          if (typeof setImmediate == 'undefined') {
            // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
            var setImmediates = [];
            var emscriptenMainLoopMessageId = 'setimmediate';
            /** @param {Event} event */
            var MainLoop_setImmediate_messageHandler = (event) => {
              // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
              // so check for both cases.
              if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                event.stopPropagation();
                setImmediates.shift()();
              }
            };
            addEventListener("message", MainLoop_setImmediate_messageHandler, true);
            MainLoop.setImmediate = /** @type{function(function(): ?, ...?): number} */((func) => {
              setImmediates.push(func);
              if (ENVIRONMENT_IS_WORKER) {
                Module['setImmediates'] ??= [];
                Module['setImmediates'].push(func);
                postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
              } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
            });
          } else {
            MainLoop.setImmediate = setImmediate;
          }
        }
        MainLoop.scheduler = function MainLoop_scheduler_setImmediate() {
          MainLoop.setImmediate(MainLoop.runner);
        };
        MainLoop.method = 'immediate';
      }
      return 0;
    };
  
  var _eglSwapInterval = (display, interval) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (interval == 0) _emscripten_set_main_loop_timing(0, 0);
      else _emscripten_set_main_loop_timing(1, interval);
  
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    };

  var _eglTerminate = (display) => {
      if (display != 62000) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      EGL.currentContext = 0;
      EGL.currentReadSurface = 0;
      EGL.currentDrawSurface = 0;
      EGL.defaultDisplayInitialized = false;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    };

  
  /** @suppress {duplicate } */
  var _eglWaitClient = () => {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    };
  var _eglWaitGL = _eglWaitClient;

  var _eglWaitNative = (nativeEngineId) => {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    };

  var readEmAsmArgsArray = [];
  var readEmAsmArgs = (sigPtr, buf) => {
      // Nobody should have mutated _readEmAsmArgsArray underneath us to be something else than an array.
      assert(Array.isArray(readEmAsmArgsArray));
      // The input buffer is allocated on the stack, so it must be stack-aligned.
      assert(buf % 16 == 0);
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      while (ch = HEAPU8[sigPtr++]) {
        var chr = String.fromCharCode(ch);
        var validChars = ['d', 'f', 'i', 'p'];
        // In WASM_BIGINT mode we support passing i64 values as bigint.
        validChars.push('j');
        assert(validChars.includes(chr), `Invalid character ${ch}("${chr}") in readEmAsmArgs! Use only [${validChars}], and do not specify "v" for void return argument.`);
        // Floats are always passed as doubles, so all types except for 'i'
        // are 8 bytes and require alignment.
        var wide = (ch != 105);
        wide &= (ch != 112);
        buf += wide && (buf % 8) ? 4 : 0;
        readEmAsmArgsArray.push(
          // Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
          ch == 112 ? HEAPU32[((buf)>>2)] :
          ch == 106 ? HEAP64[((buf)>>3)] :
          ch == 105 ?
            HEAP32[((buf)>>2)] :
            HEAPF64[((buf)>>3)]
        );
        buf += wide ? 8 : 4;
      }
      return readEmAsmArgsArray;
    };
  var runEmAsmFunction = (code, sigPtr, argbuf) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      assert(ASM_CONSTS.hasOwnProperty(code), `No EM_ASM constant found at address ${code}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
      return ASM_CONSTS[code](...args);
    };
  var _emscripten_asm_const_int = (code, sigPtr, argbuf) => {
      return runEmAsmFunction(code, sigPtr, argbuf);
    };

  var runMainThreadEmAsm = (emAsmAddr, sigPtr, argbuf, sync) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      assert(ASM_CONSTS.hasOwnProperty(emAsmAddr), `No EM_ASM constant found at address ${emAsmAddr}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
      return ASM_CONSTS[emAsmAddr](...args);
    };
  var _emscripten_asm_const_int_sync_on_main_thread = (emAsmAddr, sigPtr, argbuf) => runMainThreadEmAsm(emAsmAddr, sigPtr, argbuf, 1);

  var _emscripten_asm_const_ptr_sync_on_main_thread = (emAsmAddr, sigPtr, argbuf) => runMainThreadEmAsm(emAsmAddr, sigPtr, argbuf, 1);

  var _emscripten_cancel_main_loop = () => {
      MainLoop.pause();
      MainLoop.func = null;
    };


  var onExits = [];
  var addOnExit = (cb) => onExits.push(cb);
  var JSEvents = {
  memcpy(target, src, size) {
        HEAP8.set(HEAP8.subarray(src, src + size), target);
      },
  removeAllEventListeners() {
        while (JSEvents.eventHandlers.length) {
          JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
        }
        JSEvents.deferredCalls = [];
      },
  inEventHandler:0,
  deferredCalls:[],
  deferCall(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
  
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        // Test if the given call was already queued, and if so, don't add it again.
        for (var call of JSEvents.deferredCalls) {
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({
          targetFunction,
          precedence,
          argsList
        });
  
        JSEvents.deferredCalls.sort((x,y) => x.precedence < y.precedence);
      },
  removeDeferredCalls(targetFunction) {
        JSEvents.deferredCalls = JSEvents.deferredCalls.filter((call) => call.targetFunction != targetFunction);
      },
  canPerformEventHandlerRequests() {
        if (navigator.userActivation) {
          // Verify against transient activation status from UserActivation API
          // whether it is possible to perform a request here without needing to defer. See
          // https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
          // and https://caniuse.com/mdn-api_useractivation
          // At the time of writing, Firefox does not support this API: https://bugzilla.mozilla.org/show_bug.cgi?id=1791079
          return navigator.userActivation.isActive;
        }
  
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },
  runDeferredCalls() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        var deferredCalls = JSEvents.deferredCalls;
        JSEvents.deferredCalls = [];
        for (var call of deferredCalls) {
          call.targetFunction(...call.argsList);
        }
      },
  eventHandlers:[],
  removeAllHandlersOnTarget:(target, eventTypeString) => {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (JSEvents.eventHandlers[i].target == target &&
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
             JSEvents._removeHandler(i--);
           }
        }
      },
  _removeHandler(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },
  registerOrRemoveHandler(eventHandler) {
        if (!eventHandler.target) {
          err('registerOrRemoveHandler: the target element for event handler registration does not exist, when processing the following event handler registration:');
          console.dir(eventHandler);
          return -4;
        }
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = function(event) {
            // Increment nesting count for the event handler.
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            // Process any old deferred calls the user has placed.
            JSEvents.runDeferredCalls();
            // Process the actual event, calls back to user C code handler.
            eventHandler.handlerFunc(event);
            // Process any new deferred calls that were placed right now from this event handler.
            JSEvents.runDeferredCalls();
            // Out of event handler - restore nesting count.
            --JSEvents.inEventHandler;
          };
  
          eventHandler.target.addEventListener(eventHandler.eventTypeString,
                                               eventHandler.eventListenerFunc,
                                               eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == eventHandler.target
             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JSEvents._removeHandler(i--);
             }
          }
        }
        return 0;
      },
  getNodeNameForTarget(target) {
        if (!target) return '';
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return target?.nodeName || '';
      },
  fullscreenEnabled() {
        return document.fullscreenEnabled
        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
        // TODO: If Safari at some point ships with unprefixed version, update the version check above.
        || document.webkitFullscreenEnabled
         ;
      },
  };
  
  /** @type {Object} */
  var specialHTMLTargets = [0, typeof document != 'undefined' ? document : 0, typeof window != 'undefined' ? window : 0];
  
  
  var maybeCStringToJsString = (cString) => {
      // "cString > 2" checks if the input is a number, and isn't of the special
      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
      // In other words, if cString > 2 then it's a pointer to a valid place in
      // memory, and points to a C string.
      return cString > 2 ? UTF8ToString(cString) : cString;
    };
  
  /** @suppress {duplicate } */
  var findEventTarget = (target) => {
      target = maybeCStringToJsString(target);
      var domElement = specialHTMLTargets[target] || (typeof document != 'undefined' ? document.querySelector(target) : null);
      return domElement;
    };
  var findCanvasEventTarget = findEventTarget;
  var _emscripten_get_canvas_element_size = (target, width, height) => {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      HEAP32[((width)>>2)] = canvas.width;
      HEAP32[((height)>>2)] = canvas.height;
    };
  
  
  
  
  
  var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
  var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
  var getCanvasElementSize = (target) => {
      var sp = stackSave();
      var w = stackAlloc(8);
      var h = w + 4;
  
      var targetInt = stringToUTF8OnStack(target.id);
      var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
      var size = [HEAP32[((w)>>2)], HEAP32[((h)>>2)]];
      stackRestore(sp);
      return size;
    };
  
  var _emscripten_set_canvas_element_size = (target, width, height) => {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      canvas.width = width;
      canvas.height = height;
      return 0;
    };
  
  
  
  var setCanvasElementSize = (target, width, height) => {
      if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height;
      } else {
        // This function is being called from high-level JavaScript code instead of asm.js/Wasm,
        // and it needs to synchronously proxy over to another thread, so marshal the string onto the heap to do the call.
        var sp = stackSave();
        var targetInt = stringToUTF8OnStack(target.id);
        _emscripten_set_canvas_element_size(targetInt, width, height);
        stackRestore(sp);
      }
    };
  
  var currentFullscreenStrategy = {
  };
  var registerRestoreOldStyle = (canvas) => {
      var canvasSize = getCanvasElementSize(canvas);
      var oldWidth = canvasSize[0];
      var oldHeight = canvasSize[1];
      var oldCssWidth = canvas.style.width;
      var oldCssHeight = canvas.style.height;
      var oldBackgroundColor = canvas.style.backgroundColor; // Chrome reads color from here.
      var oldDocumentBackgroundColor = document.body.style.backgroundColor; // IE11 reads color from here.
      // Firefox always has black background color.
      var oldPaddingLeft = canvas.style.paddingLeft; // Chrome, FF, Safari
      var oldPaddingRight = canvas.style.paddingRight;
      var oldPaddingTop = canvas.style.paddingTop;
      var oldPaddingBottom = canvas.style.paddingBottom;
      var oldMarginLeft = canvas.style.marginLeft; // IE11
      var oldMarginRight = canvas.style.marginRight;
      var oldMarginTop = canvas.style.marginTop;
      var oldMarginBottom = canvas.style.marginBottom;
      var oldDocumentBodyMargin = document.body.style.margin;
      var oldDocumentOverflow = document.documentElement.style.overflow; // Chrome, Firefox
      var oldDocumentScroll = document.body.scroll; // IE
      var oldImageRendering = canvas.style.imageRendering;
  
      function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement
          || document.webkitFullscreenElement
          ;
        if (!fullscreenElement) {
          document.removeEventListener('fullscreenchange', restoreOldStyle);
  
          // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
          // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
          document.removeEventListener('webkitfullscreenchange', restoreOldStyle);
  
          setCanvasElementSize(canvas, oldWidth, oldHeight);
  
          canvas.style.width = oldCssWidth;
          canvas.style.height = oldCssHeight;
          canvas.style.backgroundColor = oldBackgroundColor; // Chrome
          // IE11 hack: assigning 'undefined' or an empty string to document.body.style.backgroundColor has no effect, so first assign back the default color
          // before setting the undefined value. Setting undefined value is also important, or otherwise we would later treat that as something that the user
          // had explicitly set so subsequent fullscreen transitions would not set background color properly.
          if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = 'white';
          document.body.style.backgroundColor = oldDocumentBackgroundColor; // IE11
          canvas.style.paddingLeft = oldPaddingLeft; // Chrome, FF, Safari
          canvas.style.paddingRight = oldPaddingRight;
          canvas.style.paddingTop = oldPaddingTop;
          canvas.style.paddingBottom = oldPaddingBottom;
          canvas.style.marginLeft = oldMarginLeft; // IE11
          canvas.style.marginRight = oldMarginRight;
          canvas.style.marginTop = oldMarginTop;
          canvas.style.marginBottom = oldMarginBottom;
          document.body.style.margin = oldDocumentBodyMargin;
          document.documentElement.style.overflow = oldDocumentOverflow; // Chrome, Firefox
          document.body.scroll = oldDocumentScroll; // IE
          canvas.style.imageRendering = oldImageRendering;
          if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
  
          if (currentFullscreenStrategy.canvasResizedCallback) {
            ((a1, a2, a3) => dynCall_iiii(currentFullscreenStrategy.canvasResizedCallback, a1, a2, a3))(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener('fullscreenchange', restoreOldStyle);
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      document.addEventListener('webkitfullscreenchange', restoreOldStyle);
      return restoreOldStyle;
    };
  
  
  var setLetterbox = (element, topBottom, leftRight) => {
      // Cannot use margin to specify letterboxes in FF or Chrome, since those ignore margins in fullscreen mode.
      element.style.paddingLeft = element.style.paddingRight = leftRight + 'px';
      element.style.paddingTop = element.style.paddingBottom = topBottom + 'px';
    };
  
  
  var getBoundingClientRect = (e) => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {'left':0,'top':0};
  var JSEvents_resizeCanvasForFullscreen = (target, strategy) => {
      var restoreOldStyle = registerRestoreOldStyle(target);
      var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
      var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
      var rect = getBoundingClientRect(target);
      var windowedCssWidth = rect.width;
      var windowedCssHeight = rect.height;
      var canvasSize = getCanvasElementSize(target);
      var windowedRttWidth = canvasSize[0];
      var windowedRttHeight = canvasSize[1];
  
      if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight;
      } else if (strategy.scaleMode == 2) {
        if (cssWidth*windowedRttHeight < windowedRttWidth*cssHeight) {
          var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
          setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
          cssHeight = desiredCssHeight;
        } else {
          var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
          setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
          cssWidth = desiredCssWidth;
        }
      }
  
      // If we are adding padding, must choose a background color or otherwise Chrome will give the
      // padding a default white color. Do it only if user has not customized their own background color.
      target.style.backgroundColor ||= 'black';
      // IE11 does the same, but requires the color to be set in the document body.
      document.body.style.backgroundColor ||= 'black'; // IE11
      // Firefox always shows black letterboxes independent of style color.
  
      target.style.width = cssWidth + 'px';
      target.style.height = cssHeight + 'px';
  
      if (strategy.filteringMode == 1) {
        target.style.imageRendering = 'optimizeSpeed';
        target.style.imageRendering = '-moz-crisp-edges';
        target.style.imageRendering = '-o-crisp-edges';
        target.style.imageRendering = '-webkit-optimize-contrast';
        target.style.imageRendering = 'optimize-contrast';
        target.style.imageRendering = 'crisp-edges';
        target.style.imageRendering = 'pixelated';
      }
  
      var dpiScale = (strategy.canvasResolutionScaleMode == 2) ? devicePixelRatio : 1;
      if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = (cssWidth * dpiScale)|0;
        var newHeight = (cssHeight * dpiScale)|0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight);
      }
      return restoreOldStyle;
    };
  var JSEvents_requestFullscreen = (target, strategy) => {
      // EMSCRIPTEN_FULLSCREEN_SCALE_DEFAULT + EMSCRIPTEN_FULLSCREEN_CANVAS_SCALE_NONE is a mode where no extra logic is performed to the DOM elements.
      if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        JSEvents_resizeCanvasForFullscreen(target, strategy);
      }
  
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1;
      }
  
      currentFullscreenStrategy = strategy;
  
      if (strategy.canvasResizedCallback) {
        ((a1, a2, a3) => dynCall_iiii(strategy.canvasResizedCallback, a1, a2, a3))(37, 0, strategy.canvasResizedCallbackUserData);
      }
  
      return 0;
    };
  var _emscripten_exit_fullscreen = () => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
  
      var d = specialHTMLTargets[1];
      if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen();
      } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen();
      } else {
        return -1;
      }
  
      return 0;
    };

  
  var requestPointerLock = (target) => {
      if (target.requestPointerLock) {
        target.requestPointerLock();
      } else {
        // document.body is known to accept pointer lock, so use that to differentiate if the user passed a bad element,
        // or if the whole browser just doesn't support the feature.
        if (document.body.requestPointerLock
          ) {
          return -3;
        }
        return -1;
      }
      return 0;
    };
  var _emscripten_exit_pointerlock = () => {
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(requestPointerLock);
  
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else {
        return -1;
      }
      return 0;
    };

  
  var __emscripten_runtime_keepalive_clear = () => {
      noExitRuntime = false;
      runtimeKeepaliveCounter = 0;
    };
  
  var _emscripten_force_exit = (status) => {
      warnOnce('emscripten_force_exit cannot actually shut down the runtime, as the build does not have EXIT_RUNTIME set');
      __emscripten_runtime_keepalive_clear();
      _exit(status);
    };

  var _emscripten_get_device_pixel_ratio = () => {
      return (typeof devicePixelRatio == 'number' && devicePixelRatio) || 1.0;
    };

  
  var _emscripten_get_element_css_size = (target, width, height) => {
      target = findEventTarget(target);
      if (!target) return -4;
  
      var rect = getBoundingClientRect(target);
      HEAPF64[((width)>>3)] = rect.width;
      HEAPF64[((height)>>3)] = rect.height;
  
      return 0;
    };

  
  var fillGamepadEventData = (eventStruct, e) => {
      HEAPF64[((eventStruct)>>3)] = e.timestamp;
      for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[(((eventStruct+i*8)+(16))>>3)] = e.axes[i];
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i].value;
        } else {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i];
        }
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAP8[(eventStruct+i)+(1040)] = e.buttons[i].pressed;
        } else {
          // Assigning a boolean to HEAP32, that's ok, but Closure would like to warn about it:
          /** @suppress {checkTypes} */
          HEAP8[(eventStruct+i)+(1040)] = e.buttons[i] == 1;
        }
      }
      HEAP8[(eventStruct)+(1104)] = e.connected;
      HEAP32[(((eventStruct)+(1108))>>2)] = e.index;
      HEAP32[(((eventStruct)+(8))>>2)] = e.axes.length;
      HEAP32[(((eventStruct)+(12))>>2)] = e.buttons.length;
      stringToUTF8(e.id, eventStruct + 1112, 64);
      stringToUTF8(e.mapping, eventStruct + 1176, 64);
    };
  var _emscripten_get_gamepad_status = (index, gamepadState) => {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
      // INVALID_PARAM is returned on a Gamepad index that never was there.
      if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  
      // NO_DATA is returned on a Gamepad index that was removed.
      // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
      // This is because gamepads must keep their original position in the array.
      // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
      if (!JSEvents.lastGamepadState[index]) return -7;
  
      fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
      return 0;
    };


  var _emscripten_get_num_gamepads = () => {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
      // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
      // Otherwise the following line will throw an exception.
      return JSEvents.lastGamepadState.length;
    };

  var _emscripten_get_screen_size = (width, height) => {
      HEAP32[((width)>>2)] = screen.width;
      HEAP32[((height)>>2)] = screen.height;
    };

  /** @suppress {duplicate } */
  var _glActiveTexture = (x0) => GLctx.activeTexture(x0);
  var _emscripten_glActiveTexture = _glActiveTexture;

  /** @suppress {duplicate } */
  var _glAttachShader = (program, shader) => {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    };
  var _emscripten_glAttachShader = _glAttachShader;

  /** @suppress {duplicate } */
  var _glBeginQuery = (target, id) => {
      GLctx.beginQuery(target, GL.queries[id]);
    };
  var _emscripten_glBeginQuery = _glBeginQuery;

  /** @suppress {duplicate } */
  var _glBeginQueryEXT = (target, id) => {
      GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
    };
  var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;

  /** @suppress {duplicate } */
  var _glBeginTransformFeedback = (x0) => GLctx.beginTransformFeedback(x0);
  var _emscripten_glBeginTransformFeedback = _glBeginTransformFeedback;

  
  /** @suppress {duplicate } */
  var _glBindAttribLocation = (program, index, name) => {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    };
  var _emscripten_glBindAttribLocation = _glBindAttribLocation;

  /** @suppress {duplicate } */
  var _glBindBuffer = (target, buffer) => {
  
      if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
        // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2
        // API function call when a buffer is bound to
        // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
        // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
        // use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    };
  var _emscripten_glBindBuffer = _glBindBuffer;

  /** @suppress {duplicate } */
  var _glBindBufferBase = (target, index, buffer) => {
      GLctx.bindBufferBase(target, index, GL.buffers[buffer]);
    };
  var _emscripten_glBindBufferBase = _glBindBufferBase;

  /** @suppress {duplicate } */
  var _glBindBufferRange = (target, index, buffer, offset, ptrsize) => {
      GLctx.bindBufferRange(target, index, GL.buffers[buffer], offset, ptrsize);
    };
  var _emscripten_glBindBufferRange = _glBindBufferRange;

  /** @suppress {duplicate } */
  var _glBindFramebuffer = (target, framebuffer) => {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    };
  var _emscripten_glBindFramebuffer = _glBindFramebuffer;

  /** @suppress {duplicate } */
  var _glBindRenderbuffer = (target, renderbuffer) => {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    };
  var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;

  /** @suppress {duplicate } */
  var _glBindSampler = (unit, sampler) => {
      GLctx.bindSampler(unit, GL.samplers[sampler]);
    };
  var _emscripten_glBindSampler = _glBindSampler;

  /** @suppress {duplicate } */
  var _glBindTexture = (target, texture) => {
      GLctx.bindTexture(target, GL.textures[texture]);
    };
  var _emscripten_glBindTexture = _glBindTexture;

  /** @suppress {duplicate } */
  var _glBindTransformFeedback = (target, id) => {
      GLctx.bindTransformFeedback(target, GL.transformFeedbacks[id]);
    };
  var _emscripten_glBindTransformFeedback = _glBindTransformFeedback;

  /** @suppress {duplicate } */
  var _glBindVertexArray = (vao) => {
      GLctx.bindVertexArray(GL.vaos[vao]);
    };
  var _emscripten_glBindVertexArray = _glBindVertexArray;

  
  /** @suppress {duplicate } */
  var _glBindVertexArrayOES = _glBindVertexArray;
  var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;

  /** @suppress {duplicate } */
  var _glBlendColor = (x0, x1, x2, x3) => GLctx.blendColor(x0, x1, x2, x3);
  var _emscripten_glBlendColor = _glBlendColor;

  /** @suppress {duplicate } */
  var _glBlendEquation = (x0) => GLctx.blendEquation(x0);
  var _emscripten_glBlendEquation = _glBlendEquation;

  /** @suppress {duplicate } */
  var _glBlendEquationSeparate = (x0, x1) => GLctx.blendEquationSeparate(x0, x1);
  var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;

  /** @suppress {duplicate } */
  var _glBlendFunc = (x0, x1) => GLctx.blendFunc(x0, x1);
  var _emscripten_glBlendFunc = _glBlendFunc;

  /** @suppress {duplicate } */
  var _glBlendFuncSeparate = (x0, x1, x2, x3) => GLctx.blendFuncSeparate(x0, x1, x2, x3);
  var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;

  /** @suppress {duplicate } */
  var _glBlitFramebuffer = (x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) => GLctx.blitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
  var _emscripten_glBlitFramebuffer = _glBlitFramebuffer;

  /** @suppress {duplicate } */
  var _glBufferData = (target, size, data, usage) => {
  
      if (GL.currentContext.version >= 2) {
        // If size is zero, WebGL would interpret uploading the whole input
        // arraybuffer (starting from given offset), which would not make sense in
        // WebAssembly, so avoid uploading if size is zero. However we must still
        // call bufferData to establish a backing storage of zero bytes.
        if (data && size) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
        return;
      }
      // N.b. here first form specifies a heap subarray, second form an integer
      // size, so the ?: code here is polymorphic. It is advised to avoid
      // randomly mixing both uses in calling code, to avoid any potential JS
      // engine JIT issues.
      GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
    };
  var _emscripten_glBufferData = _glBufferData;

  /** @suppress {duplicate } */
  var _glBufferSubData = (target, offset, size, data) => {
      if (GL.currentContext.version >= 2) {
        size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return;
      }
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    };
  var _emscripten_glBufferSubData = _glBufferSubData;

  /** @suppress {duplicate } */
  var _glCheckFramebufferStatus = (x0) => GLctx.checkFramebufferStatus(x0);
  var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;

  /** @suppress {duplicate } */
  var _glClear = (x0) => GLctx.clear(x0);
  var _emscripten_glClear = _glClear;

  /** @suppress {duplicate } */
  var _glClearBufferfi = (x0, x1, x2, x3) => GLctx.clearBufferfi(x0, x1, x2, x3);
  var _emscripten_glClearBufferfi = _glClearBufferfi;

  /** @suppress {duplicate } */
  var _glClearBufferfv = (buffer, drawbuffer, value) => {
  
      GLctx.clearBufferfv(buffer, drawbuffer, HEAPF32, ((value)>>2));
    };
  var _emscripten_glClearBufferfv = _glClearBufferfv;

  /** @suppress {duplicate } */
  var _glClearBufferiv = (buffer, drawbuffer, value) => {
  
      GLctx.clearBufferiv(buffer, drawbuffer, HEAP32, ((value)>>2));
    };
  var _emscripten_glClearBufferiv = _glClearBufferiv;

  /** @suppress {duplicate } */
  var _glClearBufferuiv = (buffer, drawbuffer, value) => {
  
      GLctx.clearBufferuiv(buffer, drawbuffer, HEAPU32, ((value)>>2));
    };
  var _emscripten_glClearBufferuiv = _glClearBufferuiv;

  /** @suppress {duplicate } */
  var _glClearColor = (x0, x1, x2, x3) => GLctx.clearColor(x0, x1, x2, x3);
  var _emscripten_glClearColor = _glClearColor;

  /** @suppress {duplicate } */
  var _glClearDepthf = (x0) => GLctx.clearDepth(x0);
  var _emscripten_glClearDepthf = _glClearDepthf;

  /** @suppress {duplicate } */
  var _glClearStencil = (x0) => GLctx.clearStencil(x0);
  var _emscripten_glClearStencil = _glClearStencil;

  /** @suppress {duplicate } */
  var _glClientWaitSync = (sync, flags, timeout) => {
      // WebGL2 vs GLES3 differences: in GLES3, the timeout parameter is a uint64, where 0xFFFFFFFFFFFFFFFFULL means GL_TIMEOUT_IGNORED.
      // In JS, there's no 64-bit value types, so instead timeout is taken to be signed, and GL_TIMEOUT_IGNORED is given value -1.
      // Inherently the value accepted in the timeout is lossy, and can't take in arbitrary u64 bit pattern (but most likely doesn't matter)
      // See https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15
      timeout = Number(timeout);
      return GLctx.clientWaitSync(GL.syncs[sync], flags, timeout);
    };
  var _emscripten_glClientWaitSync = _glClientWaitSync;

  /** @suppress {duplicate } */
  var _glClipControlEXT = (origin, depth) => {
      GLctx.extClipControl['clipControlEXT'](origin, depth);
    };
  var _emscripten_glClipControlEXT = _glClipControlEXT;

  /** @suppress {duplicate } */
  var _glColorMask = (red, green, blue, alpha) => {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    };
  var _emscripten_glColorMask = _glColorMask;

  /** @suppress {duplicate } */
  var _glCompileShader = (shader) => {
      GLctx.compileShader(GL.shaders[shader]);
    };
  var _emscripten_glCompileShader = _glCompileShader;

  /** @suppress {duplicate } */
  var _glCompressedTexImage2D = (target, level, internalFormat, width, height, border, imageSize, data) => {
      // `data` may be null here, which means "allocate uniniitalized space but
      // don't upload" in GLES parlance, but `compressedTexImage2D` requires the
      // final data parameter, so we simply pass a heap view starting at zero
      // effectively uploading whatever happens to be near address zero.  See
      // https://github.com/emscripten-core/emscripten/issues/19300.
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
          GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data);
          return;
        }
        GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
        return;
      }
      GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8.subarray((data), data+imageSize));
    };
  var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;

  /** @suppress {duplicate } */
  var _glCompressedTexImage3D = (target, level, internalFormat, width, height, depth, border, imageSize, data) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data);
      } else {
        GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
      }
    };
  var _emscripten_glCompressedTexImage3D = _glCompressedTexImage3D;

  /** @suppress {duplicate } */
  var _glCompressedTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, imageSize, data) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
          GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data);
          return;
        }
        GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
        return;
      }
      GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8.subarray((data), data+imageSize));
    };
  var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;

  /** @suppress {duplicate } */
  var _glCompressedTexSubImage3D = (target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
      } else {
        GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
      }
    };
  var _emscripten_glCompressedTexSubImage3D = _glCompressedTexSubImage3D;

  /** @suppress {duplicate } */
  var _glCopyBufferSubData = (x0, x1, x2, x3, x4) => GLctx.copyBufferSubData(x0, x1, x2, x3, x4);
  var _emscripten_glCopyBufferSubData = _glCopyBufferSubData;

  /** @suppress {duplicate } */
  var _glCopyTexImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
  var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;

  /** @suppress {duplicate } */
  var _glCopyTexSubImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
  var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;

  /** @suppress {duplicate } */
  var _glCopyTexSubImage3D = (x0, x1, x2, x3, x4, x5, x6, x7, x8) => GLctx.copyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8);
  var _emscripten_glCopyTexSubImage3D = _glCopyTexSubImage3D;

  /** @suppress {duplicate } */
  var _glCreateProgram = () => {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of
      // glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    };
  var _emscripten_glCreateProgram = _glCreateProgram;

  /** @suppress {duplicate } */
  var _glCreateShader = (shaderType) => {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    };
  var _emscripten_glCreateShader = _glCreateShader;

  /** @suppress {duplicate } */
  var _glCullFace = (x0) => GLctx.cullFace(x0);
  var _emscripten_glCullFace = _glCullFace;

  /** @suppress {duplicate } */
  var _glDeleteBuffers = (n, buffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
      }
    };
  var _emscripten_glDeleteBuffers = _glDeleteBuffers;

  /** @suppress {duplicate } */
  var _glDeleteFramebuffers = (n, framebuffers) => {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    };
  var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;

  /** @suppress {duplicate } */
  var _glDeleteProgram = (id) => {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) {
        // glDeleteProgram actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    };
  var _emscripten_glDeleteProgram = _glDeleteProgram;

  /** @suppress {duplicate } */
  var _glDeleteQueries = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.deleteQuery(query);
        GL.queries[id] = null;
      }
    };
  var _emscripten_glDeleteQueries = _glDeleteQueries;

  /** @suppress {duplicate } */
  var _glDeleteQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
        GL.queries[id] = null;
      }
    };
  var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;

  /** @suppress {duplicate } */
  var _glDeleteRenderbuffers = (n, renderbuffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    };
  var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;

  /** @suppress {duplicate } */
  var _glDeleteSamplers = (n, samplers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((samplers)+(i*4))>>2)];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx.deleteSampler(sampler);
        sampler.name = 0;
        GL.samplers[id] = null;
      }
    };
  var _emscripten_glDeleteSamplers = _glDeleteSamplers;

  /** @suppress {duplicate } */
  var _glDeleteShader = (id) => {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) {
        // glDeleteShader actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    };
  var _emscripten_glDeleteShader = _glDeleteShader;

  /** @suppress {duplicate } */
  var _glDeleteSync = (id) => {
      if (!id) return;
      var sync = GL.syncs[id];
      if (!sync) { // glDeleteSync signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteSync(sync);
      sync.name = 0;
      GL.syncs[id] = null;
    };
  var _emscripten_glDeleteSync = _glDeleteSync;

  /** @suppress {duplicate } */
  var _glDeleteTextures = (n, textures) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        // GL spec: "glDeleteTextures silently ignores 0s and names that do not
        // correspond to existing textures".
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    };
  var _emscripten_glDeleteTextures = _glDeleteTextures;

  /** @suppress {duplicate } */
  var _glDeleteTransformFeedbacks = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var transformFeedback = GL.transformFeedbacks[id];
        if (!transformFeedback) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.deleteTransformFeedback(transformFeedback);
        transformFeedback.name = 0;
        GL.transformFeedbacks[id] = null;
      }
    };
  var _emscripten_glDeleteTransformFeedbacks = _glDeleteTransformFeedbacks;

  /** @suppress {duplicate } */
  var _glDeleteVertexArrays = (n, vaos) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx.deleteVertexArray(GL.vaos[id]);
        GL.vaos[id] = null;
      }
    };
  var _emscripten_glDeleteVertexArrays = _glDeleteVertexArrays;

  
  /** @suppress {duplicate } */
  var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
  var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;

  /** @suppress {duplicate } */
  var _glDepthFunc = (x0) => GLctx.depthFunc(x0);
  var _emscripten_glDepthFunc = _glDepthFunc;

  /** @suppress {duplicate } */
  var _glDepthMask = (flag) => {
      GLctx.depthMask(!!flag);
    };
  var _emscripten_glDepthMask = _glDepthMask;

  /** @suppress {duplicate } */
  var _glDepthRangef = (x0, x1) => GLctx.depthRange(x0, x1);
  var _emscripten_glDepthRangef = _glDepthRangef;

  /** @suppress {duplicate } */
  var _glDetachShader = (program, shader) => {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    };
  var _emscripten_glDetachShader = _glDetachShader;

  /** @suppress {duplicate } */
  var _glDisable = (x0) => GLctx.disable(x0);
  var _emscripten_glDisable = _glDisable;

  /** @suppress {duplicate } */
  var _glDisableVertexAttribArray = (index) => {
      GLctx.disableVertexAttribArray(index);
    };
  var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;

  /** @suppress {duplicate } */
  var _glDrawArrays = (mode, first, count) => {
  
      GLctx.drawArrays(mode, first, count);
  
    };
  var _emscripten_glDrawArrays = _glDrawArrays;

  /** @suppress {duplicate } */
  var _glDrawArraysInstanced = (mode, first, count, primcount) => {
      GLctx.drawArraysInstanced(mode, first, count, primcount);
    };
  var _emscripten_glDrawArraysInstanced = _glDrawArraysInstanced;

  
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;

  
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedARB = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedARB = _glDrawArraysInstancedARB;

  
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedEXT = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedEXT = _glDrawArraysInstancedEXT;

  
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedNV = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedNV = _glDrawArraysInstancedNV;

  var tempFixedLengthArray = [];
  
  /** @suppress {duplicate } */
  var _glDrawBuffers = (n, bufs) => {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx.drawBuffers(bufArray);
    };
  var _emscripten_glDrawBuffers = _glDrawBuffers;

  
  /** @suppress {duplicate } */
  var _glDrawBuffersEXT = _glDrawBuffers;
  var _emscripten_glDrawBuffersEXT = _glDrawBuffersEXT;

  
  /** @suppress {duplicate } */
  var _glDrawBuffersWEBGL = _glDrawBuffers;
  var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;

  /** @suppress {duplicate } */
  var _glDrawElements = (mode, count, type, indices) => {
  
      GLctx.drawElements(mode, count, type, indices);
  
    };
  var _emscripten_glDrawElements = _glDrawElements;

  /** @suppress {duplicate } */
  var _glDrawElementsInstanced = (mode, count, type, indices, primcount) => {
      GLctx.drawElementsInstanced(mode, count, type, indices, primcount);
    };
  var _emscripten_glDrawElementsInstanced = _glDrawElementsInstanced;

  
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;

  
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedARB = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedARB = _glDrawElementsInstancedARB;

  
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedEXT = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedEXT = _glDrawElementsInstancedEXT;

  
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedNV = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedNV = _glDrawElementsInstancedNV;

  /** @suppress {duplicate } */
  var _glDrawRangeElements = (mode, start, end, count, type, indices) => {
      // TODO: This should be a trivial pass-though function registered at the bottom of this page as
      // glFuncs[6][1] += ' drawRangeElements';
      // but due to https://bugzilla.mozilla.org/show_bug.cgi?id=1202427,
      // we work around by ignoring the range.
      _glDrawElements(mode, count, type, indices);
    };
  var _emscripten_glDrawRangeElements = _glDrawRangeElements;

  /** @suppress {duplicate } */
  var _glEnable = (x0) => GLctx.enable(x0);
  var _emscripten_glEnable = _glEnable;

  /** @suppress {duplicate } */
  var _glEnableVertexAttribArray = (index) => {
      GLctx.enableVertexAttribArray(index);
    };
  var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;

  /** @suppress {duplicate } */
  var _glEndQuery = (x0) => GLctx.endQuery(x0);
  var _emscripten_glEndQuery = _glEndQuery;

  /** @suppress {duplicate } */
  var _glEndQueryEXT = (target) => {
      GLctx.disjointTimerQueryExt['endQueryEXT'](target);
    };
  var _emscripten_glEndQueryEXT = _glEndQueryEXT;

  /** @suppress {duplicate } */
  var _glEndTransformFeedback = () => GLctx.endTransformFeedback();
  var _emscripten_glEndTransformFeedback = _glEndTransformFeedback;

  /** @suppress {duplicate } */
  var _glFenceSync = (condition, flags) => {
      var sync = GLctx.fenceSync(condition, flags);
      if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id;
      }
      return 0; // Failed to create a sync object
    };
  var _emscripten_glFenceSync = _glFenceSync;

  /** @suppress {duplicate } */
  var _glFinish = () => GLctx.finish();
  var _emscripten_glFinish = _glFinish;

  /** @suppress {duplicate } */
  var _glFlush = () => GLctx.flush();
  var _emscripten_glFlush = _glFlush;

  /** @suppress {duplicate } */
  var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    };
  var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;

  /** @suppress {duplicate } */
  var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    };
  var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;

  /** @suppress {duplicate } */
  var _glFramebufferTextureLayer = (target, attachment, texture, level, layer) => {
      GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
    };
  var _emscripten_glFramebufferTextureLayer = _glFramebufferTextureLayer;

  /** @suppress {duplicate } */
  var _glFrontFace = (x0) => GLctx.frontFace(x0);
  var _emscripten_glFrontFace = _glFrontFace;

  /** @suppress {duplicate } */
  var _glGenBuffers = (n, buffers) => {
      GL.genObject(n, buffers, 'createBuffer', GL.buffers
        );
    };
  var _emscripten_glGenBuffers = _glGenBuffers;

  /** @suppress {duplicate } */
  var _glGenFramebuffers = (n, ids) => {
      GL.genObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    };
  var _emscripten_glGenFramebuffers = _glGenFramebuffers;

  /** @suppress {duplicate } */
  var _glGenQueries = (n, ids) => {
      GL.genObject(n, ids, 'createQuery', GL.queries
        );
    };
  var _emscripten_glGenQueries = _glGenQueries;

  /** @suppress {duplicate } */
  var _glGenQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
        if (!query) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(((ids)+(i*4))>>2)] = id;
      }
    };
  var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;

  /** @suppress {duplicate } */
  var _glGenRenderbuffers = (n, renderbuffers) => {
      GL.genObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    };
  var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;

  /** @suppress {duplicate } */
  var _glGenSamplers = (n, samplers) => {
      GL.genObject(n, samplers, 'createSampler', GL.samplers
        );
    };
  var _emscripten_glGenSamplers = _glGenSamplers;

  /** @suppress {duplicate } */
  var _glGenTextures = (n, textures) => {
      GL.genObject(n, textures, 'createTexture', GL.textures
        );
    };
  var _emscripten_glGenTextures = _glGenTextures;

  /** @suppress {duplicate } */
  var _glGenTransformFeedbacks = (n, ids) => {
      GL.genObject(n, ids, 'createTransformFeedback', GL.transformFeedbacks
        );
    };
  var _emscripten_glGenTransformFeedbacks = _glGenTransformFeedbacks;

  /** @suppress {duplicate } */
  var _glGenVertexArrays = (n, arrays) => {
      GL.genObject(n, arrays, 'createVertexArray', GL.vaos
        );
    };
  var _emscripten_glGenVertexArrays = _glGenVertexArrays;

  
  /** @suppress {duplicate } */
  var _glGenVertexArraysOES = _glGenVertexArrays;
  var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;

  /** @suppress {duplicate } */
  var _glGenerateMipmap = (x0) => GLctx.generateMipmap(x0);
  var _emscripten_glGenerateMipmap = _glGenerateMipmap;

  
  var __glGetActiveAttribOrUniform = (funcName, program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) {
        // If an error occurs, nothing will be written to length, size and type and name.
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetActiveAttrib = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);
  var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;

  
  /** @suppress {duplicate } */
  var _glGetActiveUniform = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);
  var _emscripten_glGetActiveUniform = _glGetActiveUniform;

  /** @suppress {duplicate } */
  var _glGetActiveUniformBlockName = (program, uniformBlockIndex, bufSize, length, uniformBlockName) => {
      program = GL.programs[program];
  
      var result = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
      if (!result) return; // If an error occurs, nothing will be written to uniformBlockName or length.
      if (uniformBlockName && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[((length)>>2)] = 0;
      }
    };
  var _emscripten_glGetActiveUniformBlockName = _glGetActiveUniformBlockName;

  /** @suppress {duplicate } */
  var _glGetActiveUniformBlockiv = (program, uniformBlockIndex, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
  
      if (pname == 0x8A41 /* GL_UNIFORM_BLOCK_NAME_LENGTH */) {
        var name = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
        HEAP32[((params)>>2)] = name.length+1;
        return;
      }
  
      var result = GLctx.getActiveUniformBlockParameter(program, uniformBlockIndex, pname);
      if (result === null) return; // If an error occurs, nothing should be written to params.
      if (pname == 0x8A43 /*GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES*/) {
        for (var i = 0; i < result.length; i++) {
          HEAP32[(((params)+(i*4))>>2)] = result[i];
        }
      } else {
        HEAP32[((params)>>2)] = result;
      }
    };
  var _emscripten_glGetActiveUniformBlockiv = _glGetActiveUniformBlockiv;

  /** @suppress {duplicate } */
  var _glGetActiveUniformsiv = (program, uniformCount, uniformIndices, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (uniformCount > 0 && uniformIndices == 0) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      var ids = [];
      for (var i = 0; i < uniformCount; i++) {
        ids.push(HEAP32[(((uniformIndices)+(i*4))>>2)]);
      }
  
      var result = GLctx.getActiveUniforms(program, ids, pname);
      if (!result) return; // GL spec: If an error is generated, nothing is written out to params.
  
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(((params)+(i*4))>>2)] = result[i];
      }
    };
  var _emscripten_glGetActiveUniformsiv = _glGetActiveUniformsiv;

  /** @suppress {duplicate } */
  var _glGetAttachedShaders = (program, maxCount, count, shaders) => {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[((count)>>2)] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(((shaders)+(i*4))>>2)] = id;
      }
    };
  var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;

  
  /** @suppress {duplicate } */
  var _glGetAttribLocation = (program, name) =>
      GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
  var _emscripten_glGetAttribLocation = _glGetAttribLocation;

  var readI53FromI64 = (ptr) => {
      return HEAPU32[((ptr)>>2)] + HEAP32[(((ptr)+(4))>>2)] * 4294967296;
    };
  
  var readI53FromU64 = (ptr) => {
      return HEAPU32[((ptr)>>2)] + HEAPU32[(((ptr)+(4))>>2)] * 4294967296;
    };
  var writeI53ToI64 = (ptr, num) => {
      HEAPU32[((ptr)>>2)] = num;
      var lower = HEAPU32[((ptr)>>2)];
      HEAPU32[(((ptr)+(4))>>2)] = (num - lower)/4294967296;
      var deserialized = (num >= 0) ? readI53FromU64(ptr) : readI53FromI64(ptr);
      var offset = ((ptr)>>2);
      if (deserialized != num) warnOnce(`writeI53ToI64() out of range: serialized JS Number ${num} to Wasm heap as bytes lo=${ptrToString(HEAPU32[offset])}, hi=${ptrToString(HEAPU32[offset+1])}, which deserializes back to ${deserialized} instead!`);
    };
  
  
  var webglGetExtensions = () => {
      var exts = getEmscriptenSupportedExtensions(GLctx);
      exts = exts.concat(exts.map((e) => "GL_" + e));
      return exts;
    };
  
  var emscriptenWebGLGet = (name_, p, type) => {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null
      // pointer should be treated.  Testing on desktop core GL 3, the application
      // crashes on glGetIntegerv to a null pointer, but better to report an error
      // instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          // Do not write anything to the out pointer, since no binary formats are
          // supported.
          return;
        case 0x87FE: // GL_NUM_PROGRAM_BINARY_FORMATS
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete
          // since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be
          // queried for length), so implement it ourselves to allow C++ GLES2
          // code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
        case 0x821D: // GL_NUM_EXTENSIONS
          if (GL.currentContext.version < 2) {
            // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
            return;
          }
          ret = webglGetExtensions().length;
          break;
        case 0x821B: // GL_MAJOR_VERSION
        case 0x821C: // GL_MINOR_VERSION
          if (GL.currentContext.version < 2) {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          ret = name_ == 0x821B ? 3 : 0; // return version 3.0
          break;
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound -
              // perhaps nothing is bound), but otherwise can mean an invalid
              // name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8F36: // COPY_READ_BUFFER_BINDING or COPY_READ_BUFFER
                case 0x8F37: // COPY_WRITE_BUFFER_BINDING or COPY_WRITE_BUFFER
                case 0x88ED: // PIXEL_PACK_BUFFER_BINDING
                case 0x88EF: // PIXEL_UNPACK_BUFFER_BINDING
                case 0x8CAA: // READ_FRAMEBUFFER_BINDING
                case 0x8919: // SAMPLER_BINDING
                case 0x8C1D: // TEXTURE_BINDING_2D_ARRAY
                case 0x806A: // TEXTURE_BINDING_3D
                case 0x8E25: // TRANSFORM_FEEDBACK_BINDING
                case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                case 0x8A28: // UNIFORM_BUFFER_BINDING
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(p)+(i)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof(result)}!`);
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[p] = ret ? 1 : 0; break;
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetBooleanv = (name_, p) => emscriptenWebGLGet(name_, p, 4);
  var _emscripten_glGetBooleanv = _glGetBooleanv;

  /** @suppress {duplicate } */
  var _glGetBufferParameteri64v = (target, value, data) => {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      writeI53ToI64(data, GLctx.getBufferParameter(target, value));
    };
  var _emscripten_glGetBufferParameteri64v = _glGetBufferParameteri64v;

  /** @suppress {duplicate } */
  var _glGetBufferParameteriv = (target, value, data) => {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null
        // pointer. Since calling this function does not make sense if data ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    };
  var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;

  /** @suppress {duplicate } */
  var _glGetError = () => {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    };
  var _emscripten_glGetError = _glGetError;

  
  /** @suppress {duplicate } */
  var _glGetFloatv = (name_, p) => emscriptenWebGLGet(name_, p, 2);
  var _emscripten_glGetFloatv = _glGetFloatv;

  /** @suppress {duplicate } */
  var _glGetFragDataLocation = (program, name) => {
      return GLctx.getFragDataLocation(GL.programs[program], UTF8ToString(name));
    };
  var _emscripten_glGetFragDataLocation = _glGetFragDataLocation;

  /** @suppress {duplicate } */
  var _glGetFramebufferAttachmentParameteriv = (target, attachment, pname, params) => {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    };
  var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;

  var emscriptenWebGLGetIndexed = (target, index, data, type) => {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var result = GLctx.getIndexedParameter(target, index);
      var ret;
      switch (typeof result) {
        case 'boolean':
          ret = result ? 1 : 0;
          break;
        case 'number':
          ret = result;
          break;
        case 'object':
          if (result === null) {
            switch (target) {
              case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
              case 0x8A28: // UNIFORM_BUFFER_BINDING
                ret = 0;
                break;
              default: {
                GL.recordError(0x500); // GL_INVALID_ENUM
                return;
              }
            }
          } else if (result instanceof WebGLBuffer) {
            ret = result.name | 0;
          } else {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          break;
        default:
          GL.recordError(0x500); // GL_INVALID_ENUM
          return;
      }
  
      switch (type) {
        case 1: writeI53ToI64(data, ret); break;
        case 0: HEAP32[((data)>>2)] = ret; break;
        case 2: HEAPF32[((data)>>2)] = ret; break;
        case 4: HEAP8[data] = ret ? 1 : 0; break;
        default: throw 'internal emscriptenWebGLGetIndexed() error, bad type: ' + type;
      }
    };
  /** @suppress {duplicate } */
  var _glGetInteger64i_v = (target, index, data) =>
      emscriptenWebGLGetIndexed(target, index, data, 1);
  var _emscripten_glGetInteger64i_v = _glGetInteger64i_v;

  /** @suppress {duplicate } */
  var _glGetInteger64v = (name_, p) => {
      emscriptenWebGLGet(name_, p, 1);
    };
  var _emscripten_glGetInteger64v = _glGetInteger64v;

  /** @suppress {duplicate } */
  var _glGetIntegeri_v = (target, index, data) =>
      emscriptenWebGLGetIndexed(target, index, data, 0);
  var _emscripten_glGetIntegeri_v = _glGetIntegeri_v;

  
  /** @suppress {duplicate } */
  var _glGetIntegerv = (name_, p) => emscriptenWebGLGet(name_, p, 0);
  var _emscripten_glGetIntegerv = _glGetIntegerv;

  /** @suppress {duplicate } */
  var _glGetInternalformativ = (target, internalformat, pname, bufSize, params) => {
      if (bufSize < 0) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (!params) {
        // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
        // if values == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = GLctx.getInternalformatParameter(target, internalformat, pname);
      if (ret === null) return;
      for (var i = 0; i < ret.length && i < bufSize; ++i) {
        HEAP32[(((params)+(i*4))>>2)] = ret[i];
      }
    };
  var _emscripten_glGetInternalformativ = _glGetInternalformativ;

  /** @suppress {duplicate } */
  var _glGetProgramBinary = (program, bufSize, length, binaryFormat, binary) => {
      GL.recordError(0x502/*GL_INVALID_OPERATION*/);
    };
  var _emscripten_glGetProgramBinary = _glGetProgramBinary;

  /** @suppress {duplicate } */
  var _glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;

  /** @suppress {duplicate } */
  var _glGetProgramiv = (program, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
          for (var i = 0; i < numActiveUniforms; ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          var numActiveAttributes = GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/);
          for (var i = 0; i < numActiveAttributes; ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          var numActiveUniformBlocks = GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/);
          for (var i = 0; i < numActiveUniformBlocks; ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    };
  var _emscripten_glGetProgramiv = _glGetProgramiv;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjecti64vEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      if (GL.currentContext.version < 2)
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      else {
        param = GLctx.getQueryParameter(query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    };
  var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;

  /** @suppress {duplicate } */
  var _glGetQueryObjectivEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    };
  var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
  var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;

  /** @suppress {duplicate } */
  var _glGetQueryObjectuiv = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.getQueryParameter(query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    };
  var _emscripten_glGetQueryObjectuiv = _glGetQueryObjectuiv;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
  var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;

  /** @suppress {duplicate } */
  var _glGetQueryiv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getQuery(target, pname);
    };
  var _emscripten_glGetQueryiv = _glGetQueryiv;

  /** @suppress {duplicate } */
  var _glGetQueryivEXT = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
    };
  var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;

  /** @suppress {duplicate } */
  var _glGetRenderbufferParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    };
  var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;

  /** @suppress {duplicate } */
  var _glGetSamplerParameterfv = (sampler, pname, params) => {
      if (!params) {
        // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
    };
  var _emscripten_glGetSamplerParameterfv = _glGetSamplerParameterfv;

  /** @suppress {duplicate } */
  var _glGetSamplerParameteriv = (sampler, pname, params) => {
      if (!params) {
        // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
    };
  var _emscripten_glGetSamplerParameteriv = _glGetSamplerParameteriv;

  
  /** @suppress {duplicate } */
  var _glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;

  /** @suppress {duplicate } */
  var _glGetShaderPrecisionFormat = (shaderType, precisionType, range, precision) => {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    };
  var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;

  /** @suppress {duplicate } */
  var _glGetShaderSource = (shader, bufSize, length, source) => {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return; // If an error occurs, nothing will be written to length or source.
      var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetShaderSource = _glGetShaderSource;

  /** @suppress {duplicate } */
  var _glGetShaderiv = (shader, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    };
  var _emscripten_glGetShaderiv = _glGetShaderiv;

  
  
  /** @suppress {duplicate } */
  var _glGetString = (name_) => {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            ret = stringToNewUTF8(webglGetExtensions().join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s ? stringToNewUTF8(s) : 0;
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var webGLVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            var glVersion = `OpenGL ES 2.0 (${webGLVersion})`;
            if (GL.currentContext.version >= 2) glVersion = `OpenGL ES 3.0 (${webGLVersion})`;
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = `OpenGL ES GLSL ES ${ver_num[1]} (${glslVersion})`;
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    };
  var _emscripten_glGetString = _glGetString;

  
  /** @suppress {duplicate } */
  var _glGetStringi = (name, index) => {
      if (GL.currentContext.version < 2) {
        GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
        return 0;
      }
      var stringiCache = GL.stringiCache[name];
      if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
          GL.recordError(0x501/*GL_INVALID_VALUE*/);
          return 0;
        }
        return stringiCache[index];
      }
      switch (name) {
        case 0x1F03 /* GL_EXTENSIONS */:
          var exts = webglGetExtensions().map(stringToNewUTF8);
          stringiCache = GL.stringiCache[name] = exts;
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(0x501/*GL_INVALID_VALUE*/);
            return 0;
          }
          return stringiCache[index];
        default:
          GL.recordError(0x500/*GL_INVALID_ENUM*/);
          return 0;
      }
    };
  var _emscripten_glGetStringi = _glGetStringi;

  /** @suppress {duplicate } */
  var _glGetSynciv = (sync, pname, bufSize, length, values) => {
      if (bufSize < 0) {
        // GLES3 specification does not specify how to behave if bufSize < 0, however in the spec wording for glGetInternalformativ, it does say that GL_INVALID_VALUE should be raised,
        // so raise GL_INVALID_VALUE here as well.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (!values) {
        // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
        // if values == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
      if (ret !== null) {
        HEAP32[((values)>>2)] = ret;
        if (length) HEAP32[((length)>>2)] = 1; // Report a single value outputted.
      }
    };
  var _emscripten_glGetSynciv = _glGetSynciv;

  /** @suppress {duplicate } */
  var _glGetTexParameterfv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };
  var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;

  /** @suppress {duplicate } */
  var _glGetTexParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };
  var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;

  /** @suppress {duplicate } */
  var _glGetTransformFeedbackVarying = (program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx.getTransformFeedbackVarying(program, index);
      if (!info) return; // If an error occurred, the return parameters length, size, type and name will be unmodified.
  
      if (name && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[((length)>>2)] = 0;
      }
  
      if (size) HEAP32[((size)>>2)] = info.size;
      if (type) HEAP32[((type)>>2)] = info.type;
    };
  var _emscripten_glGetTransformFeedbackVarying = _glGetTransformFeedbackVarying;

  /** @suppress {duplicate } */
  var _glGetUniformBlockIndex = (program, uniformBlockName) => {
      return GLctx.getUniformBlockIndex(GL.programs[program], UTF8ToString(uniformBlockName));
    };
  var _emscripten_glGetUniformBlockIndex = _glGetUniformBlockIndex;

  /** @suppress {duplicate } */
  var _glGetUniformIndices = (program, uniformCount, uniformNames, uniformIndices) => {
      if (!uniformIndices) {
        // GLES2 specification does not specify how to behave if uniformIndices is a null pointer. Since calling this function does not make sense
        // if uniformIndices == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      var names = [];
      for (var i = 0; i < uniformCount; i++)
        names.push(UTF8ToString(HEAP32[(((uniformNames)+(i*4))>>2)]));
  
      var result = GLctx.getUniformIndices(program, names);
      if (!result) return; // GL spec: If an error is generated, nothing is written out to uniformIndices.
  
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(((uniformIndices)+(i*4))>>2)] = result[i];
      }
    };
  var _emscripten_glGetUniformIndices = _glGetUniformIndices;

  /** @suppress {checkTypes} */
  var jstoi_q = (str) => parseInt(str);
  
  /** @noinline */
  var webglGetLeftBracePos = (name) => name.slice(-1) == ']' && name.lastIndexOf('[');
  
  var webglPrepareUniformLocationsBeforeFirstUse = (program) => {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
        for (i = 0; i < numActiveUniforms; ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for (j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    };
  
  
  
  /** @suppress {duplicate } */
  var _glGetUniformLocation = (program, name) => {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must
        // maintain the precondition that arrays reside in contiguous addresses,
        // i.e. for a 'vec4 colors[10];', colors[4] must be at location
        // colors[0]+4.  However, user might call glGetUniformLocation(program,
        // "colors") for an array, so we cannot discover based on the user input
        // arguments whether the uniform we are dealing with is an array. The only
        // way to discover which uniforms are arrays is to enumerate over all the
        // active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        // A pair [array length, GLint of the uniform location]
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
  
        // If an uniform with this name exists, and if its index is within the
        // array limits (if it's even an array), query the WebGLlocation, or
        // return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that
        // never existed vs GL program IDs that have been deleted, so report
        // GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    };
  var _emscripten_glGetUniformLocation = _glGetUniformLocation;

  var webglGetUniformLocation = (location) => {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a
        // WebGLUniformLocation.
        // If an integer, we have not yet bound the location, so do it now. The
        // integer value specifies the array index we should bind to.
        if (typeof webglLoc == 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    };
  
  
  /** @suppress{checkTypes} */
  var emscriptenWebGLGetUniform = (program, location, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetUniformLocation(location));
      if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
          }
        }
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetUniformfv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 2);
    };
  var _emscripten_glGetUniformfv = _glGetUniformfv;

  
  /** @suppress {duplicate } */
  var _glGetUniformiv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 0);
    };
  var _emscripten_glGetUniformiv = _glGetUniformiv;

  /** @suppress {duplicate } */
  var _glGetUniformuiv = (program, location, params) =>
      emscriptenWebGLGetUniform(program, location, params, 0);
  var _emscripten_glGetUniformuiv = _glGetUniformuiv;

  /** @suppress{checkTypes} */
  var emscriptenWebGLGetVertexAttrib = (index, pname, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
        HEAP32[((params)>>2)] = data && data["name"];
      } else if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
          case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
          }
        }
      }
    };
  /** @suppress {duplicate } */
  var _glGetVertexAttribIiv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttribI4iv(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
    };
  var _emscripten_glGetVertexAttribIiv = _glGetVertexAttribIiv;

  
  /** @suppress {duplicate } */
  var _glGetVertexAttribIuiv = _glGetVertexAttribIiv;
  var _emscripten_glGetVertexAttribIuiv = _glGetVertexAttribIuiv;

  /** @suppress {duplicate } */
  var _glGetVertexAttribPointerv = (index, pname, pointer) => {
      if (!pointer) {
        // GLES2 specification does not specify how to behave if pointer is a null
        // pointer. Since calling this function does not make sense if pointer ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
    };
  var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;

  
  /** @suppress {duplicate } */
  var _glGetVertexAttribfv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    };
  var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;

  
  /** @suppress {duplicate } */
  var _glGetVertexAttribiv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    };
  var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;

  /** @suppress {duplicate } */
  var _glHint = (x0, x1) => GLctx.hint(x0, x1);
  var _emscripten_glHint = _glHint;

  /** @suppress {duplicate } */
  var _glInvalidateFramebuffer = (target, numAttachments, attachments) => {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx.invalidateFramebuffer(target, list);
    };
  var _emscripten_glInvalidateFramebuffer = _glInvalidateFramebuffer;

  /** @suppress {duplicate } */
  var _glInvalidateSubFramebuffer = (target, numAttachments, attachments, x, y, width, height) => {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx.invalidateSubFramebuffer(target, list, x, y, width, height);
    };
  var _emscripten_glInvalidateSubFramebuffer = _glInvalidateSubFramebuffer;

  /** @suppress {duplicate } */
  var _glIsBuffer = (buffer) => {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    };
  var _emscripten_glIsBuffer = _glIsBuffer;

  /** @suppress {duplicate } */
  var _glIsEnabled = (x0) => GLctx.isEnabled(x0);
  var _emscripten_glIsEnabled = _glIsEnabled;

  /** @suppress {duplicate } */
  var _glIsFramebuffer = (framebuffer) => {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    };
  var _emscripten_glIsFramebuffer = _glIsFramebuffer;

  /** @suppress {duplicate } */
  var _glIsProgram = (program) => {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    };
  var _emscripten_glIsProgram = _glIsProgram;

  /** @suppress {duplicate } */
  var _glIsQuery = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.isQuery(query);
    };
  var _emscripten_glIsQuery = _glIsQuery;

  /** @suppress {duplicate } */
  var _glIsQueryEXT = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
    };
  var _emscripten_glIsQueryEXT = _glIsQueryEXT;

  /** @suppress {duplicate } */
  var _glIsRenderbuffer = (renderbuffer) => {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    };
  var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;

  /** @suppress {duplicate } */
  var _glIsSampler = (id) => {
      var sampler = GL.samplers[id];
      if (!sampler) return 0;
      return GLctx.isSampler(sampler);
    };
  var _emscripten_glIsSampler = _glIsSampler;

  /** @suppress {duplicate } */
  var _glIsShader = (shader) => {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    };
  var _emscripten_glIsShader = _glIsShader;

  /** @suppress {duplicate } */
  var _glIsSync = (sync) => GLctx.isSync(GL.syncs[sync]);
  var _emscripten_glIsSync = _glIsSync;

  /** @suppress {duplicate } */
  var _glIsTexture = (id) => {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    };
  var _emscripten_glIsTexture = _glIsTexture;

  /** @suppress {duplicate } */
  var _glIsTransformFeedback = (id) => GLctx.isTransformFeedback(GL.transformFeedbacks[id]);
  var _emscripten_glIsTransformFeedback = _glIsTransformFeedback;

  /** @suppress {duplicate } */
  var _glIsVertexArray = (array) => {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx.isVertexArray(vao);
    };
  var _emscripten_glIsVertexArray = _glIsVertexArray;

  
  /** @suppress {duplicate } */
  var _glIsVertexArrayOES = _glIsVertexArray;
  var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;

  /** @suppress {duplicate } */
  var _glLineWidth = (x0) => GLctx.lineWidth(x0);
  var _emscripten_glLineWidth = _glLineWidth;

  /** @suppress {duplicate } */
  var _glLinkProgram = (program) => {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    };
  var _emscripten_glLinkProgram = _glLinkProgram;

  /** @suppress {duplicate } */
  var _glPauseTransformFeedback = () => GLctx.pauseTransformFeedback();
  var _emscripten_glPauseTransformFeedback = _glPauseTransformFeedback;

  /** @suppress {duplicate } */
  var _glPixelStorei = (pname, param) => {
      if (pname == 3317) {
        GL.unpackAlignment = param;
      } else if (pname == 3314) {
        GL.unpackRowLength = param;
      }
      GLctx.pixelStorei(pname, param);
    };
  var _emscripten_glPixelStorei = _glPixelStorei;

  /** @suppress {duplicate } */
  var _glPolygonModeWEBGL = (face, mode) => {
      GLctx.webglPolygonMode['polygonModeWEBGL'](face, mode);
    };
  var _emscripten_glPolygonModeWEBGL = _glPolygonModeWEBGL;

  /** @suppress {duplicate } */
  var _glPolygonOffset = (x0, x1) => GLctx.polygonOffset(x0, x1);
  var _emscripten_glPolygonOffset = _glPolygonOffset;

  /** @suppress {duplicate } */
  var _glPolygonOffsetClampEXT = (factor, units, clamp) => {
      GLctx.extPolygonOffsetClamp['polygonOffsetClampEXT'](factor, units, clamp);
    };
  var _emscripten_glPolygonOffsetClampEXT = _glPolygonOffsetClampEXT;

  /** @suppress {duplicate } */
  var _glProgramBinary = (program, binaryFormat, binary, length) => {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    };
  var _emscripten_glProgramBinary = _glProgramBinary;

  /** @suppress {duplicate } */
  var _glProgramParameteri = (program, pname, value) => {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    };
  var _emscripten_glProgramParameteri = _glProgramParameteri;

  /** @suppress {duplicate } */
  var _glQueryCounterEXT = (id, target) => {
      GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
    };
  var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;

  /** @suppress {duplicate } */
  var _glReadBuffer = (x0) => GLctx.readBuffer(x0);
  var _emscripten_glReadBuffer = _glReadBuffer;

  var computeUnpackAlignedImageSize = (width, height, sizePerPixel) => {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = (GL.unpackRowLength || width) * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, GL.unpackAlignment);
      return height * alignedRowSize;
    };
  
  var colorChannelsInGlTextureFormat = (format) => {
      // Micro-optimizations for size: map format to size by subtracting smallest
      // enum value (0x1902) from all values first.  Also omit the most common
      // size value (1) from the list, which is assumed by formats not on the
      // list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
        // 0x1903 /* GL_RED */ - 0x1902: 1,
        26917: 2,
        26918: 2,
        // 0x8D94 /* GL_RED_INTEGER */ - 0x1902: 1,
        29846: 3,
        29847: 4
      };
      return colorChannels[format - 0x1902]||1;
    };
  
  var heapObjectForWebGLType = (type) => {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
      if (type == 0) return HEAP8;
  
      if (type == 1) return HEAPU8;
  
      if (type == 2) return HEAP16;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        || type == 28520
        || type == 30779
        || type == 30782
        )
        return HEAPU32;
  
      return HEAPU16;
    };
  
  var toTypedArrayIndex = (pointer, heap) =>
      pointer >>> (31 - Math.clz32(heap.BYTES_PER_ELEMENT));
  
  var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
      var heap = heapObjectForWebGLType(type);
      var sizePerPixel = colorChannelsInGlTextureFormat(format) * heap.BYTES_PER_ELEMENT;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel);
      return heap.subarray(toTypedArrayIndex(pixels, heap), toTypedArrayIndex(pixels + bytes, heap));
    };
  
  
  
  /** @suppress {duplicate } */
  var _glReadPixels = (x, y, width, height, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelPackBufferBinding) {
          GLctx.readPixels(x, y, width, height, format, type, pixels);
          return;
        }
        var heap = heapObjectForWebGLType(type);
        var target = toTypedArrayIndex(pixels, heap);
        GLctx.readPixels(x, y, width, height, format, type, heap, target);
        return;
      }
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    };
  var _emscripten_glReadPixels = _glReadPixels;

  /** @suppress {duplicate } */
  var _glReleaseShaderCompiler = () => {
      // NOP (as allowed by GLES 2.0 spec)
    };
  var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;

  /** @suppress {duplicate } */
  var _glRenderbufferStorage = (x0, x1, x2, x3) => GLctx.renderbufferStorage(x0, x1, x2, x3);
  var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;

  /** @suppress {duplicate } */
  var _glRenderbufferStorageMultisample = (x0, x1, x2, x3, x4) => GLctx.renderbufferStorageMultisample(x0, x1, x2, x3, x4);
  var _emscripten_glRenderbufferStorageMultisample = _glRenderbufferStorageMultisample;

  /** @suppress {duplicate } */
  var _glResumeTransformFeedback = () => GLctx.resumeTransformFeedback();
  var _emscripten_glResumeTransformFeedback = _glResumeTransformFeedback;

  /** @suppress {duplicate } */
  var _glSampleCoverage = (value, invert) => {
      GLctx.sampleCoverage(value, !!invert);
    };
  var _emscripten_glSampleCoverage = _glSampleCoverage;

  /** @suppress {duplicate } */
  var _glSamplerParameterf = (sampler, pname, param) => {
      GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
    };
  var _emscripten_glSamplerParameterf = _glSamplerParameterf;

  /** @suppress {duplicate } */
  var _glSamplerParameterfv = (sampler, pname, params) => {
      var param = HEAPF32[((params)>>2)];
      GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
    };
  var _emscripten_glSamplerParameterfv = _glSamplerParameterfv;

  /** @suppress {duplicate } */
  var _glSamplerParameteri = (sampler, pname, param) => {
      GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
    };
  var _emscripten_glSamplerParameteri = _glSamplerParameteri;

  /** @suppress {duplicate } */
  var _glSamplerParameteriv = (sampler, pname, params) => {
      var param = HEAP32[((params)>>2)];
      GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
    };
  var _emscripten_glSamplerParameteriv = _glSamplerParameteriv;

  /** @suppress {duplicate } */
  var _glScissor = (x0, x1, x2, x3) => GLctx.scissor(x0, x1, x2, x3);
  var _emscripten_glScissor = _glScissor;

  /** @suppress {duplicate } */
  var _glShaderBinary = (count, shaders, binaryformat, binary, length) => {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    };
  var _emscripten_glShaderBinary = _glShaderBinary;

  /** @suppress {duplicate } */
  var _glShaderSource = (shader, count, string, length) => {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    };
  var _emscripten_glShaderSource = _glShaderSource;

  /** @suppress {duplicate } */
  var _glStencilFunc = (x0, x1, x2) => GLctx.stencilFunc(x0, x1, x2);
  var _emscripten_glStencilFunc = _glStencilFunc;

  /** @suppress {duplicate } */
  var _glStencilFuncSeparate = (x0, x1, x2, x3) => GLctx.stencilFuncSeparate(x0, x1, x2, x3);
  var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;

  /** @suppress {duplicate } */
  var _glStencilMask = (x0) => GLctx.stencilMask(x0);
  var _emscripten_glStencilMask = _glStencilMask;

  /** @suppress {duplicate } */
  var _glStencilMaskSeparate = (x0, x1) => GLctx.stencilMaskSeparate(x0, x1);
  var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;

  /** @suppress {duplicate } */
  var _glStencilOp = (x0, x1, x2) => GLctx.stencilOp(x0, x1, x2);
  var _emscripten_glStencilOp = _glStencilOp;

  /** @suppress {duplicate } */
  var _glStencilOpSeparate = (x0, x1, x2, x3) => GLctx.stencilOpSeparate(x0, x1, x2, x3);
  var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;

  
  
  
  /** @suppress {duplicate } */
  var _glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
          return;
        }
        if (pixels) {
          var heap = heapObjectForWebGLType(type);
          var index = toTypedArrayIndex(pixels, heap);
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, index);
          return;
        }
      }
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null;
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixelData);
    };
  var _emscripten_glTexImage2D = _glTexImage2D;

  
  /** @suppress {duplicate } */
  var _glTexImage3D = (target, level, internalFormat, width, height, depth, border, format, type, pixels) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, heap, toTypedArrayIndex(pixels, heap));
      } else {
        GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, null);
      }
    };
  var _emscripten_glTexImage3D = _glTexImage3D;

  /** @suppress {duplicate } */
  var _glTexParameterf = (x0, x1, x2) => GLctx.texParameterf(x0, x1, x2);
  var _emscripten_glTexParameterf = _glTexParameterf;

  /** @suppress {duplicate } */
  var _glTexParameterfv = (target, pname, params) => {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    };
  var _emscripten_glTexParameterfv = _glTexParameterfv;

  /** @suppress {duplicate } */
  var _glTexParameteri = (x0, x1, x2) => GLctx.texParameteri(x0, x1, x2);
  var _emscripten_glTexParameteri = _glTexParameteri;

  /** @suppress {duplicate } */
  var _glTexParameteriv = (target, pname, params) => {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    };
  var _emscripten_glTexParameteriv = _glTexParameteriv;

  /** @suppress {duplicate } */
  var _glTexStorage2D = (x0, x1, x2, x3, x4) => GLctx.texStorage2D(x0, x1, x2, x3, x4);
  var _emscripten_glTexStorage2D = _glTexStorage2D;

  /** @suppress {duplicate } */
  var _glTexStorage3D = (x0, x1, x2, x3, x4, x5) => GLctx.texStorage3D(x0, x1, x2, x3, x4, x5);
  var _emscripten_glTexStorage3D = _glTexStorage3D;

  
  
  
  /** @suppress {duplicate } */
  var _glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
          return;
        }
        if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, toTypedArrayIndex(pixels, heap));
          return;
        }
      }
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0) : null;
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    };
  var _emscripten_glTexSubImage2D = _glTexSubImage2D;

  
  /** @suppress {duplicate } */
  var _glTexSubImage3D = (target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, toTypedArrayIndex(pixels, heap));
      } else {
        GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
      }
    };
  var _emscripten_glTexSubImage3D = _glTexSubImage3D;

  /** @suppress {duplicate } */
  var _glTransformFeedbackVaryings = (program, count, varyings, bufferMode) => {
      program = GL.programs[program];
      var vars = [];
      for (var i = 0; i < count; i++)
        vars.push(UTF8ToString(HEAP32[(((varyings)+(i*4))>>2)]));
  
      GLctx.transformFeedbackVaryings(program, vars, bufferMode);
    };
  var _emscripten_glTransformFeedbackVaryings = _glTransformFeedbackVaryings;

  
  /** @suppress {duplicate } */
  var _glUniform1f = (location, v0) => {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    };
  var _emscripten_glUniform1f = _glUniform1f;

  
  var miniTempWebGLFloatBuffers = [];
  
  /** @suppress {duplicate } */
  var _glUniform1fv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, ((value)>>2), count);
        return;
      }
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform1fv = _glUniform1fv;

  
  /** @suppress {duplicate } */
  var _glUniform1i = (location, v0) => {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    };
  var _emscripten_glUniform1i = _glUniform1i;

  
  var miniTempWebGLIntBuffers = [];
  
  /** @suppress {duplicate } */
  var _glUniform1iv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, ((value)>>2), count);
        return;
      }
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform1iv = _glUniform1iv;

  /** @suppress {duplicate } */
  var _glUniform1ui = (location, v0) => {
      GLctx.uniform1ui(webglGetUniformLocation(location), v0);
    };
  var _emscripten_glUniform1ui = _glUniform1ui;

  /** @suppress {duplicate } */
  var _glUniform1uiv = (location, count, value) => {
      count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, ((value)>>2), count);
    };
  var _emscripten_glUniform1uiv = _glUniform1uiv;

  
  /** @suppress {duplicate } */
  var _glUniform2f = (location, v0, v1) => {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    };
  var _emscripten_glUniform2f = _glUniform2f;

  
  
  /** @suppress {duplicate } */
  var _glUniform2fv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, ((value)>>2), count*2);
        return;
      }
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform2fv = _glUniform2fv;

  
  /** @suppress {duplicate } */
  var _glUniform2i = (location, v0, v1) => {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    };
  var _emscripten_glUniform2i = _glUniform2i;

  
  
  /** @suppress {duplicate } */
  var _glUniform2iv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, ((value)>>2), count*2);
        return;
      }
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform2iv = _glUniform2iv;

  /** @suppress {duplicate } */
  var _glUniform2ui = (location, v0, v1) => {
      GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1);
    };
  var _emscripten_glUniform2ui = _glUniform2ui;

  /** @suppress {duplicate } */
  var _glUniform2uiv = (location, count, value) => {
      count && GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, ((value)>>2), count*2);
    };
  var _emscripten_glUniform2uiv = _glUniform2uiv;

  
  /** @suppress {duplicate } */
  var _glUniform3f = (location, v0, v1, v2) => {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    };
  var _emscripten_glUniform3f = _glUniform3f;

  
  
  /** @suppress {duplicate } */
  var _glUniform3fv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, ((value)>>2), count*3);
        return;
      }
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform3fv = _glUniform3fv;

  
  /** @suppress {duplicate } */
  var _glUniform3i = (location, v0, v1, v2) => {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    };
  var _emscripten_glUniform3i = _glUniform3i;

  
  
  /** @suppress {duplicate } */
  var _glUniform3iv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, ((value)>>2), count*3);
        return;
      }
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform3iv = _glUniform3iv;

  /** @suppress {duplicate } */
  var _glUniform3ui = (location, v0, v1, v2) => {
      GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
    };
  var _emscripten_glUniform3ui = _glUniform3ui;

  /** @suppress {duplicate } */
  var _glUniform3uiv = (location, count, value) => {
      count && GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, ((value)>>2), count*3);
    };
  var _emscripten_glUniform3uiv = _glUniform3uiv;

  
  /** @suppress {duplicate } */
  var _glUniform4f = (location, v0, v1, v2, v3) => {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
  var _emscripten_glUniform4f = _glUniform4f;

  
  
  /** @suppress {duplicate } */
  var _glUniform4fv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, ((value)>>2), count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 4;
        for (var i = 0; i < count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform4fv = _glUniform4fv;

  
  /** @suppress {duplicate } */
  var _glUniform4i = (location, v0, v1, v2, v3) => {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
  var _emscripten_glUniform4i = _glUniform4i;

  
  
  /** @suppress {duplicate } */
  var _glUniform4iv = (location, count, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, ((value)>>2), count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform4iv = _glUniform4iv;

  /** @suppress {duplicate } */
  var _glUniform4ui = (location, v0, v1, v2, v3) => {
      GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
  var _emscripten_glUniform4ui = _glUniform4ui;

  /** @suppress {duplicate } */
  var _glUniform4uiv = (location, count, value) => {
      count && GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, ((value)>>2), count*4);
    };
  var _emscripten_glUniform4uiv = _glUniform4uiv;

  /** @suppress {duplicate } */
  var _glUniformBlockBinding = (program, uniformBlockIndex, uniformBlockBinding) => {
      program = GL.programs[program];
  
      GLctx.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);
    };
  var _emscripten_glUniformBlockBinding = _glUniformBlockBinding;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix2fv = (location, count, transpose, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix2x3fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*6);
    };
  var _emscripten_glUniformMatrix2x3fv = _glUniformMatrix2x3fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix2x4fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*8);
    };
  var _emscripten_glUniformMatrix2x4fv = _glUniformMatrix2x4fv;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix3fv = (location, count, transpose, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*9);
        return;
      }
  
      if (count <= 32) {
        // avoid allocation when uploading few enough uniforms
        count *= 9;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 9) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
          view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
          view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
          view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
          view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*36)>>2));
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix3x2fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*6);
    };
  var _emscripten_glUniformMatrix3x2fv = _glUniformMatrix3x2fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix3x4fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*12);
    };
  var _emscripten_glUniformMatrix3x4fv = _glUniformMatrix3x4fv;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix4fv = (location, count, transpose, value) => {
  
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*16);
        return;
      }
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[16*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 16;
        for (var i = 0; i < count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*64)>>2));
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix4x2fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*8);
    };
  var _emscripten_glUniformMatrix4x2fv = _glUniformMatrix4x2fv;

  /** @suppress {duplicate } */
  var _glUniformMatrix4x3fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, ((value)>>2), count*12);
    };
  var _emscripten_glUniformMatrix4x3fv = _glUniformMatrix4x3fv;

  /** @suppress {duplicate } */
  var _glUseProgram = (program) => {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    };
  var _emscripten_glUseProgram = _glUseProgram;

  /** @suppress {duplicate } */
  var _glValidateProgram = (program) => {
      GLctx.validateProgram(GL.programs[program]);
    };
  var _emscripten_glValidateProgram = _glValidateProgram;

  /** @suppress {duplicate } */
  var _glVertexAttrib1f = (x0, x1) => GLctx.vertexAttrib1f(x0, x1);
  var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;

  /** @suppress {duplicate } */
  var _glVertexAttrib1fv = (index, v) => {
  
      GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
    };
  var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib2f = (x0, x1, x2) => GLctx.vertexAttrib2f(x0, x1, x2);
  var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;

  /** @suppress {duplicate } */
  var _glVertexAttrib2fv = (index, v) => {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    };
  var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib3f = (x0, x1, x2, x3) => GLctx.vertexAttrib3f(x0, x1, x2, x3);
  var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;

  /** @suppress {duplicate } */
  var _glVertexAttrib3fv = (index, v) => {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    };
  var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib4f = (x0, x1, x2, x3, x4) => GLctx.vertexAttrib4f(x0, x1, x2, x3, x4);
  var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;

  /** @suppress {duplicate } */
  var _glVertexAttrib4fv = (index, v) => {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    };
  var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;

  /** @suppress {duplicate } */
  var _glVertexAttribDivisor = (index, divisor) => {
      GLctx.vertexAttribDivisor(index, divisor);
    };
  var _emscripten_glVertexAttribDivisor = _glVertexAttribDivisor;

  
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;

  
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorARB = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorARB = _glVertexAttribDivisorARB;

  
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorEXT = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorEXT = _glVertexAttribDivisorEXT;

  
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorNV = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorNV = _glVertexAttribDivisorNV;

  /** @suppress {duplicate } */
  var _glVertexAttribI4i = (x0, x1, x2, x3, x4) => GLctx.vertexAttribI4i(x0, x1, x2, x3, x4);
  var _emscripten_glVertexAttribI4i = _glVertexAttribI4i;

  /** @suppress {duplicate } */
  var _glVertexAttribI4iv = (index, v) => {
      GLctx.vertexAttribI4i(index, HEAP32[v>>2], HEAP32[v+4>>2], HEAP32[v+8>>2], HEAP32[v+12>>2]);
    };
  var _emscripten_glVertexAttribI4iv = _glVertexAttribI4iv;

  /** @suppress {duplicate } */
  var _glVertexAttribI4ui = (x0, x1, x2, x3, x4) => GLctx.vertexAttribI4ui(x0, x1, x2, x3, x4);
  var _emscripten_glVertexAttribI4ui = _glVertexAttribI4ui;

  /** @suppress {duplicate } */
  var _glVertexAttribI4uiv = (index, v) => {
      GLctx.vertexAttribI4ui(index, HEAPU32[v>>2], HEAPU32[v+4>>2], HEAPU32[v+8>>2], HEAPU32[v+12>>2]);
    };
  var _emscripten_glVertexAttribI4uiv = _glVertexAttribI4uiv;

  /** @suppress {duplicate } */
  var _glVertexAttribIPointer = (index, size, type, stride, ptr) => {
      GLctx.vertexAttribIPointer(index, size, type, stride, ptr);
    };
  var _emscripten_glVertexAttribIPointer = _glVertexAttribIPointer;

  /** @suppress {duplicate } */
  var _glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    };
  var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;

  /** @suppress {duplicate } */
  var _glViewport = (x0, x1, x2, x3) => GLctx.viewport(x0, x1, x2, x3);
  var _emscripten_glViewport = _glViewport;

  /** @suppress {duplicate } */
  var _glWaitSync = (sync, flags, timeout) => {
      // See WebGL2 vs GLES3 difference on GL_TIMEOUT_IGNORED above (https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15)
      timeout = Number(timeout);
      GLctx.waitSync(GL.syncs[sync], flags, timeout);
    };
  var _emscripten_glWaitSync = _glWaitSync;

  var _emscripten_has_asyncify = () => 1;

  
  
  var doRequestFullscreen = (target, strategy) => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      if (!target.requestFullscreen
        && !target.webkitRequestFullscreen
        ) {
        return -3;
      }
  
      // Queue this function call if we're not currently in an event handler and
      // the user saw it appropriate to do so.
      if (!JSEvents.canPerformEventHandlerRequests()) {
        if (strategy.deferUntilInEventHandler) {
          JSEvents.deferCall(JSEvents_requestFullscreen, 1 /* priority over pointer lock */, [target, strategy]);
          return 1;
        }
        return -2;
      }
  
      return JSEvents_requestFullscreen(target, strategy);
    };
  var _emscripten_request_fullscreen_strategy = (target, deferUntilInEventHandler, fullscreenStrategy) => {
      var strategy = {
        scaleMode: HEAP32[((fullscreenStrategy)>>2)],
        canvasResolutionScaleMode: HEAP32[(((fullscreenStrategy)+(4))>>2)],
        filteringMode: HEAP32[(((fullscreenStrategy)+(8))>>2)],
        deferUntilInEventHandler,
        canvasResizedCallback: HEAP32[(((fullscreenStrategy)+(12))>>2)],
        canvasResizedCallbackUserData: HEAP32[(((fullscreenStrategy)+(16))>>2)]
      };
  
      return doRequestFullscreen(target, strategy);
    };

  
  
  var _emscripten_request_pointerlock = (target, deferUntilInEventHandler) => {
      target = findEventTarget(target);
      if (!target) return -4;
      if (!target.requestPointerLock
        ) {
        return -1;
      }
  
      // Queue this function call if we're not currently in an event handler and
      // the user saw it appropriate to do so.
      if (!JSEvents.canPerformEventHandlerRequests()) {
        if (deferUntilInEventHandler) {
          JSEvents.deferCall(requestPointerLock, 2 /* priority below fullscreen */, [target]);
          return 1;
        }
        return -2;
      }
  
      return requestPointerLock(target);
    };

  var abortOnCannotGrowMemory = (requestedSize) => {
      abort(`Cannot enlarge memory arrays to size ${requestedSize} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${HEAP8.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`);
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  /** @suppress {checkTypes} */
  var _emscripten_sample_gamepad_data = () => {
      try {
        if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads())
          ? 0 : -1;
      } catch(e) {
        err(`navigator.getGamepads() exists, but failed to execute with exception ${e}. Disabling Gamepad access.`);
        navigator.getGamepads = null; // Disable getGamepads() so that it won't be attempted to be used again.
      }
      return -1;
    };

  
  
  var registerBeforeUnloadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) => {
      var beforeUnloadEventHandlerFunc = (e = event) => {
        // Note: This is always called on the main browser thread, since it needs synchronously return a value!
        var confirmationMessage = ((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, 0, userData);
  
        if (confirmationMessage) {
          confirmationMessage = UTF8ToString(confirmationMessage);
        }
        if (confirmationMessage) {
          e.preventDefault();
          e.returnValue = confirmationMessage;
          return confirmationMessage;
        }
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString,
        callbackfunc,
        handlerFunc: beforeUnloadEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_beforeunload_callback_on_thread = (userData, callbackfunc, targetThread) => {
      if (typeof onbeforeunload == 'undefined') return -1;
      // beforeunload callback can only be registered on the main browser thread, because the page will go away immediately after returning from the handler,
      // and there is no time to start proxying it anywhere.
      if (targetThread !== 1) return -5;
      return registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload");
    };

  
  
  
  var registerFocusEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.focusEvent ||= _malloc(256);
  
      var focusEventHandlerFunc = (e = event) => {
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : '';
  
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, focusEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString,
        callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_blur_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);


  var _emscripten_set_element_css_size = (target, width, height) => {
      target = findEventTarget(target);
      if (!target) return -4;
  
      target.style.width = width + "px";
      target.style.height = height + "px";
  
      return 0;
    };

  var _emscripten_set_focus_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);

  
  
  
  var fillFullscreenChangeEventData = (eventStruct) => {
      var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var isFullscreen = !!fullscreenElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isFullscreen;
      HEAP8[(eventStruct)+(1)] = JSEvents.fullscreenEnabled();
      // If transitioning to fullscreen, report info about the element that is now fullscreen.
      // If transitioning to windowed mode, report info about the element that just was fullscreen.
      var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
      var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
      var id = reportedElement?.id || '';
      stringToUTF8(nodeName, eventStruct + 2, 128);
      stringToUTF8(id, eventStruct + 130, 128);
      HEAP32[(((eventStruct)+(260))>>2)] = reportedElement ? reportedElement.clientWidth : 0;
      HEAP32[(((eventStruct)+(264))>>2)] = reportedElement ? reportedElement.clientHeight : 0;
      HEAP32[(((eventStruct)+(268))>>2)] = screen.width;
      HEAP32[(((eventStruct)+(272))>>2)] = screen.height;
      if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement;
      }
    };
  
  var registerFullscreenChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.fullscreenChangeEvent ||= _malloc(276);
  
      var fullscreenChangeEventhandlerFunc = (e = event) => {
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
  
        fillFullscreenChangeEventData(fullscreenChangeEvent);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_fullscreenchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
  
      return registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
    };

  
  
  
  var registerGamepadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.gamepadEvent ||= _malloc(1240);
  
      var gamepadEventHandlerFunc = (e = event) => {
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, gamepadEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString,
        callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_gamepadconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
    };

  
  var _emscripten_set_gamepaddisconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
    };

  
  
  
  var registerKeyEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.keyEvent ||= _malloc(160);
  
      var keyEventHandlerFunc = (e) => {
        assert(e);
  
        var keyEventData = JSEvents.keyEvent;
        HEAPF64[((keyEventData)>>3)] = e.timeStamp;
  
        var idx = ((keyEventData)>>2);
  
        HEAP32[idx + 2] = e.location;
        HEAP8[keyEventData + 12] = e.ctrlKey;
        HEAP8[keyEventData + 13] = e.shiftKey;
        HEAP8[keyEventData + 14] = e.altKey;
        HEAP8[keyEventData + 15] = e.metaKey;
        HEAP8[keyEventData + 16] = e.repeat;
        HEAP32[idx + 5] = e.charCode;
        HEAP32[idx + 6] = e.keyCode;
        HEAP32[idx + 7] = e.which;
        stringToUTF8(e.key || '', keyEventData + 32, 32);
        stringToUTF8(e.code || '', keyEventData + 64, 32);
        stringToUTF8(e.char || '', keyEventData + 96, 32);
        stringToUTF8(e.locale || '', keyEventData + 128, 32);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, keyEventData, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString,
        callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_keydown_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);

  var _emscripten_set_keypress_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);

  var _emscripten_set_keyup_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);

  
  var fillMouseEventData = (eventStruct, e, target) => {
      assert(eventStruct % 4 == 0);
      HEAPF64[((eventStruct)>>3)] = e.timeStamp;
      var idx = ((eventStruct)>>2);
      HEAP32[idx + 2] = e.screenX;
      HEAP32[idx + 3] = e.screenY;
      HEAP32[idx + 4] = e.clientX;
      HEAP32[idx + 5] = e.clientY;
      HEAP8[eventStruct + 24] = e.ctrlKey;
      HEAP8[eventStruct + 25] = e.shiftKey;
      HEAP8[eventStruct + 26] = e.altKey;
      HEAP8[eventStruct + 27] = e.metaKey;
      HEAP16[idx*2 + 14] = e.button;
      HEAP16[idx*2 + 15] = e.buttons;
  
      HEAP32[idx + 8] = e["movementX"]
        ;
  
      HEAP32[idx + 9] = e["movementY"]
        ;
  
      // Note: rect contains doubles (truncated to placate SAFE_HEAP, which is the same behaviour when writing to HEAP32 anyway)
      var rect = getBoundingClientRect(target);
      HEAP32[idx + 10] = e.clientX - (rect.left | 0);
      HEAP32[idx + 11] = e.clientY - (rect.top  | 0);
    };
  
  
  var registerMouseEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.mouseEvent ||= _malloc(64);
      target = findEventTarget(target);
  
      var mouseEventHandlerFunc = (e = event) => {
        // TODO: Make this access thread safe, or this could update live while app is reading it.
        fillMouseEventData(JSEvents.mouseEvent, e, target);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString != 'mousemove' && eventTypeString != 'mouseenter' && eventTypeString != 'mouseleave', // Mouse move events do not allow fullscreen/pointer lock requests to be handled in them!
        eventTypeString,
        callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_mousedown_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);

  var _emscripten_set_mouseenter_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);

  var _emscripten_set_mouseleave_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);

  var _emscripten_set_mousemove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);

  var _emscripten_set_mouseup_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);

  
  
  var fillPointerlockChangeEventData = (eventStruct) => {
      var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var isPointerlocked = !!pointerLockElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isPointerlocked;
      var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
      var id = pointerLockElement?.id || '';
      stringToUTF8(nodeName, eventStruct + 1, 128);
      stringToUTF8(id, eventStruct + 129, 128);
    };
  
  var registerPointerlockChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.pointerlockChangeEvent ||= _malloc(257);
  
      var pointerlockChangeEventHandlerFunc = (e = event) => {
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  /** @suppress {missingProperties} */
  var _emscripten_set_pointerlockchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      // TODO: Currently not supported in pthreads or in --proxy-to-worker mode. (In pthreads mode, document object is not defined)
      if (!document || !document.body || (!document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock)) {
        return -1;
      }
  
      target = findEventTarget(target);
      if (!target) return -4;
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
      return registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
    };

  
  
  var registerUiEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.uiEvent ||= _malloc(36);
  
      target = findEventTarget(target);
  
      var uiEventHandlerFunc = (e = event) => {
        if (e.target != target) {
          // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
          // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
          // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
          // causing a new scroll, etc..
          return;
        }
        var b = document.body; // Take document.body to a variable, Closure compiler does not outline access to it on its own.
        if (!b) {
          // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
          return;
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[((uiEvent)>>2)] = 0; // always zero for resize and scroll
        HEAP32[(((uiEvent)+(4))>>2)] = b.clientWidth;
        HEAP32[(((uiEvent)+(8))>>2)] = b.clientHeight;
        HEAP32[(((uiEvent)+(12))>>2)] = innerWidth;
        HEAP32[(((uiEvent)+(16))>>2)] = innerHeight;
        HEAP32[(((uiEvent)+(20))>>2)] = outerWidth;
        HEAP32[(((uiEvent)+(24))>>2)] = outerHeight;
        HEAP32[(((uiEvent)+(28))>>2)] = pageXOffset | 0; // scroll offsets are float
        HEAP32[(((uiEvent)+(32))>>2)] = pageYOffset | 0;
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, uiEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_resize_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);

  
  
  
  var registerTouchEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.touchEvent ||= _malloc(1552);
  
      target = findEventTarget(target);
  
      var touchEventHandlerFunc = (e) => {
        assert(e);
        var t, touches = {}, et = e.touches;
        // To ease marshalling different kinds of touches that browser reports (all touches are listed in e.touches,
        // only changed touches in e.changedTouches, and touches on target at a.targetTouches), mark a boolean in
        // each Touch object so that we can later loop only once over all touches we see to marshall over to Wasm.
  
        for (let t of et) {
          // Browser might recycle the generated Touch objects between each frame (Firefox on Android), so reset any
          // changed/target states we may have set from previous frame.
          t.isChanged = t.onTarget = 0;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the changedTouches list.
        for (let t of e.changedTouches) {
          t.isChanged = 1;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the targetTouches list.
        for (let t of e.targetTouches) {
          touches[t.identifier].onTarget = 1;
        }
  
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[((touchEvent)>>3)] = e.timeStamp;
        HEAP8[touchEvent + 12] = e.ctrlKey;
        HEAP8[touchEvent + 13] = e.shiftKey;
        HEAP8[touchEvent + 14] = e.altKey;
        HEAP8[touchEvent + 15] = e.metaKey;
        var idx = touchEvent + 16;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (let t of Object.values(touches)) {
          var idx32 = ((idx)>>2); // Pre-shift the ptr to index to HEAP32 to save code size
          HEAP32[idx32 + 0] = t.identifier;
          HEAP32[idx32 + 1] = t.screenX;
          HEAP32[idx32 + 2] = t.screenY;
          HEAP32[idx32 + 3] = t.clientX;
          HEAP32[idx32 + 4] = t.clientY;
          HEAP32[idx32 + 5] = t.pageX;
          HEAP32[idx32 + 6] = t.pageY;
          HEAP8[idx + 28] = t.isChanged;
          HEAP8[idx + 29] = t.onTarget;
          HEAP32[idx32 + 8] = t.clientX - (targetRect.left | 0);
          HEAP32[idx32 + 9] = t.clientY - (targetRect.top  | 0);
  
          idx += 48;
  
          if (++numTouches > 31) {
            break;
          }
        }
        HEAP32[(((touchEvent)+(8))>>2)] = numTouches;
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, touchEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString == 'touchstart' || eventTypeString == 'touchend',
        eventTypeString,
        callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_touchcancel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);

  var _emscripten_set_touchend_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);

  var _emscripten_set_touchmove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);

  var _emscripten_set_touchstart_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);

  
  var fillVisibilityChangeEventData = (eventStruct) => {
      var visibilityStates = [ "hidden", "visible", "prerender", "unloaded" ];
      var visibilityState = visibilityStates.indexOf(document.visibilityState);
  
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = document.hidden;
      HEAP32[(((eventStruct)+(4))>>2)] = visibilityState;
    };
  
  var registerVisibilityChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.visibilityChangeEvent ||= _malloc(8);
  
      var visibilityChangeEventHandlerFunc = (e = event) => {
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
  
        fillVisibilityChangeEventData(visibilityChangeEvent);
  
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_visibilitychange_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
    if (!specialHTMLTargets[1]) {
      return -4;
    }
      return registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
    };

  
  
  var registerWheelEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.wheelEvent ||= _malloc(96);
  
      // The DOM Level 3 events spec event 'wheel'
      var wheelHandlerFunc = (e = event) => {
        var wheelEvent = JSEvents.wheelEvent;
        fillMouseEventData(wheelEvent, e, target);
        HEAPF64[(((wheelEvent)+(64))>>3)] = e["deltaX"];
        HEAPF64[(((wheelEvent)+(72))>>3)] = e["deltaY"];
        HEAPF64[(((wheelEvent)+(80))>>3)] = e["deltaZ"];
        HEAP32[(((wheelEvent)+(88))>>2)] = e["deltaMode"];
        if (((a1, a2, a3) => dynCall_iiii(callbackfunc, a1, a2, a3))(eventTypeId, wheelEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: true,
        eventTypeString,
        callbackfunc,
        handlerFunc: wheelHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_wheel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      target = findEventTarget(target);
      if (!target) return -4;
      if (typeof target.onwheel != 'undefined') {
        return registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
      } else {
        return -1;
      }
    };

  
  var _emscripten_set_window_title = (title) => document.title = UTF8ToString(title);

  var _emscripten_sleep = (ms) => Asyncify.handleSleep((wakeUp) => safeSetTimeout(wakeUp, ms));
  _emscripten_sleep.isAsync = true;

  var ENV = {
  };
  
  var getExecutableName = () => thisProgram || './this.program';
  var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
  
  var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      var envp = 0;
      for (var string of getEnvStrings()) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(envp))>>2)] = ptr;
        bufSize += stringToUTF8(string, ptr, Infinity) + 1;
        envp += 4;
      }
      return 0;
    };

  
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      for (var string of strings) {
        bufSize += lengthBytesUTF8(string) + 1;
      }
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    };


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
  
  
  try {
  
      if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      HEAP64[((newOffset)>>3)] = BigInt(stream.position);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) {
          // No more space to write.
          break;
        }
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }




  var listenOnce = (object, event, func) =>
      object.addEventListener(event, func, { 'once': true });
  /** @param {Object=} elements */
  var autoResumeAudioContext = (ctx, elements) => {
      if (!elements) {
        elements = [document, document.getElementById('canvas')];
      }
      ['keydown', 'mousedown', 'touchstart'].forEach((event) => {
        elements.forEach((element) => {
          if (element) {
            listenOnce(element, event, () => {
              if (ctx.state === 'suspended') ctx.resume();
            });
          }
        });
      });
    };




  var wasmTableMirror = [];
  
  /** @type {WebAssembly.Table} */
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        /** @suppress {checkTypes} */
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      /** @suppress {checkTypes} */
      assert(wasmTable.get(funcPtr) == func, 'JavaScript-side Wasm function table mirror is out of date!');
      return func;
    };


  var runAndAbortIfError = (func) => {
      try {
        return func();
      } catch (e) {
        abort(e);
      }
    };
  
  
  var sigToWasmTypes = (sig) => {
      var typeNames = {
        'i': 'i32',
        'j': 'i64',
        'f': 'f32',
        'd': 'f64',
        'e': 'externref',
        'p': 'i32',
      };
      var type = {
        parameters: [],
        results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
      };
      for (var i = 1; i < sig.length; ++i) {
        assert(sig[i] in typeNames, 'invalid signature char: ' + sig[i]);
        type.parameters.push(typeNames[sig[i]]);
      }
      return type;
    };
  
  var runtimeKeepalivePush = () => {
      runtimeKeepaliveCounter += 1;
    };
  
  var runtimeKeepalivePop = () => {
      assert(runtimeKeepaliveCounter > 0);
      runtimeKeepaliveCounter -= 1;
    };
  
  
  var Asyncify = {
  instrumentWasmImports(imports) {
        var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
  
        for (let [x, original] of Object.entries(imports)) {
          if (typeof original == 'function') {
            let isAsyncifyImport = original.isAsync || importPattern.test(x);
            imports[x] = (...args) => {
              var originalAsyncifyState = Asyncify.state;
              try {
                return original(...args);
              } finally {
                // Only asyncify-declared imports are allowed to change the
                // state.
                // Changing the state from normal to disabled is allowed (in any
                // function) as that is what shutdown does (and we don't have an
                // explicit list of shutdown imports).
                var changedToDisabled =
                      originalAsyncifyState === Asyncify.State.Normal &&
                      Asyncify.state        === Asyncify.State.Disabled;
                // invoke_* functions are allowed to change the state if we do
                // not ignore indirect calls.
                var ignoredInvoke = x.startsWith('invoke_') &&
                                    true;
                if (Asyncify.state !== originalAsyncifyState &&
                    !isAsyncifyImport &&
                    !changedToDisabled &&
                    !ignoredInvoke) {
                  throw new Error(`import ${x} was not in ASYNCIFY_IMPORTS, but changed the state`);
                }
              }
            };
          }
        }
      },
  instrumentWasmExports(exports) {
        var ret = {};
        for (let [x, original] of Object.entries(exports)) {
          if (typeof original == 'function') {
            ret[x] = (...args) => {
              Asyncify.exportCallStack.push(x);
              try {
                return original(...args);
              } finally {
                if (!ABORT) {
                  var y = Asyncify.exportCallStack.pop();
                  assert(y === x);
                  Asyncify.maybeStopUnwind();
                }
              }
            };
          } else {
            ret[x] = original;
          }
        }
        return ret;
      },
  State:{
  Normal:0,
  Unwinding:1,
  Rewinding:2,
  Disabled:3,
  },
  state:0,
  StackSize:4096,
  currData:null,
  handleSleepReturnValue:0,
  exportCallStack:[],
  callStackNameToId:{
  },
  callStackIdToName:{
  },
  callStackId:0,
  asyncPromiseHandlers:null,
  sleepCallbacks:[],
  getCallStackId(funcName) {
        var id = Asyncify.callStackNameToId[funcName];
        if (id === undefined) {
          id = Asyncify.callStackId++;
          Asyncify.callStackNameToId[funcName] = id;
          Asyncify.callStackIdToName[id] = funcName;
        }
        return id;
      },
  maybeStopUnwind() {
        if (Asyncify.currData &&
            Asyncify.state === Asyncify.State.Unwinding &&
            Asyncify.exportCallStack.length === 0) {
          // We just finished unwinding.
          // Be sure to set the state before calling any other functions to avoid
          // possible infinite recursion here (For example in debug pthread builds
          // the dbg() function itself can call back into WebAssembly to get the
          // current pthread_self() pointer).
          Asyncify.state = Asyncify.State.Normal;
          
          // Keep the runtime alive so that a re-wind can be done later.
          runAndAbortIfError(_asyncify_stop_unwind);
          if (typeof Fibers != 'undefined') {
            Fibers.trampoline();
          }
        }
      },
  whenDone() {
        assert(Asyncify.currData, 'Tried to wait for an async operation when none is in progress.');
        assert(!Asyncify.asyncPromiseHandlers, 'Cannot have multiple async operations in flight at once');
        return new Promise((resolve, reject) => {
          Asyncify.asyncPromiseHandlers = { resolve, reject };
        });
      },
  allocateData() {
        // An asyncify data structure has three fields:
        //  0  current stack pos
        //  4  max stack pos
        //  8  id of function at bottom of the call stack (callStackIdToName[id] == name of js function)
        //
        // The Asyncify ABI only interprets the first two fields, the rest is for the runtime.
        // We also embed a stack in the same memory region here, right next to the structure.
        // This struct is also defined as asyncify_data_t in emscripten/fiber.h
        var ptr = _malloc(12 + Asyncify.StackSize);
        Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
        Asyncify.setDataRewindFunc(ptr);
        return ptr;
      },
  setDataHeader(ptr, stack, stackSize) {
        HEAPU32[((ptr)>>2)] = stack;
        HEAPU32[(((ptr)+(4))>>2)] = stack + stackSize;
      },
  setDataRewindFunc(ptr) {
        var bottomOfCallStack = Asyncify.exportCallStack[0];
        var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
        HEAP32[(((ptr)+(8))>>2)] = rewindId;
      },
  getDataRewindFuncName(ptr) {
        var id = HEAP32[(((ptr)+(8))>>2)];
        var name = Asyncify.callStackIdToName[id];
        return name;
      },
  getDataRewindFunc(name) {
        var func = wasmExports[name];
        return func;
      },
  doRewind(ptr) {
        var name = Asyncify.getDataRewindFuncName(ptr);
        var func = Asyncify.getDataRewindFunc(name);
        // Once we have rewound and the stack we no longer need to artificially
        // keep the runtime alive.
        
        return func();
      },
  handleSleep(startAsync) {
        assert(Asyncify.state !== Asyncify.State.Disabled, 'Asyncify cannot be done during or after the runtime exits');
        if (ABORT) return;
        if (Asyncify.state === Asyncify.State.Normal) {
          // Prepare to sleep. Call startAsync, and see what happens:
          // if the code decided to call our callback synchronously,
          // then no async operation was in fact begun, and we don't
          // need to do anything.
          var reachedCallback = false;
          var reachedAfterCallback = false;
          startAsync((handleSleepReturnValue = 0) => {
            assert(!handleSleepReturnValue || typeof handleSleepReturnValue == 'number' || typeof handleSleepReturnValue == 'boolean'); // old emterpretify API supported other stuff
            if (ABORT) return;
            Asyncify.handleSleepReturnValue = handleSleepReturnValue;
            reachedCallback = true;
            if (!reachedAfterCallback) {
              // We are happening synchronously, so no need for async.
              return;
            }
            // This async operation did not happen synchronously, so we did
            // unwind. In that case there can be no compiled code on the stack,
            // as it might break later operations (we can rewind ok now, but if
            // we unwind again, we would unwind through the extra compiled code
            // too).
            assert(!Asyncify.exportCallStack.length, 'Waking up (starting to rewind) must be done from JS, without compiled code on the stack.');
            Asyncify.state = Asyncify.State.Rewinding;
            runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
            if (typeof MainLoop != 'undefined' && MainLoop.func) {
              MainLoop.resume();
            }
            var asyncWasmReturnValue, isError = false;
            try {
              asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
            } catch (err) {
              asyncWasmReturnValue = err;
              isError = true;
            }
            // Track whether the return value was handled by any promise handlers.
            var handled = false;
            if (!Asyncify.currData) {
              // All asynchronous execution has finished.
              // `asyncWasmReturnValue` now contains the final
              // return value of the exported async WASM function.
              //
              // Note: `asyncWasmReturnValue` is distinct from
              // `Asyncify.handleSleepReturnValue`.
              // `Asyncify.handleSleepReturnValue` contains the return
              // value of the last C function to have executed
              // `Asyncify.handleSleep()`, where as `asyncWasmReturnValue`
              // contains the return value of the exported WASM function
              // that may have called C functions that
              // call `Asyncify.handleSleep()`.
              var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
              if (asyncPromiseHandlers) {
                Asyncify.asyncPromiseHandlers = null;
                (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                handled = true;
              }
            }
            if (isError && !handled) {
              // If there was an error and it was not handled by now, we have no choice but to
              // rethrow that error into the global scope where it can be caught only by
              // `onerror` or `onunhandledpromiserejection`.
              throw asyncWasmReturnValue;
            }
          });
          reachedAfterCallback = true;
          if (!reachedCallback) {
            // A true async operation was begun; start a sleep.
            Asyncify.state = Asyncify.State.Unwinding;
            // TODO: reuse, don't alloc/free every sleep
            Asyncify.currData = Asyncify.allocateData();
            if (typeof MainLoop != 'undefined' && MainLoop.func) {
              MainLoop.pause();
            }
            runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
          }
        } else if (Asyncify.state === Asyncify.State.Rewinding) {
          // Stop a resume.
          Asyncify.state = Asyncify.State.Normal;
          runAndAbortIfError(_asyncify_stop_rewind);
          _free(Asyncify.currData);
          Asyncify.currData = null;
          // Call all sleep callbacks now that the sleep-resume is all done.
          Asyncify.sleepCallbacks.forEach(callUserCallback);
        } else {
          abort(`invalid state: ${Asyncify.state}`);
        }
        return Asyncify.handleSleepReturnValue;
      },
  handleAsync:(startAsync) => Asyncify.handleSleep((wakeUp) => {
        // TODO: add error handling as a second param when handleSleep implements it.
        startAsync().then(wakeUp);
      }),
  };

  var getCFunc = (ident) => {
      var func = Module['_' + ident]; // closure exported function
      assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
      return func;
    };
  
  var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
    };
  
  
  
  
  
  
  
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  var ccall = (ident, returnType, argTypes, args, opts) => {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            ret = stringToUTF8OnStack(str);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== 'array', 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      // Data for a previous async operation that was in flight before us.
      var previousAsync = Asyncify.currData;
      var ret = func(...cArgs);
      function onDone(ret) {
        runtimeKeepalivePop();
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
    var asyncMode = opts?.async;
  
      // Keep the runtime alive through all calls. Note that this call might not be
      // async, but for simplicity we push and pop in all calls.
      runtimeKeepalivePush();
      if (Asyncify.currData != previousAsync) {
        // A change in async operation happened. If there was already an async
        // operation in flight before us, that is an error: we should not start
        // another async operation while one is active, and we should not stop one
        // either. The only valid combination is to have no change in the async
        // data (so we either had one in flight and left it alone, or we didn't have
        // one), or to have nothing in flight and to start one.
        assert(!(previousAsync && Asyncify.currData), 'We cannot start an async operation when one is already flight');
        assert(!(previousAsync && !Asyncify.currData), 'We cannot stop an async operation in flight');
        // This is a new async operation. The wasm is paused and has unwound its stack.
        // We need to return a Promise that resolves the return value
        // once the stack is rewound and execution finishes.
        assert(asyncMode, 'The call to ' + ident + ' is running asynchronously. If this was intended, add the async option to the ccall/cwrap call.');
        return Asyncify.whenDone().then(onDone);
      }
  
      ret = onDone(ret);
      // If this is an async ccall, ensure we return a promise
      if (asyncMode) return Promise.resolve(ret);
      return ret;
    };

  
    /**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */
  var cwrap = (ident, returnType, argTypes, opts) => {
      return (...args) => ccall(ident, returnType, argTypes, args, opts);
    };

  var FS_createPath = (...args) => FS.createPath(...args);



  var FS_unlink = (...args) => FS.unlink(...args);

  var FS_createLazyFile = (...args) => FS.createLazyFile(...args);

  var FS_createDevice = (...args) => FS.createDevice(...args);

  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.staticInit();;

      Module['requestAnimationFrame'] = MainLoop.requestAnimationFrame;
      Module['pauseMainLoop'] = MainLoop.pause;
      Module['resumeMainLoop'] = MainLoop.resume;
      MainLoop.init();;
for (let i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i);
  };
var miniTempWebGLIntBuffersStorage = new Int32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i);
  };
// End JS library code

// include: postlibrary.js
// This file is included after the automatically-generated JS library code
// but before the wasm module is created.

{

  // Begin ATMODULES hooks
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
if (Module['print']) out = Module['print'];
if (Module['printErr']) err = Module['printErr'];
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  // End ATMODULES hooks

  checkIncomingModuleAPI();

  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];

  // Assertions on removed incoming Module JS APIs.
  assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['read'] == 'undefined', 'Module.read option was removed');
  assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
  assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
  assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
  assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
  assert(typeof Module['ENVIRONMENT'] == 'undefined', 'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
  assert(typeof Module['STACK_SIZE'] == 'undefined', 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')
  // If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
  assert(typeof Module['wasmMemory'] == 'undefined', 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
  assert(typeof Module['INITIAL_MEMORY'] == 'undefined', 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

}

// Begin runtime exports
  Module['addRunDependency'] = addRunDependency;
  Module['removeRunDependency'] = removeRunDependency;
  Module['ccall'] = ccall;
  Module['cwrap'] = cwrap;
  Module['FS_createPreloadedFile'] = FS_createPreloadedFile;
  Module['FS_unlink'] = FS_unlink;
  Module['FS_createPath'] = FS_createPath;
  Module['FS_createDevice'] = FS_createDevice;
  Module['FS_createDataFile'] = FS_createDataFile;
  Module['FS_createLazyFile'] = FS_createLazyFile;
  var missingLibrarySymbols = [
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'convertI32PairToI53',
  'convertI32PairToI53Checked',
  'convertU32PairToI53',
  'getTempRet0',
  'setTempRet0',
  'zeroMemory',
  'getHeapMax',
  'growMemory',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'emscriptenLog',
  'getDynCaller',
  'asmjsMangle',
  'alignMemory',
  'HandleAllocator',
  'getNativeTypeSize',
  'addOnInit',
  'addOnPostCtor',
  'addOnPreMain',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'uleb128Encode',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'softFullscreenResizeWebGLRenderTarget',
  'registerPointerlockErrorEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'jsStackTrace',
  'getCallstack',
  'convertPCtoSourceLocation',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'setImmediateWrapped',
  'safeRequestAnimationFrame',
  'clearImmediateWrapped',
  'registerPostMainLoop',
  'registerPreMainLoop',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'findMatchingCatch',
  'Browser_asyncPrepareDataCounter',
  'arraySum',
  'addDays',
  'getSocketFromFD',
  'getSocketAddress',
  'FS_mkdirTree',
  '_setNetworkCallback',
  'writeGLArray',
  'registerWebGlEventCallback',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
  'demangle',
  'stackTrace',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

  var unexportedSymbols = [
  'run',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'HEAPF32',
  'HEAPF64',
  'HEAP8',
  'HEAPU8',
  'HEAP16',
  'HEAPU16',
  'HEAP32',
  'HEAPU32',
  'HEAP64',
  'HEAPU64',
  'writeStackCookie',
  'checkStackCookie',
  'writeI53ToI64',
  'readI53FromI64',
  'readI53FromU64',
  'INT53_MAX',
  'INT53_MIN',
  'bigintToI53Checked',
  'stackSave',
  'stackRestore',
  'stackAlloc',
  'ptrToString',
  'exitJS',
  'abortOnCannotGrowMemory',
  'ENV',
  'ERRNO_CODES',
  'strError',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'readEmAsmArgsArray',
  'readEmAsmArgs',
  'runEmAsmFunction',
  'runMainThreadEmAsm',
  'jstoi_q',
  'getExecutableName',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'dynCall',
  'handleException',
  'keepRuntimeAlive',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'asyncLoad',
  'mmapAlloc',
  'wasmTable',
  'noExitRuntime',
  'addOnPreRun',
  'addOnExit',
  'addOnPostRun',
  'sigToWasmTypes',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'UTF8ToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'intArrayFromString',
  'UTF16Decoder',
  'stringToNewUTF8',
  'stringToUTF8OnStack',
  'writeArrayToMemory',
  'JSEvents',
  'registerKeyEventCallback',
  'specialHTMLTargets',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'setLetterbox',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'UNWIND_CACHE',
  'ExitStatus',
  'getEnvStrings',
  'checkWasiClock',
  'doReadv',
  'doWritev',
  'initRandomFill',
  'randomFill',
  'safeSetTimeout',
  'emSetImmediate',
  'emClearImmediate_deps',
  'emClearImmediate',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'ExceptionInfo',
  'Browser',
  'requestFullscreen',
  'requestFullScreen',
  'setCanvasSize',
  'getUserMedia',
  'createContext',
  'getPreloadedImageData__data',
  'wget',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'isLeapYear',
  'ydayFromDate',
  'SYSCALLS',
  'preloadPlugins',
  'FS_modeStringToFlags',
  'FS_getMode',
  'FS_stdin_getChar_buffer',
  'FS_stdin_getChar',
  'FS_readFile',
  'FS',
  'FS_root',
  'FS_mounts',
  'FS_devices',
  'FS_streams',
  'FS_nextInode',
  'FS_nameTable',
  'FS_currentPath',
  'FS_initialized',
  'FS_ignorePermissions',
  'FS_filesystems',
  'FS_syncFSRequests',
  'FS_readFiles',
  'FS_lookupPath',
  'FS_getPath',
  'FS_hashName',
  'FS_hashAddNode',
  'FS_hashRemoveNode',
  'FS_lookupNode',
  'FS_createNode',
  'FS_destroyNode',
  'FS_isRoot',
  'FS_isMountpoint',
  'FS_isFile',
  'FS_isDir',
  'FS_isLink',
  'FS_isChrdev',
  'FS_isBlkdev',
  'FS_isFIFO',
  'FS_isSocket',
  'FS_flagsToPermissionString',
  'FS_nodePermissions',
  'FS_mayLookup',
  'FS_mayCreate',
  'FS_mayDelete',
  'FS_mayOpen',
  'FS_checkOpExists',
  'FS_nextfd',
  'FS_getStreamChecked',
  'FS_getStream',
  'FS_createStream',
  'FS_closeStream',
  'FS_dupStream',
  'FS_doSetAttr',
  'FS_chrdev_stream_ops',
  'FS_major',
  'FS_minor',
  'FS_makedev',
  'FS_registerDevice',
  'FS_getDevice',
  'FS_getMounts',
  'FS_syncfs',
  'FS_mount',
  'FS_unmount',
  'FS_lookup',
  'FS_mknod',
  'FS_statfs',
  'FS_statfsStream',
  'FS_statfsNode',
  'FS_create',
  'FS_mkdir',
  'FS_mkdev',
  'FS_symlink',
  'FS_rename',
  'FS_rmdir',
  'FS_readdir',
  'FS_readlink',
  'FS_stat',
  'FS_fstat',
  'FS_lstat',
  'FS_doChmod',
  'FS_chmod',
  'FS_lchmod',
  'FS_fchmod',
  'FS_doChown',
  'FS_chown',
  'FS_lchown',
  'FS_fchown',
  'FS_doTruncate',
  'FS_truncate',
  'FS_ftruncate',
  'FS_utime',
  'FS_open',
  'FS_close',
  'FS_isClosed',
  'FS_llseek',
  'FS_read',
  'FS_write',
  'FS_mmap',
  'FS_msync',
  'FS_ioctl',
  'FS_writeFile',
  'FS_cwd',
  'FS_chdir',
  'FS_createDefaultDirectories',
  'FS_createDefaultDevices',
  'FS_createSpecialDirectories',
  'FS_createStandardStreams',
  'FS_staticInit',
  'FS_init',
  'FS_quit',
  'FS_findObject',
  'FS_analyzePath',
  'FS_createFile',
  'FS_forceLoadFile',
  'FS_absolutePath',
  'FS_createFolder',
  'FS_createLink',
  'FS_joinPath',
  'FS_mmapAlloc',
  'FS_standardizePath',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'heapObjectForWebGLType',
  'toTypedArrayIndex',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'webgl_enable_EXT_polygon_offset_clamp',
  'webgl_enable_EXT_clip_control',
  'webgl_enable_WEBGL_polygon_mode',
  'GL',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'runAndAbortIfError',
  'Asyncify',
  'Fibers',
  'SDL',
  'SDL_gfx',
  'emscriptenWebGLGetIndexed',
  'webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance',
  'webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance',
  'allocateUTF8',
  'allocateUTF8OnStack',
  'print',
  'printErr',
  'jstoi_s',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);

  // End runtime exports
  // Begin JS library exports
  // End JS library exports

// end include: postlibrary.js

function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var ASM_CONSTS = {
  493784: ($0) => { var str = UTF8ToString($0) + '\n\n' + 'Abort/Retry/Ignore/AlwaysIgnore? [ariA] :'; var reply = window.prompt(str, "i"); if (reply === null) { reply = "i"; } return allocate(intArrayFromString(reply), 'i8', ALLOC_NORMAL); },  
 494009: ($0, $1) => { alert(UTF8ToString($0) + "\n\n" + UTF8ToString($1)); },  
 494066: () => { if (typeof(AudioContext) !== 'undefined') { return true; } else if (typeof(webkitAudioContext) !== 'undefined') { return true; } return false; },  
 494213: () => { if ((typeof(navigator.mediaDevices) !== 'undefined') && (typeof(navigator.mediaDevices.getUserMedia) !== 'undefined')) { return true; } else if (typeof(navigator.webkitGetUserMedia) !== 'undefined') { return true; } return false; },  
 494447: ($0) => { if(typeof(Module['SDL2']) === 'undefined') { Module['SDL2'] = {}; } var SDL2 = Module['SDL2']; if (!$0) { SDL2.audio = {}; } else { SDL2.capture = {}; } if (!SDL2.audioContext) { if (typeof(AudioContext) !== 'undefined') { SDL2.audioContext = new AudioContext(); } else if (typeof(webkitAudioContext) !== 'undefined') { SDL2.audioContext = new webkitAudioContext(); } if (SDL2.audioContext) { if ((typeof navigator.userActivation) === 'undefined') { autoResumeAudioContext(SDL2.audioContext); } } } return SDL2.audioContext === undefined ? -1 : 0; },  
 494999: () => { var SDL2 = Module['SDL2']; return SDL2.audioContext.sampleRate; },  
 495067: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; var have_microphone = function(stream) { if (SDL2.capture.silenceTimer !== undefined) { clearInterval(SDL2.capture.silenceTimer); SDL2.capture.silenceTimer = undefined; SDL2.capture.silenceBuffer = undefined } SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream); SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1); SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) { if ((SDL2 === undefined) || (SDL2.capture === undefined)) { return; } audioProcessingEvent.outputBuffer.getChannelData(0).fill(0.0); SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode); SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination); SDL2.capture.stream = stream; }; var no_microphone = function(error) { }; SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate); SDL2.capture.silenceBuffer.getChannelData(0).fill(0.0); var silence_callback = function() { SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.silenceTimer = setInterval(silence_callback, ($1 / SDL2.audioContext.sampleRate) * 1000); if ((navigator.mediaDevices !== undefined) && (navigator.mediaDevices.getUserMedia !== undefined)) { navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(have_microphone).catch(no_microphone); } else if (navigator.webkitGetUserMedia !== undefined) { navigator.webkitGetUserMedia({ audio: true, video: false }, have_microphone, no_microphone); } },  
 496760: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; SDL2.audio.scriptProcessorNode = SDL2.audioContext['createScriptProcessor']($1, 0, $0); SDL2.audio.scriptProcessorNode['onaudioprocess'] = function (e) { if ((SDL2 === undefined) || (SDL2.audio === undefined)) { return; } if (SDL2.audio.silenceTimer !== undefined) { clearInterval(SDL2.audio.silenceTimer); SDL2.audio.silenceTimer = undefined; SDL2.audio.silenceBuffer = undefined; } SDL2.audio.currentOutputBuffer = e['outputBuffer']; dynCall('vi', $2, [$3]); }; SDL2.audio.scriptProcessorNode['connect'](SDL2.audioContext['destination']); if (SDL2.audioContext.state === 'suspended') { SDL2.audio.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate); SDL2.audio.silenceBuffer.getChannelData(0).fill(0.0); var silence_callback = function() { if ((typeof navigator.userActivation) !== 'undefined') { if (navigator.userActivation.hasBeenActive) { SDL2.audioContext.resume(); } } SDL2.audio.currentOutputBuffer = SDL2.audio.silenceBuffer; dynCall('vi', $2, [$3]); SDL2.audio.currentOutputBuffer = undefined; }; SDL2.audio.silenceTimer = setInterval(silence_callback, ($1 / SDL2.audioContext.sampleRate) * 1000); } },  
 497935: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c); if (channelData.length != $1) { throw 'Web Audio capture buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } if (numChannels == 1) { for (var j = 0; j < $1; ++j) { setValue($0 + (j * 4), channelData[j], 'float'); } } else { for (var j = 0; j < $1; ++j) { setValue($0 + (((j * numChannels) + c) * 4), channelData[j], 'float'); } } } },  
 498540: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.audio.currentOutputBuffer['numberOfChannels']; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.audio.currentOutputBuffer['getChannelData'](c); if (channelData.length != $1) { throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } for (var j = 0; j < $1; ++j) { channelData[j] = HEAPF32[$0 + ((j*numChannels + c) << 2) >> 2]; } } },  
 499020: ($0) => { var SDL2 = Module['SDL2']; if ($0) { if (SDL2.capture.silenceTimer !== undefined) { clearInterval(SDL2.capture.silenceTimer); } if (SDL2.capture.stream !== undefined) { var tracks = SDL2.capture.stream.getAudioTracks(); for (var i = 0; i < tracks.length; i++) { SDL2.capture.stream.removeTrack(tracks[i]); } } if (SDL2.capture.scriptProcessorNode !== undefined) { SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {}; SDL2.capture.scriptProcessorNode.disconnect(); } if (SDL2.capture.mediaStreamNode !== undefined) { SDL2.capture.mediaStreamNode.disconnect(); } SDL2.capture = undefined; } else { if (SDL2.audio.scriptProcessorNode != undefined) { SDL2.audio.scriptProcessorNode.disconnect(); } if (SDL2.audio.silenceTimer !== undefined) { clearInterval(SDL2.audio.silenceTimer); } SDL2.audio = undefined; } if ((SDL2.audioContext !== undefined) && (SDL2.audio === undefined) && (SDL2.capture === undefined)) { SDL2.audioContext.close(); SDL2.audioContext = undefined; } },  
 500026: ($0, $1, $2) => { var w = $0; var h = $1; var pixels = $2; if (!Module['SDL2']) Module['SDL2'] = {}; var SDL2 = Module['SDL2']; if (SDL2.ctxCanvas !== Module['canvas']) { SDL2.ctx = Module['createContext'](Module['canvas'], false, true); SDL2.ctxCanvas = Module['canvas']; } if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) { SDL2.image = SDL2.ctx.createImageData(w, h); SDL2.w = w; SDL2.h = h; SDL2.imageCtx = SDL2.ctx; } var data = SDL2.image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = 0xff; src++; dst += 4; } } else { if (SDL2.data32Data !== data) { SDL2.data32 = new Int32Array(data.buffer); SDL2.data8 = new Uint8Array(data.buffer); SDL2.data32Data = data; } var data32 = SDL2.data32; num = data32.length; data32.set(HEAP32.subarray(src, src + num)); var data8 = SDL2.data8; var i = 3; var j = i + 4*num; if (num % 8 == 0) { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; } } else { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; } } } SDL2.ctx.putImageData(SDL2.image, 0, 0); },  
 501495: ($0, $1, $2, $3, $4) => { var w = $0; var h = $1; var hot_x = $2; var hot_y = $3; var pixels = $4; var canvas = document.createElement("canvas"); canvas.width = w; canvas.height = h; var ctx = canvas.getContext("2d"); var image = ctx.createImageData(w, h); var data = image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = (val >> 24) & 0xff; src++; dst += 4; } } else { var data32 = new Int32Array(data.buffer); num = data32.length; data32.set(HEAP32.subarray(src, src + num)); } ctx.putImageData(image, 0, 0); var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto"; var urlBuf = _malloc(url.length + 1); stringToUTF8(url, urlBuf, url.length + 1); return urlBuf; },  
 502484: ($0) => { if (Module['canvas']) { Module['canvas'].style['cursor'] = UTF8ToString($0); } },  
 502567: () => { if (Module['canvas']) { Module['canvas'].style['cursor'] = 'none'; } },  
 502636: () => { return window.innerWidth; },  
 502666: () => { return window.innerHeight; }
};
var wasmImports = {
  /** @export */
  XOpenDisplay: _XOpenDisplay,
  /** @export */
  __assert_fail: ___assert_fail,
  /** @export */
  __cxa_throw: ___cxa_throw,
  /** @export */
  __syscall_chdir: ___syscall_chdir,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_fstat64: ___syscall_fstat64,
  /** @export */
  __syscall_getcwd: ___syscall_getcwd,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_lstat64: ___syscall_lstat64,
  /** @export */
  __syscall_mkdirat: ___syscall_mkdirat,
  /** @export */
  __syscall_newfstatat: ___syscall_newfstatat,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  __syscall_rmdir: ___syscall_rmdir,
  /** @export */
  __syscall_stat64: ___syscall_stat64,
  /** @export */
  __syscall_unlinkat: ___syscall_unlinkat,
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _emscripten_throw_longjmp: __emscripten_throw_longjmp,
  /** @export */
  _localtime_js: __localtime_js,
  /** @export */
  _tzset_js: __tzset_js,
  /** @export */
  clock_time_get: _clock_time_get,
  /** @export */
  eglBindAPI: _eglBindAPI,
  /** @export */
  eglChooseConfig: _eglChooseConfig,
  /** @export */
  eglCreateContext: _eglCreateContext,
  /** @export */
  eglCreateWindowSurface: _eglCreateWindowSurface,
  /** @export */
  eglDestroyContext: _eglDestroyContext,
  /** @export */
  eglDestroySurface: _eglDestroySurface,
  /** @export */
  eglGetConfigAttrib: _eglGetConfigAttrib,
  /** @export */
  eglGetDisplay: _eglGetDisplay,
  /** @export */
  eglGetError: _eglGetError,
  /** @export */
  eglInitialize: _eglInitialize,
  /** @export */
  eglMakeCurrent: _eglMakeCurrent,
  /** @export */
  eglQueryString: _eglQueryString,
  /** @export */
  eglSwapBuffers: _eglSwapBuffers,
  /** @export */
  eglSwapInterval: _eglSwapInterval,
  /** @export */
  eglTerminate: _eglTerminate,
  /** @export */
  eglWaitGL: _eglWaitGL,
  /** @export */
  eglWaitNative: _eglWaitNative,
  /** @export */
  emscripten_asm_const_int: _emscripten_asm_const_int,
  /** @export */
  emscripten_asm_const_int_sync_on_main_thread: _emscripten_asm_const_int_sync_on_main_thread,
  /** @export */
  emscripten_asm_const_ptr_sync_on_main_thread: _emscripten_asm_const_ptr_sync_on_main_thread,
  /** @export */
  emscripten_cancel_main_loop: _emscripten_cancel_main_loop,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_exit_fullscreen: _emscripten_exit_fullscreen,
  /** @export */
  emscripten_exit_pointerlock: _emscripten_exit_pointerlock,
  /** @export */
  emscripten_force_exit: _emscripten_force_exit,
  /** @export */
  emscripten_get_device_pixel_ratio: _emscripten_get_device_pixel_ratio,
  /** @export */
  emscripten_get_element_css_size: _emscripten_get_element_css_size,
  /** @export */
  emscripten_get_gamepad_status: _emscripten_get_gamepad_status,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_get_num_gamepads: _emscripten_get_num_gamepads,
  /** @export */
  emscripten_get_screen_size: _emscripten_get_screen_size,
  /** @export */
  emscripten_glActiveTexture: _emscripten_glActiveTexture,
  /** @export */
  emscripten_glAttachShader: _emscripten_glAttachShader,
  /** @export */
  emscripten_glBeginQuery: _emscripten_glBeginQuery,
  /** @export */
  emscripten_glBeginQueryEXT: _emscripten_glBeginQueryEXT,
  /** @export */
  emscripten_glBeginTransformFeedback: _emscripten_glBeginTransformFeedback,
  /** @export */
  emscripten_glBindAttribLocation: _emscripten_glBindAttribLocation,
  /** @export */
  emscripten_glBindBuffer: _emscripten_glBindBuffer,
  /** @export */
  emscripten_glBindBufferBase: _emscripten_glBindBufferBase,
  /** @export */
  emscripten_glBindBufferRange: _emscripten_glBindBufferRange,
  /** @export */
  emscripten_glBindFramebuffer: _emscripten_glBindFramebuffer,
  /** @export */
  emscripten_glBindRenderbuffer: _emscripten_glBindRenderbuffer,
  /** @export */
  emscripten_glBindSampler: _emscripten_glBindSampler,
  /** @export */
  emscripten_glBindTexture: _emscripten_glBindTexture,
  /** @export */
  emscripten_glBindTransformFeedback: _emscripten_glBindTransformFeedback,
  /** @export */
  emscripten_glBindVertexArray: _emscripten_glBindVertexArray,
  /** @export */
  emscripten_glBindVertexArrayOES: _emscripten_glBindVertexArrayOES,
  /** @export */
  emscripten_glBlendColor: _emscripten_glBlendColor,
  /** @export */
  emscripten_glBlendEquation: _emscripten_glBlendEquation,
  /** @export */
  emscripten_glBlendEquationSeparate: _emscripten_glBlendEquationSeparate,
  /** @export */
  emscripten_glBlendFunc: _emscripten_glBlendFunc,
  /** @export */
  emscripten_glBlendFuncSeparate: _emscripten_glBlendFuncSeparate,
  /** @export */
  emscripten_glBlitFramebuffer: _emscripten_glBlitFramebuffer,
  /** @export */
  emscripten_glBufferData: _emscripten_glBufferData,
  /** @export */
  emscripten_glBufferSubData: _emscripten_glBufferSubData,
  /** @export */
  emscripten_glCheckFramebufferStatus: _emscripten_glCheckFramebufferStatus,
  /** @export */
  emscripten_glClear: _emscripten_glClear,
  /** @export */
  emscripten_glClearBufferfi: _emscripten_glClearBufferfi,
  /** @export */
  emscripten_glClearBufferfv: _emscripten_glClearBufferfv,
  /** @export */
  emscripten_glClearBufferiv: _emscripten_glClearBufferiv,
  /** @export */
  emscripten_glClearBufferuiv: _emscripten_glClearBufferuiv,
  /** @export */
  emscripten_glClearColor: _emscripten_glClearColor,
  /** @export */
  emscripten_glClearDepthf: _emscripten_glClearDepthf,
  /** @export */
  emscripten_glClearStencil: _emscripten_glClearStencil,
  /** @export */
  emscripten_glClientWaitSync: _emscripten_glClientWaitSync,
  /** @export */
  emscripten_glClipControlEXT: _emscripten_glClipControlEXT,
  /** @export */
  emscripten_glColorMask: _emscripten_glColorMask,
  /** @export */
  emscripten_glCompileShader: _emscripten_glCompileShader,
  /** @export */
  emscripten_glCompressedTexImage2D: _emscripten_glCompressedTexImage2D,
  /** @export */
  emscripten_glCompressedTexImage3D: _emscripten_glCompressedTexImage3D,
  /** @export */
  emscripten_glCompressedTexSubImage2D: _emscripten_glCompressedTexSubImage2D,
  /** @export */
  emscripten_glCompressedTexSubImage3D: _emscripten_glCompressedTexSubImage3D,
  /** @export */
  emscripten_glCopyBufferSubData: _emscripten_glCopyBufferSubData,
  /** @export */
  emscripten_glCopyTexImage2D: _emscripten_glCopyTexImage2D,
  /** @export */
  emscripten_glCopyTexSubImage2D: _emscripten_glCopyTexSubImage2D,
  /** @export */
  emscripten_glCopyTexSubImage3D: _emscripten_glCopyTexSubImage3D,
  /** @export */
  emscripten_glCreateProgram: _emscripten_glCreateProgram,
  /** @export */
  emscripten_glCreateShader: _emscripten_glCreateShader,
  /** @export */
  emscripten_glCullFace: _emscripten_glCullFace,
  /** @export */
  emscripten_glDeleteBuffers: _emscripten_glDeleteBuffers,
  /** @export */
  emscripten_glDeleteFramebuffers: _emscripten_glDeleteFramebuffers,
  /** @export */
  emscripten_glDeleteProgram: _emscripten_glDeleteProgram,
  /** @export */
  emscripten_glDeleteQueries: _emscripten_glDeleteQueries,
  /** @export */
  emscripten_glDeleteQueriesEXT: _emscripten_glDeleteQueriesEXT,
  /** @export */
  emscripten_glDeleteRenderbuffers: _emscripten_glDeleteRenderbuffers,
  /** @export */
  emscripten_glDeleteSamplers: _emscripten_glDeleteSamplers,
  /** @export */
  emscripten_glDeleteShader: _emscripten_glDeleteShader,
  /** @export */
  emscripten_glDeleteSync: _emscripten_glDeleteSync,
  /** @export */
  emscripten_glDeleteTextures: _emscripten_glDeleteTextures,
  /** @export */
  emscripten_glDeleteTransformFeedbacks: _emscripten_glDeleteTransformFeedbacks,
  /** @export */
  emscripten_glDeleteVertexArrays: _emscripten_glDeleteVertexArrays,
  /** @export */
  emscripten_glDeleteVertexArraysOES: _emscripten_glDeleteVertexArraysOES,
  /** @export */
  emscripten_glDepthFunc: _emscripten_glDepthFunc,
  /** @export */
  emscripten_glDepthMask: _emscripten_glDepthMask,
  /** @export */
  emscripten_glDepthRangef: _emscripten_glDepthRangef,
  /** @export */
  emscripten_glDetachShader: _emscripten_glDetachShader,
  /** @export */
  emscripten_glDisable: _emscripten_glDisable,
  /** @export */
  emscripten_glDisableVertexAttribArray: _emscripten_glDisableVertexAttribArray,
  /** @export */
  emscripten_glDrawArrays: _emscripten_glDrawArrays,
  /** @export */
  emscripten_glDrawArraysInstanced: _emscripten_glDrawArraysInstanced,
  /** @export */
  emscripten_glDrawArraysInstancedANGLE: _emscripten_glDrawArraysInstancedANGLE,
  /** @export */
  emscripten_glDrawArraysInstancedARB: _emscripten_glDrawArraysInstancedARB,
  /** @export */
  emscripten_glDrawArraysInstancedEXT: _emscripten_glDrawArraysInstancedEXT,
  /** @export */
  emscripten_glDrawArraysInstancedNV: _emscripten_glDrawArraysInstancedNV,
  /** @export */
  emscripten_glDrawBuffers: _emscripten_glDrawBuffers,
  /** @export */
  emscripten_glDrawBuffersEXT: _emscripten_glDrawBuffersEXT,
  /** @export */
  emscripten_glDrawBuffersWEBGL: _emscripten_glDrawBuffersWEBGL,
  /** @export */
  emscripten_glDrawElements: _emscripten_glDrawElements,
  /** @export */
  emscripten_glDrawElementsInstanced: _emscripten_glDrawElementsInstanced,
  /** @export */
  emscripten_glDrawElementsInstancedANGLE: _emscripten_glDrawElementsInstancedANGLE,
  /** @export */
  emscripten_glDrawElementsInstancedARB: _emscripten_glDrawElementsInstancedARB,
  /** @export */
  emscripten_glDrawElementsInstancedEXT: _emscripten_glDrawElementsInstancedEXT,
  /** @export */
  emscripten_glDrawElementsInstancedNV: _emscripten_glDrawElementsInstancedNV,
  /** @export */
  emscripten_glDrawRangeElements: _emscripten_glDrawRangeElements,
  /** @export */
  emscripten_glEnable: _emscripten_glEnable,
  /** @export */
  emscripten_glEnableVertexAttribArray: _emscripten_glEnableVertexAttribArray,
  /** @export */
  emscripten_glEndQuery: _emscripten_glEndQuery,
  /** @export */
  emscripten_glEndQueryEXT: _emscripten_glEndQueryEXT,
  /** @export */
  emscripten_glEndTransformFeedback: _emscripten_glEndTransformFeedback,
  /** @export */
  emscripten_glFenceSync: _emscripten_glFenceSync,
  /** @export */
  emscripten_glFinish: _emscripten_glFinish,
  /** @export */
  emscripten_glFlush: _emscripten_glFlush,
  /** @export */
  emscripten_glFramebufferRenderbuffer: _emscripten_glFramebufferRenderbuffer,
  /** @export */
  emscripten_glFramebufferTexture2D: _emscripten_glFramebufferTexture2D,
  /** @export */
  emscripten_glFramebufferTextureLayer: _emscripten_glFramebufferTextureLayer,
  /** @export */
  emscripten_glFrontFace: _emscripten_glFrontFace,
  /** @export */
  emscripten_glGenBuffers: _emscripten_glGenBuffers,
  /** @export */
  emscripten_glGenFramebuffers: _emscripten_glGenFramebuffers,
  /** @export */
  emscripten_glGenQueries: _emscripten_glGenQueries,
  /** @export */
  emscripten_glGenQueriesEXT: _emscripten_glGenQueriesEXT,
  /** @export */
  emscripten_glGenRenderbuffers: _emscripten_glGenRenderbuffers,
  /** @export */
  emscripten_glGenSamplers: _emscripten_glGenSamplers,
  /** @export */
  emscripten_glGenTextures: _emscripten_glGenTextures,
  /** @export */
  emscripten_glGenTransformFeedbacks: _emscripten_glGenTransformFeedbacks,
  /** @export */
  emscripten_glGenVertexArrays: _emscripten_glGenVertexArrays,
  /** @export */
  emscripten_glGenVertexArraysOES: _emscripten_glGenVertexArraysOES,
  /** @export */
  emscripten_glGenerateMipmap: _emscripten_glGenerateMipmap,
  /** @export */
  emscripten_glGetActiveAttrib: _emscripten_glGetActiveAttrib,
  /** @export */
  emscripten_glGetActiveUniform: _emscripten_glGetActiveUniform,
  /** @export */
  emscripten_glGetActiveUniformBlockName: _emscripten_glGetActiveUniformBlockName,
  /** @export */
  emscripten_glGetActiveUniformBlockiv: _emscripten_glGetActiveUniformBlockiv,
  /** @export */
  emscripten_glGetActiveUniformsiv: _emscripten_glGetActiveUniformsiv,
  /** @export */
  emscripten_glGetAttachedShaders: _emscripten_glGetAttachedShaders,
  /** @export */
  emscripten_glGetAttribLocation: _emscripten_glGetAttribLocation,
  /** @export */
  emscripten_glGetBooleanv: _emscripten_glGetBooleanv,
  /** @export */
  emscripten_glGetBufferParameteri64v: _emscripten_glGetBufferParameteri64v,
  /** @export */
  emscripten_glGetBufferParameteriv: _emscripten_glGetBufferParameteriv,
  /** @export */
  emscripten_glGetError: _emscripten_glGetError,
  /** @export */
  emscripten_glGetFloatv: _emscripten_glGetFloatv,
  /** @export */
  emscripten_glGetFragDataLocation: _emscripten_glGetFragDataLocation,
  /** @export */
  emscripten_glGetFramebufferAttachmentParameteriv: _emscripten_glGetFramebufferAttachmentParameteriv,
  /** @export */
  emscripten_glGetInteger64i_v: _emscripten_glGetInteger64i_v,
  /** @export */
  emscripten_glGetInteger64v: _emscripten_glGetInteger64v,
  /** @export */
  emscripten_glGetIntegeri_v: _emscripten_glGetIntegeri_v,
  /** @export */
  emscripten_glGetIntegerv: _emscripten_glGetIntegerv,
  /** @export */
  emscripten_glGetInternalformativ: _emscripten_glGetInternalformativ,
  /** @export */
  emscripten_glGetProgramBinary: _emscripten_glGetProgramBinary,
  /** @export */
  emscripten_glGetProgramInfoLog: _emscripten_glGetProgramInfoLog,
  /** @export */
  emscripten_glGetProgramiv: _emscripten_glGetProgramiv,
  /** @export */
  emscripten_glGetQueryObjecti64vEXT: _emscripten_glGetQueryObjecti64vEXT,
  /** @export */
  emscripten_glGetQueryObjectivEXT: _emscripten_glGetQueryObjectivEXT,
  /** @export */
  emscripten_glGetQueryObjectui64vEXT: _emscripten_glGetQueryObjectui64vEXT,
  /** @export */
  emscripten_glGetQueryObjectuiv: _emscripten_glGetQueryObjectuiv,
  /** @export */
  emscripten_glGetQueryObjectuivEXT: _emscripten_glGetQueryObjectuivEXT,
  /** @export */
  emscripten_glGetQueryiv: _emscripten_glGetQueryiv,
  /** @export */
  emscripten_glGetQueryivEXT: _emscripten_glGetQueryivEXT,
  /** @export */
  emscripten_glGetRenderbufferParameteriv: _emscripten_glGetRenderbufferParameteriv,
  /** @export */
  emscripten_glGetSamplerParameterfv: _emscripten_glGetSamplerParameterfv,
  /** @export */
  emscripten_glGetSamplerParameteriv: _emscripten_glGetSamplerParameteriv,
  /** @export */
  emscripten_glGetShaderInfoLog: _emscripten_glGetShaderInfoLog,
  /** @export */
  emscripten_glGetShaderPrecisionFormat: _emscripten_glGetShaderPrecisionFormat,
  /** @export */
  emscripten_glGetShaderSource: _emscripten_glGetShaderSource,
  /** @export */
  emscripten_glGetShaderiv: _emscripten_glGetShaderiv,
  /** @export */
  emscripten_glGetString: _emscripten_glGetString,
  /** @export */
  emscripten_glGetStringi: _emscripten_glGetStringi,
  /** @export */
  emscripten_glGetSynciv: _emscripten_glGetSynciv,
  /** @export */
  emscripten_glGetTexParameterfv: _emscripten_glGetTexParameterfv,
  /** @export */
  emscripten_glGetTexParameteriv: _emscripten_glGetTexParameteriv,
  /** @export */
  emscripten_glGetTransformFeedbackVarying: _emscripten_glGetTransformFeedbackVarying,
  /** @export */
  emscripten_glGetUniformBlockIndex: _emscripten_glGetUniformBlockIndex,
  /** @export */
  emscripten_glGetUniformIndices: _emscripten_glGetUniformIndices,
  /** @export */
  emscripten_glGetUniformLocation: _emscripten_glGetUniformLocation,
  /** @export */
  emscripten_glGetUniformfv: _emscripten_glGetUniformfv,
  /** @export */
  emscripten_glGetUniformiv: _emscripten_glGetUniformiv,
  /** @export */
  emscripten_glGetUniformuiv: _emscripten_glGetUniformuiv,
  /** @export */
  emscripten_glGetVertexAttribIiv: _emscripten_glGetVertexAttribIiv,
  /** @export */
  emscripten_glGetVertexAttribIuiv: _emscripten_glGetVertexAttribIuiv,
  /** @export */
  emscripten_glGetVertexAttribPointerv: _emscripten_glGetVertexAttribPointerv,
  /** @export */
  emscripten_glGetVertexAttribfv: _emscripten_glGetVertexAttribfv,
  /** @export */
  emscripten_glGetVertexAttribiv: _emscripten_glGetVertexAttribiv,
  /** @export */
  emscripten_glHint: _emscripten_glHint,
  /** @export */
  emscripten_glInvalidateFramebuffer: _emscripten_glInvalidateFramebuffer,
  /** @export */
  emscripten_glInvalidateSubFramebuffer: _emscripten_glInvalidateSubFramebuffer,
  /** @export */
  emscripten_glIsBuffer: _emscripten_glIsBuffer,
  /** @export */
  emscripten_glIsEnabled: _emscripten_glIsEnabled,
  /** @export */
  emscripten_glIsFramebuffer: _emscripten_glIsFramebuffer,
  /** @export */
  emscripten_glIsProgram: _emscripten_glIsProgram,
  /** @export */
  emscripten_glIsQuery: _emscripten_glIsQuery,
  /** @export */
  emscripten_glIsQueryEXT: _emscripten_glIsQueryEXT,
  /** @export */
  emscripten_glIsRenderbuffer: _emscripten_glIsRenderbuffer,
  /** @export */
  emscripten_glIsSampler: _emscripten_glIsSampler,
  /** @export */
  emscripten_glIsShader: _emscripten_glIsShader,
  /** @export */
  emscripten_glIsSync: _emscripten_glIsSync,
  /** @export */
  emscripten_glIsTexture: _emscripten_glIsTexture,
  /** @export */
  emscripten_glIsTransformFeedback: _emscripten_glIsTransformFeedback,
  /** @export */
  emscripten_glIsVertexArray: _emscripten_glIsVertexArray,
  /** @export */
  emscripten_glIsVertexArrayOES: _emscripten_glIsVertexArrayOES,
  /** @export */
  emscripten_glLineWidth: _emscripten_glLineWidth,
  /** @export */
  emscripten_glLinkProgram: _emscripten_glLinkProgram,
  /** @export */
  emscripten_glPauseTransformFeedback: _emscripten_glPauseTransformFeedback,
  /** @export */
  emscripten_glPixelStorei: _emscripten_glPixelStorei,
  /** @export */
  emscripten_glPolygonModeWEBGL: _emscripten_glPolygonModeWEBGL,
  /** @export */
  emscripten_glPolygonOffset: _emscripten_glPolygonOffset,
  /** @export */
  emscripten_glPolygonOffsetClampEXT: _emscripten_glPolygonOffsetClampEXT,
  /** @export */
  emscripten_glProgramBinary: _emscripten_glProgramBinary,
  /** @export */
  emscripten_glProgramParameteri: _emscripten_glProgramParameteri,
  /** @export */
  emscripten_glQueryCounterEXT: _emscripten_glQueryCounterEXT,
  /** @export */
  emscripten_glReadBuffer: _emscripten_glReadBuffer,
  /** @export */
  emscripten_glReadPixels: _emscripten_glReadPixels,
  /** @export */
  emscripten_glReleaseShaderCompiler: _emscripten_glReleaseShaderCompiler,
  /** @export */
  emscripten_glRenderbufferStorage: _emscripten_glRenderbufferStorage,
  /** @export */
  emscripten_glRenderbufferStorageMultisample: _emscripten_glRenderbufferStorageMultisample,
  /** @export */
  emscripten_glResumeTransformFeedback: _emscripten_glResumeTransformFeedback,
  /** @export */
  emscripten_glSampleCoverage: _emscripten_glSampleCoverage,
  /** @export */
  emscripten_glSamplerParameterf: _emscripten_glSamplerParameterf,
  /** @export */
  emscripten_glSamplerParameterfv: _emscripten_glSamplerParameterfv,
  /** @export */
  emscripten_glSamplerParameteri: _emscripten_glSamplerParameteri,
  /** @export */
  emscripten_glSamplerParameteriv: _emscripten_glSamplerParameteriv,
  /** @export */
  emscripten_glScissor: _emscripten_glScissor,
  /** @export */
  emscripten_glShaderBinary: _emscripten_glShaderBinary,
  /** @export */
  emscripten_glShaderSource: _emscripten_glShaderSource,
  /** @export */
  emscripten_glStencilFunc: _emscripten_glStencilFunc,
  /** @export */
  emscripten_glStencilFuncSeparate: _emscripten_glStencilFuncSeparate,
  /** @export */
  emscripten_glStencilMask: _emscripten_glStencilMask,
  /** @export */
  emscripten_glStencilMaskSeparate: _emscripten_glStencilMaskSeparate,
  /** @export */
  emscripten_glStencilOp: _emscripten_glStencilOp,
  /** @export */
  emscripten_glStencilOpSeparate: _emscripten_glStencilOpSeparate,
  /** @export */
  emscripten_glTexImage2D: _emscripten_glTexImage2D,
  /** @export */
  emscripten_glTexImage3D: _emscripten_glTexImage3D,
  /** @export */
  emscripten_glTexParameterf: _emscripten_glTexParameterf,
  /** @export */
  emscripten_glTexParameterfv: _emscripten_glTexParameterfv,
  /** @export */
  emscripten_glTexParameteri: _emscripten_glTexParameteri,
  /** @export */
  emscripten_glTexParameteriv: _emscripten_glTexParameteriv,
  /** @export */
  emscripten_glTexStorage2D: _emscripten_glTexStorage2D,
  /** @export */
  emscripten_glTexStorage3D: _emscripten_glTexStorage3D,
  /** @export */
  emscripten_glTexSubImage2D: _emscripten_glTexSubImage2D,
  /** @export */
  emscripten_glTexSubImage3D: _emscripten_glTexSubImage3D,
  /** @export */
  emscripten_glTransformFeedbackVaryings: _emscripten_glTransformFeedbackVaryings,
  /** @export */
  emscripten_glUniform1f: _emscripten_glUniform1f,
  /** @export */
  emscripten_glUniform1fv: _emscripten_glUniform1fv,
  /** @export */
  emscripten_glUniform1i: _emscripten_glUniform1i,
  /** @export */
  emscripten_glUniform1iv: _emscripten_glUniform1iv,
  /** @export */
  emscripten_glUniform1ui: _emscripten_glUniform1ui,
  /** @export */
  emscripten_glUniform1uiv: _emscripten_glUniform1uiv,
  /** @export */
  emscripten_glUniform2f: _emscripten_glUniform2f,
  /** @export */
  emscripten_glUniform2fv: _emscripten_glUniform2fv,
  /** @export */
  emscripten_glUniform2i: _emscripten_glUniform2i,
  /** @export */
  emscripten_glUniform2iv: _emscripten_glUniform2iv,
  /** @export */
  emscripten_glUniform2ui: _emscripten_glUniform2ui,
  /** @export */
  emscripten_glUniform2uiv: _emscripten_glUniform2uiv,
  /** @export */
  emscripten_glUniform3f: _emscripten_glUniform3f,
  /** @export */
  emscripten_glUniform3fv: _emscripten_glUniform3fv,
  /** @export */
  emscripten_glUniform3i: _emscripten_glUniform3i,
  /** @export */
  emscripten_glUniform3iv: _emscripten_glUniform3iv,
  /** @export */
  emscripten_glUniform3ui: _emscripten_glUniform3ui,
  /** @export */
  emscripten_glUniform3uiv: _emscripten_glUniform3uiv,
  /** @export */
  emscripten_glUniform4f: _emscripten_glUniform4f,
  /** @export */
  emscripten_glUniform4fv: _emscripten_glUniform4fv,
  /** @export */
  emscripten_glUniform4i: _emscripten_glUniform4i,
  /** @export */
  emscripten_glUniform4iv: _emscripten_glUniform4iv,
  /** @export */
  emscripten_glUniform4ui: _emscripten_glUniform4ui,
  /** @export */
  emscripten_glUniform4uiv: _emscripten_glUniform4uiv,
  /** @export */
  emscripten_glUniformBlockBinding: _emscripten_glUniformBlockBinding,
  /** @export */
  emscripten_glUniformMatrix2fv: _emscripten_glUniformMatrix2fv,
  /** @export */
  emscripten_glUniformMatrix2x3fv: _emscripten_glUniformMatrix2x3fv,
  /** @export */
  emscripten_glUniformMatrix2x4fv: _emscripten_glUniformMatrix2x4fv,
  /** @export */
  emscripten_glUniformMatrix3fv: _emscripten_glUniformMatrix3fv,
  /** @export */
  emscripten_glUniformMatrix3x2fv: _emscripten_glUniformMatrix3x2fv,
  /** @export */
  emscripten_glUniformMatrix3x4fv: _emscripten_glUniformMatrix3x4fv,
  /** @export */
  emscripten_glUniformMatrix4fv: _emscripten_glUniformMatrix4fv,
  /** @export */
  emscripten_glUniformMatrix4x2fv: _emscripten_glUniformMatrix4x2fv,
  /** @export */
  emscripten_glUniformMatrix4x3fv: _emscripten_glUniformMatrix4x3fv,
  /** @export */
  emscripten_glUseProgram: _emscripten_glUseProgram,
  /** @export */
  emscripten_glValidateProgram: _emscripten_glValidateProgram,
  /** @export */
  emscripten_glVertexAttrib1f: _emscripten_glVertexAttrib1f,
  /** @export */
  emscripten_glVertexAttrib1fv: _emscripten_glVertexAttrib1fv,
  /** @export */
  emscripten_glVertexAttrib2f: _emscripten_glVertexAttrib2f,
  /** @export */
  emscripten_glVertexAttrib2fv: _emscripten_glVertexAttrib2fv,
  /** @export */
  emscripten_glVertexAttrib3f: _emscripten_glVertexAttrib3f,
  /** @export */
  emscripten_glVertexAttrib3fv: _emscripten_glVertexAttrib3fv,
  /** @export */
  emscripten_glVertexAttrib4f: _emscripten_glVertexAttrib4f,
  /** @export */
  emscripten_glVertexAttrib4fv: _emscripten_glVertexAttrib4fv,
  /** @export */
  emscripten_glVertexAttribDivisor: _emscripten_glVertexAttribDivisor,
  /** @export */
  emscripten_glVertexAttribDivisorANGLE: _emscripten_glVertexAttribDivisorANGLE,
  /** @export */
  emscripten_glVertexAttribDivisorARB: _emscripten_glVertexAttribDivisorARB,
  /** @export */
  emscripten_glVertexAttribDivisorEXT: _emscripten_glVertexAttribDivisorEXT,
  /** @export */
  emscripten_glVertexAttribDivisorNV: _emscripten_glVertexAttribDivisorNV,
  /** @export */
  emscripten_glVertexAttribI4i: _emscripten_glVertexAttribI4i,
  /** @export */
  emscripten_glVertexAttribI4iv: _emscripten_glVertexAttribI4iv,
  /** @export */
  emscripten_glVertexAttribI4ui: _emscripten_glVertexAttribI4ui,
  /** @export */
  emscripten_glVertexAttribI4uiv: _emscripten_glVertexAttribI4uiv,
  /** @export */
  emscripten_glVertexAttribIPointer: _emscripten_glVertexAttribIPointer,
  /** @export */
  emscripten_glVertexAttribPointer: _emscripten_glVertexAttribPointer,
  /** @export */
  emscripten_glViewport: _emscripten_glViewport,
  /** @export */
  emscripten_glWaitSync: _emscripten_glWaitSync,
  /** @export */
  emscripten_has_asyncify: _emscripten_has_asyncify,
  /** @export */
  emscripten_request_fullscreen_strategy: _emscripten_request_fullscreen_strategy,
  /** @export */
  emscripten_request_pointerlock: _emscripten_request_pointerlock,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  emscripten_sample_gamepad_data: _emscripten_sample_gamepad_data,
  /** @export */
  emscripten_set_beforeunload_callback_on_thread: _emscripten_set_beforeunload_callback_on_thread,
  /** @export */
  emscripten_set_blur_callback_on_thread: _emscripten_set_blur_callback_on_thread,
  /** @export */
  emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size,
  /** @export */
  emscripten_set_element_css_size: _emscripten_set_element_css_size,
  /** @export */
  emscripten_set_focus_callback_on_thread: _emscripten_set_focus_callback_on_thread,
  /** @export */
  emscripten_set_fullscreenchange_callback_on_thread: _emscripten_set_fullscreenchange_callback_on_thread,
  /** @export */
  emscripten_set_gamepadconnected_callback_on_thread: _emscripten_set_gamepadconnected_callback_on_thread,
  /** @export */
  emscripten_set_gamepaddisconnected_callback_on_thread: _emscripten_set_gamepaddisconnected_callback_on_thread,
  /** @export */
  emscripten_set_keydown_callback_on_thread: _emscripten_set_keydown_callback_on_thread,
  /** @export */
  emscripten_set_keypress_callback_on_thread: _emscripten_set_keypress_callback_on_thread,
  /** @export */
  emscripten_set_keyup_callback_on_thread: _emscripten_set_keyup_callback_on_thread,
  /** @export */
  emscripten_set_mousedown_callback_on_thread: _emscripten_set_mousedown_callback_on_thread,
  /** @export */
  emscripten_set_mouseenter_callback_on_thread: _emscripten_set_mouseenter_callback_on_thread,
  /** @export */
  emscripten_set_mouseleave_callback_on_thread: _emscripten_set_mouseleave_callback_on_thread,
  /** @export */
  emscripten_set_mousemove_callback_on_thread: _emscripten_set_mousemove_callback_on_thread,
  /** @export */
  emscripten_set_mouseup_callback_on_thread: _emscripten_set_mouseup_callback_on_thread,
  /** @export */
  emscripten_set_pointerlockchange_callback_on_thread: _emscripten_set_pointerlockchange_callback_on_thread,
  /** @export */
  emscripten_set_resize_callback_on_thread: _emscripten_set_resize_callback_on_thread,
  /** @export */
  emscripten_set_touchcancel_callback_on_thread: _emscripten_set_touchcancel_callback_on_thread,
  /** @export */
  emscripten_set_touchend_callback_on_thread: _emscripten_set_touchend_callback_on_thread,
  /** @export */
  emscripten_set_touchmove_callback_on_thread: _emscripten_set_touchmove_callback_on_thread,
  /** @export */
  emscripten_set_touchstart_callback_on_thread: _emscripten_set_touchstart_callback_on_thread,
  /** @export */
  emscripten_set_visibilitychange_callback_on_thread: _emscripten_set_visibilitychange_callback_on_thread,
  /** @export */
  emscripten_set_wheel_callback_on_thread: _emscripten_set_wheel_callback_on_thread,
  /** @export */
  emscripten_set_window_title: _emscripten_set_window_title,
  /** @export */
  emscripten_sleep: _emscripten_sleep,
  /** @export */
  environ_get: _environ_get,
  /** @export */
  environ_sizes_get: _environ_sizes_get,
  /** @export */
  exit: _exit,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_ii,
  /** @export */
  invoke_iii,
  /** @export */
  invoke_iiii,
  /** @export */
  invoke_iiiii,
  /** @export */
  invoke_iiiiiiiiii,
  /** @export */
  invoke_vi,
  /** @export */
  invoke_vii,
  /** @export */
  invoke_viii,
  /** @export */
  invoke_viiii
};
var wasmExports;
createWasm();
// Imports from the Wasm binary.
var ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors', 0);
var _malloc = createExportWrapper('malloc', 1);
var _free = createExportWrapper('free', 1);
var _fflush = createExportWrapper('fflush', 1);
var _strerror = createExportWrapper('strerror', 1);
var _main = Module['_main'] = createExportWrapper('__main_argc_argv', 2);
var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'])();
var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'])();
var _setThrew = createExportWrapper('setThrew', 2);
var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports['emscripten_stack_init'])();
var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'])();
var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports['_emscripten_stack_restore'])(a0);
var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'])(a0);
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();
var dynCall_ii = Module['dynCall_ii'] = createExportWrapper('dynCall_ii', 2);
var dynCall_iii = Module['dynCall_iii'] = createExportWrapper('dynCall_iii', 3);
var dynCall_vi = Module['dynCall_vi'] = createExportWrapper('dynCall_vi', 2);
var dynCall_vii = Module['dynCall_vii'] = createExportWrapper('dynCall_vii', 3);
var dynCall_viii = Module['dynCall_viii'] = createExportWrapper('dynCall_viii', 4);
var dynCall_iiii = Module['dynCall_iiii'] = createExportWrapper('dynCall_iiii', 4);
var dynCall_viif = Module['dynCall_viif'] = createExportWrapper('dynCall_viif', 4);
var dynCall_viiii = Module['dynCall_viiii'] = createExportWrapper('dynCall_viiii', 5);
var dynCall_viiiii = Module['dynCall_viiiii'] = createExportWrapper('dynCall_viiiii', 6);
var dynCall_viiiiiiii = Module['dynCall_viiiiiiii'] = createExportWrapper('dynCall_viiiiiiii', 9);
var dynCall_iiiiiiiiiii = Module['dynCall_iiiiiiiiiii'] = createExportWrapper('dynCall_iiiiiiiiiii', 11);
var dynCall_iiiiiii = Module['dynCall_iiiiiii'] = createExportWrapper('dynCall_iiiiiii', 7);
var dynCall_iiiiii = Module['dynCall_iiiiii'] = createExportWrapper('dynCall_iiiiii', 6);
var dynCall_viiiiiii = Module['dynCall_viiiiiii'] = createExportWrapper('dynCall_viiiiiii', 8);
var dynCall_v = Module['dynCall_v'] = createExportWrapper('dynCall_v', 1);
var dynCall_iiiii = Module['dynCall_iiiii'] = createExportWrapper('dynCall_iiiii', 5);
var dynCall_viiiiii = Module['dynCall_viiiiii'] = createExportWrapper('dynCall_viiiiii', 7);
var dynCall_viid = Module['dynCall_viid'] = createExportWrapper('dynCall_viid', 4);
var dynCall_vif = Module['dynCall_vif'] = createExportWrapper('dynCall_vif', 3);
var dynCall_iiiiiiii = Module['dynCall_iiiiiiii'] = createExportWrapper('dynCall_iiiiiiii', 8);
var dynCall_di = Module['dynCall_di'] = createExportWrapper('dynCall_di', 2);
var dynCall_vid = Module['dynCall_vid'] = createExportWrapper('dynCall_vid', 3);
var dynCall_iiiiiiiii = Module['dynCall_iiiiiiiii'] = createExportWrapper('dynCall_iiiiiiiii', 9);
var dynCall_viiidi = Module['dynCall_viiidi'] = createExportWrapper('dynCall_viiidi', 6);
var dynCall_viiid = Module['dynCall_viiid'] = createExportWrapper('dynCall_viiid', 5);
var dynCall_viddddii = Module['dynCall_viddddii'] = createExportWrapper('dynCall_viddddii', 8);
var dynCall_viiiiiiiiii = Module['dynCall_viiiiiiiiii'] = createExportWrapper('dynCall_viiiiiiiiii', 11);
var dynCall_viiffiiii = Module['dynCall_viiffiiii'] = createExportWrapper('dynCall_viiffiiii', 9);
var dynCall_viiffiiiidff = Module['dynCall_viiffiiiidff'] = createExportWrapper('dynCall_viiffiiiidff', 12);
var dynCall_viiffiiiiii = Module['dynCall_viiffiiiiii'] = createExportWrapper('dynCall_viiffiiiiii', 11);
var dynCall_viiiiiiiffi = Module['dynCall_viiiiiiiffi'] = createExportWrapper('dynCall_viiiiiiiffi', 11);
var dynCall_iiiiiiiiii = Module['dynCall_iiiiiiiiii'] = createExportWrapper('dynCall_iiiiiiiiii', 10);
var dynCall_iiid = Module['dynCall_iiid'] = createExportWrapper('dynCall_iiid', 4);
var dynCall_i = Module['dynCall_i'] = createExportWrapper('dynCall_i', 1);
var dynCall_ji = Module['dynCall_ji'] = createExportWrapper('dynCall_ji', 2);
var dynCall_jiji = Module['dynCall_jiji'] = createExportWrapper('dynCall_jiji', 4);
var dynCall_iid = Module['dynCall_iid'] = createExportWrapper('dynCall_iid', 3);
var dynCall_vffff = Module['dynCall_vffff'] = createExportWrapper('dynCall_vffff', 5);
var dynCall_vf = Module['dynCall_vf'] = createExportWrapper('dynCall_vf', 2);
var dynCall_viiiiiiiii = Module['dynCall_viiiiiiiii'] = createExportWrapper('dynCall_viiiiiiiii', 10);
var dynCall_vff = Module['dynCall_vff'] = createExportWrapper('dynCall_vff', 3);
var dynCall_vfi = Module['dynCall_vfi'] = createExportWrapper('dynCall_vfi', 3);
var dynCall_viff = Module['dynCall_viff'] = createExportWrapper('dynCall_viff', 4);
var dynCall_vifff = Module['dynCall_vifff'] = createExportWrapper('dynCall_vifff', 5);
var dynCall_viffff = Module['dynCall_viffff'] = createExportWrapper('dynCall_viffff', 6);
var dynCall_vfff = Module['dynCall_vfff'] = createExportWrapper('dynCall_vfff', 4);
var dynCall_viiiiiiiiiii = Module['dynCall_viiiiiiiiiii'] = createExportWrapper('dynCall_viiiiiiiiiii', 12);
var dynCall_viifi = Module['dynCall_viifi'] = createExportWrapper('dynCall_viifi', 5);
var dynCall_iidiiii = Module['dynCall_iidiiii'] = createExportWrapper('dynCall_iidiiii', 7);
var dynCall_viijii = Module['dynCall_viijii'] = createExportWrapper('dynCall_viijii', 6);
var dynCall_iiiiij = Module['dynCall_iiiiij'] = createExportWrapper('dynCall_iiiiij', 6);
var dynCall_iiiiid = Module['dynCall_iiiiid'] = createExportWrapper('dynCall_iiiiid', 6);
var dynCall_iiiiijj = Module['dynCall_iiiiijj'] = createExportWrapper('dynCall_iiiiijj', 7);
var dynCall_iiiiiijj = Module['dynCall_iiiiiijj'] = createExportWrapper('dynCall_iiiiiijj', 8);
var _asyncify_start_unwind = createExportWrapper('asyncify_start_unwind', 1);
var _asyncify_stop_unwind = createExportWrapper('asyncify_stop_unwind', 0);
var _asyncify_start_rewind = createExportWrapper('asyncify_start_rewind', 1);
var _asyncify_stop_rewind = createExportWrapper('asyncify_stop_rewind', 0);

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

var calledRun;

function callMain(args = []) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  assert(typeof onPreRuns === 'undefined' || onPreRuns.length == 0, 'cannot call main when preRun functions remain to be called');

  var entryFunction = _main;

  args.unshift(thisProgram);

  var argc = args.length;
  var argv = stackAlloc((argc + 1) * 4);
  var argv_ptr = argv;
  args.forEach((arg) => {
    HEAPU32[((argv_ptr)>>2)] = stringToUTF8OnStack(arg);
    argv_ptr += 4;
  });
  HEAPU32[((argv_ptr)>>2)] = 0;

  try {

    var ret = entryFunction(argc, argv);

    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run(args = arguments_) {

  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    assert(!calledRun);
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    Module['onRuntimeInitialized']?.();
    consumedModuleProp('onRuntimeInitialized');

    var noInitialRun = Module['noInitialRun'] || false;
    if (!noInitialRun) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach((name) => {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty?.output?.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
  }
}

function preInit() {
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
  consumedModuleProp('preInit');
}

preInit();
run();

// end include: postamble.js

