angular.module('videoApp', [])

angular.module('videoApp')
    .controller('videoController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

        $scope.greeting = "Hello World!"

        $scope.$sce = $sce

        var counter = 0;
        $scope.createEntry = function () {
            if (counter < 8) {
                $http.post('/entryroute', $scope.videoEntry)
                    .then(function (returnData) {
                        $scope.entryArray = returnData.data
                        counter++
                    })

            } else {
                $scope.warning = "Sorry, you have reached the submission limit."
            }

        }

        $scope.voteFromHtml = function($index) {
            $http.post('/vote', {
                    index: $index
                })
                .then(function (returnData) {
                    $scope.entryArray = returnData.data
                })
        }

        $http.get('/getentryroute')
            .then(function (returnData) {
                $scope.entryArray = returnData.data
            })

        //        $scope.$sce.URL = $scope.entryArray.url
        
        $scope.endRound = function() {
            $http.post('/endround') 
            .then(function(returnData) {
                $scope.entryArray = returnData.data
                if ($scope.entryArray.length === 1) {
                    window.location.href='/winner'
                    
                }
            })
        }
        
        $scope.refresh = function(){
            $http.post('/cleararray')
                .then(function(returnData) {
                $scope.entryArray = returnData.data
                window.location.href='/'
                
            })
        }



        //        getEntries

    }])