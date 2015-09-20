/**
 * Created by cauebrunodealmeida on 9/19/15.
 */

angular.module("myApp", [])

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