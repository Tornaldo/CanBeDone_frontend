angular.module('cbdCommon').
factory('ideaService', ['baseService', 'config',
 function (baseService, config) {

    return {
        getPopularIdeas: function(category) {
        var url = config.apiBaseUrl + 'ideas?page=0&pageSize=15';
        return baseService.getResources(url);
        },
    };
    /*this.getIdea = function (id) {
        var url = 'api/ideas/' + id;
        return $http.get(url);

    };

    this.getIdeaResultSet = function (searchQuery, page, pageSize) {
        var url = 'api/ideas?page='+page +"&pageSize=" + pageSize ;
        return $http.get(url);

    };


    this.getPopularIdeas = function (category) {
        var url = 'api/ideas?page=0&pageSize=15';
        return $http.get(url);
    };

    this.getRelatedIdeas = function (id) {
        //TEMP
        var url = 'api/ideas';
        return $http.get(url);
    };

    this.postIdea = function (idea) {
        var url = 'api/ideas';
        return $http.post(url, idea);
    }*/


}]);