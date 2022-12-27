const express =require('express');
const mongoose = require('mongoose');
const app = express()
const router = require("./routes/book-routes")
//BK7olVyMdbE2Dgf4 mongo db pass


//Middleware
// app.use('/',(req,res,next)=>{
//     res.send("this is our starting app");
// });
app.use(express.json());
app.use("/books",router)

mongoose.connect(
    "mongodb+srv://admin:BK7olVyMdbE2Dgf4@cluster0.s5rdxoi.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("connected"))
    .then(()=>{
            app.listen(5000)
        }).catch((err)=>console.log(err));
