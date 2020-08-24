const express = require('express');
const router = express.Router();
const messageCtlr = require('../Controllers/message');
const auth = require('../middelware/auth')



router.get('/createtable', messageCtlr.createmessageTable)
router.post('/postmessage',auth, messageCtlr.postmessage);
router.get('/getmessages', messageCtlr.getMessages);
router.get('/getonemessage/:id', messageCtlr.getoneMessage);
router.post('/deletemessage',auth, messageCtlr.deleteMessage);

module.exports = router;