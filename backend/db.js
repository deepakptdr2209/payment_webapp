const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://deepakptdr2209:Deepak1510@cluster0.o2lngrh.mongodb.net/payme")
// userShcema
 const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        trim :true,
        unique : true,
        minLength : 4,
        maxLength : 20,
        lowercase : true
    },
    password :{
        type: String,
        required: true,
        minLength: 6
    }
 });
// +++++++++++++ account schema +++++++++++++
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

 const Account = mongoose.model('Account', accountSchema);

 const User = mongoose.model('User', userSchema);

 // export

  module.exports = {
    User,
    Account
  };