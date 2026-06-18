const jwt = require("jsonwebtoken")


async function authArtist( req , res , next) {
 
      const token = req.cookies.token;

      if(!token){
         return res.status(401).json({ message : "Unauthorised"})
      }

      try{
          const decoded = jwt.verify(token , process.env.JWT_SECREAT)
               console.log("Token Verify successfully");

               if(decoded.role !== "artist"){
            return res.status(403).json({ message : "This user cannot create music"}) }

            req.user = decoded  

            next()

      }catch(err){
        console.log(err);
        return res.status(401).json({ message : "UnAuthorise User"})
      }

}

async function authUser( req , res, next) {

      const token = req.cookies.token;

      if(!token){
            return res.status(401).json({ message : "UnAuthorised"});
      }
   try{
      const decoded = jwt.verify(token , process.env.JWT_SECREAT);
      console.log("Token Verify successfully");

      if(decoded.role !=="user"){
            return res.status(401).json({ message : "you dont have access"});
      }
   
      req.user = decoded;

      next();
   
}catch(err){
      console.log(err);
      return res.status(401).json({ message : "UnAuthorised"});
   }
      
      
      
}


module.exports = {authArtist , authUser};