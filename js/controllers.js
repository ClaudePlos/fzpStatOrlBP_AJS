
/* Controllers */

var app = angular.module('ksApp.controllers', []);




app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('DummyCtrl', ['$scope', 'DummyFactory', function ($scope, DummyFactory) {
    $scope.bla = 'bla from controller';
    DummyFactory.get({}, function (dummyFactory) {
        $scope.firstname = dummyFactory.firstName;
    })
}]);

/*app.controller('UserListCtrl', function($scope, $http ) {

    delete $http.defaults.headers.common['X-Requested-With'];

    $http({
        method : 'GET',
        url : 'http://localhost:40884/napFzpStatOrlBP_Rest/napFZP/napuzytkownik'
    }).then(function successCallback(response) {
        $scope.users = response.data;
    }, function errorCallback(response) {
        console.log(response.statusText);
    });

    // $scope.users = dataService.getData();
});*/

app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

        console.log("Get List");

        // callback for ng-click 'editUser':
        $scope.editUser = function (userId) {
            $location.path('/user-detail/' + userId);
        };

        // callback for ng-click 'deleteUser':
        $scope.deleteUser = function (userId) {
            UserFactory.delete({ id: userId });
            $scope.users = UsersFactory.query();
        };

        // callback for ng-click 'createUser':
        $scope.createNewUser = function () {
            $location.path('/user-creation');
        };

        $scope.users = UsersFactory.query();


    }]);

  app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
    function ($scope, $routeParams, UserFactory, $location) {

        // callback for ng-click 'updateUser':
        $scope.updateUser = function () {
            UserFactory.update($scope.user);
            $location.path('/user-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/user-list');
        };

        $scope.user = UserFactory.show({id: $routeParams.id});
    }]);

app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {

        // callback for ng-click 'createNewUser':
        $scope.createNewUser = function () {
            UsersFactory.create($scope.user);
            $location.path('/user-list');
        }
    }]);

 //my01
app.controller('ApplicationCtrl', function ($scope) {
   $scope.name = '...';
    
    $scope.sayHelloWorld = function () {
        $scope.name = 'World';
    };
});


//my02
app.controller('FzpOrlen', ['$scope', 'CompanyFactory', '$location',
    function ($scope, CompanyFactory, $location) {

    $scope.data = {
        singleSelect: null,
        multipleSelect: [],
        option1: 'option-1',

    };


    $scope.companyList = {
        selectCompany: null,
        company: CompanyFactory.query( {}, function success() {
            console.log($scope.companyList)
        }, function err() {} )
    };



}]);


