var app = angular.module('myAngularApp',['ngRoute'])
	.run(function(){
		console.log("run called");
	})
	.config(['$routeProvider',function($routeProvider){
		console.log("config called");
		$routeProvider.
			when('/',{
				title: "home",
				templateUrl: 'view/home.html',
				controller: 'homeCtrl',
				resolve: {
					res: function(){
					console.log("resove called");
				}
				}
			}).
			when('/AboutMe.rt',{
				title: "partial1",
				templateUrl: 'view/aboutme.html'
			}).
			when('/Skills.rt',{
				title: "partial1",
				templateUrl: 'view/skills.html'
			}).
			when('/Profile.rt',{
				title: "partial1",
				templateUrl: 'view/profile.html'
			}).
			when('/Reference.rt',{
				title: "partial1",
				templateUrl: 'view/reference.html'
			}).
			when('/Contact.rt',{
				title: "partial1",
				templateUrl: 'view/contact.html'
			}).
			otherwise({redirectTo: '/home.rt'});
	}])

