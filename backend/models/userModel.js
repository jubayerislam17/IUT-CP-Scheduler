const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const {ValidationError} = require('mongoose').Error

const Schema =  mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },    
    handle_codeforces: {
        type: String,
        required: true
    },
    handle_atcoder: {
        type: String,
        required: true
  }

});


  // static signup method
userSchema.statics.signup = async function (name ,id, password, confirmPassword, handle_codeforces, handle_atcoder)   {
    
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      throw new ValidationError('Password and confirm password do not match');
    }
     //validation
    if(!id || !password || !confirmPassword || !handle_codeforces || !handle_atcoder || !name){
            throw new ValidationError('All fields must be filled')
    }

    const idExists = await this.findOne({ id });

    if (idExists) {
      throw new ValidationError('ID already in use');
    }


    const handleExists = await this.findOne({
      $or: [{ handle_codeforces }, { handle_atcoder }]
    });
  
    if (handleExists) {
      throw new ValidationError('Handle already in use');
    }
  
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({
      name,
      id,
      password: hash,
      handle_codeforces,
      handle_atcoder
      
    });
  
    return user;
  };

// static login method 
userSchema.statics.login = async function (id, password){
    if (!id || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({id})
    

    if(!user){
        throw Error('Incorrect ID')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return user
}

userSchema.statics.getHandle = async function (id){
  const user = await this.findOne({id})
  
  if(!user){
      throw Error('Incorrect ID')
  }
  // console.log('Model cfhandle:', user.handle_codeforces)
  return user.handle_codeforces
}

module.exports = mongoose.model('User', userSchema);
