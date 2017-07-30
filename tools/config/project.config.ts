import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'cesium/Build/Cesium/Cesium.js', inject: 'libs'},
      {src: 'cesium/Build/Cesium/Widgets/widgets.css', inject: true},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [{
      name: 'socket.io-client',
      path: 'node_modules/socket.io-client/dist',
      packageMeta:{
        main: 'socket.io.min.js',
        defaultExtension: 'js'
      }
    }];


    additionalPackages.push({
      name:'angular-cesium',
      path: 'node_modules/angular-cesium/bundles/angular-cesium.umd.js'
    });

    additionalPackages.push({
      name:'rxjs',
      path: 'node_modules/rxjs/Rx.js'
    });

    additionalPackages.push({
      name:'primitive-primitives',
      path: 'node_modules/primitive-primitives/dist/main.js'
    })

    additionalPackages.push({
      name:'json-string-mapper',
      path: 'node_modules/json-string-mapper/bundles/json-string-mapper.umd.js'
    });

    additionalPackages.push({
      name:'angular2parse',
      path: 'node_modules/angular2parse/bundles/angular2parse.umd.js'
    });

    additionalPackages.push({
      name:'traceur',
      path: 'node_modules/traceur/bin/traceur.js'
    });

    additionalPackages.push({
      name:'geodesy',
      path: 'node_modules/geodesy/npm.js'
    });
    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
