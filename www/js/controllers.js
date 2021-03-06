angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) { })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })
    .controller('RequestsCtrl', function ($scope, Requests) {
        $scope.requests = Requests.all();
    })

    .controller('TasksCtrl', function ($scope, Tasks) {
        $scope.tasks = Tasks.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('LeaveCtrl', function ($scope) { })
    .controller('MispunchCtrl',function($scope){})
    .controller('OutdoordutyCtrl',function($scope){})
    .controller('AccountCtrl', function ($scope, UserProfile) {
        $scope.userprofile = UserProfile.all();
    });
