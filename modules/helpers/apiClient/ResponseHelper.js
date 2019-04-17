class ResponseHelper {
    constructor(){
        this.responseEndPoint = {};
    }

    checkResponse(response , object , code , message , errorValidation = {}){
                this.responseEndPoint = response;
                switch(code){
                    case 200:
                        this.setObjectResponseSuccess(code , message , object);
                    break;
                    case 422:
                        this.setObjectResponseFail422(code , message , errorValidation);
                    break;
                    default:
                        this.setObjectResponseFail(code , message);
                    break;
                }        
    }

    setObjectResponseSuccess(code , message , object){
        this.responseEndPoint.status(code).json({
            success : true,
            status  : code,
            message : message,
            result  : object 
        });
    }

    setObjectResponseFail422(code , message , errorList){
         this.responseEndPoint.status(code).json({
            success   : false,
            status    : code,
            message   : message,
            errorList : errorList.map(mapError => {
                return {
                    'field' : mapError.param,
                    'message' : mapError.msg
                }
            })
        });
    }

    setObjectResponseFail(code , message){
        this.responseEndPoint.status(code).json({
            success : false,
            status  : code,
            message : message
        });
    }
}

module.exports = new ResponseHelper();