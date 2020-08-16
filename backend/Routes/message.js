const express = require('express');
const router = express.Router();
const messageCtlr = require('../Controllers/message');
const auth = require('../middelware/auth')



router.get('/createtable', messageCtlr.createmessageTable)
router.post('/postmessage', auth, messageCtlr.postmessage);
//router.get('/getmessage/:id', messageCtlr.getOneMessage);

module.exports = router;