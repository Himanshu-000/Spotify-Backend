const app = require("./src/app");
const ConnectDB = require("./src/db/db");
const connectDB = require("./src/db/db")

ConnectDB();

app.listen(3000 , () =>{
   console.log("Server is running...")
})