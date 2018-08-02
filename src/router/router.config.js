function RouterConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('about', {
      url: '/about',
      component: 'listing'
    })
    .state('home', {
      url: '',
      component: 'home'
    });
  
  };
  
  export default RouterConfig;