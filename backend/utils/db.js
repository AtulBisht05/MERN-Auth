const mongoose = require('mongoose');

const dbconn= async()=>{
    try{
        mongoose.connect(process.env.DB_URI);  
        console.log('MONGODB Connected');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dbconn;