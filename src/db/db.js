const mongoose = require("mongoose");


async function ConnectDB() {

   try{
         await mongoose.connect(process.env.MONGO_URL)
         console.log("MongoDB is Connected") 
        
    }catch(err){
        console.log("Somthing Went Wrong :" ,err)
    }
    
}

 module.exports = ConnectDB;