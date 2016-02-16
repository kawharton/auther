app.controller('loginController', function($scope, LoginFactory,$state){
	$scope.loginObj = {};

	$scope.login = function(){
		LoginFactory.login($scope.loginObj).then(function(user){
			console.log('user',user);
			$state.go('stories')
		});
	}
});