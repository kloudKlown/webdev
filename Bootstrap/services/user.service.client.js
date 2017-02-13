// /**
//  * Created by suhas on 2/10/2017.
//  */
(function() {
    angular
        .module("webdevApp")
        .factory("UserService", UserService);
    function UserService() {
        var users = [
            // {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            // {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            // {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {username: "asd", password: "123",_id: "123",    firstName: "Alice",  lastName: "Wonder" },
            {username: "asdf", password: "1234",_id: "1234",    firstName: "Bob",  lastName: "Wonder" },
            {username: "asdg", password: "1235",_id: "1235",    firstName: "Charly",  lastName: "Wonder" }


        ];
        var api = {
            "createUser"   : createUser,
            "findUserById" : findUserById,
            "findAllUsers" : findAllUsers,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser": deleteUser
    };
        return api;
        function createUser(course) {
            var newusers = {
                // _id : course._id,
                username : course.username
                // password : course.password,
                // firstName : course.firstName,
                // lastName : course.lastName
            };
            // alert('My name is ' + course.username);
            users.push(newusers);
        };
        function findUserById(id) {
            // var users1 = findAllUsers();
            for (  var u in users){
                // console.log(u);
                use1 = users[u];

                if (use1._id === id){
                    // console.log(use1);

                    return use1;
                }
            }

            return users[id];
        };
        function findAllUsers() {
            return users;
        };
        function findUserByUsername(id) {
            return users[id];
        };
        function findUserByCredentials(id) {
            return users[id];
        };
        function updateUser(id) {
            return users[id];
        };
        function deleteUser(id) {
            return users[id];
        };

    }

    //     angular
    //     .module("webdevApp")
    //     .controller("Example1Controller", Example1Controller);
    //     function Example1Controller($scope, UserService)
    // {
    //     // $scope.createUser = function () {
    //     //     UserService.createUser($scope.username);
    //     //     $scope.username = {};
    //     // }
    //     alert('asdasdas');
    //     $scope.names = UserService.findUserById();
    //
    //     //     [
    //     //     {name:'Jani',country:'Norway'},
    //     //     {name:'Hege',country:'Sweden'},
    //     //     {name:'Hege',country:'Sweden'},
    //     //
    //     //     {name:'Kai',country:'Denmark'}
    //     // ];
    // }


    // angular.module("webdevApp")
    //     .click();

        // function addUser($scope, UserService) {
        //     alert('My name is ');
        //
        //     // $scope.newusers = function () {
        //     //         UserService.createUser($scope.newusers);
        //     //         $scope.newusers   = {};
        //     // }
        //     // UserService.createUser($scope);
        //
        // }

    //     function Example1Controller($scope, UserService)
    // {
    //     $scope.names = UserService.createUser();
    //
    // }


})();

// (function()
// {
//     angular
//         .module("webdevApp")
//         .controller("Example1Controller", Example1Controller);
//
//     function Example1Controller($scope)
//     {
//         $scope.names = [
//             {name:'Jani',country:'Norway'},
//             {name:'Hege',country:'Sweden'},
//             {name:'Hege',country:'Sweden'},
//
//             {name:'Kai',country:'Denmark'}
//         ];
//     }
//
//
//
//
// })();