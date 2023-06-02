const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

require('dotenv').config();
const standings = require('./routes/standings');

const app = express();
//const port = process.env.PORT || 5050;

//app.use(cors());

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// const uri = process.env.ATLAS_URI;

// async function connect(){
//     try{
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB");
//     }catch(error){
//         console.error(error);
//     }
// }

// connect();

// start the Express server

//routes
app.use('/api/standings', standings)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.ATLAS_URI)
    .then(()=>{
        // listening for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & Server is running on port`, process.env.PORT);
          })
    })
    .catch((error)=>{
        console.log(error)
    })

