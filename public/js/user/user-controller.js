
app.controller('userCtrl', function($scope,$http) 
{
  
    // $scope.$on('$viewContentLoaded', function() {
        //call it here
        $http({
            method: 'GET',
            url: '/users'
          }).then(function successCallback(response) {        
            $scope.users = response.data.result;
          }, function errorCallback(response){
            alert("Error... Try Again!");
          });
    // });
   
        $scope.save=function(user) {
            var data = user;
            if(user._id != ""){
                method = 'PUT';
                url = '/users/' + data._id;
            }
            else{
                method = 'POST';
                url = '/users';
            }
            
            $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
            then(function(response)
            {
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response) 
            {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
            alert('error');
        });
    }   
    $scope.editUser = function(user){
        $scope.user = user;
        $scope.submit = false;
        $scope.update = true;
        $scope.cancel = true;
        $scope.userid = false;

    };

    $scope.delete = function(user){
        data = user;
        if(user._id != ""){
            method = 'DELETE';
            url = '/users/' + data._id;

        $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
        then(function(response)
        {
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) 
        {
        $scope.data = response.data || 'Request failed';
        $scope.status = response.status;
        alert('error');
    });
        }
        

    };
   
});