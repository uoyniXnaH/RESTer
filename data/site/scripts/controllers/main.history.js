'use strict';

angular.module('app')
    .controller('HistoryCtrl', ['$scope', '$state', '$data', function ($scope, $state, $data) {
        
        $state.current.data = {
            title: 'History'
        };

        $scope.historyEntries = [];

        $data.getHistoryEntries().then(entries => {
            $scope.historyEntries = entries;
        });

        $scope.openHistoryEntry = function (entry) {
            $state.go('main.request', {
                id: undefined,
                time: entry.time,
                request: entry.request,
                response: entry.response
            });
        };
        
        $scope.deleteHistoryEntry = function (entry) {
            $data.deleteHistoryEntry(entry).then(() => {
                var index = $scope.historyEntries.indexOf(entry);
                $scope.historyEntries.splice(index, 1);
            });
        };

    }]);
