import angular from 'angular';

// Create the module where our functionality can attach to
let routerModule = angular.module('router', []);

// Include our UI-Router config settings
import RouterConfig from './router.config';
routerModule.config(RouterConfig);

export default routerModule;