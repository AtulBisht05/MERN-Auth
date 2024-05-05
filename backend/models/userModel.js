const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

    const userModels=mongoose.model('usermodels',userSchema);
    // userSchema.methods.generateAuthToken = function () {
    //     const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    //         expiresIn: "7d",
    //     });
    //     return token;
    // };

    module.exports=userModels;