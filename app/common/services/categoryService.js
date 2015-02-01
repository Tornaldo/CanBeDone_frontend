angular.module('cbdCommon').
factory('categoryService', ['baseService', 'config',
function (baseService, config) {

    return {
        getMainCategories: function() {
        //wrong url. need api endpoint.
        var url = config.apiBaseUrl + 'categories?mainCategoriesOnly=1';
        return baseService.getResources(url);
        },

        getSubcategory: function(categoryId) {
        //wrong url. Need api endpoint.
        var url = config.apiBaseUrl + 'categories/'+ categoryId +'?numberOfLevels=2';
        return baseService.getResources(url);
        },
    };

}]);