const express = require('express');
const router = express.Router();
const passport = require('passport');


const userController = require('../controllers/users.controllers');
const formationController = require('../controllers/formation.controllers');

//----------   Auth ans Sign Up     -------------//

router.post('/register',userController.register);
router.post('/auth',userController.login);

//------------------ Customize and protect the routes--------------//
router.all('*',(req,res,next) => {
    passport.authenticate('jwt',{session:false},(err,user) => {
        if(err || !user ){
            const error = new Error('You are not authorized to access this area');
            error.status =401;
            throw error;
        }
        //
        req.user = user;
        return next();
    })(req,res,next);
})


//------------------ Protected Routes --------------//
router.get('/formation',formationController.get);
router.post('/formation',formationController.create);
router.put('/formation/:formation_id',formationController.update);
router.delete('/formation/:formation_id',formationController.destroy);



module.exports =router;