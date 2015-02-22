angular.module('cbdFaq', ['cbdCommon'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/idea/:ideaId/post-faq', {
        templateUrl: 'src/faq/faqForm/faq-form.tpl.html',
        controller: 'FaqFormCtrl',
      })
  }])