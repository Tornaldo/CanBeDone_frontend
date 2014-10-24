angular.module('cbdCommon').
factory('ideaService', ['baseService', 'config',
function (baseService, config) {

    return {
        getPopularIdeas: function(category) {
        //wrong url. need api endpoint.
        var url = config.apiBaseUrl + 'ideas?page=1&pageSize=15';
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
            //TODO: WHERE TO PLACE
            //Need to convert array into a string, because of backend
            idea.categoryIds = idea.categoryIds.toString();
            var url = config.apiBaseUrl + 'ideas';
            return baseService.postResource(url, idea);
        },


        editIdea: function (idea) {
            console.log('edit: '+ idea);
            var url = config.apiBaseUrl + 'ideas/' + 'editideas';
            return baseService.postResource(url, idea);
        },

        getParentComment: function (id) {
            var url = config.apiBaseUrl + 'comments?ideaId='+ id + '&includeAllAnswers=1';
            return baseService.getResources(url);
        },

        getChildComment: function(id) {
            var url = config.apiBaseUrl + 'comments/' + id;
            return baseService.getResources(url);
        },
        postComment: function (comment) {
            console.log("test: " + comment);
            var url = config.apiBaseUrl + 'comments';
            return baseService.postResource(url, comment);
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