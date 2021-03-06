angular.module('starter.services', [])

    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Andrew Jostlin',
            lastText: 'Did you get the ice cream?',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        }
    })

    .factory('Requests', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var requests = [{
            id: 0,
            name: 'Leave Request',
            notes: 'Submit new leave request',
            icon: 'ion-plane',
            action: 'leave'
        }, {
            id: 1,
            name: 'Mis-Punch Request',
            notes: 'Add new mis-puch request',
            icon: 'ion-ios-download',
            action: 'mispunch'
        }, {
            id: 2,
            name: 'Out-Door Request',
            notes: 'Add out-door visit request',
            icon: 'ion-model-s',
            action: 'outdoorduty'
        }, {
            id: 3,
            name: 'Comp-Off Request',
            notes: 'Apply for comp-off',
            action: 'compoff'
        }, {
            id: 4,
            name: 'Gate-Pass Request',
            notes: 'Apply for gate pass',
            icon : 'ion-android-walk',
            action: 'gatepass'
        }];

        return {
            all: function () {
                return requests;
            },
            get: function (friendId) {
                // Simple index lookup
                return requests[friendId];
            }
        }
    })

    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [{
            id: 0,
            name: 'Ben Sparrow',
            notes: 'Enjoys drawing things',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Andrew Jostlen',
            notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: 'Adam Bradleyson',
            notes: 'I think he needs to buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: 'Perry Governor',
            notes: 'Just the nicest guy',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];


        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    })

    .factory('UserProfile', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var userprofile = {
            id: 0,
            name: 'Mobile User',
            address: 'Enjoys drawing things',
            homephone: '2342424',
            mobile: '23',
            email: 'test@test.com',
            dept: 'stupid'
        }

        return {
            all: function () {
                return userprofile;
            }
        }
    })

    .factory('Tasks', function () {
        var tasks = [{
            id: 0,
            name: 'Sandeep Sahni',
            type:'Leave',
            status: 'overdue'
        },
            {
                id: 1,
                name: 'Nishant',
                type:'Out Door Duty',
                status: 'overdue'
            },
            {
                id: 2,
                name: 'Meenakshi',
                type:'Comp-Off',
                status: 'overdue'
            }];
        return {
            all: function () {
                return tasks;
            }
        }
    })

    .factory('Leave', function () {
        var leave = [{
            id: 0,
            name: 'task 1',
            status: 'overdue'
        }];
        return {
            all: function () {
                //todo: call to save leave to database
                return leave;
            }
        }
    })
;