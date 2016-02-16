app.factory('LoginFactory', function($http){
	return {
		login: function(loginObj){
			return $http.post('/login', loginObj)
					.then(function(res){
						console.log(res)
						return res.data;
					});
		}
	}
});