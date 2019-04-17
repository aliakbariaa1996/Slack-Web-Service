const app = require('express')();
const bodyParser = require('body-parser');

global.configApp = require('./modules/config/app');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));

 // requrie router 
const { apiClient : routeClientPath } =  configApp.paths.routes;
const apiClientRouter = require(`${routeClientPath}/router`);

app.use('/apiClient' , apiClientRouter);

app.listen(configApp.port , () => {
    console.log(`Server running at port ${configApp.port}`);
});
