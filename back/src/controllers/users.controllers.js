const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const userController ={};

//-------  Sign Up    ----------//
userController.register =async (req,res,next)=>{
    const {name,prenom,email,password,re_password,pays,region,joined}= req.body;
    const newUser = new User({
        name,
        prenom,
        email,
        password,
        re_password,
        pays,
        region,
        joined
    });
    try{
        const user = await newUser.save();
        return res.send({user});
    }catch(e){
if(e.code === 11000 && e.name === 'MongoError'){
    const error = new Error('Email adress',newUser.email,'is already taken');
    error.status =400;
    next(error);
}else{
        next(e);
    }
}

    
};

userController.login =async (req,res,next)=> {
    //username,password request
    const {email,password} = req.body;
    try {
    //Check username and password are ok
    const user = await User.findOne({email});
    if(!user){
        const err = new Error('The email ' , email , 'not found in our system');   
        err.status =401;
        throw err;
        next(err);
    }
user.isPasswordMatch(password,user.password,(err,matched) =>{
    if(matched){
            //if credit ok,than create jnt and return it
//secret
//expiration fichier ENV 
const secret = process.env.JWT_SECRET;
const expire = process.env.JWT_EXPIRATION;

const token = jwt.sign({ _id:user._id },secret,{expiresIn:expire});
return res.send({token});

    }

res.status(401).send({
    error:'Invalid username/password'
    

});

});


    }catch(e){
        next(e);
    }
};
module.exports =userController;