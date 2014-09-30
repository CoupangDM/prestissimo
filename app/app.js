var prestissimo = angular.module('prestissimo', ['ngRoute', 'ui.bootstrap', 'ui.codemirror']);

prestissimo.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller:'homeController',
		templateUrl: 'views/home.html'
	})

	.when('/about', {
		controller:'aboutController',
		templateUrl: 'views/about.html'
	})
})