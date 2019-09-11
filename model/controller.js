//os módulos do AngularJS definem aplicativos AngularJS
const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "Matheus";
    $scope.lastName = "Nougueira";
    $scope.changeName = function(){
        $scope.firstToName = "Nougueira";
    }
});

app.directive("w3TestDirective", function() {
  return {
    template : "Testando controller"
  };
});

app.controller('myCtrrl', function($scope){
    $scope.numero1 = "1";
    $scope.numero2 = "2";
});

app.controller('namesCtrl', function($scope) {
  $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
      ];
    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }
});

app.controller('costCtrl', function($scope) {
  $scope.price = 58
});

app.controller("myCtrl", function($scope, $location){
  $scope.myUrl = $location.absUrl();
});


