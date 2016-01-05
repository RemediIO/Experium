/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ethcbNavbar } from '../app/components/navbar/navbar.directive';
import { ethcbMalarkey } from '../app/components/malarkey/malarkey.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module EtherChromebit {
  'use strict';

  angular.module('EtherChromebit', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .controller('MainController', MainController)
    .directive('ethcbNavbar', ethcbNavbar)
    .directive('ethcbMalarkey', ethcbMalarkey);
}
