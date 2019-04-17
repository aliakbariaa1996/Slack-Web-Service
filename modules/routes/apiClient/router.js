const express = require('express');
const router = express.Router();    

const apiVersion1 = require('./versionOne/version1');

router.use('/v1' , apiVersion1);

module.exports = router;