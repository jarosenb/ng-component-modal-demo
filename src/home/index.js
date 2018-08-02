import angular from 'angular';


// Create the module where our functionality can attach to
let appsModule = angular.module('applications', []);

// Include our UI-Router config settings
//import HomeConfig from './home.config';
//homeModule.config(HomeConfig);

// Controllers
//import HomeCtrl from './home.controller';
//homeModule.controller('HomeCtrl', HomeCtrl);

//modules

appsModule.component('home', {template: '<data></data>'});


export default appsModule;