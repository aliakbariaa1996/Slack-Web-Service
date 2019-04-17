// require helper 
const { apiClient : pathsHelper } =  configApp.paths.helpers;
const response                    =  require(`${pathsHelper}/ResponseHelper`);

class ClientBaseController{
    constructor(){
        this.helpers = { response };
    }
}

module.exports = ClientBaseController;