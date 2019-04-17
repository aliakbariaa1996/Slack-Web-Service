const path = require('path');

module.exports = {
    port : 2013 ,
    slack :{
        clientId     : "610085818388.599253312066",
        clientSecret : "3fb302a062d6c22584fbe4079796caf5" , 
        accessToken  : "xoxp-610085818388-604349196337-611323391984-43512475133fbe42206de1d5d7fe6577"
    },
    paths : {
        controllers : {
            apiClient : path.resolve('./modules/controllers/apiClient'),
        },
        helpers : {
            apiClient : path.resolve('./modules/helpers/apiClient'),
        },
        core : {
            corePath : path.resolve('./modules/core')
        },
        routes : {
            apiClient : path.resolve('./modules/routes/apiClient'),
        },
        transforms : {
            apiClient : path.resolve('./modules/transforms/apiClient'),
        }
    }
};