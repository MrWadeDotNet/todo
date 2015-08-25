
  app.controller("TodoCtrl", function($scope, $q) {
  $scope.title = "Welcome to your task list";
  $scope.macaroni = "";

/*
 $scope.todos = [
    { "name": "Mow the lawn", "complete": false },
    { "name": "Cut the grass", "complete": false },
    { "name": "Trim the weeds", "complete": false }
  ]; */

  function getTodoList() { 

     return $q(function(resolve, reject) {
         $.ajax({
             url: "./data/todos.json"
         })
         .done(function(response) {
             resolve(response.todos);
         }).fail(function(xhr, status, error ) {
             reject(error);
         });
     });
  }
//Call get Todo list


 getTodoList()
     .then(function(objectFromJSONFile) {
        $scope.todos = objectFromJSONFile;
     }, function(error){
         console.log("Error", error);
     });



  $scope.killTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    if (todoIndex >= 0) {
    $scope.todos.splice(todoIndex, 1);
    }
  };

  $scope.addTodo = function() {
    $scope.todos.push({
      name: $scope.newTodo,
      complete: false});
    
    $scope.newTodo = "";
  };


  $scope.songs = [{
    name: "Song One",
    album: "Album One",
    artist: "Artist One"
  },
  {
    name: "Song Two",
    album: "Album Two",
    artist: "Artist Two"
  },
  {
    name: "Song Three",
    album: "Album Three",
    artist: "Artist Three"
  }];



});
