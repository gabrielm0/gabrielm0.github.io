angular.module('myapp', [ 'ngRoute', 'ngSanitize']);

angular.module('myapp').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/portfolio", {templateUrl: "partials/portfolio.html", controller: "PageCtrl"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post/:postId", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .otherwise("/", {templateUrl: "partials/home.html", controller: "PageCtrl"});
}]);

angular.module('myapp').controller('BlogCtrl', function ( $scope, $location, $http, $routeParams ) {
    $scope.posts = [
        {id: 1, title: "Sample blog post", content: "sample <b>blog post</b>", image: "http://placehold.it/600x300", date: new Date(2015, 12, 1) },
        {id: 2, title: "Sample blog post2", content: "sample 2<b>blog post</b>", image: "", date: new Date(2015, 12, 22)},
    ];
    $scope.postId = $routeParams.postId;

});

angular.module('myapp').controller('PageCtrl', function ( $scope, $location, $http ) {
    $scope.date = new Date();
    
    $scope.links = [
        {name: "Email", href: "mailto:gabriele.mastrapasqua@gmail.com", text: "gabriele.mastrapasqua@gmail.com", class: "fa fa-envelope fa-2x"},
        {name: "Github", href: "https://github.com/gabrielm0", text: "gabrielm0", class: "fa fa-github-square fa-2x"},
        {name: "Linkedin", href: "https://github.com/gabrielm0", text: "gabriele-mastrapasqua", class: "fa fa-linkedin-square fa-2x"},
        {name: "Twitter", href: "https://github.com/gabrielm0", text: "@gabrielm0", class: "fa fa-twitter-square fa-2x"},
        
    ];

    $scope.works = [
//        {name: "Dentista24h.it", href: "http://www.dentista24h.it", image: "/img/landing1.jpg", description: "blog, seo, ads promotion, ui, copy-writing"},
        
    ];
    
});
