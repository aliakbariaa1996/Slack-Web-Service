// require slack sdk
const { WebClient } = require('@slack/web-api');
const web           = new WebClient(configApp.slack.accessToken);

// require core 
const { corePath : pathsCore } =  configApp.paths.core;
const BaseClientController     = require(`${pathsCore}/ClientBaseController`);

// require transforms 
const { apiClient : pathTransform }       = configApp.paths.transforms;
const sendMessgaeTransform                = require(`${pathTransform}/versionOne/version1/slack/SendMessage`);
const replyingMessgaeTransform            = require(`${pathTransform}/versionOne/version1/slack/ReplyingMessage`);
const deleteMessgaeTransform              = require(`${pathTransform}/versionOne/version1/slack/DeleteMessage`);
const getInfoChannelsTransform            = require(`${pathTransform}/versionOne/version1/slack/GetInfoChannels`);
const getChannelsListTransform            = require(`${pathTransform}/versionOne/version1/slack/GetChannelsList`);
const channelsLeaveTransform              = require(`${pathTransform}/versionOne/version1/slack/ChannelsLeave`);

class SlackController extends BaseClientController{

    sendMessage(request , response){
         (async () => {
            try {
                const respnseSlackSendMessage = await web.chat.postMessage({ channel: request.body.channelId, text: request.body.text});
                if(respnseSlackSendMessage.ok === true){
                    let resultFinalResponse = new sendMessgaeTransform().transform(respnseSlackSendMessage);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request sendMessage' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackSendMessage.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request sendMessage' , {});
            }
          })();
    }
    
    replyingMessage(request , response){
        (async () => {
            try {
                const respnseSlackReplyingMessage = await web.chat.postMessage({ channel: request.body.channelId, text: request.body.text , thread_ts : request.body.thread_ts});
                if(respnseSlackReplyingMessage.ok === true){
                    let resultFinalResponse = new replyingMessgaeTransform().transform(respnseSlackReplyingMessage);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request replyingMessage' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackReplyingMessage.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request replyingMessage' , {});
            }
          })();
    }

    deleteMessage(request , response){
        (async () => {
            try {
                const respnseSlackDeleteMessage = await web.chat.delete({ channel: request.body.channelId, ts : request.body.timeStamp , as_user : true});
                if(respnseSlackDeleteMessage.ok === true){
                    let resultFinalResponse = new deleteMessgaeTransform().transform(respnseSlackDeleteMessage);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request deleteMessage' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackDeleteMessage.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request deleteMessage' , {});
            }
          })();
    }

    getInfoChannels(request , response){
        (async () => {
            try {
                const respnseSlackGetInfoChannels = await web.channels.info({ channel: request.body.channelId});
                if(respnseSlackGetInfoChannels.ok === true){
                    let resultFinalResponse = new getInfoChannelsTransform().transform(respnseSlackGetInfoChannels);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request getInfoChannels' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackGetInfoChannels.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request getInfoChannels' , {});
            }
          })();
    }

    getChannelsList(request , response){
        (async () => {
            try {
                const respnseSlackGetChannelsList = await web.channels.list({ limit: request.body.limit});
                if(respnseSlackGetChannelsList.ok === true){
                    let resultFinalResponse = new getChannelsListTransform().transformCollection(respnseSlackGetChannelsList);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request getChannelsList' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackGetChannelsList.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request getChannelsList' , {});
            }
          })();
    }
    
    channelsLeave(request , response){
        (async () => {
            try {
                const respnseSlackChannelsLeave = await web.channels.leave({ limit: request.body.channelId});
                if(respnseSlackChannelsLeave.ok === true){
                    let resultFinalResponse = new channelsLeaveTransform().transform(respnseSlackChannelsLeave);
                    return this.helpers.response.checkResponse(response , resultFinalResponse , 200 , 'success request channelsLeave' , {});
                }else{
                    return this.helpers.response.checkResponse(response , {} , 400 , respnseSlackChannelsLeave.error , {});
                }
              } catch (error) {
                return this.helpers.response.checkResponse(response , {} , 400 , 'fail request channelsLeave' , {});
            }
          })();
    }
}

module.exports = new SlackController(); 