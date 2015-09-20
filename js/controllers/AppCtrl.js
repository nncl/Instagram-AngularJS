/**
 * Created by cauebrunodealmeida on 9/19/15.
 */

angular.module("myApp", [])

    .service('instagram', ['$http',
        function($http) {
            return {
                fetchPopular: function(callback) {

                    //var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
                    var endPoint = 'https://api.instagram.com/v1/users/386248933/media/recent/?access_token=386248933.955d7b0.525e0f95bc66472583c3d1e526c45a4a&callback=JSON_CALLBACK';

                    $http.jsonp(endPoint).success(function(response) {
                        callback(response.data);
                    });
                }
            }
        }
    ])

    .controller("ExampleCtrl", function($scope, $interval, instagram) {
        var how_many = '9'; // data.length
        $scope.pics = [];
        $scope.have = [];
        $scope.orderBy = ""; // -likes.count
        $scope.getMore = function() {
            instagram.fetchPopular(function(data) {
                for(var i = 0; i < how_many; i++) {
                    if (typeof $scope.have[data[i].id]==="undefined") {
                        $scope.pics.push(data[i]) ;
                        $scope.have[data[i].id] = "1";
                    }
                }
            });
        };
        $scope.getMore();
    });