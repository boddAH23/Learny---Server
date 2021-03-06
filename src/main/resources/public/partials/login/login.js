angular.module('learny').controller(
        'loginController',
        [
                '$scope',
                '$state',
                'serverCommunicator',
                function($scope, $state, serverCommunicator) {
                    $scope.login = function() {
                        serverCommunicator.loginAsync($scope.username, $scope.password).success(
                                function(data, status, headers, config) {
                                    console.log('Successfully logged in');
                                    $state.go('app.home', {}, {
                                        reload : true
                                    });
                                }).error(function(data, status, headers, config) {
                            console.log('Login failed');
                        });

                    };
                } ]);