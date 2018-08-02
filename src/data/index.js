import angular from 'angular';
import { dataComponent } from './components/data/data.component';
import { modalInstanceComponent } from './components/modal/modal.component';

// Create the module where our functionality can attach to
let dataModule = angular.module('data', []);

// Include our UI-Router config settings
//import HomeConfig from './home.config';
//homeModule.config(HomeConfig);

// Controllers
//import HomeCtrl from './home.controller';
//homeModule.controller('HomeCtrl', HomeCtrl);

//modules
dataModule.component('data', dataComponent);
dataModule.component('modalInstance', modalInstanceComponent)


export default dataModule;