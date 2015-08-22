// cсоздадим модуль и назовем его scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);
 
// настроим маршруты
scotchApp.config(function($routeProvider) {
	$routeProvider

		// маршрут для страницы home
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// маршрут для страницы about
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// маршрут для страницы contact
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		})
		// маршрут для страницы contact
		.when('/morze', {
			templateUrl : 'pages/alfavit/morze.html',
			//controller  : 'contactController'
		})
		.when('/ruseng', {
			templateUrl : 'pages/alfavit/alfavit.html',
			//controller  : 'contactController'
		})
		.when('/slovo', {
			templateUrl : 'pages/golovolomka/slovo.html',
			//controller  : 'contactController'
		});
});

scotchApp.controller('mainController', function($scope) {
	$scope.message = 'Everyone come and see how good I look!';

});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});