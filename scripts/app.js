/**
 * Created by william muli on 5/26/2015.
 */

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    //$urlRouterProvider.otherwise('/');

    $routeProvider
        .when(
        '/', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'

        })
        .when(
        '/alumni', {
            templateUrl: 'templates/alumni-profiles.html',
            controller: 'alumniProfilesCtrl'

        }
    )
        .when(
        '/gallery', {
            templateUrl: 'templates/gallery.html',
            controller: 'galleryCtrl'
        })
        .when(
        '/team', {
            templateUrl: 'templates/team.html',
            controller: 'teamCtrl'
        })
        .when(
        '/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        })
        .when(
        '/events/:id', {
            templateUrl: 'templates/event.html',
            controller: 'eventCtrl'

        })
        .when(
        '/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'

        })

        .otherwise(
        {
            redirectTo: '/'
        }
    );
    //$locationProvider.html5Mode(true);
}]);


API_URL = 'http://localhost/fisa-api/public';

app.controller('eventCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var url = API_URL + '/events/' + $routeParams.id;
    $http.get(url).success(function (data, status) {
        $scope.event = data;
    })
}]);





app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    events_url = API_URL + '/events/all';
    $http.get(events_url).success(function (data, status) {
        $scope.events = data;
    });

    $scope.more = function (id) {
        var url = API_URL + '/events/' + id;
        $http.get(url).success(function (data) {
            console.log(data);
        })
    }
}]);

app.controller('alumniProfilesCtrl', function ($scope) {
    $scope.testing = 'alumni/profiles'
});
app.controller('galleryCtrl', function ($scope) {
    $scope.testing = 'gallery';
});

app.controller('teamCtrl', function ($scope) {
    $scope.testing = 'team';
});

app.controller('contactCtrl', function ($scope) {
    $scope.testing = 'contact';
});


app.directive('slideit', function () {
    return {
        link: function (scope, element, attrs) {
            $(element).unoSlider();
        }
    }
});

app.directive('carousel', function () {
    return {
        link: function (scope, element, attrs) {
            $(element).slider(
                {
                    full_width: true,
                    height: 360,
                    transition: 1200,
                    interval: 1600
                });

        }
    }
});

app.directive('boxed', function () {
    return {
        link: function (scope, element, attrs) {
            $(element).materialbox();
        }
    }
})