(function () {

angular
    .module('consoleApp')
    .service('authentication', authentication);

    authentication.$inject = ['$http', '$window'];
    function authentication ($http, $window) {

      var saveToken = function (token) {
        $window.localStorage['my-token'] = token;
      };

      var getToken = function () {
        return $window.localStorage['my-token'];
      };

      var isLoggedIn = function() {
        var token = getToken();
        var payload;
        if(token){
          payload = token.split('.')[1];
          payload = $window.atob(payload);
          payload = JSON.parse(payload);

          return payload.exp > (Date.now() / 1000);
        } else {
          return false;
        }
      };

      var currentUser = function() {
        if(isLoggedIn()){
          var token = getToken();
          var payload = token.split('.')[1];
          payload = $window.atob(payload);
          payload = JSON.parse(payload);
          return {
            username : payload.username,
            email : payload.email,
            name : payload.name
          };
        }
      };

      register = function(user) {
        return $http.post('/api/users/register', user).then(function(res){
          saveToken(res.data.token);
        });
      };

      login = function(user) {
        return $http.post('/api/users/login', user).then(function(res) {
          saveToken(res.data.token);
        });

      };

      logout = function() {
        $window.localStorage.removeItem('my-token');
      };

      return {
        currentUser : currentUser,
        saveToken : saveToken,
        getToken : getToken,
        isLoggedIn : isLoggedIn,
        register : register,
        login : login,
        logout : logout
      };
    }


  })();