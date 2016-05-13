var app = angular.module('todoApp', []);

app.controller('mainController', ['$scope', '$http', '$log', function($scope, $http, $log) {
    
    $scope.getTodos = function() {   
      $http.get('/api/v1/todos')
        .then(function successCallback(response) {
            $log.info(response);
            $scope.todos = response.data;
        }, function errorCallback(response) {
            $log.error(response);
            $scope.todos = [];
        });  
    };
    
    $scope.createTodo = function() {
      $http.post('/api/v1/todo', { task: $scope.newTodo, isDone: false})
        .then(function successCallback(response) {
            $log.info(response);
            $scope.newTodo = "";
            $scope.getTodos();
        }, function errorCallback(response) {
            $log.error(response);
        });  
    };
    
    $scope.removeTodo = function(taskID) {  
      $http.delete('/api/v1/todo/' + taskID)
        .then(function successCallback(response) {
            $log.info(response);
            $scope.getTodos();
        }, function errorCallback(response) {
            $log.error(response);
        });  
    };    
    
    $scope.getTodos();
    
}]);