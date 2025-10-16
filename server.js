const app=require('./src/app');
require('dotenv').config();
const connectDB=require('./src/DB/db');


connectDB();
app.listen(3001,()=>
    console.log("Server is Running on Port 3001")
)



