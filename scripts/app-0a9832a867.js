/******/!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var o,n=r(1),i=r(2),a=r(3),s=r(4),u=r(5),c=r(6),l=r(7),p=r(8);!function(t){"use strict";angular.module("Experium",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(n.config).config(i.routerConfig).run(a.runBlock).service("githubContributor",u.GithubContributor).service("webDevTec",c.WebDevTecService).controller("MainController",s.MainController).directive("experiumNavbar",l.experiumNavbar).directive("experiumMalarkey",p.experiumMalarkey)}(o||(o={}))},function(t,e){function r(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}r.$inject=["$logProvider","toastrConfig"],e.config=r},function(t,e){function r(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}r.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=r},function(t,e){function r(t){t.debug("runBlock end")}r.$inject=["$log"],e.runBlock=r},function(t,e){var r=function(){function t(t,e,r){this.awesomeThings=new Array,this.webDevTec=e,this.classAnimation="",this.creationDate=1451953210196,this.toastr=r,this.activate(t)}return t.$inject=["$timeout","webDevTec","toastr"],t.prototype.activate=function(t){this.getWebDevTec();var e=this;t(function(){e.classAnimation="rubberBand"},4e3)},t.prototype.activate.$inject=["$timeout"],t.prototype.showToastr=function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""},t.prototype.getWebDevTec=function(){this.awesomeThings=this.webDevTec.tec},t}();e.MainController=r},function(t,e){var r=function(){function t(t,e){this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/OR13/Experium"}return t.$inject=["$log","$http"],t.prototype.getContributors=function(t){var e=this;return void 0===t&&(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n",t.data)})},t}();e.GithubContributor=r},function(t,e){var r=function(){function t(){var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];this.data=t.map(function(t){return t.rank=Math.random(),t})}return Object.defineProperty(t.prototype,"tec",{get:function(){return this.data},enumerable:!0,configurable:!0}),t}();e.WebDevTecService=r},function(t,e){function r(){return{restrict:"E",scope:{creationDate:"="},templateUrl:"app/components/navbar/navbar.html",controller:o,controllerAs:"vm",bindToController:!0}}e.experiumNavbar=r;var o=function(){function t(t){this.relativeDate=t(this.creationDate).fromNow()}return t.$inject=["moment"],t}();e.NavbarController=o},function(t,e){function r(t){return{restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:n,controllerAs:"vm"}}function o(t,e,r,o){var n=o.malarkey(e[0],{typeSpeed:96,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("experium-malarkey"),angular.forEach(t.extraValues,function(t){n.type(t).pause()["delete"]()})}r.$inject=["malarkey"],e.experiumMalarkey=r;var n=function(){function t(t,e,r){this.$log=t,this.githubContributor=e,this.malarkey=r,this.contributors=[],this.activate()}return t.$inject=["$log","githubContributor","malarkey"],t.prototype.activate=function(){var t=this;return this.getContributors().then(function(){t.$log.info("Activated Contributors View")})},t.prototype.getContributors=function(){var t=this;return this.githubContributor.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t}();e.MalarkeyController=n}]),angular.module("Experium").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><header><experium-navbar creation-date="main.creationDate"></experium-navbar></header><section class="jumbotron"><experium-malarkey class="experium-uses" extra-values="[\'Google Cardboard\', \'Leap Motion\', \'Ethereum\']"></experium-malarkey><h1>Experium</h1><md-button href="https://github.com/OR13/Experium" class="md-raised contribute-cta-btn">Become a Contributor</md-button><h2>Peer 2 Peer Learning with Google Cardboard, Leap Motion & Ethereum</h2></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class="pull-right" ng-src="assets/images/webTec/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class="md-title">{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class="md-action-buttons"><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button ui-sref="home">Experium</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-0a9832a867.js.map
