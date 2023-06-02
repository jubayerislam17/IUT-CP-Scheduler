const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { date } = require('yup')
const { ValidationError } = require('mongoose').Error

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res ) =>{
    const {id, password} = req.body 

    try {
        const user = await User.login(id,password)

        //create a token
        const token = createToken(user._id)
   
        res.status(200).json({ id, token  } );
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


// Signup user
const signupUser = async (req, res) => {
    const { name, id, password, confirmPassword, handle_codeforces, handle_atcoder } = req.body;
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      res.status(400).json({ error: "Password and confirm password do not match (controller)" });
      return;
    }
  
     try {
      const user = await User.signup(
        name,
        id,
        password,
        confirmPassword,
        handle_codeforces,
        handle_atcoder
      );

      //create a token
      const token = createToken(user._id)
  
      res.status(200).json({ id, token  });
    } catch (error) {
      if (error instanceof ValidationError) {
        const errorMessages = Object.values(error.errors).map(err => err.message);
        res.status(400).json({ error: errorMessages });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  };
  // get cf handle
  const getCFHandle = async (req, res) =>{
    const {id } = req.params
    try {
      const cf_handle = await User.getHandle(id) 

      // console.log('controller usr cf handle', cf_handle)
      
      res.status(200).json({cf_handle} );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
module.exports = { signupUser , loginUser, getCFHandle }