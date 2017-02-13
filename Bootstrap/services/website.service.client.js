/**
 * Created by suhas on 2/12/2017.
 */
// /**
//  * Created by suhas on 2/10/2017.
//  */
(function() {
    angular
        .module("webdevApp")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites = [
            // {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            // {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            // {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {webid: "123",_id: "123",    name: "FB",  description: "Wonder" },
            {webid: "1234",_id: "123",    name: "TWITTER",  description: "Wonder" },
            {webid: "1235",_id: "123",    name: "You tube",  description: "Wonder" },
            {webid: "1234",_id: "1234",    name: "twitter",  description: "Wonder" },
            {webid: "1235",_id: "1235",    name: "You tube",  description: "Wonder" }
        ];
        var api = {
            "createWebsite"   : createWebsite,
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };
        return api;
        function createWebsite(uid, website) {

        };
        function findWebsitesByUser(id) {
            var result = [];
            for (var webs in websites){
                    if ( websites[webs]._id === id){
                        result.push(websites[webs]);
                    }
            }
            return result;


        };
        function findWebsiteById(id) {
            // return users;
            for (var webs in websites){
                if ( websites[webs].webid === id){
                    return websites[webs];
                }
            }

        };
        function updateWebsite(wid, NewName,desc) {

            for (var webs in websites){
                if ( websites[webs].webid === id){

                    websites[webs].name = NewName;
                    websites[webs].description = desc;
                }
            }


        };
        function deleteWebsite(id) {
            for (var webs in websites){
                if ( websites[webs].webid === id){
                    websites.splice(webs,1);
                }
            }
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

