/**
 * Created by suhas on 2/9/2017.
 */
(function(){
    angular
        .module("webdevApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "index"
                })
                .when("/login", {
                    templateUrl: "/views/user/Login.view.client.html",
                    controller: "loginController",
                    controllerAs: "model"
                })
                .when("/register", {
                    templateUrl: "/views/user/Register.view.client.html"
                })
                .when("/user/:uid", {
                    templateUrl: "/views/user/Profile.view.client.html",
                    controller: "Example1Controller",
                    controllerAs: "profile"

                })
                .when("/user/:uid/website", {
                    templateUrl: "/views/website/Website-list.view.client.html",
                    controller :"WebsiteListController",
                    controllerAs: "websiteList"
                })
                .when("/user/:uid/website/new", {
                    templateUrl: "/views/website/Website-new.view.client.html",
                    controller :"WebsiteListController",
                    controllerAs: "websiteNew"
                })
                .when("/user/:uid/website/:wid", {
                    templateUrl: "/views/website/Website-edit.view.client.html",
                    controller :"WebsiteEditController",
                    controllerAs: "websiteEdit"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();

