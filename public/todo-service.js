(function(){
  function ToDoFactory($http) {
    var toDoData={};
    return {
      makeRequest: makeRequest,
      returnRequest: returnRequest
    };

    function returnRequest() {
      return toDoData;
    }

    function makeRequest() {
      return  $http({
        method: "GET",
        url: "localhost:3000"
      }).then(function(response){
        toDotData = response.data;
        console.log(toDoData);
        return toDoData;
      })
    }

    angular
    .module("app")
    .factory("ToDoFactory", ToDoFactory);
  })();
