const express = require("express");
const cookiesParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./Routes/auth.routes")
const musiCreater = require("./Routes/auth.music")




const app = express();
app.use(express.json());
app.use(cookiesParser())



app.use("/api/auth" , authRoutes);
app.use("/api/music", musiCreater );
 


module.exports = app;