/**
 * Created by suhas on 2/11/2017.
 */

(function()
{
    angular
        .module("webdevApp")
        .controller("loginController", loginController);

    function loginController($location,UserService)
    {
        var vm = this;
        console.log("here in Login");
        vm.hello = "First try";
        var users = UserService.findAllUsers();
        // console.log(users)
        vm.login = function (n,p) {
            console.log(n,p);
            var u = null;
            var found = false;
            for ( var us in users){
                u = users[us];

                if (u.username == n && u.password == p ){
                    console.log('found user');
                    found = true;
                    $location.url("/user/"+ u._id);
                    break;
                }


            }
            if (found == false){
                vm.error = "USER not FOUND";
            }

        }


    }



})();