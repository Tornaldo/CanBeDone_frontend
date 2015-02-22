angular.module('cbdFaq', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/idea/:ideaId/create-faq', {
        templateUrl: 'src/faq/faqForm/faq-form.tpl.html',
        controller: 'FaqFormCtrl',
        resolve: {
          ideaId: ['$route', function($route) {
            var ideaParam = $route.current.params.ideaId;
            return ideaParam;
          }]
      }
      })
  }])