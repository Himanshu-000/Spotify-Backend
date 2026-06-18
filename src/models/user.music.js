const mongoose = require("mongoose");


const MusicSchema = new mongoose.Schema({

    uri : {
        "type" : String,
        "required"  : true
    },
  
     title : {
        "type" : String,
        "rquired" : true
     },

     artist : {
       "type" : mongoose.Schema.Types.ObjectId,
       "ref" : "user" ,
       "rquired" : true
     }
     
})

const MusicModel = mongoose.model("music" , MusicSchema)

module.exports = MusicModel;