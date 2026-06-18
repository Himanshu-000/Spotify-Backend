const UserModel = require("../models/user.model");
const Usermodel = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

 async function ragisterUser(req , res) {

    const { username , email , password , role = "user" } = req.body;

    const isUserAlreadyExists = await UserModel.findOne( {
        $or : [
    
           { username } ,
           { email } 
        ]
 })
    if(isUserAlreadyExists){
        res.status(409).json({
            message : "User already Exists"
        })
    }

    const hash = await bcrypt.hash(password , 10);

    const user = await Usermodel.create({
        username,email,password : hash ,role
    })
   
   const token = jwt.sign({
    id : user._id ,
    role : user.role
   }, process.env.JWT_SECREAT)
  
  res.cookie("token"  , token);

  res.status(201).json({
     message :  "User ragister sucessfully" ,
    
    user : {
        id : user._id,
    username : user.username,
    email : user.email,
    password : user.password,
    role : user.role
    }
  })

 }

  async function Login(req , res) {

    const { username , email , password} = req.body;
     
    const user = await Usermodel.findOne({
     
        $or : [
            { username },
            { email }
        ]
    })
       
    if(!user){ res.status(401).json({message : "User Not Found"}) }

    const isPasswordValid = await bcrypt.compare( password , user.password)

    if(!isPasswordValid){ res.status(401).json({ message : " Invalid Credentials"})}
    
     const token = jwt.sign({
        id : user._id ,
        role : user.role,
     }, process.env.JWT_SECREAT)
    
     res.cookie("token" , token);

     res.status(200).json({
        message : "User login Sucssesfully",

        user : {
            
            id : user._id ,
            username : user.username ,
            email : user.email ,
            password : user.password,
            role : user.role

        }
     })
}

async function logout(req , res) {

    res.clearCookie("token");
    res.status(201).json({ message : "Logout successfully"});

}

 module.exports = {ragisterUser , Login , logout};