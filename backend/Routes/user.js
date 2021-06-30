const express = require('express');
const router = express.Router();
const dataCtlr = require('../Controllers/user');
const auth = require('../middelware/auth');
  
  //Routes utilisateurs
router.get('/test', function (req,res) {
   res.send('ça fonctionnne')
});

router.get('/createdb', dataCtlr.createDataBase);
router.get('/createtables', dataCtlr.createDataTable);
router.get('/getusers', dataCtlr.getUsers);
router.get('/getoneuser/:id', dataCtlr.getOneUser)
router.post('/signup', dataCtlr.signup);
router.post('/login', dataCtlr.login);
router.post('/deleteUser',auth, dataCtlr.deleteUser);
router.post('/updateuser/:id', dataCtlr.updateUser);



module.exports = router;