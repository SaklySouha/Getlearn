const Formation = require('../models/Formation.model');
const formationController ={};


formationController.get = async(req,res,next) => {
   
    const {user}=req;

    const now = new Date();
    const firstDay = new Date(now.getFullYear(),now.getMonth(),1)
    const lastDay = new Date(now.getFullYear(),now.getMonth()+1,0)




    const query={
        owner:user._id,
        created:{
            $gte:firstDay,
            $lt:lastDay
        }
    }

    try{
        //formation hiya il result normamnet formation=result pour éviter la répétition
    const formation=await Formation.find(query);
    return res.send({
        formation
    })
   
    }catch(e){
        next(e);
    }
   
   };







formationController.create = async(req,res,next) => {
 const {nameF,defF,categF,nameFormatF,prixF,created}=req.body;
 const newFormation = new Formation({

    nameF,
    defF,
    categF,
    nameFormatF,
    prixF,
    created,
    owner:req.user

 });

 try{
     const saved = await newFormation.save();
     return res.send({
         success:true,
         formation:saved
     })
 }catch(e){
     next(e);
 }



 

};


formationController.update = async(req,res,next) => {
    const formation_id=req.params.formation_id;
    const {nameF,defF,categF,nameFormatF,prixF,created}=req.body;
      try{
         
        const check = await Formation.findOne({_id:formation_id});
        if(!check.owner.equals(req.user._id)){
            const err = new Error('This formation does not belong to you');
            err.status = 401;
            throw err;
        }





      const formation= await Formation.update( {_id:formation_id}, {nameF,defF,categF,nameFormatF,prixF,created} );
      return res.send({
          success:true,
          formation
      });
    }catch(e){
                next(e);
            }
        };

formationController.destroy = async(req,res,next) => {
    const formation_id=req.params.formation_id;
    try{
    await Formation.deleteOne({_id:formation_id});
    res.send({
        success:true
    });
}catch(e){
    next(e);
}
};

module.exports = formationController;