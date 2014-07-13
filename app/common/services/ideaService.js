angular.module('cbdCommon').
factory('ideaService', ['baseService', 'config',
function (baseService, config) {

    return {
        getPopularIdeas: function(category) {
        //wrong url. need api endpoint.
        var url = config.apiBaseUrl + 'ideas?page=0&pageSize=15';
        return baseService.getResources(url);
        },

        getSearchResult: function(searchQuery, page, pageSize) {
        //wrong url. Need api endpoint.
        var url = config.apiBaseUrl + 'ideas?page='+page+'&pageSize='+ pageSize;
        return baseService.getResources(url);
        },

        getIdea:  function (id) {
            //wrong url. Need api endpoint
        var url = config.apiBaseUrl + 'ideas/' + id;
        return baseService.getResources(url);
        },

        postIdea: function (idea) {
        console.log(idea);
        var url = config.apiBaseUrl + 'api/ideas';
        return baseService.postResource(url, idea);
        },
    };

    /*

    this.getRelatedIdeas = function (id) {
        //TEMP
        var url = 'api/ideas';
        return $http.get(url);
    };

    
    }*/


}]);