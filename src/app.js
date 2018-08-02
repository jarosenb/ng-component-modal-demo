import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-animate';
import '@uirouter/angularjs';

// Import your app stylesheets
//import './style.css';

// Import your app functionality

import './home';
import './data';
import './router';

// Create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'applications',
  'data',
  'router'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);