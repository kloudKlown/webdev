/**
 * Created by suhas on 2/11/2017.
 */

(function()
{
    angular
        .module("webdevApp")
        .controller("Example1Controller", Example1Controller);

    function Example1Controller($routeParams,UserService)
    {

        var vm = this;
        console.log("here in Login");
        // vm.hello = "First try";
        vm.userID = $routeParams.uid;

        console.log(vm.userID);
        vm.users1 = UserService.findUserById($routeParams.uid);
        console.log( vm.users1);

        // vm.userId = users._id;
        // console.log($scope);
        //
        // $scope.names = UserService.findUserById();





    }



})();