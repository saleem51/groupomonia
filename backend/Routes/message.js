const express = require('express');
const router = express.Router();
const messageCtlr = require('../Controllers/message');
const auth = require('../middelware/auth')



router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)
router.post('/postmessage',auth, messageCtlr.postmessage);
router.get('/getmessages', messageCtlr.getMessages);
router.get('/getonemessage/:id',  messageCtlr.getoneMessage);
router.post('/deletemessage',auth, messageCtlr.deleteMessage);
router.post('/updatemessage',auth, messageCtlr.updateMessage);
router.post('/responsemessage', messageCtlr.responseMessage);
router.get('/getresponse/:id', messageCtlr.getResponse);
router.get('/getallresponses' , messageCtlr.getAllResponses);

module.exports = router;