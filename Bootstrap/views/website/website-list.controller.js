/**
 * Created by suhas on 2/12/2017.
 */

(function()
{
    angular
        .module("webdevApp")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams,WebsiteService)
    {
            var vm = this;
            var userId = $routeParams['uid'];
            vm.userId = userId;
            console.log(vm.userId);

            vm.allWebsites = WebsiteService.findWebsitesByUser(userId);
            // console.log(allWebsites);
    }



})();