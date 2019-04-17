const express = require('express');
const router = express.Router();

// require controllers 
const { apiClient : controllerClientApi } =  configApp.paths.controllers;
const controllerSlack  = require(`${controllerClientApi}/versionOne/version1/slack/SlackController`);

// creation routes
const clientRouter = express.Router();

// route slack messaging  
clientRouter.post('/sendMessage'     , controllerSlack.sendMessage.bind(controllerSlack));
clientRouter.post('/replyingMessage' , controllerSlack.replyingMessage.bind(controllerSlack));
clientRouter.post('/deleteMessage'   , controllerSlack.deleteMessage.bind(controllerSlack));
clientRouter.get('/getInfoChannels'  , controllerSlack.getInfoChannels.bind(controllerSlack));
clientRouter.get('/getChannelsList'  , controllerSlack.getChannelsList.bind(controllerSlack));
clientRouter.post('/gethannelsLeave' , controllerSlack.gethannelsLeave.bind(controllerSlack));

//clientRouter.get('/getAccessToken' , controllerSlack.getAccessToken.bind(controllerSlack));

router.use('/' , clientRouter);
module.exports = router;