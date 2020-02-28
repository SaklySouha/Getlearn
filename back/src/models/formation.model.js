const mongoose = require('mongoose');
const {Schema} = mongoose;


const FormationSchema = Schema({
    nameF:{type:String,required:true,index:true,unique:true},
    defF:{type:String},
    categF:{type:String},
    nameFormatF:{type:String},
    prixF:{type:Number},
    created:{type:Date,required:true},
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

});


const Formation = mongoose.model('Formation',FormationSchema);
module.exports=Formation;