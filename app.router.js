(function(angular) {
    angular.module('starterApp')
        .config(addRoutes);
            addRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
                function addRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/');
                    $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'views/home.view.html',
                        controller: 'homeController',
                        controllerAs: 'vm'
                    })
                    .state('about', {
                        url: '/about',
                        templateUrl: 'views/about.view.html',
                        controller: 'aboutController',
                        controllerAs: 'vm'
                    });
                    $locationProvider.hashPrefix('');
                }
})(window.angular);