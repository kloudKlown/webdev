/**
 * Created by suhas on 2/12/2017.
 */

/**
 * Created by suhas on 2/12/2017.
 */

(function()
{
    angular
        .module("webdevApp")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams,WebsiteService)
    {
        var vm = this;
        var userId = $routeParams['uid'];
        var wId = $routeParams['wid'];
        vm.wId = wId;
        console.log('Webid = '+wId);
        vm.userId = userId;
        console.log(vm.userId);

        vm.Web = WebsiteService.findWebsiteById(wId);

        vm.editWeb = function (n,d) {
            console.log('editing '+n+'---'+d);

            WebsiteService.updateWebsite( vm.wId, n,d);

        };
        vm.deleteWeb = function (wid) {
            console.log('Delete'+wid);

            WebsiteService.deleteWebsite(wid);

        };    }



})();