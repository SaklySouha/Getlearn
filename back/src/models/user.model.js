const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const {Schema} = mongoose;


const UserSchema = Schema({
    name:{type:String},
    prenom:{type:String},
    email:{type:String,required:true,index:true,unique:true},
    password:{type:String,required:true},
    re_password:{type:String,required:true},
    pays:{type:String,required:true},
    region:{type:String,required:true},
    joined:{type:Date,default:new Date()},

});

UserSchema.pre('save',async function(next){
  //check new account
  if(!this.isModified('password')){
      return next();
  }
  //crypt

try{
    const salt = await bcrypt.genSalt(10);
    const hash0 = await bcrypt.hash(this.password,salt);
    const hash1 = await bcrypt.hash(this.re_password,salt);

    this.password = hash0;
    this.re_password = hash1;

    next();
}catch(e){
    return next(e);
}

  });

  UserSchema.methods.isPasswordMatch=function(password,hashed,callback){
    bcrypt.compare(password,hashed,(err,success) =>{
      if(err){
        return callback(err);
      }

      callback(null,success);

    });

   
  };
  UserSchema.methods.toJSON = function(){
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.re_password;

    return userObject;
  };


const User = mongoose.model('User',UserSchema);
module.exports=User;